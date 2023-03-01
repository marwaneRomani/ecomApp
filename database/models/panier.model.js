import { Schema, model } from "mongoose";

const PanierSchema = new Schema({
    user:  {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    orders: [
        {        
            type: Schema.Types.ObjectId,
            ref: 'order'
        }
    ]
});

const Panier = model('panier', PanierSchema);

export default Panier;