import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "apivendas",
    synchronize: true,
    logging: false,
    migrations: [
        "src/shared/typeorm/migrations/*.ts"
    ],

})

