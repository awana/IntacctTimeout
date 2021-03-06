"use strict";
/**
 * @module Intacct/SDK/Functions/Purchasing
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPurchasingTransactionLine_1 = require("./AbstractPurchasingTransactionLine");
class PurchasingTransactionLineCreate extends AbstractPurchasingTransactionLine_1.default {
    writeXml(xml) {
        xml.writeStartElement("potransitem");
        xml.writeElement("itemid", this.itemId, true);
        xml.writeElement("itemdesc", this.itemDescription);
        xml.writeElement("taxable", this.taxable);
        xml.writeElement("warehouseid", this.warehouseId);
        xml.writeElement("quantity", this.quantity, true);
        xml.writeElement("unit", this.unit);
        xml.writeElement("price", this.price);
        xml.writeElement("overridetaxamount", this.overrideTaxAmount);
        xml.writeElement("tax", this.tax);
        xml.writeElement("locationid", this.locationId);
        xml.writeElement("departmentid", this.departmentId);
        xml.writeElement("memo", this.memo);
        if (this.itemDetails != null && this.itemDetails.length > 0) {
            xml.writeStartElement("itemdetails");
            for (const itemDetail of this.itemDetails) {
                itemDetail.writeXml(xml);
            }
            xml.writeEndElement(); // itemdetails
        }
        xml.writeElement("form1099", this.form1099);
        xml.writeCustomFieldsExplicit(this.customFields);
        xml.writeElement("projectid", this.projectId);
        xml.writeElement("customerid", this.customerId);
        xml.writeElement("vendorid", this.vendorId);
        xml.writeElement("employeeid", this.employeeId);
        xml.writeElement("classid", this.classId);
        xml.writeElement("contractid", this.contractId);
        xml.writeElement("billable", this.billable);
        xml.writeEndElement(); // potransitem
    }
}
exports.default = PurchasingTransactionLineCreate;
//# sourceMappingURL=PurchasingTransactionLineCreate.js.map