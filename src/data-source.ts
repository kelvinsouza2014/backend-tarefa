import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
type: "postgres",
host: "mahmud.db.elephantsql.com",
port: 5432,
username: "nwwaukfs",
password: "RfoAC1pexWS_hcVdCqPFuJEiQhFkczBD",
database: "nwwaukfs",
synchronize: true,
logging: false,
entities: [User],
migrations: [],
subscribers: [],
});