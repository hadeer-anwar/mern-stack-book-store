class AppError extends Error {
    constructor(){
        super();
    }

    Create(message,statusCode,statusText){
        this.message=message;
        this.statusCode=statusCode;
        this.statusText=statusText;
    }
}
export default new AppError();
