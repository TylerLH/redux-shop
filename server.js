'use strict';

const express = require('express');
const app = express();

const cors = require('cors')
const bodyparser = require('body-parser')

const corsConfig = { origin: true, credentials: true }

const products = [
    {
        name: "Cool Item",
        price_cents: 6000,
        price_formatted: "$60.00",
        description: "Buy this awesome thing."
    },
    {
        name: "Another Cool Item",
        price_cents: 5500,
        price_formatted: "$55.00",
        description: "This is as cool as other things."
    },
    {
        name: "Pop Rocks",
        price_cents: 6000,
        price_formatted: "$60.00",
        description: "Ayyyyy."
    },
    {
        name: "Raisin Bread",
        price_cents: 4500,
        price_formatted: "$45.00",
        description: "Spacey like Kevin."
    },
    {
        name: "Shia Labeouf Poster",
        price_cents: 6000,
        price_formatted: "$60.00",
        description: "Just do it."
    }
]

class Cart {
    constructor() {
        this.items = new Map()
    }

    addItem(itemId, qty = 1) {
        itemId = parseInt(itemId, 10)
        qty = parseInt(qty, 10)
        if (this.items.has(itemId)) {
            let item = this.items.get(itemId)
            item.quantity += qty
            this.items.set(itemId, item)
        } else {
            this.items.set(itemId, {
                id: itemId,
                quantity: qty
            })
        }
    }

    removeItem(itemId, qty) {
        itemId = parseInt(itemId, 10)
        if (this.items.has(itemId) && qty) {
            let item = this.items.get(itemId)
            item.quantity -= parseInt(qty, 10)
            this.items.set(itemId, item)
        } else if (this.items.has(itemId)) {
            this.items.delete(itemId)
        }
    }

    get subtotal() {
        let subtotal = 0
        for (let [id, cartItem] of this.items.entries()) {
            const item = products[id]
            const price = item.price_cents
            subtotal += Math.floor(price * cartItem.quantity)
        }
        return subtotal
    }

    clear() {
        this.items.clear()
    }
}

const cart = new Cart()

app.use(bodyparser.json())
app.use(cors(corsConfig))

/**
* Get a list of all products
*/
app.get("/products", (req, res) => res.json(products))

/**
* Add an item to the existing cart
*/
app.post("/cart/addItem", (req, res) => {
    cart.addItem(req.body.itemId, req.body.qty)
    res.json({items: cart.items.values(), subtotal: cart.subtotal})
})

app.listen(3000, () => console.log('API Listening!'))
