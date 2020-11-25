/**
 * @module Intacct/SDK/Xml/Response
 */
export default class Result {
    private _status;
    readonly status: string;
    private _functionName;
    readonly functionName: string;
    private _controlId;
    readonly controlId: string;
    private _data;
    readonly data: any[];
    private _listType;
    readonly listType: string;
    private _count;
    readonly count: number;
    private _totalCount;
    readonly totalCount: number;
    private _numRemaining;
    readonly numRemaining: number;
    private _resultId;
    readonly resultId: string;
    private _key;
    readonly key: string;
    private _start;
    readonly start: number;
    private _end;
    readonly end: number;
    private _errors;
    readonly errors: string[];
    constructor(result: object);
    ensureStatusSuccess(): void;
    ensureStatusNotFailure(): void;
}
