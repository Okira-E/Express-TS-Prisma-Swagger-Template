import request from 'supertest';
import { Express } from 'express';
import { logError, logSuccess } from './utils';

const systemUsersTest = (app: Express) => {
    request(app)
        .get('/api/system-users')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end((err, _res) => {
            if (err) {
                logError('\nGET /api/system-users failed.');

                if (err.message) {
                    console.error(err.message);
                } else {
                    console.error(err);
                }

                return;
            }

            logSuccess('\nGET /api/system-users passed.');
        });

    request(app)
        .post('/api/system-users')
        .send({
            name: 'Test User',
            email: 'test@domain.com',
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end((err, _res) => {
                if (err) {
                    logError('\nPOST /api/system-users failed.');

                    if (err.message) {
                        console.error(err.message);
                    } else {
                        console.error(err);
                    }

                    return;
                }

                logSuccess('\nPOST /api/system-users passed.');
            },
        );
};

export default systemUsersTest;
