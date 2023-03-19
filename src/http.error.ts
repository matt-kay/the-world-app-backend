import { AxiosError } from 'axios';

export class HTTPErrorResponseHandler {
  private typename: string;
  private httpResponseError: AxiosError;
  constructor(typename: string, httpResponseError: AxiosError) {
    this.typename = typename;
    this.httpResponseError = httpResponseError;
  }

  getErrorMessage() {
    const isErrorMessageAnArray =
      //@ts-ignore
      typeof this.httpResponseError.response.data.message === 'string'
        ? false
        : true;

    if (isErrorMessageAnArray) {
      return {
        __typename: this.typename,
        status: 'error',
        //@ts-ignore
        message: this.httpResponseError.response.data.message.join(','),
      };
    } else {
      return {
        __typename: this.typename,
        status: 'error',
        //@ts-ignore
        message: this.httpResponseError.response.data.message,
      };
    }
  }
}
