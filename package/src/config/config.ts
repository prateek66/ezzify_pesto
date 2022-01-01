import "dotenv/config";

const { MONGO_CONNECTION_STRING, MONGO_PASSWORD, PORT, ENCRYPTION_KEY, ENVIRONMENT } = process.env;

const config = {
  MONGO_CONNECTION_STRING,
  MONGO_PASSWORD,
  PORT,
  ENCRYPTION_KEY,
  ENVIRONMENT,
};

export default config;
