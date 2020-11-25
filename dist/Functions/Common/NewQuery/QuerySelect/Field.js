"use strict";
/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QuerySelect
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Field {
    constructor(fieldName) {
        if (!fieldName) {
            throw new Error("Field name cannot be empty or null. Provide a field name for the builder.");
        }
        this.fieldName = fieldName;
    }
    writeXml(xml) {
        xml.writeElement(Field.FIELD, this.fieldName, false);
    }
}
Field.FIELD = "field";
exports.default = Field;
//# sourceMappingURL=Field.js.map