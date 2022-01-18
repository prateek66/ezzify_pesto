import dotEnv from "dotenv";
const configFile = `../.env`;
  dotEnv.config({ path: configFile });
const config = {
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  MONGO_PASSWORD: "root",
  ENCRYPTION_KEY: "EZZIFY-PESTO",
  ENVIRONMENT: "DEV",
  SENDGRID_API_KEY: "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",
  SENDGRID_SENDER_EMAIL: "kawthekar56@gmail.com",
   ACCESS_KEY_S3: "AKIARZJEKPRNBYIF5LMJ", 
  SECRET_KEY_S3: "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",
  AWS_REGION: "ap-south-1",
  AWS_BUCKET: "ezzifypesto"

};

export default config;
