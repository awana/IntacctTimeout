"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApPaymentRequest_1 = require("./AbstractApPaymentRequest");
class ApPaymentRequestVoid extends AbstractApPaymentRequest_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("void_appaymentrequest");
        xml.writeStartElement("appaymentkeys");
        xml.writeElement("appaymentkey", this.recordNo, true);
        xml.writeEndElement(); // appaymentkeys
        xml.writeEndElement(); // void_appaymentrequest
        xml.writeEndElement(); // function
    }
}
exports.default = ApPaymentRequestVoid;
//# sourceMappingURL=ApPaymentRequestVoid.js.map