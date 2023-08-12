import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "apivendas",
    synchronize: false,
    logging: true,
    migrations: [
        "src/shared/typeorm/migrations/*.ts"
    ],
    entities: []

})

export default AppDataSource;

