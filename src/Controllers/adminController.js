import DB from "./../Database/MonggoDB.js";
import ProductModel from "../Model/productModel.js"
import inboxModel from "../Model/InboxModel.js"
const Controller = {
dashboardView : (req, res) => {
    res.render('admin/dashboard',{message : false});
},
productView : async (req, res) => {
    const makanan = await ProductModel.find({ category: 'makanan' });
    const minuman = await ProductModel.find({ category: 'minuman' });
    res.render('admin/product',{makanan : makanan, minuman : minuman,message :req.flash('message'),alert: req.flash('alert')});
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
res.redirect('/admin/dashboard/product');
    }else{
        req.flash('message',"Failed !")
        req.flash('alert','danger')
        res.redirect('/admin/dashboard/product');
    }
    
    }catch(e){
        console.log(e)
    }
    },
    inboxView: async (req,res) =>{
const data = await inboxModel.find();
res.render('admin/inbox',{data:data});
    }
}
export default Controller;