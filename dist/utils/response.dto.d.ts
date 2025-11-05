export declare class ResponseDto<T> {
    status: number;
    message: string;
    response: T;
    constructor(status: number, message: string, response: T);
}
