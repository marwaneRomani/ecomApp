import PanierRepository from "../database/repository/panier.repository";
import ProduitService from "./produitService.js";

export default class PanierService {
    

    constructor() {
        this.repository = new PanierRepository();
        this.productService = new ProduitService();
    }

    createPanier({ userId }) {    
        this.repository.savePanier({ userId });
    }
    
    addProductToPanier({ produitId }) {    
        this.repository.addProductToPanier({ produitId });
    }

    checkOut({ panierId }) {    
        this.repository.checkOut({ produitId });
    }

    findProductInCart({ idProduct }) {

    }

    findAllProductsInCart({ idCart }) {

    }


    findCart({ idCart }) {
        
    }

    updateProductQuantity({ idCart, idProduct }) {

    }

    calculateTotal({ idCart }) {
        let total = 0;
        let discountAmount = 0;
        
        let cart = this.findCart({ idCart });

        // get all products of the cart

        let products = []
        for (const product in cart) {
            for(let i = 0; i < product.quantity; i++)
                products.push(this.productService.getProductByCode(product.code)); 
        }  
        
        let stands = products.filter(product => product.label == "stands");
        let cameras = products.filter(product => product.label == "Caméra");

        // -Si le panier contient et un Stand un Cable est offert gratuitement
        if (stands) {
            this.repository.addProductToPanier({ produitId: "PR3" });
            products.push({ code: "PR3", label: "cable", price: 0 })
            
            // TODO: find cable price from db and add it to discount instead of plain 700
            discountAmount += 700;
        } 

        // -Si le panier contient une Caméra et un stand le stand doit subir une réduction de 60%
        if (stands && cameras) {
            stands.forEach((stand, index) => {
                if (index < cameras.length) {
                    discountAmount + stands[i].price * 0.4;
                    stand.price *= 0.6;    
                }
            })
        }
        // -Si le panier contient 3 stands le 3eme Stand doit subir une réduction de 30%
        if (stands.length > 2) {
            let discountForStands = stands.length % 3;

            for (let i = 0; i < discountAmount; i++) {
                discountAmount + stands[i].price * 0.3;
                stands[i].price *= 0.7;
            }
        }

        // calcumate the total 

        products.forEach(product => total += product.price)

        return { total, discountAmount };    
    }
}