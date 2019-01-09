import Control from "./Response/Control";
export default abstract class AbstractResponse {
    protected _xml: object;
    readonly xml: object;
    private _control;
    readonly control: Control;
    constructor(body: string);
}
