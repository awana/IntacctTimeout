import AbstractResponse from "./AbstractResponse";
export default class OfflineResponse extends AbstractResponse {
    private _status;
    readonly status: string;
    constructor(body: string);
}
