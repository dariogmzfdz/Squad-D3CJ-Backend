import { STRING } from "sequelize";
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript'
import { Cars } from './car.model'


@Table({
    freezeTableName: true,
    tableName: "comments",
    timestamps: false
})

export class Comments extends Model {
    @Column({
        type: STRING,
        primaryKey: true,
    })
    commentId!: string;

    @Column({
        field: "userId"
    })
    userId!: string;

    @ForeignKey(() => Cars)
    @Column({
        field: "carId"
    })
    carId!: string;

    @BelongsTo(() => Cars)
    car: Cars;

    @Column({
        field: "comment"
    })
    comment!: string;
}