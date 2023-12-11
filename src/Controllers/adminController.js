import DB from "./../Database/MonggoDB.js";
import ProductModel from "../Model/productModel.js"
import inboxModel from "../Model/InboxModel.js"
import productModel from "../Model/productModel.js";
import tableModel from "../Model/tableModel.js";
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
    },
    inboxDelete: async (req,res) =>{
        try{
const deleteable = await inboxModel.findByIdAndDelete(req.params.id)
if(deleteable) return res.redirect('/admin/dashboard/inbox');
res.send('failed')
        }catch(e){
            console.log(e)
        }
    },
    productShow: async (req,res)=> {
       const data = await productModel.findById(req.params.id)
       if(data) return  res.render('admin/productShow',{data: data})
    },
    menuDelete: async (req,res) =>{
        try{
const deleteable = await productModel.findByIdAndDelete(req.params.id)
if(deleteable) return res.redirect('/admin/dashboard/product');
res.send('failed')
        }catch(e){
            console.log(e)
        }
    },
    mejaView : async (req, res) => {
        const data = await tableModel.find()
        const trued = await tableModel.find({ used: true });
        const falsed = await tableModel.find({ used:false });
        res.render('admin/detailMeja',{data: data,trued : trued, falsed: falsed});
    },
    newMejaView : (req, res) => {
        res.render('admin/mejaNew');
    },
    newMeja: async (req,res) => {
        let table =  new tableModel({
            no : req.body.no,
        });
        try{
        table = await table.save();
        if(table){
    res.redirect('/admin/dashboard/meja');
        }else{
            res.redirect('/admin/dashboard/meja');
        }
        
        }catch(e){
            console.log(e)
        }
        },
}
export default Controller;