import productModel from "./../Model/productModel.js"
const Controller = {
    getAllMinuman: async (req,res) => {
        const minuman = await productModel.find({ category: 'minuman' });
res.render('client/allMinuman',{minuman : minuman})
    },
    getAllMakanan: async (req,res) => {
        const makanan = await productModel.find({ category: 'makanan' });
res.render('client/allMakanan',{makanan : makanan})
    },
    index :async (req,res)=>{
        const data = await productModel.find() 
        res.render('client/index',{data: data})
    }
}
export default Controller;