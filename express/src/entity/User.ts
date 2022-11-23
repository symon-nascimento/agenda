import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm"

@Entity()
@Unique(['phoneNumber'])
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string
    
    @Column()
    phoneNumber: string

    @Column()
    street: string

    @Column()
    zipCode: string

}
