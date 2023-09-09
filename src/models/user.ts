import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt, DeletedAt, DataType } from 'sequelize-typescript';
import Post from './post';

@Table
class User extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id?: number;

    @Column({
        allowNull: false,
    })
    name?: string;

    @Column({
        allowNull: false,
        unique: true,
    })
    email?: string

    @HasMany(() => Post)
    posts?: Post[];

    @CreatedAt
    creationDate?: Date;

    @UpdatedAt
    updatedOn?: Date;

    @DeletedAt
    deletionDate?: Date;
}

export default User;