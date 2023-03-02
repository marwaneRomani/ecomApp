import ProduitService from "../services/produitService.js";

export default app => {

    const products = [
        {
          code: 'PR1',
          label: 'Camera',
          price: 14000
        },
        {
          code: 'PR2',
          label: 'Booth',
          price: 800
        },
        {
          code: 'PR3',
          label: 'Cable',
          price: 700
        }
      ];

    const produitService = new ProduitService();

    app.post("/api/produit", (req, res, next) => {
        // TODO: get the product info from req.body
        
        for (const product of products) {
            produitService.saveProduit(product);
        }
    })

}

