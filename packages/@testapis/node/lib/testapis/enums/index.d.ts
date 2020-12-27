import * as $protobuf from "protobufjs";
/** Namespace testapi. */
export namespace testapi {

    /** Namespace enums. */
    namespace enums {

        /** Properties of a MessageWithEnums. */
        interface IMessageWithEnums {

            /** MessageWithEnums requiredMyEnum */
            requiredMyEnum?: (testapi.enums.MyEnum|null);

            /** MessageWithEnums optionalMyEnum */
            optionalMyEnum?: (testapi.enums.MyEnum|null);

            /** MessageWithEnums requiredMyEnumWithoutUnspecified */
            requiredMyEnumWithoutUnspecified?: (testapi.enums.MyEnumWithoutUnspecified|null);

            /** MessageWithEnums optionalMyEnumWithoutUnspecified */
            optionalMyEnumWithoutUnspecified?: (testapi.enums.MyEnumWithoutUnspecified|null);
        }

        /** Represents a MessageWithEnums. */
        class MessageWithEnums implements IMessageWithEnums {

            /**
             * Constructs a new MessageWithEnums.
             * @param [properties] Properties to set
             */
            constructor(properties?: testapi.enums.IMessageWithEnums);

            /** MessageWithEnums requiredMyEnum. */
            public requiredMyEnum: testapi.enums.MyEnum;

            /** MessageWithEnums optionalMyEnum. */
            public optionalMyEnum: testapi.enums.MyEnum;

            /** MessageWithEnums requiredMyEnumWithoutUnspecified. */
            public requiredMyEnumWithoutUnspecified: testapi.enums.MyEnumWithoutUnspecified;

            /** MessageWithEnums optionalMyEnumWithoutUnspecified. */
            public optionalMyEnumWithoutUnspecified: testapi.enums.MyEnumWithoutUnspecified;

            /**
             * Creates a new MessageWithEnums instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageWithEnums instance
             */
            public static create(properties?: testapi.enums.IMessageWithEnums): testapi.enums.MessageWithEnums;

            /**
             * Encodes the specified MessageWithEnums message. Does not implicitly {@link testapi.enums.MessageWithEnums.verify|verify} messages.
             * @param message MessageWithEnums message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: testapi.enums.IMessageWithEnums, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageWithEnums message, length delimited. Does not implicitly {@link testapi.enums.MessageWithEnums.verify|verify} messages.
             * @param message MessageWithEnums message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: testapi.enums.IMessageWithEnums, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageWithEnums message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageWithEnums
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): testapi.enums.MessageWithEnums;

            /**
             * Decodes a MessageWithEnums message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageWithEnums
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): testapi.enums.MessageWithEnums;

            /**
             * Verifies a MessageWithEnums message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageWithEnums message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageWithEnums
             */
            public static fromObject(object: { [k: string]: any }): testapi.enums.MessageWithEnums;

            /**
             * Creates a plain object from a MessageWithEnums message. Also converts values to other types if specified.
             * @param message MessageWithEnums
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: testapi.enums.MessageWithEnums, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageWithEnums to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** MyEnum enum. */
        enum MyEnum {
            MY_ENUM_UNSPECIFIED = 0,
            MY_ENUM_FOO = 1,
            MY_ENUM_BAR = 2,
            MY_ENUM_BAZ = 3
        }

        /** MyEnumWithoutUnspecified enum. */
        enum MyEnumWithoutUnspecified {
            MY_ENUM_WITHOUT_UNSPECIFIED_FOO = 0,
            MY_ENUM_WITHOUT_UNSPECIFIED_BAR = 1,
            MY_ENUM_WITHOUT_UNSPECIFIED_BAZ = 2
        }
    }
}
