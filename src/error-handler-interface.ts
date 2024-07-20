export interface IErrorResponse {
    message: string;
    statusCode: number;
    status: string;
    comingFrom: string;
    serializeErrors(): IError;
}

export interface IError {
    message: string;
    statusCode: number;
    status: string;
    comingFrom: string;
}

export interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
}
