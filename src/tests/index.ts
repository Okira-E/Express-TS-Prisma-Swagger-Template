import { Express } from 'express';

import systemUsersTest from './system-users.test';


const testApp = (app: Express) => {
    systemUsersTest(app);
};

export default testApp;
