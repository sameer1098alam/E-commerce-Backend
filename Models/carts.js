const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    p_id: { type: Number, required: true },
    p_img: { type: String, required: false },
    p_cost: { type: Number, required: false },
    username: { type: String, required: true }, // Ensure this field is required
    p_qty: { type: Number, required: false }
});


module.exports = mongoose.model('Cart', cartSchema);
