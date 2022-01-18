declare const config: {
    MONGO_CONNECTION_STRING: string | undefined;
    MONGO_PASSWORD: string;
    ENCRYPTION_KEY: string;
    ENVIRONMENT: string;
    SENDGRID_API_KEY: string;
    SENDGRID_SENDER_EMAIL: string;
    ACCESS_KEY_S3: string;
    SECRET_KEY_S3: string;
    AWS_REGION: string;
    AWS_BUCKET: string;
};
export default config;
