import HttpError from "../models/http-error.js";
const errorMiddleware = (err, req, res, next)=>{
    if(err.headersSent){
        return next(err);
    }
    res.status(err.code || 333);
    res.json({message: err.message || 'حصل خطأ ما'});
}

export default errorMiddleware;