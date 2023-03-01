import express from "express";
import { errorHandler } from "./api/middlewares/error.middleware.js"; 
import { orderRoute, panierRoute, produitRoute, userRoute } from "./api/index.js";


export default async app => {
    
   // read chunks and set the request body 
    app.use(express.json());
    
    //apis
    userRoute(app);
    produitRoute(app);
    orderRoute(app);
    panierRoute(app);

    
    // error handling
    app.use(errorHandler);
}