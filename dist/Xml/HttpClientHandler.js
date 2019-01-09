"use strict";
/**
 * @module Intacct/SDK/Xml
 */
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const util = require("util");
class HttpClientHandler {
    constructor(options) {
        this.options = options;
    }
    postAsync() {
        return new Promise((resolve, reject) => {
            request(this.options, function (err, resp, body) {
                if (err) {
                    reject(err.message);
                }
                resolve(resp);
            });
        });
    }
}
exports.default = HttpClientHandler;
//# sourceMappingURL=HttpClientHandler.js.map