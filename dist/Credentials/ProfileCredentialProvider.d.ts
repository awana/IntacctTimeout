/**
 * @module Intacct/SDK/Credentials
 */
import ClientConfig from "../ClientConfig";
export default class ProfileCredentialProvider {
    static readonly DEFAULT_PROFILE_FILE: string;
    static readonly DEFAULT_PROFILE_NAME: string;
    static getLoginCredentials(config: ClientConfig): ClientConfig;
    static getSenderCredentials(config: ClientConfig): ClientConfig;
    static getHomeDirProfile(): string;
    private static profileFileExists;
    private static getIniProfileData;
}
