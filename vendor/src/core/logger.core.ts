import express from "express";
import axios from "axios";
import fs from "fs";
import path from "path";
import getmac from "getmac";
import { ExternalApis } from "../config";

const moment = require("moment");

export class Logger {
  constructor(
    private response: express.Response,
    private request: express.Request,
    private statusCode: string,
    private status: number,
    private clientResponse: any
  ) {
    this._createLog();
  }

  private _createLog = async () => {
    // CREATING LOGS IN LOCAL DIRECTORY
    const formatted_date = moment(new Date()).format("YYYY-MM-DD kk:mm:ss.SSS");
    const method = this.request.method;
    const url = this.request.protocol + "://" + this.request.get("host") + this.request.originalUrl;
    const status = this.statusCode;

    const duration = Date.now() - +this.response.get("start");
    const log = `[${formatted_date}] ${method}:${url} ${status} ${this.status} ${duration}ms`;

    this.generateLogFile(log, this.status);

    // CREATING LOGS IN DATABASE
    if (this.status.toString().startsWith("2")) {
      const transactionsDetails = {
        body: this.request.body,
        query: this.request.query,
      };

      const activityLogDetails = {
        activityDateTime: formatted_date,
        deviceDetails: getmac(),
        method,
        endPoint: url,
        status: +status,
        statusCode: +this.status,
        responseTime: `${duration}ms`,
        transactionsDetails: JSON.stringify(transactionsDetails),
      };

      if (this.request.originalUrl !== "/ezzify/api/v1/logs/activityLogs" && this.request.originalUrl !== "/ezzify/api/v1/logs/errorActivityLogs") {
        await this._insertLogInDB(activityLogDetails);
      }
    }

    if (!this.status.toString().startsWith("2")) {
      const transactionsDetails = {
        body: this.request.body,
        query: this.request.query,
      };

      const errorLogDetails = {
        activityDateTime: formatted_date,
        deviceDetails: getmac(),
        errorMethod: method,
        endPoint: url,
        errorCode: +status,
        statusCode: +this.status,
        responseTime: `${duration}ms`,
        errorDetails: this.clientResponse.message,
        transactionsDetails: JSON.stringify(transactionsDetails),
      };

      if (this.request.originalUrl !== "/ezzify/api/v1/logs/activityLogs" && this.request.originalUrl !== "/ezzify/api/v1/logs/errorActivityLogs") {
        await this._insertErrorLogInDB(errorLogDetails);
      }
    }
  };

  private generateLogFile = (log: string, status: number) => {
    let dir = "logs";
    let fileName = status.toString().startsWith("2") ? "success_logs.log" : "error_log.log";

    if (!dir) dir = path.resolve("logs");

    // create directory if it is not present
    if (!fs.existsSync(dir)) {
      // Create the directory if it does not exist
      fs.mkdirSync(dir);
    }

    fs.appendFile(`${dir}/${fileName}`, log + "\n", (err) => {
      if (err) console.log(err);
    });
  };

  private _insertLogInDB = (log: any) => {
    return new Promise((resolve, reject) => {
      axios
        .post(ExternalApis.ACTIVITY_LOG, log)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  private _insertErrorLogInDB = (log: any) => {
    return new Promise((resolve, reject) => {
      axios
        .post(ExternalApis.ERROR_LOG, log)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
