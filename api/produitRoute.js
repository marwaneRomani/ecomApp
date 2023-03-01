import ProduitService from "../services/produitService.js";

export default app => {

    const produitService = new ProduitService();

    app.get("/produit", async (req, res, next) => {
        try { 
            const produits = await produitService.getAllProduits();
            
            res.status(200).send({ message: "success", produits });
        }
        catch(error) {
            next(error);
        }
    })

    app.get("/produit/:code", async (req, res, next) => {
        try {
            const { code } = req.body;
            const produit = produitService.getProduit({ code });
            
            res.status(200).send({ message: "success", produit })

        } catch (error) {
            next(error)
        }
    });


    app.post("/produit", async (req, res, next) => {
        try {
            const { code, libelle, prix } = req.body;

            const produit = produitService.saveProduit({ code, libelle, prix });

            res.status(200).send({ message: "produit enregistrer", produit })

        } catch (error) {
            next(error)
        }  
    })

}

