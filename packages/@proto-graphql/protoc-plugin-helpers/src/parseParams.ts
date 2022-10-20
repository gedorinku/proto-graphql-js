import { fileLayouts, GenerationParams } from "@proto-graphql/codegen-core";

export const parseParams = (input: string | undefined): GenerationParams => {
  const params: GenerationParams = {
    useProtobufjs: false,
    partialInputs: false,
    importPrefix: null,
    fileLayout: "proto_file",
    typeMappings: {
      "google.protobuf.Int32Value": "Int",
      "google.protobuf.Int64Value": "String",
      "google.protobuf.UInt32Value": "Int",
      "google.protobuf.UInt64Value": "String",
      "google.protobuf.FloatValue": "Float",
      "google.protobuf.DoubleValue": "Float",
      "google.protobuf.BoolValue": "Boolean",
      "google.protobuf.StringValue": "String",
      "google.protobuf.Timestamp": "DateTime",
    },
  };

  if (!input) return params;

  const toBool = (name: string, v: string | undefined): boolean => {
    if (!v || v === "true") return true;
    if (v === "false") return false;
    throw new Error(`${name} should be bool, got string: ${v}`);
  };
  const toString = (name: string, v: string | undefined): string => {
    if (!v) throw new Error(`${name} should be string`);
    return v;
  };

  function checkEnum<T extends string>(v: string, whitelist: ReadonlyArray<T>): v is T {
    return whitelist.includes(v as any);
  }

  for (const kv of input.split(",")) {
    const idx = kv.indexOf("=");
    const [k, v] = idx === -1 ? [kv, ""] : [kv.slice(0, idx), kv.slice(idx + 1)];
    switch (k) {
      case "use_protobufjs":
        params.useProtobufjs = toBool(k, v);
        break;
      case "import_prefix":
        params.importPrefix = toString(k, v);
        break;
      case "partial_inputs":
        params.partialInputs = toBool(k, v);
        break;
      case "file_layout": {
        const s = toString(k, v);
        if (!checkEnum(s, fileLayouts)) {
          throw new Error(`file_layout should be ${fileLayouts.map((s) => `"${s}"`).join(", ")}`);
        }
        params.fileLayout = s;
        break;
      }
      case "custom_type": {
        const idx = v.indexOf("=");
        const [protoType, gqlType] = idx === -1 ? [v, ""] : [v.slice(0, idx), v.slice(idx + 1)];
        params.typeMappings[protoType] = gqlType;
        break;
      }
      default:
        throw new Error(`unknown param: ${kv}`);
    }
  }

  return params;
};
