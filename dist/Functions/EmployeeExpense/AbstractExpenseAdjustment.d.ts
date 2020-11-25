/**
 * @module Intacct/SDK/Functions/EmployeeExpense
 */
/**
 * Copyright 2020 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import AbstractFunction from "../AbstractFunction";
import AbstractExpenseAdjustmentLine from "./AbstractExpenseAdjustmentLine";
export default abstract class AbstractExpenseAdjustment extends AbstractFunction {
    recordNo: number;
    transactionDate: Date;
    employeeId: string;
    expenseReportNumber: string;
    expenseAdjustmentNumber: string;
    glPostingDate: Date;
    summaryRecordNo: number;
    externalId: string;
    action: string;
    baseCurrency: string;
    reimbursementCurrency: string;
    attachmentsId: string;
    reasonForExpense: string;
    description: string;
    memo: string;
    lines: AbstractExpenseAdjustmentLine[];
}
