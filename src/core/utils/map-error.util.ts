import { AxiosError } from 'axios';
import {
  BadRequestError,
  UnAuthenticatedError,
  NotFoundError,
  TooManyRequestsError,
  NetworkError,
} from '@core/models';

export function mapAxiosError(error: AxiosError<any>) {
  if (!error.response) {
    return new NetworkError();
  } else {
    const status = error.response.status;
    const causeError = error.response.data;

    switch (status) {
      case 400:
        return new BadRequestError(causeError.message);
      case 401:
        return new UnAuthenticatedError();
      case 404:
        return new NotFoundError(causeError.message);
      case 429:
        return new TooManyRequestsError(causeError.message);
      default:
        return error;
    }
  }
}
