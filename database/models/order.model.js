import { Schema, model } from "mongoose";


const OrderSchema = new Schema({
    orderId: String,
    customerId: String,
    quantity: Number,
    
    produuit: [
        { 
                type: Schema.Types.ObjectId,
                ref: 'produit',
        }    
    ]
})

const Order = model('order', OrderSchema);

export default Order;