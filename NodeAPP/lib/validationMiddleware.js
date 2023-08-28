const {validationResult, checkSchema } = require('express-validator');
export const validationMiddleware = (res, req) => {
    return () => {
        checkSchema(),
        validationResult()
    }
}

