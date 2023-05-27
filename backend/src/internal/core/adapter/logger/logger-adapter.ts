import { PLogger } from "../../port/logger-port";

export class ALogger implements PLogger {
  info(message: any): void {
    message = { severity: "info", ...message };
    console.log(JSON.stringify(message));
  }
  error(message: any): void {
    message = { severity: "error", ...message };
    console.log(JSON.stringify(message));
  }
  warn(message: any): void {
    message = { severity: "warn", ...message };
    console.log(JSON.stringify(message));
  }
  debug(message: any): void {
    if (process.env.DEBUG == "true") {
      message = { severity: "debug", ...message };
      console.log(JSON.stringify(message));
    }
  }
}
