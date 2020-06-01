
const createProduct = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, price, img } = req.body;

    dbInstance.create_product([name, price, img])
        .then(() => dbInstance.read_products()
        .then(products => res.status(200).send(products)))
        .catch(err => {
            res.status(500).send({ errorMessage: "An error ocurred!" });
            console.log(err)
        });
}

const getInventory = (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({ errorMessage: "An error ocurred!" });
            console.log(err)
        });
}

const getProduct = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.read_product(id)
    .then(product => res.status(200).send(product[0]))
        .catch(err => {
            res.status(500).send({ errorMessage: "An error ocurred!" });
            console.log(err)
        });
}

const updateProduct = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    const { name, price, img } = req.body;
    dbInstance.update_product([id, name, price, img])
        .then(() => dbInstance.read_products()
        .then(products => res.status(200).send(products)))
        .catch(err => {
            res.status(500).send({ errorMessage: "An error ocurred!" });
            console.log(err)
        });
}

const deleteProduct = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.delete_product(id)
        .then(() => dbInstance.read_products()
        .then(products => res.status(200).send(products)))
        .catch(err => {
            res.status(500).send({ errorMessage: "An error ocurred!" });
            console.log(err)
        });
}


module.exports = {
   createProduct,
   updateProduct,
   getProduct,
   deleteProduct,
   getInventory
};