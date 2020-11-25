"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApPaymentRequest_1 = require("./AbstractApPaymentRequest");
class ApPaymentRequestDelete extends AbstractApPaymentRequest_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("delete_paymentrequest");
        xml.writeAttribute("key", this.recordNo, true);
        xml.writeEndElement(); // delete_paymentrequest
        xml.writeEndElement(); // function
    }
}
exports.default = ApPaymentRequestDelete;
//# sourceMappingURL=ApPaymentRequestDelete.js.map