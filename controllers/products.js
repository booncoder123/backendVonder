const Product = require('../models/products')
exports.getAddProduct = (req,res,next) => {
    console.log('This always runs2!');
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product </button></form>')
}

exports.postAddProduct = (req,res,next) => {
    
    const product  = new Product(req.body.title)
    product.save();
    res.send('<h1>Hello From Express1!</h1>')
    res.redirect('/');
 
}

exports.getProduct = (req,res,next) => {
    console.log(Product.fetchAll())
    res.send('<h1>Hello From Express2!</h1>')
    
}