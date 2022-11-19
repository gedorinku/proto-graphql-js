// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: testapis/deprecation/deprecation.proto

/* eslint-disable */

import * as $$testapis$node$lib$$testapis$deprecation from "@testapis/node/lib//testapis/deprecation";
import * as nexus from "nexus";
import * as proto_nexus from "proto-nexus";
export type $$testapis$node$lib$$testapis$deprecation$testapis$deprecation$DeprecatedMessage = $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedMessage;
export type $$testapis$node$lib$$testapis$deprecation$testapis$deprecation$NotDeprecatedMessage = $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage;
export type $$testapis$node$lib$$testapis$deprecation$testapis$deprecation$DeprecatedMessageInnerMessage = $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedMessage.InnerMessage;
export type $$testapis$node$lib$$testapis$deprecation$testapis$deprecation$NotDeprecatedMessageInnerMessage1 = $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.InnerMessage1;
export type $$testapis$node$lib$$testapis$deprecation$testapis$deprecation$NotDeprecatedMessageInnerMessage2 = $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.InnerMessage2;
export const DeprecatedMessage = nexus.objectType({
    name: "DeprecatedMessage",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) {
                const value = root.body;
                if (value == null) {
                    throw new Error("Cannot return null for non-nullable field");
                }
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("enum", {
            type: nexus.nullable("NotDeprecatedEnum"),
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) {
                const value = root.enum;
                if (value == null) {
                    return null;
                }
                if (value === $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedEnum.NOT_DEPRECATED_ENUM_UNSPECIFIED) {
                    return null;
                }
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "enum"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    isTypeOf(data: unknown) {
        return data instanceof $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedMessage;
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$$testapis$deprecation$testapis$deprecation$DeprecatedMessage" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.deprecation.DeprecatedMessage",
                name: "DeprecatedMessage",
                package: "testapis.deprecation"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const NotDeprecatedMessage = nexus.objectType({
    name: "NotDeprecatedMessage",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            deprecation: "testapis.deprecation.NotDeprecatedMessage.body is mark as deprecated in a *.proto file.",
            resolve(root) {
                const value = root.body;
                if (value == null) {
                    throw new Error("Cannot return null for non-nullable field");
                }
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("enum", {
            type: nexus.nullable("DeprecatedEnum"),
            deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            resolve(root) {
                const value = root.enum;
                if (value == null) {
                    return null;
                }
                if (value === $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedEnum.DEPRECATED_ENUM_UNSPECIFIED) {
                    return null;
                }
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "enum"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("notDeprecatedOneof", {
            type: nexus.nullable("NotDeprecatedMessageNotDeprecatedOneof"),
            resolve(root) {
                if (root.msg1) {
                    return root.msg1;
                }
                if (root.msg2) {
                    return root.msg2;
                }
                return null;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "not_deprecated_oneof"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("deprecatedOneof", {
            type: nexus.nullable("NotDeprecatedMessageDeprecatedOneof"),
            deprecation: "testapis.deprecation.NotDeprecatedMessage.deprecated_oneof is mark as deprecated in a *.proto file.",
            resolve(root) {
                if (root.msg3) {
                    return root.msg3;
                }
                if (root.msg4) {
                    return root.msg4;
                }
                return null;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "deprecated_oneof"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    isTypeOf(data: unknown) {
        return data instanceof $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage;
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$$testapis$deprecation$testapis$deprecation$NotDeprecatedMessage" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.deprecation.NotDeprecatedMessage",
                name: "NotDeprecatedMessage",
                package: "testapis.deprecation"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const DeprecatedMessageInnerMessage = nexus.objectType({
    name: "DeprecatedMessageInnerMessage",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) {
                const value = root.body;
                if (value == null) {
                    throw new Error("Cannot return null for non-nullable field");
                }
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    isTypeOf(data: unknown) {
        return data instanceof $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedMessage.InnerMessage;
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$$testapis$deprecation$testapis$deprecation$DeprecatedMessageInnerMessage" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.deprecation.DeprecatedMessage.InnerMessage",
                name: "InnerMessage",
                package: "testapis.deprecation"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const NotDeprecatedMessageInnerMessage1 = nexus.objectType({
    name: "NotDeprecatedMessageInnerMessage1",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            resolve(root) {
                const value = root.body;
                if (value == null) {
                    throw new Error("Cannot return null for non-nullable field");
                }
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    isTypeOf(data: unknown) {
        return data instanceof $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.InnerMessage1;
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$$testapis$deprecation$testapis$deprecation$NotDeprecatedMessageInnerMessage1" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.deprecation.NotDeprecatedMessage.InnerMessage1",
                name: "InnerMessage1",
                package: "testapis.deprecation"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const NotDeprecatedMessageInnerMessage2 = nexus.objectType({
    name: "NotDeprecatedMessageInnerMessage2",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            resolve(root) {
                const value = root.body;
                if (value == null) {
                    throw new Error("Cannot return null for non-nullable field");
                }
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    isTypeOf(data: unknown) {
        return data instanceof $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.InnerMessage2;
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$$testapis$deprecation$testapis$deprecation$NotDeprecatedMessageInnerMessage2" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.deprecation.NotDeprecatedMessage.InnerMessage2",
                name: "InnerMessage2",
                package: "testapis.deprecation"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const DeprecatedMessageInput = Object.assign(nexus.inputObjectType({
    name: "DeprecatedMessageInput",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("enum", {
            type: nexus.nullable("NotDeprecatedEnum"),
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            extensions: {
                ...({
                    protobufField: {
                        name: "enum"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    extensions: {
        protobufMessage: {
            fullName: "testapis.deprecation.DeprecatedMessage",
            name: "DeprecatedMessage",
            package: "testapis.deprecation"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["DeprecatedMessageInput"]): $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedMessage => {
        const output = new $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedMessage();
        output.body = input.body;
        if (input.enum != null) {
            output.enum = input.enum;
        }
        return output;
    },
    _protoNexus: {
        fields: {
            body: {
                type: nexus.nonNull("String"),
                deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
                extensions: {
                    ...({
                        protobufField: {
                            name: "body"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            enum: {
                type: nexus.nullable("NotDeprecatedEnum"),
                deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
                extensions: {
                    ...({
                        protobufField: {
                            name: "enum"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            }
        }
    }
});
export const NotDeprecatedMessageInput = Object.assign(nexus.inputObjectType({
    name: "NotDeprecatedMessageInput",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            deprecation: "testapis.deprecation.NotDeprecatedMessage.body is mark as deprecated in a *.proto file.",
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("enum", {
            type: nexus.nullable("DeprecatedEnum"),
            deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            extensions: {
                ...({
                    protobufField: {
                        name: "enum"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("msg1", {
            type: nexus.nullable("NotDeprecatedMessageInnerMessage1Input"),
            deprecation: "testapis.deprecation.NotDeprecatedMessage.msg1 is mark as deprecated in a *.proto file.",
            extensions: {
                ...({
                    protobufField: {
                        name: "msg1"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("msg2", {
            type: nexus.nullable("NotDeprecatedMessageInnerMessage2Input"),
            extensions: {
                ...({
                    protobufField: {
                        name: "msg2"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("msg3", {
            type: nexus.nullable("NotDeprecatedMessageInnerMessage1Input"),
            deprecation: "testapis.deprecation.NotDeprecatedMessage.msg3 is mark as deprecated in a *.proto file.",
            extensions: {
                ...({
                    protobufField: {
                        name: "msg3"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("msg4", {
            type: nexus.nullable("NotDeprecatedMessageInnerMessage2Input"),
            deprecation: "testapis.deprecation.NotDeprecatedMessage.msg4 is mark as deprecated in a *.proto file.",
            extensions: {
                ...({
                    protobufField: {
                        name: "msg4"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    extensions: {
        protobufMessage: {
            fullName: "testapis.deprecation.NotDeprecatedMessage",
            name: "NotDeprecatedMessage",
            package: "testapis.deprecation"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["NotDeprecatedMessageInput"]): $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage => {
        const output = new $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage();
        output.body = input.body;
        if (input.enum != null) {
            output.enum = input.enum;
        }
        if (input.msg1 != null) {
            output.msg1 = NotDeprecatedMessageInnerMessage1Input.toProto(input.msg1);
        }
        if (input.msg2 != null) {
            output.msg2 = NotDeprecatedMessageInnerMessage2Input.toProto(input.msg2);
        }
        if (input.msg3 != null) {
            output.msg3 = NotDeprecatedMessageInnerMessage1Input.toProto(input.msg3);
        }
        if (input.msg4 != null) {
            output.msg4 = NotDeprecatedMessageInnerMessage2Input.toProto(input.msg4);
        }
        return output;
    },
    _protoNexus: {
        fields: {
            body: {
                type: nexus.nonNull("String"),
                deprecation: "testapis.deprecation.NotDeprecatedMessage.body is mark as deprecated in a *.proto file.",
                extensions: {
                    ...({
                        protobufField: {
                            name: "body"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            enum: {
                type: nexus.nullable("DeprecatedEnum"),
                deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
                extensions: {
                    ...({
                        protobufField: {
                            name: "enum"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            msg1: {
                type: nexus.nullable("NotDeprecatedMessageInnerMessage1Input"),
                deprecation: "testapis.deprecation.NotDeprecatedMessage.msg1 is mark as deprecated in a *.proto file.",
                extensions: {
                    ...({
                        protobufField: {
                            name: "msg1"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            msg2: {
                type: nexus.nullable("NotDeprecatedMessageInnerMessage2Input"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "msg2"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            msg3: {
                type: nexus.nullable("NotDeprecatedMessageInnerMessage1Input"),
                deprecation: "testapis.deprecation.NotDeprecatedMessage.msg3 is mark as deprecated in a *.proto file.",
                extensions: {
                    ...({
                        protobufField: {
                            name: "msg3"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            msg4: {
                type: nexus.nullable("NotDeprecatedMessageInnerMessage2Input"),
                deprecation: "testapis.deprecation.NotDeprecatedMessage.msg4 is mark as deprecated in a *.proto file.",
                extensions: {
                    ...({
                        protobufField: {
                            name: "msg4"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            }
        }
    }
});
export const DeprecatedMessageInnerMessageInput = Object.assign(nexus.inputObjectType({
    name: "DeprecatedMessageInnerMessageInput",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    extensions: {
        protobufMessage: {
            fullName: "testapis.deprecation.DeprecatedMessage.InnerMessage",
            name: "InnerMessage",
            package: "testapis.deprecation"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["DeprecatedMessageInnerMessageInput"]): $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedMessage.InnerMessage => {
        const output = new $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.DeprecatedMessage.InnerMessage();
        output.body = input.body;
        return output;
    },
    _protoNexus: {
        fields: {
            body: {
                type: nexus.nonNull("String"),
                deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
                extensions: {
                    ...({
                        protobufField: {
                            name: "body"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            }
        }
    }
});
export const NotDeprecatedMessageInnerMessage1Input = Object.assign(nexus.inputObjectType({
    name: "NotDeprecatedMessageInnerMessage1Input",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    extensions: {
        protobufMessage: {
            fullName: "testapis.deprecation.NotDeprecatedMessage.InnerMessage1",
            name: "InnerMessage1",
            package: "testapis.deprecation"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["NotDeprecatedMessageInnerMessage1Input"]): $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.InnerMessage1 => {
        const output = new $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.InnerMessage1();
        output.body = input.body;
        return output;
    },
    _protoNexus: {
        fields: {
            body: {
                type: nexus.nonNull("String"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "body"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            }
        }
    }
});
export const NotDeprecatedMessageInnerMessage2Input = Object.assign(nexus.inputObjectType({
    name: "NotDeprecatedMessageInnerMessage2Input",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            extensions: {
                ...({
                    protobufField: {
                        name: "body"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    extensions: {
        protobufMessage: {
            fullName: "testapis.deprecation.NotDeprecatedMessage.InnerMessage2",
            name: "InnerMessage2",
            package: "testapis.deprecation"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["NotDeprecatedMessageInnerMessage2Input"]): $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.InnerMessage2 => {
        const output = new $$testapis$node$lib$$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.InnerMessage2();
        output.body = input.body;
        return output;
    },
    _protoNexus: {
        fields: {
            body: {
                type: nexus.nonNull("String"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "body"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            }
        }
    }
});
export const NotDeprecatedMessageNotDeprecatedOneof = nexus.unionType({
    name: "NotDeprecatedMessageNotDeprecatedOneof",
    definition(t) {
        t.members(NotDeprecatedMessageInnerMessage1, NotDeprecatedMessageInnerMessage2);
    },
    extensions: {
        ...({
            protobufOneof: {
                fullName: "testapis.deprecation.NotDeprecatedMessage.not_deprecated_oneof",
                name: "not_deprecated_oneof",
                messageName: "NotDeprecatedMessage",
                package: "testapis.deprecation",
                fields: [
                    {
                        name: "msg1",
                        type: "testapis.deprecation.NotDeprecatedMessage.InnerMessage1"
                    },
                    {
                        name: "msg2",
                        type: "testapis.deprecation.NotDeprecatedMessage.InnerMessage2"
                    }
                ]
            }
        } as proto_nexus.ProtobufOneofExtensions)
    }
});
export const NotDeprecatedMessageDeprecatedOneof = nexus.unionType({
    name: "NotDeprecatedMessageDeprecatedOneof",
    definition(t) {
        t.members(NotDeprecatedMessageInnerMessage1, NotDeprecatedMessageInnerMessage2);
    },
    extensions: {
        ...({
            protobufOneof: {
                fullName: "testapis.deprecation.NotDeprecatedMessage.deprecated_oneof",
                name: "deprecated_oneof",
                messageName: "NotDeprecatedMessage",
                package: "testapis.deprecation",
                fields: [
                    {
                        name: "msg3",
                        type: "testapis.deprecation.NotDeprecatedMessage.InnerMessage1"
                    },
                    {
                        name: "msg4",
                        type: "testapis.deprecation.NotDeprecatedMessage.InnerMessage2"
                    }
                ]
            }
        } as proto_nexus.ProtobufOneofExtensions)
    }
});
export const NotDeprecatedEnum = nexus.enumType({
    name: "NotDeprecatedEnum",
    members: [
        {
            name: "NOT_DEPRECATED_FOO",
            value: 1,
            extensions: {
                ...({
                    protobufEnumValue: {
                        name: "NOT_DEPRECATED_FOO"
                    }
                } as proto_nexus.ProtobufEnumValueExtensions)
            }
        },
        {
            name: "DEPRECATED_BAR",
            deprecation: "testapis.deprecation.NotDeprecatedEnum.DEPRECATED_BAR is mark as deprecated in a *.proto file.",
            value: 2,
            extensions: {
                ...({
                    protobufEnumValue: {
                        name: "DEPRECATED_BAR"
                    }
                } as proto_nexus.ProtobufEnumValueExtensions)
            }
        }
    ],
    extensions: {
        ...({
            protobufEnum: {
                name: "NotDeprecatedEnum",
                fullName: "testapis.deprecation.NotDeprecatedEnum",
                package: "testapis.deprecation"
            }
        } as proto_nexus.ProtobufEnumExtensions)
    }
});
export const DeprecatedEnum = nexus.enumType({
    name: "DeprecatedEnum",
    members: [
        {
            name: "DEPRECATED_BAZ",
            deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            value: 1,
            extensions: {
                ...({
                    protobufEnumValue: {
                        name: "DEPRECATED_BAZ"
                    }
                } as proto_nexus.ProtobufEnumValueExtensions)
            }
        },
        {
            name: "DEPRECATED_QUX",
            deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            value: 2,
            extensions: {
                ...({
                    protobufEnumValue: {
                        name: "DEPRECATED_QUX"
                    }
                } as proto_nexus.ProtobufEnumValueExtensions)
            }
        }
    ],
    extensions: {
        ...({
            protobufEnum: {
                name: "DeprecatedEnum",
                fullName: "testapis.deprecation.DeprecatedEnum",
                package: "testapis.deprecation"
            }
        } as proto_nexus.ProtobufEnumExtensions)
    }
});
