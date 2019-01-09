"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApPayment_1 = require("./AbstractApPayment");
class ApPaymentReverse extends AbstractApPayment_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("reverse_appayment");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeStartElement("datereversed");
        xml.writeDateSplitElements(this.reverseDate);
        xml.writeEndElement(); // datereversed
        xml.writeElement("description", this.memo);
        xml.writeEndElement(); // reverse_appayment
        xml.writeEndElement(); // function
    }
}
exports.default = ApPaymentReverse;
//# sourceMappingURL=ApPaymentReverse.js.map