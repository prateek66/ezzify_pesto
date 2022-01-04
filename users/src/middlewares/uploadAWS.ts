import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

// common package
AWS.config.update({
  accessKeyId: "AKIARZJEKPRNBYIF5LMJ",                                    //ENV 
  secretAccessKey: "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",
  region: "ap-south-1",
});
const s3 = new AWS.S3();
console.log(s3);

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "ezzifypesto",
    key: function (req, file, cb) {
   //   console.log(file);
      cb(null, file.originalname);                         //
    },
  }),
});