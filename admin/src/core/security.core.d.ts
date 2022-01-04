import "dotenv/config";
export declare class Security {
    static encryption: (body: any) => string;
    static decryption: (body: any) => any;
}
