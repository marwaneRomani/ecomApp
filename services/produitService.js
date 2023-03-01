import ProduitRepository from "../database/repository/produi.repository.js";


export default class ProduitService {


    constructor(){
        this.repository = new ProduitRepository();
    }

    async getAllProduits() {
        const produits  = this.repository.findAllProduit();
    
        return produits;
    }

    async getProduit({ code }) {
        const produit  = this.repository.findProduit({ code });
    
        return produit;
    }

    async saveProduit({ code, libelle, prix }) {
        this.repository.saveProduit({ code, libelle, prix });
    }
}