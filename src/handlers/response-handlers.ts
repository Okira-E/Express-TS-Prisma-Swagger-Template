import { Response } from 'express';
import ErrorResponse from '../types/error-response';
import SuccessResponse from '../types/success-response';

/**
 * Sends back a unified error response.
 * @param res {Response}
 * @param errBody {ErrorResponse}
 */
export const Err = (res: Response, errBody: ErrorResponse) => {
    return res.status(errBody.code || 500).json(errBody);
};

/**
 * Sends back a unified success response.
 * @param res {Response}
 * @param successBody {SuccessResponse}
 */
export const Ok = (res: Response, successBody: SuccessResponse) => {
    return res.status(successBody.code).json(successBody);
};
