// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: testapis/oneof/oneof.proto

/* eslint-disable */

import * as $$testapis$node_native$lib$$testapis$oneof$oneof_pb from "@testapis/node-native/lib//testapis/oneof/oneof_pb";
import * as nexus from "nexus";
import * as proto_nexus from "proto-nexus";
export type $$testapis$node_native$lib$$testapis$oneof$oneof_pb$OneofParent = $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent;
export type $$testapis$node_native$lib$$testapis$oneof$oneof_pb$OneofMemberMessage1 = $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofMemberMessage1;
export type $$testapis$node_native$lib$$testapis$oneof$oneof_pb$OneofMemberMessage2 = $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofMemberMessage2;
export const OneofParent = nexus.objectType({
    name: "OneofParent",
    definition(t) {
        t.field("normalField", {
            type: nexus.nonNull("String"),
            resolve(root) {
                const value = root.getNormalField();
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "normal_field"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("requiredOneofMembers", {
            type: nexus.nonNull("OneofParentRequiredOneofMembers"),
            description: "Required. disallow not_set.",
            resolve(root) {
                switch (root.getRequiredOneofMembersCase()) {
                    case $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent.RequiredOneofMembersCase.REQUIRED_ONEOF_MEMBERS_NOT_SET: {
                        throw "unreachable";
                    }
                    case $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent.RequiredOneofMembersCase.REQUIRED_MESSAGE_1: {
                        return root.getRequiredMessage1()!;
                    }
                    case $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent.RequiredOneofMembersCase.REQUIRED_MESSAGE_2: {
                        return root.getRequiredMessage2()!;
                    }
                    default: {
                        throw "unreachable";
                    }
                }
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "required_oneof_members"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("optionalOneofMembers", {
            type: nexus.nullable("OneofParentOptionalOneofMembers"),
            resolve(root) {
                switch (root.getOptionalOneofMembersCase()) {
                    case $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent.OptionalOneofMembersCase.OPTIONAL_ONEOF_MEMBERS_NOT_SET: {
                        return null;
                    }
                    case $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent.OptionalOneofMembersCase.OPTOINAL_MESSAGE_1: {
                        return root.getOptoinalMessage1()!;
                    }
                    case $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent.OptionalOneofMembersCase.OPTOINAL_MESSAGE_2: {
                        return root.getOptoinalMessage2()!;
                    }
                    default: {
                        throw "unreachable";
                    }
                }
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "optional_oneof_members"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    isTypeOf(data: unknown) {
        return data instanceof $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent;
    },
    sourceType: { module: __filename, export: "$$testapis$node_native$lib$$testapis$oneof$oneof_pb$OneofParent" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.oneof.OneofParent",
                name: "OneofParent",
                package: "testapis.oneof"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const OneofMemberMessage1 = nexus.objectType({
    name: "OneofMemberMessage1",
    definition(t) {
        t.field("body", {
            type: nexus.nonNull("String"),
            resolve(root) {
                const value = root.getBody();
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
        return data instanceof $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofMemberMessage1;
    },
    sourceType: { module: __filename, export: "$$testapis$node_native$lib$$testapis$oneof$oneof_pb$OneofMemberMessage1" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.oneof.OneofMemberMessage1",
                name: "OneofMemberMessage1",
                package: "testapis.oneof"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const OneofMemberMessage2 = nexus.objectType({
    name: "OneofMemberMessage2",
    definition(t) {
        t.field("imageUrl", {
            type: nexus.nonNull("String"),
            resolve(root) {
                const value = root.getImageUrl();
                return value;
            },
            extensions: {
                ...({
                    protobufField: {
                        name: "image_url"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    isTypeOf(data: unknown) {
        return data instanceof $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofMemberMessage2;
    },
    sourceType: { module: __filename, export: "$$testapis$node_native$lib$$testapis$oneof$oneof_pb$OneofMemberMessage2" },
    extensions: {
        ...({
            protobufMessage: {
                fullName: "testapis.oneof.OneofMemberMessage2",
                name: "OneofMemberMessage2",
                package: "testapis.oneof"
            }
        } as proto_nexus.ProtobufMessageExtensions)
    }
});
export const OneofParentInput = Object.assign(nexus.inputObjectType({
    name: "OneofParentInput",
    definition(t) {
        t.field("normalField", {
            type: nexus.nonNull("String"),
            extensions: {
                ...({
                    protobufField: {
                        name: "normal_field"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("requiredMessage1", {
            type: nexus.nullable("OneofMemberMessage1Input"),
            extensions: {
                ...({
                    protobufField: {
                        name: "required_message1"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("requiredMessage2", {
            type: nexus.nullable("OneofMemberMessage2Input"),
            extensions: {
                ...({
                    protobufField: {
                        name: "required_message2"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("optoinalMessage1", {
            type: nexus.nullable("OneofMemberMessage1Input"),
            extensions: {
                ...({
                    protobufField: {
                        name: "optoinal_message1"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
        t.field("optoinalMessage2", {
            type: nexus.nullable("OneofMemberMessage2Input"),
            extensions: {
                ...({
                    protobufField: {
                        name: "optoinal_message2"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    extensions: {
        protobufMessage: {
            fullName: "testapis.oneof.OneofParent",
            name: "OneofParent",
            package: "testapis.oneof"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["OneofParentInput"]): $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent => {
        const output = new $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofParent();
        output.setNormalField(input.normalField);
        if (input.requiredMessage1 != null) {
            output.setRequiredMessage1(OneofMemberMessage1Input.toProto(input.requiredMessage1));
        }
        if (input.requiredMessage2 != null) {
            output.setRequiredMessage2(OneofMemberMessage2Input.toProto(input.requiredMessage2));
        }
        if (input.optoinalMessage1 != null) {
            output.setOptoinalMessage1(OneofMemberMessage1Input.toProto(input.optoinalMessage1));
        }
        if (input.optoinalMessage2 != null) {
            output.setOptoinalMessage2(OneofMemberMessage2Input.toProto(input.optoinalMessage2));
        }
        return output;
    },
    _protoNexus: {
        fields: {
            normalField: {
                type: nexus.nonNull("String"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "normal_field"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            requiredMessage1: {
                type: nexus.nullable("OneofMemberMessage1Input"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "required_message1"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            requiredMessage2: {
                type: nexus.nullable("OneofMemberMessage2Input"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "required_message2"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            optoinalMessage1: {
                type: nexus.nullable("OneofMemberMessage1Input"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "optoinal_message1"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            },
            optoinalMessage2: {
                type: nexus.nullable("OneofMemberMessage2Input"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "optoinal_message2"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            }
        }
    }
});
export const OneofMemberMessage1Input = Object.assign(nexus.inputObjectType({
    name: "OneofMemberMessage1Input",
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
            fullName: "testapis.oneof.OneofMemberMessage1",
            name: "OneofMemberMessage1",
            package: "testapis.oneof"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["OneofMemberMessage1Input"]): $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofMemberMessage1 => {
        const output = new $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofMemberMessage1();
        output.setBody(input.body);
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
export const OneofMemberMessage2Input = Object.assign(nexus.inputObjectType({
    name: "OneofMemberMessage2Input",
    definition(t) {
        t.field("imageUrl", {
            type: nexus.nonNull("String"),
            extensions: {
                ...({
                    protobufField: {
                        name: "image_url"
                    }
                } as proto_nexus.ProtobufFieldExtensions)
            }
        });
    },
    extensions: {
        protobufMessage: {
            fullName: "testapis.oneof.OneofMemberMessage2",
            name: "OneofMemberMessage2",
            package: "testapis.oneof"
        }
    }
}), {
    toProto: (input: NexusGen["inputTypes"]["OneofMemberMessage2Input"]): $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofMemberMessage2 => {
        const output = new $$testapis$node_native$lib$$testapis$oneof$oneof_pb.OneofMemberMessage2();
        output.setImageUrl(input.imageUrl);
        return output;
    },
    _protoNexus: {
        fields: {
            imageUrl: {
                type: nexus.nonNull("String"),
                extensions: {
                    ...({
                        protobufField: {
                            name: "image_url"
                        }
                    } as proto_nexus.ProtobufFieldExtensions)
                }
            }
        }
    }
});
export const OneofParentRequiredOneofMembers = nexus.unionType({
    name: "OneofParentRequiredOneofMembers",
    description: "Required. disallow not_set.",
    definition(t) {
        t.members(OneofMemberMessage1, OneofMemberMessage2);
    },
    extensions: {
        ...({
            protobufOneof: {
                fullName: "testapis.oneof.OneofParent.required_oneof_members",
                name: "required_oneof_members",
                messageName: "OneofParent",
                package: "testapis.oneof",
                fields: [
                    {
                        name: "required_message1",
                        type: "testapis.oneof.OneofMemberMessage1"
                    },
                    {
                        name: "required_message2",
                        type: "testapis.oneof.OneofMemberMessage2"
                    }
                ]
            }
        } as proto_nexus.ProtobufOneofExtensions)
    }
});
export const OneofParentOptionalOneofMembers = nexus.unionType({
    name: "OneofParentOptionalOneofMembers",
    definition(t) {
        t.members(OneofMemberMessage1, OneofMemberMessage2);
    },
    extensions: {
        ...({
            protobufOneof: {
                fullName: "testapis.oneof.OneofParent.optional_oneof_members",
                name: "optional_oneof_members",
                messageName: "OneofParent",
                package: "testapis.oneof",
                fields: [
                    {
                        name: "optoinal_message1",
                        type: "testapis.oneof.OneofMemberMessage1"
                    },
                    {
                        name: "optoinal_message2",
                        type: "testapis.oneof.OneofMemberMessage2"
                    }
                ]
            }
        } as proto_nexus.ProtobufOneofExtensions)
    }
});
