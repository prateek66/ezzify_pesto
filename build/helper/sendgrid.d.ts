import sgmail from "@sendgrid/mail";
export declare const sendMail: (otp: string, email: string) => Promise<Error | [sgmail.ClientResponse, {}]>;
