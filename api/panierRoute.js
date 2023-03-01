import PanierService from "../services/panierService.js";


export default app => {
    const panierService = new PanierService();

    app.get("/panier/:id", (req, res, next) => {

    })

    app.post("/panier", (req, res, next) => {
        
    })


    // add product to a cart
    app.post("/panier/add-to-cart/:produitId", (req, res, next) => {
        const { produitId } = req.params;
        panierService.addProductToPanier({ produitId });
    })

    // check out
    app.post("/panier/:panierId/check-out", (req, res, next) => {
        const { panierId } = req.params;
        panierService.checkOut({ panierId });
    })

}