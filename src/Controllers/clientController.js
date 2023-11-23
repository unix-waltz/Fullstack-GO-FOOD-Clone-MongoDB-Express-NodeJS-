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
    },
    detailMenu: async (req, res) => {
        try {
          const data = await productModel.findById(req.params.id);
          if (data) {
            res.render('client/detailMenu', { data: data });
          } else {
            res.redirect('/');
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }
      
}
export default Controller;