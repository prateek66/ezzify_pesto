import CryptoJS from "crypto-js";
import { ENCRYPTION_KEY, StatusCode } from "../config";

export class Security {
  public static encryption = (body: any) => {
    return CryptoJS.AES.encrypt(JSON.stringify(body), ENCRYPTION_KEY).toString();
  };

  public static decryption = (body: any) => {
    try {
      const bytes = CryptoJS.AES.decrypt(body, ENCRYPTION_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
      return StatusCode.INVALID_ENCRYPTED_INPUT;
    }
  };
}
