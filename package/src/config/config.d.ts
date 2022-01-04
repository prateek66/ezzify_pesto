import "dotenv/config";
declare const config: {
    MONGO_CONNECTION_STRING: string | undefined;
    MONGO_PASSWORD: string | undefined;
    PORT: string | undefined;
    ENCRYPTION_KEY: string | undefined;
    ENVIRONMENT: string | undefined;
};
export default config;
