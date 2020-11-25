/**
 * @module Intacct/SDK/Xml/Response
 */
export default class ErrorMessage {
    private _errors;
    errors: string[];
    constructor(errorMessages: object);
    private combineErrorMessageElements;
}
