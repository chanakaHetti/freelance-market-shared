import { StatusCodes } from 'http-status-codes';

import { IError } from './error-handler-interface';

abstract class CustomError extends Error {
    abstract statusCode: number;
    abstract status: string;
    comingFrom: string;

    constructor(message: string, comingFrom: string) {
        super(message);
        this.comingFrom = comingFrom;
    }

    serializeErrors(): IError {
        return {
            message: this.message,
            statusCode: this.statusCode,
            status: this.status,
            comingFrom: this.comingFrom,
        };
    }
}

class BadRequestError extends CustomError {
    statusCode = StatusCodes.BAD_REQUEST;
    status = 'error';

    constructor(message: string, comingFrom: string) {
        super(message, comingFrom);
    }
}

class NotFoundError extends CustomError {
    statusCode = StatusCodes.NOT_FOUND;
    status = 'error';

    constructor(message: string, comingFrom: string) {
        super(message, comingFrom);
    }
}

class NotAuthorizedError extends CustomError {
    statusCode = StatusCodes.UNAUTHORIZED;
    status = 'error';

    constructor(message: string, comingFrom: string) {
        super(message, comingFrom);
    }
}

class FileTooLargeError extends CustomError {
    statusCode = StatusCodes.REQUEST_TOO_LONG;
    status = 'error';

    constructor(message: string, comingFrom: string) {
        super(message, comingFrom);
    }
}

class ServerError extends CustomError {
    statusCode = StatusCodes.SERVICE_UNAVAILABLE;
    status = 'error';

    constructor(message: string, comingFrom: string) {
        super(message, comingFrom);
    }
}

module.exports = {
    CustomError,
    BadRequestError,
    NotFoundError,
    NotAuthorizedError,
    FileTooLargeError,
    ServerError,
};
