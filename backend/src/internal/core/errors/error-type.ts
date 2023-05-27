export class ErrorType extends Error {
  statusCode: number;
  message: string;
  errorCode: number;
  constructor(message: string, statusCode: number, errorCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.message = message;
  }
}
