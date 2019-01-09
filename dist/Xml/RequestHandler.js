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
const errors_1 = require("request-promise-native/errors");
const Endpoint_1 = require("../Credentials/Endpoint");
const SessionCredentials_1 = require("../Credentials/SessionCredentials");
const HttpClientHandler_1 = require("./HttpClientHandler");
const LoggingHandler_1 = require("./LoggingHandler");
const OfflineResponse_1 = require("./OfflineResponse");
const OnlineResponse_1 = require("./OnlineResponse");
const RequestBlock_1 = require("./RequestBlock");
class RequestHandler {
    constructor(clientConfig, requestConfig) {
        const packageInfo = require("../../package.json");
        this.version = packageInfo.version;
        if (clientConfig.endpointUrl != null && clientConfig.endpointUrl !== "") {
            this.endpointUrl = clientConfig.endpointUrl;
        }
        else {
            const endpoint = new Endpoint_1.default(clientConfig);
            this.endpointUrl = endpoint.url;
        }
        this.clientConfig = clientConfig;
        this.requestConfig = requestConfig;
    }
    executeOnline(content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.requestConfig.policyId != null &&
                this.requestConfig.policyId !== "") {
                this.requestConfig.policyId = "";
            }
            const request = new RequestBlock_1.default(this.clientConfig, this.requestConfig, content);
            const response = yield this.execute(request.writeXml());
            return new OnlineResponse_1.default(response.body);
        });
    }
    executeOffline(content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.requestConfig.policyId == null ||
                this.requestConfig.policyId === "") {
                throw new Error("Required Policy ID not supplied in config for offline request");
            }
            if (this.clientConfig.logger != null &&
                ((this.clientConfig.sessionId != null &&
                    this.clientConfig.sessionId !== "") ||
                    this.clientConfig.credentials instanceof SessionCredentials_1.default)) {
                this.clientConfig.logger.warn("Offline execution sent to Intacct using Session-based credentials. " +
                    "Use Login-based credentials instead to avoid session timeouts.");
            }
            const request = new RequestBlock_1.default(this.clientConfig, this.requestConfig, content);
            const response = yield this.execute(request.writeXml());
            return new OfflineResponse_1.default(response.body);
        });
    }
    getHttpClient(options) {
        if (this.clientConfig.logger != null) {
            return new LoggingHandler_1.default(options, this.clientConfig.logger, this.clientConfig.logMessageFormatter, this.clientConfig.logLevel);
        }
        else {
            return new HttpClientHandler_1.default(options);
        }
    }
    execute(xml) {
        return __awaiter(this, void 0, void 0, function* () {
            const httpClient = this.getHttpClient({
                url: this.endpointUrl,
                method: "POST",
                timeout: this.requestConfig.maxTimeout,
                simple: true,
                resolveWithFullResponse: true,
                body: xml,
                gzip: true,
                headers: {
                    "Content-Type": "application/xml",
                    "Accept-Encoding": "gzip",
                    "User-Agent": "intacct-sdk-js-client/" + this.version
                }
            });
            for (let attempt = 0; attempt <= this.requestConfig.maxRetries; attempt++) {
                if (attempt > 0) {
                    // Delay this retry based on exponential delay
                    yield this.exponentialDelay(attempt);
                }
                try {
                    return yield httpClient.postAsync();
                }
                catch (error) {
                    if (error instanceof errors_1.StatusCodeError) {
                        if (error.statusCode >= 500 && error.statusCode <= 599) {
                            if (this.requestConfig.noRetryServerErrorCodes.indexOf(error.statusCode) !== -1) {
                                throw error; // Do not retry this server error status code
                            }
                            else if (attempt < this.requestConfig.maxRetries) {
                                attempt++;
                            }
                            else {
                                throw error;
                            }
                        }
                        else {
                            throw error;
                        }
                    }
                    else {
                        throw error;
                    }
                }
            }
            throw new Error("Request retry count exceeded max retry count: " +
                this.requestConfig.maxRetries.toString());
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    exponentialDelay(retries) {
        return __awaiter(this, void 0, void 0, function* () {
            const delay = Math.pow(2, retries - 1) * 1000;
            yield this.delay(delay);
        });
    }
}
exports.default = RequestHandler;
//# sourceMappingURL=RequestHandler.js.map