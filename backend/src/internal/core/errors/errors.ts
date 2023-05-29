import { ErrorType } from "./error-type";

export class TrailNotFoundError extends ErrorType {
  constructor(message: string) {
    super(message, 404, 1);
  }
}

export class AIError extends ErrorType {
  constructor(message: string) {
    super(message, 500, 2);
  }
}

export class ValidationError extends ErrorType {
  constructor(message: string) {
    super(message, 400, 3);
  }
}
