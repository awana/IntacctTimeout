"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApPaymentRequest_1 = require("./AbstractApPaymentRequest");
class ApPaymentRequestApprove extends AbstractApPaymentRequest_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("approve_appaymentrequest");
        xml.writeStartElement("appaymentkeys");
        xml.writeElement("appaymentkey", this.recordNo, true);
        xml.writeEndElement(); // appaymentkeys
        xml.writeEndElement(); // approve_appaymentrequest
        xml.writeEndElement(); // function
    }
}
exports.default = ApPaymentRequestApprove;
//# sourceMappingURL=ApPaymentRequestApprove.js.map