const products = require('../products.json')

module.exports = {
    get: (res,req) => {

        const { id } = req.params
        const item = products.find((product) => product.id === +id)
  if (!item) {
    return res.status(500).send('Opps! not here')
  }
  res.status(200).send(item)
    }
}

