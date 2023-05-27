import { ErrorType } from "../errors/error-type";

export interface PHttpErrorHandler {
  handle(error: ErrorType, res): void;
}
