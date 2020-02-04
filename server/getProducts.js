const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        const { price } = req.query
        
        if (price) {
            const items = products.filter(elem => elem.price >= +price)
            return res.status(200).send(items)
        }
        res.status(200).send(products)
    },
    getProductID: (req, res) => {
        const { id } = req.params
        const product = products.find(elem => elem.id === +id)

        product ? res.status(200).send(product) : res.status(500).send('Items not in list')
    }
}