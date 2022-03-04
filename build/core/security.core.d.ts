import "dotenv/config";
declare class Security {
    static encryption: (body: any) => string;
    static decryption: (body: any) => any;
}
export default Security;
