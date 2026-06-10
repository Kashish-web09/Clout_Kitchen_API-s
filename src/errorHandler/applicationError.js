

export class ApplicationError extends Error{
    constructor(errMessage,statusCode) {
                super(errMessage);

        this.statusCode=statusCode;
    }
    
}