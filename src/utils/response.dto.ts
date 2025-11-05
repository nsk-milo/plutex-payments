export class ResponseDto<T> {
  status: number;
  message: string;
  response: T;

  constructor(status: number, message: string, response: T) {
    this.status = status;
    this.message = message;
    this.response = response;
  }
}
