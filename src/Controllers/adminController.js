import DB from "./../Database/MonggoDB.js";
import ProductModel from "../Model/productModel.js"
const Controller = {
dashboardView : (req, res) => {
    res.render('admin/dashboard',{message :req.flash('message'),alert: req.flash('alert')});
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
    if(product){
        req.flash('message',"Add Product Successfully");
        req.flash('alert','primary')
res.redirect('/admin/dashboard');
    }else{
        req.flash('message',"Failed !")
        req.flash('alert','danger')
        res.redirect('/admin/dashboard');
    }
    
    }catch(e){
        console.log(e)
    }
    }
}
export default Controller;