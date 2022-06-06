import HttpError from "../models/http-error.js";

const notFound = (req, res,next) => {
    const error = new HttpError('حصل خطا ما 404' , 404);
    return next(error);
}

export default notFound;