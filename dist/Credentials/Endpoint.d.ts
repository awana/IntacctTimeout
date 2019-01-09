import ClientConfig from "../ClientConfig";
export default class Endpoint {
    static readonly DEFAULT_ENDPOINT: string;
    static readonly ENDPOINT_URL_ENV_NAME: string;
    static readonly DOMAIN_NAME: string;
    private _url;
    url: string;
    constructor(config: ClientConfig);
}
