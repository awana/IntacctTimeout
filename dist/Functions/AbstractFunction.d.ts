import IaXmlWriter from "../Xml/IaXmlWriter";
import IFunction from "./IFunction";
export default abstract class AbstractFunction implements IFunction {
    protected _controlId: string;
    controlId: string;
    constructor(controlId?: string);
    abstract writeXml(xml: IaXmlWriter): void;
}
