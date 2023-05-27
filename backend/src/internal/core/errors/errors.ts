import { ErrorType } from "./error-type";

export class TrailNotFoundError extends ErrorType {
  constructor(message: string) {
    super(message, 404, 1);
  }
}
