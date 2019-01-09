export default class Control {
    private _status;
    readonly status: string;
    private _senderId;
    readonly senderId: string;
    private _controlId;
    readonly controlId: string;
    private _uniqueId;
    readonly uniqueId: string;
    private _dtdVersion;
    readonly dtdVersion: string;
    constructor(control: object);
}
