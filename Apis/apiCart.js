const Cart = require('../Models/carts');

const carts_all = async (req, res) => {
    try {
        const carts = await Cart.find();
        console.log('Data Sent');
        res.json(carts);
    } catch (error) {
        console.log('Fetch error :-', error);
        res.json({ 'message': error });
    }
};

const insert_cart = async (req, res) => {
    const cart = new Cart({
        p_id: req.body.p_id,
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        username: req.body.username, // Corrected field name
        p_qty: req.body.p_qty
    });
    try {
        const savedCart = await cart.save();
        console.log('Product inserted');
        res.send(savedCart);
    } catch (error) {
        console.log("Data not inserted");
        res.status(400).send(error);
    }
};

const update_cart = async (req, res) => {
    let p_id = req.body.p_id;
    let username = req.body.username;  // Extract username from the request body

    const cart = {
        p_qty: req.body.p_qty
    };

    try {
        const updatecart = await Cart.updateOne(
            { p_id, username }, // Check both p_id and username
            cart
        );

        if (updatecart.modifiedCount != 0) {
            console.log('Product Updated', updatecart);
            res.send({ 'update': 'success' });
        } else {
            console.log('Product not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(400).send(error);
    }
};

const delete_cart = async (req, res) => {
    let p_id = req.body.p_id;
    let username = req.body.username; // Corrected field name
    try {
        const deletedcart = await Cart.deleteOne({ p_id, username });
        if (deletedcart.deletedCount != 0) {
            console.log('Product Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('Product Not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    carts_all,
    insert_cart,
    update_cart,
    delete_cart
};
