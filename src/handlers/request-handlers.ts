import { NextFunction, Request, Response } from 'express';

/**
 * Logs the request method, IP, path and body (if any) to the console.
 * @param request {Request}
 * @param response {Response}
 * @param next {NextFunction}
 */
const requestLogger = async (request: Request, response: Response, next: NextFunction) => {
    let loggingStr: string;

    loggingStr = `- ${request.method} from IP ${request.ip} at ${request.path}`;
    if (request.method !== 'GET' && request.body) {
        // Here we can filter out sensitive information from the logs.
        if (request.body.password) {
            request.body.password = '*****';
        }

        loggingStr += ` with Body: ${JSON.stringify(request.body)}`;
    }

    console.log(loggingStr);
    next();
};

/**
 * Sends back a 404 response if the route does not exist.
 * @param request {Request}
 * @param response {Response}
 */
const notFoundRouter = async (request: Request, response: Response) => {
    response.status(404).send({
        message: 'Route does not exist on this server.',
    });
};

/**
 * Middleware to check if the request body is empty for POST/PATCH/PUT requests.
 * @param request {Request}
 * @param response {Response}
 * @param next {NextFunction}
 */
const requestBodyChecker = (request: Request, response: Response, next: NextFunction) => {
    if (['POST', 'PATCH', 'PUT'].includes(request.method) && !request.body) {
        response.status(400).send({
            message: 'Request body is empty.',
        });
    }

    next();
};

const globalRequestHandlers = {
    requestLogger,
    notFoundRouter,
    requestBodyChecker,
};

export default globalRequestHandlers;
