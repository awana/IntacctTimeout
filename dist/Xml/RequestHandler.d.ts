import ClientConfig from "../ClientConfig";
import IFunction from "../Functions/IFunction";
import RequestConfig from "../RequestConfig";
import OfflineResponse from "./OfflineResponse";
import OnlineResponse from "./OnlineResponse";
export default class RequestHandler {
    readonly version: string;
    clientConfig: ClientConfig;
    requestConfig: RequestConfig;
    endpointUrl: string;
    constructor(clientConfig: ClientConfig, requestConfig: RequestConfig);
    executeOnline(content: IFunction[]): Promise<OnlineResponse>;
    executeOffline(content: IFunction[]): Promise<OfflineResponse>;
    private getHttpClient(options);
    private execute(xml);
    private delay(ms);
    private exponentialDelay(retries);
}
