import * as express from 'express';

// Local imports
import { createOne, deleteOneById, getAll, getOneById, updateOneById } from '../controllers/system-users.controller';


const systemUsersRouter = express.Router();
const routeName = 'system-users';

systemUsersRouter.get(`/api/${routeName}`, getAll);
systemUsersRouter.get(`/api/${routeName}/:id`, getOneById);
systemUsersRouter.post(`/api/${routeName}`, createOne);
systemUsersRouter.patch(`/api/${routeName}/:id`, updateOneById);
systemUsersRouter.delete(`/api/${routeName}/:id`, deleteOneById);

export default systemUsersRouter;
