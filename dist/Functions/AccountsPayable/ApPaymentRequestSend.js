"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApPaymentRequest_1 = require("./AbstractApPaymentRequest");
class ApPaymentRequestSend extends AbstractApPaymentRequest_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("send_appaymentrequest");
        xml.writeStartElement("appaymentkeys");
        xml.writeElement("appaymentkey", this.recordNo, true);
        xml.writeEndElement(); // appaymentkeys
        xml.writeEndElement(); // send_appaymentrequest
        xml.writeEndElement(); // function
    }
}
exports.default = ApPaymentRequestSend;
//# sourceMappingURL=ApPaymentRequestSend.js.map