export default class MessageFormatter {
    static readonly clf: string;
    static readonly debug: string;
    static readonly short: string;
    static maskSensitiveData(msg: any, meta: any): {
        msg: any;
        meta: any;
    };
    private static headers(headers);
    private template;
    constructor(formatTemplate?: string);
    format(response: any, error?: Error): string;
}
