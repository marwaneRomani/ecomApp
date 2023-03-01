import { ErrorResponse } from "../../utils/ErrorResponse.js";
import { default as Panier } from "../models/panier.model.js";

export default class PanierRepository {

    async savePanier({ userId }) {
        let foundedPanier = await Panier.find({ user: userId });    
        
        if (foundedPanier) {
            throw new ErrorResponse("panier already created");
        }
        
    }
    
    async addProductToPanier({ produitId }) {
    
    }
    async checkOut({ produitId }) {

    }
}