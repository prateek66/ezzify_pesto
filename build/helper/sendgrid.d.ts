import sgmail from "@sendgrid/mail";
export declare const sendMail: (otp: string, email: string, SENDGRID_API_KEY: string, SENDGRID_SENDER_EMAIL: string) => Promise<Error | [sgmail.ClientResponse, {}]>;
