import PanierRepository from "../database/repository/panier.repository";

export default class PanierService {
    
    constructor() {
        this.repository = new PanierRepository();
    }

    async createPanier({ userId }) {    
        this.repository.savePanier({ userId });
    }
    
    async addProductToPanier({ produitId }) {    
        this.repository.addProductToPanier({ produitId });
    }

    async checkOut({ idPanier }) {    
        this.repository.addProductToPanier({ produitId });
    }


}