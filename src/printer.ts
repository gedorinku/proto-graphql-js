import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import ts from "typescript";
import { Field, Message } from "./types";

export function printSource(fd: FileDescriptorProto, msgs: Message[]): string {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const ast = [
    ts.factory.createImportDeclaration(
      undefined,
      undefined,
      ts.factory.createImportClause(
        false,
        undefined,
        ts.factory.createNamedImports([
          ts.factory.createImportSpecifier(
            undefined,
            ts.factory.createIdentifier("objectType")
          ),
        ])
      ),
      ts.factory.createStringLiteral("@nexus/schema")
    ),
    ...msgs.map(createMessageAST),
  ];

  const file = ts.factory.updateSourceFile(
    ts.createSourceFile(
      "generated.ts",
      "",
      ts.ScriptTarget.Latest,
      false,
      ts.ScriptKind.TS
    ),
    ast,
    false
  );
  const result = printer.printFile(file);

  return [
    "// Code generated by protoc-gen-nexus. DO NOT EDIT.",
    `// source: ${fd.getName()}`,
    "",
    result,
  ].join("\n");
}

function createMessageAST(msg: Message): ts.Statement {
  return new MessageAST(msg).build();
}

class MessageAST {
  private readonly msg: Message;

  constructor(msg: Message) {
    this.msg = msg;
  }

  public build(): ts.Statement {
    return ts.factory.createVariableStatement(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            this.msg.name,
            undefined,
            undefined,
            this.buildObjectType()
          ),
        ],
        ts.NodeFlags.Const
      )
    );
  }

  private buildObjectType(): ts.Expression {
    const { name, description, fields } = this.msg;

    return ts.factory.createCallExpression(ts.factory.createIdentifier("objectType"), undefined, [
      ts.factory.createObjectLiteralExpression(
        [
          ts.factory.createPropertyAssignment("name", ts.factory.createStringLiteral(name)),
          ts.factory.createPropertyAssignment(
            "description",
            ts.factory.createStringLiteral(description)
          ),
          // TODO: "description" property
          ts.factory.createMethodDeclaration(
            undefined,
            undefined,
            undefined,
            "definition",
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                "t",
                undefined,
                undefined,
                undefined
              ),
            ],
            undefined,
            ts.factory.createBlock(
              fields.map((f) => new FieldAST(f).build()),
              true
            )
          ),
          ts.factory.createPropertyAssignment(
            "rootTyping",
            ts.factory.createObjectLiteralExpression([
              ts.factory.createPropertyAssignment("name", ts.factory.createStringLiteral(name)),
              ts.factory.createPropertyAssignment(
                "path",
                ts.factory.createStringLiteral(this.msg.importPath)
              ),
            ])
          ),
        ],
        true
      ),
    ]);
  }
}

class FieldAST {
  private readonly field: Field;

  constructor(field: Field) {
    this.field = field;
  }

  public build(): ts.Statement {
    const { name } = this.field;

    return ts.factory.createExpressionStatement(
      ts.factory.createCallExpression(this.fieldFunction, undefined, [
        ts.factory.createStringLiteral(name),
        this.options,
      ])
    );
  }

  private get fieldFunction(): ts.Expression {
    let left: ts.Expression = ts.factory.createIdentifier("t");

    if (this.field.type.kind === "list") {
      left = ts.factory.createPropertyAccessExpression(left, ts.factory.createIdentifier("list"));
    }

    return ts.factory.createPropertyAccessExpression(
      left,
      ts.factory.createIdentifier(this.nexusTypeName)
    );
  }

  private get nexusTypeName(): string {
    const { type } = this.field;

    switch (type.kind) {
      case "list":
        return "field";
      case "scalar":
        switch (type.type) {
          case "Int":
            return "int";
          case "Float":
            return "float";
          case "String":
            return "string";
          case "Boolean":
            return "boolean";
          case "ID":
            return "id";
          default:
            const _exhaustiveCheck: never = type; // eslint-disable-line
            throw "unreachable";
        }
      case "object":
        return "field";
      default:
        const _exhaustiveCheck: never = type; // eslint-disable-line
        throw "unreachable";
    }
  }

  private get options(): ts.ObjectLiteralExpression {
    const { description, type } = this.field;
    const props: ts.ObjectLiteralElementLike[] = [
      ts.factory.createPropertyAssignment(
        "nullable",
        this.field.isNullable() ? ts.factory.createTrue() : ts.factory.createFalse()
      ),
      ts.factory.createPropertyAssignment(
        "description",
        ts.factory.createStringLiteral(description)
      ),
    ];

    if (type.kind === "list") {
      props.push(
        ts.factory.createPropertyAssignment(
          "type",
          ts.factory.createStringLiteral(type.type.type)
        )
      );
    }

    if (type.kind === "object") {
      props.push(
        ts.factory.createPropertyAssignment("type", ts.factory.createStringLiteral(type.type))
      );
    }

    return ts.factory.createObjectLiteralExpression(props, true);
  }
}
