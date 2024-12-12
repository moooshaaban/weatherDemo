export class BadRequestError extends Error {}

export class UnAuthenticatedError extends Error {}

export class NotFoundError extends Error {
  public errorMap: {[param: string]: string; message: string};
  constructor(message, errorMap?) {
    super(message);
    this.errorMap = errorMap;
  }
}

export class TooManyRequestsError extends Error {}

export class NetworkError extends Error {}
