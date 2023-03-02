import { ErrorResponse } from "../../utils/ErrorResponse.js";
import { connection } from "../dbConnection.js";

export default class ProduitRepository {
    
    async saveProduit({ code, libelle, prix }) {
     
        connection.query('INSERT INTO products SET ?', { code, libelle, prix }, 
                        (error, results, fields) => {
                            if (error) throw new ErrorResponse("failded try later.",500)
                        })
        }
    }