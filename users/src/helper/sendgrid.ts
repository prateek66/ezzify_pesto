// this should be move to package common

import sgmail from "@sendgrid/mail";

export const sendMail = async (otp: string,email: string) => {
    sgmail.setApiKey('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');  // this need to be in .env


    const message = {
        to: email,
        from: {
            name: "Ezzify",
            email: "uraan.prateek@gmail.com"   //move to .env
        },
        subject: 'Verify OTP',
        text: 'This is your OTP please verify yourself',
        html: `<h1>This is your OTP - ${otp}</h1>`
    };

    const sendmail = await sgmail.send(message);
    if (sendmail) {
        return sendmail
    }
    else return new Error('something went wrong!!');
    
}