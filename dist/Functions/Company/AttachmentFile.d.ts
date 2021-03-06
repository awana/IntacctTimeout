import IaXmlWriter from "../../Xml/IaXmlWriter";
import IXmlObject from "../../Xml/IXmlObject";
export default class AttachmentFile implements IXmlObject {
    extension: string;
    fileName: string;
    private _filePath;
    filePath: string;
    writeXml(xml: IaXmlWriter): void;
}
