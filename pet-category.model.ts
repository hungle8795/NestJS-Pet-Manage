import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

export const PetCategoryTableName = "pet_categories";

@Entity()
export class PetCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}