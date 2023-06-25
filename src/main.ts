import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import systemUsersRouter from './routes/system-users.router';
import GlobalRequestHandlers from './handlers/request-handlers';
import testApp from './tests';


// -- Express initialization.
const app = express();
app.set('trust proxy', true);


// -- Express middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));


// -- Prisma Client initialization.
export const prismaClient = new PrismaClient();
prismaClient.$connect().then(() => {
    console.log('Connected to the database.');
}).catch((error) => {
    console.error('Error while initializing Prisma Client: ', error);
    process.exit(1);
});


// -- Only in development. Logs useful information about every request before serving it.
if (process.env.ENVIRONMENT === 'DEV') {
    app.all('*', GlobalRequestHandlers.requestLogger);
}


// -- Catches any POST/PATCH/PUT requests that have an empty body.
app.all('*', GlobalRequestHandlers.requestBodyChecker);


// -- User defined routers START
app.use(systemUsersRouter);
// -- User defined routers END


// -- Swagger UI setup.
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Express.js - TypeScript - Prisma ORM - REST API Boilerplate',
            version: '1.0.0',
            description: 'Express.js REST API with TypeScript and Prisma ORM.',
            contact: {
                name: 'Omar Rafat',
                url: 'https://company.com',
                email: 'company.mail@email.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3200',
            },
        ],
    },
    apis: ['./dist/src/controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

// -- Catches unmatched APIs and sends back a 404. Must be the last route.
app.all('*', GlobalRequestHandlers.notFoundRouter);


// -- Setup testing on "npm run test".
const test = () => {
    testApp(app);
}

// -- Start the server.
const start = () => {
    const port = Number(process.env.PORT) || 3200;
    app.listen(port, () => {
        process.env.ENVIRONMENT ?
            console.log('Server started at: ' + port + ' in ' + process.env.ENVIRONMENT) :
            console.log('Server started at: ' + port);
    });
};


if (process.argv.at(2) === 'test') {
    test();
} else {
    start();
}
