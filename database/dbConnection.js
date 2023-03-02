import mysql from "mysql";
import { config } from "dotenv";

config();

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.dbName
  });


const connect =  async () => {
    try {                  
        connection.connect();
    } catch (error) {
        console.log(error.message);
    }
}

export {
    connect,
    connection
}