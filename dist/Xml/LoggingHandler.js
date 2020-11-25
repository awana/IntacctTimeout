"use strict";
/**
 * @module Intacct/SDK/Xml
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClientHandler_1 = require("./HttpClientHandler");
class LoggingHandler extends HttpClientHandler_1.default {
    constructor(options, logger, logMessageFormat, logLevel) {
        super(options);
        this.logger = logger;
        this.logMessageFormatter = logMessageFormat;
        this.logLevel = logLevel;
    }
    postAsync() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            let response = null;
            try {
                response = yield _super("postAsync").call(this);
                this.logger.log(this.logLevel, this.logMessageFormatter.format(response));
            }
            catch (error) {
                this.logger.log(this.logLevel, this.logMessageFormatter.format(response, error));
                throw error;
            }
            return response;
        });
    }
}
exports.default = LoggingHandler;
//# sourceMappingURL=LoggingHandler.js.map