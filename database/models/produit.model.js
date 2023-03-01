import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    desc: String,
    price: Number
});

const Produit = model('produit', ProductSchema);

export default Produit;