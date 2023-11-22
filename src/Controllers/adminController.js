import DB from "./../Database/MonggoDB.js";
import ProductModel from "../Model/productModel.js"
const Controller = {
dashboardView : (req, res) => {
    res.render('admin/dashboard');
},
productView : (req, res) => {
    res.render('admin/product');
},
newProductView : (req, res) => {
    res.render('admin/productNew');
},
newProduct : async (req,res) => {
    let product =  new ProductModel({
        title : req.body.title,
        thumbnail : req.file.filename,
        price: req.body.price,
        description: req.body.description,
        category : req.body.category,
    });
    try{
    product = await product.save();
    res.redirect('/');
    }catch(e){
        console.log(e)
    }
    }
}
export default Controller;