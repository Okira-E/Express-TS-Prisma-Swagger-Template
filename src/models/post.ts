import { Column, CreatedAt, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript';
import User from './user';

@Table
class Post extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id?: number;

    @ForeignKey(() => User)
    @Column({
        allowNull: false,
    })
    userId?: number;

    @Column({
        allowNull: false,
    })
    title?: string;

    @Column({
        allowNull: false,
        unique: true,
    })
    content?: string;

    @CreatedAt
    creationDate?: Date;

    @UpdatedAt
    updatedOn?: Date;

    @DeletedAt
    deletionDate?: Date;
}

export default Post;