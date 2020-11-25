/**
 * @module Intacct/SDK/Xml/Response
 */
export default class Authentication {
    private _status;
    readonly status: string;
    private _userId;
    readonly userId: string;
    private _companyId;
    readonly companyId: string;
    private _entityId;
    readonly entityId: string;
    constructor(authentication: object);
}
