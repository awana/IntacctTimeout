/**
 * @module Intacct/SDK/Xml
 */

/**
 * Copyright 2018 Sage Intacct, Inc.
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

import { RequestResponse } from "request";
import * as request from "request";
import * as client from "request-promise-native";
const util = require("util");

export default class HttpClientHandler {
  protected options;

  constructor(options) {
    this.options = options;
  }

  public postAsync(): Promise<RequestResponse> {
    return new Promise((resolve, reject) => {
      request(this.options, function(err, resp, body) {
        if (err) {
          reject(err.message);
        }
        resolve(resp);
      });
    });
  }
}
