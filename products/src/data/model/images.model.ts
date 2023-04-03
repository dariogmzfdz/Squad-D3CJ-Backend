import { STRING } from "sequelize";
import { Table, Column, Model, ForeignKey, BelongsTo, } from "sequelize-typescript";
import { Products } from "./product.model";

@Table({
    freezeTableName: true,
    tableName: "images",
    timestamps: false
})

export class Images extends Model {
    @Column({
        type: STRING,
        primaryKey: true,
    })
    imageId!: string;

    @ForeignKey(() => Products)
    @Column({
        field: "productId"
    })
    productId!: string;
    
    @BelongsTo(() => Products)
    product: Products;
    
    @Column({
        field: "path"
    })
    path!: string;

}