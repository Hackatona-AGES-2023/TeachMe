import { ErrorType } from "../../errors/error-type";
import { PHttpErrorHandler } from "../../port/http-error-handler-port";

export class HttpErrorHandler implements PHttpErrorHandler {
  handle(error: ErrorType, res: any): void {
    res.statusCode = error.statusCode || 500;
    res.json({ error: { message: error.message, errorCode: error.errorCode } });
  }
}
