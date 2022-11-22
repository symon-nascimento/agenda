import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost" //"host.docker.internal",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "agenda",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
