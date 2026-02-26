import {app} from "../src/app"
import { dataSource } from "./database";

dataSource.initialize().then(() => {
    app.listen(3333, ()=> console.log("Server is running!"));})