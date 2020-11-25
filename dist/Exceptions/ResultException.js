"use strict";
/**
 * @module Intacct/SDK/Exceptions
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
const ResponseException_1 = require("./ResponseException");
class ResultException extends ResponseException_1.default {
    constructor(message, errors) {
        super(message, errors);
    }
}
exports.default = ResultException;
//# sourceMappingURL=ResultException.js.map