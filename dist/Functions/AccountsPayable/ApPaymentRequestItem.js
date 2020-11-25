"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ApPaymentRequestItem {
    writeXml(xml) {
        xml.writeStartElement("paymentrequestitem");
        xml.writeElement("key", this.applyToRecordId, true);
        xml.writeElement("paymentamount", this.amountToApply, true);
        xml.writeElement("credittoapply", this.creditToApply);
        xml.writeElement("discounttoapply", this.discountToApply);
        xml.writeEndElement(); // paymentrequestitem
    }
}
exports.default = ApPaymentRequestItem;
//# sourceMappingURL=ApPaymentRequestItem.js.map