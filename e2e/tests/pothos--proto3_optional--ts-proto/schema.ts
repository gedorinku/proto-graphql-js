import { printGraphqlSchema } from "@proto-graphql/e2e-helper";
import { Message } from "@testapis/ts-proto/lib/testapis/proto3_optional/proto3_optional";

import { Message$Ref } from "./__generated__/schema/testapis/proto3_optional/proto3_optional.pb.pothos";
import { builder } from "./builder";

builder.queryField("valuesArePresent", (f) =>
  f.field({
    type: Message$Ref,
    resolve() {
      return Message.fromPartial({
        requiredStringValue: "required field",
        optionalStringValue: "optional field",
      });
    },
  })
);

builder.queryField("valuesAreBlank", (f) =>
  f.field({
    type: Message$Ref,
    resolve() {
      return Message.fromPartial({});
    },
  })
);

export const schema = builder.toSchema();

printGraphqlSchema({ schema, rootDir: __dirname });
