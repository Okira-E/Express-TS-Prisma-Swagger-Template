import { Request, Response } from 'express';

import { prismaClient } from '../main';
import { Err, Ok } from '../handlers/response-handlers';


/**
 * @swagger
 * /api/system-users:
 *  get:
 *   description: Returns all entries in the system_users table.
 *   responses:
 *    '200':
 *     description: All system users returned.
 */
export async function getAll(req: Request, res: Response) {
    const systemUsers = await prismaClient.users.findMany();
    if (!systemUsers) {
        return Err(res, {
            msg: 'No system users found.',
            code: 404,
        });
    }

    return Ok(res, {
        msg: 'All system users.',
        code: 200,
        data: systemUsers,
    });
}

/**
 * @swagger
 * /api/system-users/{id}:
 *  get:
 *   description: Returns a single entry from the system_users table.
 *   parameters:
 *   - in: path
 *     name: id
 *   responses:
 *    '200':
 *     description: System user found.
 */
export async function getOneById(req: Request, res: Response) {
    const userId = Number(req.params.id);

    if (isNaN(Number(userId))) {
        return Err(res, {
            msg: 'System user ID must be a number.',
            code: 400,
        });
    }

    const user = await prismaClient.users.findUnique({
        where: {
            id: Number(userId),
        },
    });

    if (!user) {
        return Err(res, {
            msg: 'System user not found.',
            code: 404,
        });
    }

    return Ok(res, {
        msg: 'System user found.',
        code: 200,
        data: user,
    });
}

/**
 * @swagger
 * /api/system-users:
 *  post:
 *   description: Creates a new entry in the system_users table. Takes object of system_users table schema as body.
 *   parameters:
 *   - in: body
 *     schema:
 *     type: object
 *   responses:
 *    '201':
 *     description: System user created.
 */
export async function createOne(req: Request, res: Response) {
    try {
        const newUser = await prismaClient.users.create({
            data: {
                name: req.body.name,
                email: req.body.email,
            },
        });

        return Ok(res, {
            msg: 'New system user created.',
            code: 201,
            data: newUser,
        });

    } catch (err) {
        return Err(res, {
            msg: 'Error while creating new system user.',
            code: 400,
            error: err,
        });
    }
}

/**
 * @swagger
 * /api/system-users:
 *  patch:
 *   description: Updates an entry in the system_users table. Takes object of system_users table schema as body.
 *   parameters:
 *   - in: body
 *     schema:
 *     type: object
 *   responses:
 *    '200':
 *     description: System user updated.
 */
export async function updateOneById(req: Request, res: Response) {
    const userId = Number(req.params.id);

    if (isNaN(Number(userId))) {
        return Err(res, {
            msg: 'System user ID must be a number.',
            code: 400,
        });
    }

    try {
        const updatedUser = await prismaClient.users.update({
            where: {
                id: Number(userId),
            },
            data: {
                ...req.body,
            },
        });

        return Ok(res, {
            msg: 'System user updated.',
            code: 200,
            data: updatedUser,
        });

    } catch (err) {
        return Err(res, {
            msg: 'Error while updating system user.',
            code: 400,
            error: err,
        });
    }
}

/**
 * @swagger
 * /api/system-users:
 *  delete:
 *   description: Deletes an entry in the system_users table.
 *   parameters:
 *   - in: path
 *     name: id
 *   responses:
 *    '200':
 *     description: System user deleted.
 */
export async function deleteOneById(req: Request, res: Response) {
    const userId = Number(req.params.id);

    if (isNaN(Number(userId))) {
        return Err(res, {
            msg: 'System user ID must be a number.',
            code: 400,
        });
    }

    try {
        const deletedUser = await prismaClient.users.delete({
            where: {
                id: Number(userId),
            },
        });

        return Ok(res, {
            msg: 'System user deleted.',
            code: 200,
            data: deletedUser,
        });

    } catch (err) {
        return Err(res, {
            msg: 'Error while deleting system user.',
            code: 400,
            error: err,
        });
    }
}
