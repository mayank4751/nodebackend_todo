import { app } from "./app.js";
import { connecdb } from "./data/database.js";
import { config } from 'dotenv';

config();

connecdb();

app.listen(process.env.port, () => {
    console.log("server listening on", process.env.port)
})