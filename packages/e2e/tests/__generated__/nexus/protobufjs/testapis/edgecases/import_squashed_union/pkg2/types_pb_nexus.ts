// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: testapis/edgecases/import_squashed_union/pkg2/types.proto

/* eslint-disable */

import * as $$testapis$node$lib$$testapis$edgecases$import_squashed_union$pkg2 from "@testapis/node/lib//testapis/edgecases/import_squashed_union/pkg2";
import * as nexus from "nexus";
import * as proto_nexus from "proto-nexus";
import * as __$pkg1$types_pb_nexus from "../pkg1/types_pb_nexus";
export type $$testapis$node$lib$$testapis$edgecases$import_squashed_union$pkg2$testapis$edgecases$import_squashed_union$pkg2$Message = $$testapis$node$lib$$testapis$edgecases$import_squashed_union$pkg2.testapis.edgecases.import_squashed_union.pkg2.Message;
export const Message = nexus.objectType({
    name: "Message",
    definition(t) {
        t.field("msg", {
            type: nexus.nullable("SquashedOneof"),
            resolve(root) {
                const value = root.msg;
                if (value == null) {
                    return null;
                }
                if (value.msg1) {
                    return value.msg1;
                }
                return null;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "msg"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    isTypeOf(data: unknown) {
        return data instanceof $$testapis$node$lib$$testapis$edgecases$import_squashed_union$pkg2.testapis.edgecases.import_squashed_union.pkg2.Message;
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$$testapis$edgecases$import_squashed_union$pkg2$testapis$edgecases$import_squashed_union$pkg2$Message" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.edgecases.import_squashed_union.pkg2.Message",
                name: "Message",
                package: "testapis.edgecases.import_squashed_union.pkg2"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const MessageInput = Object.assign(nexus.inputObjectType({
    name: "MessageInput",
    definition(t) {
        t.field("msg", {
            type: nexus.nullable("SquashedOneofInput"),
            extensions: {
                ...({
                    protobufField: {
                        name: "msg"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    extensions: {
        protobufMessage: {
            fullName: "testapis.edgecases.import_squashed_union.pkg2.Message",
            name: "Message",
            package: "testapis.edgecases.import_squashed_union.pkg2"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["MessageInput"]): $$testapis$node$lib$$testapis$edgecases$import_squashed_union$pkg2.testapis.edgecases.import_squashed_union.pkg2.Message => {
        const output = new $$testapis$node$lib$$testapis$edgecases$import_squashed_union$pkg2.testapis.edgecases.import_squashed_union.pkg2.Message();
        if (input.msg != null) {
            output.msg = __$pkg1$types_pb_nexus.SquashedOneofInput.toProto(input.msg);
        }
        return output;
    },
    _protoNexus: {
        fields: {
            msg: {
                type: nexus.nullable("SquashedOneofInput"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "msg"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            }
        }
    }
});
