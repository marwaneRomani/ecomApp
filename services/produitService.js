import ProduitRepository from "../database/repository/produi.repository.js";


export default class ProduitService {


    constructor(){
        this.repository = new ProduitRepository();
    }

    async getAllProduits() {
        const produits  = this.repository.findAllProduit();
    
        return produits;
    }

    async saveProduit({ code, label, price }) {
        this.repository.saveProduit({ code, label, price });
    }

    getProductByCode(code) {
        
    }
}