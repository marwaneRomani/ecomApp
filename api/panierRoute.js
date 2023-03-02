import PanierService from "../services/panierService.js";
import ProduitService from "../services/produitService.js";


export default app => {
    const panierService = new PanierService();
    const productService = new ProduitService();


    app.post('/api/:idPanier/add', (req, res) => {
        const { idPanier } = req.params;
        
        //find the cart
        const panier = panierService.findCart({ idCart: idPanier });

        const { productCode, quantity } = req.body;
        // TODO: Validate productCode and quantity
      
        // Get product price from database
        const product = productService.getProductByCode(productCode);
        const price = product.price;
      
        // Add product to cart object
        let prod =  panierService.findProductInCart(productCode);
        
        if (prod) 
            panierService.updateProductQuantity({idCart: idPanier , idProduct: productCode });
        else 
            panierService.addProductToPanier({ produitId: productCode })
        
      
        // Return updated cart object
        res.status(200).send({ message: "product added to cart" });
      });
      


      // checkout
      app.post('/api/:idPanier/checkout', async (req, res) => {
        // Calculate total and discounts
        const { total, discountAmount } =  panierService.calculateTotal();
      
        // Return total and discounts applied
        res.json({ total, discountAmount });
      });
      
}