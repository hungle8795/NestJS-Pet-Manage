import { DataTypes, Sequelize } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

export const PetCategoryTableName = 'pet_categories';

@Table({
  tableName: PetCategoryTableName,
})
export class PetCategory extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  name: string;

//   @Column({
//     type: DataTypes.DATE,
//     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//     allowNull: false
//   })
//   createdAt!: Date;

//   @Column({
//     type: DataTypes.DATE,
//     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//     allowNull: false
//   })
  updatedAt!: Date;
}