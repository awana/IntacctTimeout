"use strict";
/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractApPaymentRequest_1 = require("./AbstractApPaymentRequest");
class ApPaymentRequestCreate extends AbstractApPaymentRequest_1.default {
    writeXml(xml) {
        xml.writeStartElement("function");
        xml.writeAttribute("controlid", this.controlId, true);
        xml.writeStartElement("create_paymentrequest");
        if (this.chargeCardId != null) {
            xml.writeElement("chargecardid", this.chargeCardId);
        }
        else {
            xml.writeElement("bankaccountid", this.bankAccountId);
        }
        xml.writeElement("vendorid", this.vendorId, true);
        xml.writeElement("memo", this.memo);
        xml.writeElement("paymentmethod", this.paymentMethod, true);
        xml.writeElement("grouppayments", this.groupPayments);
        xml.writeStartElement("paymentdate");
        xml.writeDateSplitElements(this.paymentDate, true);
        xml.writeEndElement(); // paymentdate
        xml.writeElement("paymentoption", this.mergeOption);
        if (this.applyToTransactions != null && this.applyToTransactions.length > 0) {
            xml.writeStartElement("paymentrequestitems");
            for (const applyToTransaction of this.applyToTransactions) {
                applyToTransaction.writeXml(xml);
            }
            xml.writeEndElement(); // paymentrequestitems
        }
        xml.writeElement("documentnumber", this.documentNo);
        // TODO: review paymentdescription vs memo
        xml.writeElement("paymentdescription", this.memo);
        xml.writeElement("paymentcontact", this.notificationContactName);
        xml.writeEndElement(); // create_paymentrequest
        xml.writeEndElement(); // function
    }
}
exports.default = ApPaymentRequestCreate;
//# sourceMappingURL=ApPaymentRequestCreate.js.map