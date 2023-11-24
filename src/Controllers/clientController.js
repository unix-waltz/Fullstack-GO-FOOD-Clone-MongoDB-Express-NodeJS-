import productModel from "./../Model/productModel.js";
import qrcode from 'qrcode';
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
      },
      paymentView: async (req, res) => {
        try {
          const data = await productModel.findById(req.params.id);
          if (data) {
            res.render('client/payment', { data: data });
          } else {
            res.redirect('/');
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        } 
      },
      payment: async (req, res) => {
        try {
          const data = await productModel.findById(req.params.id);
          if (data) {
            res.render('client/payment2', { data: data,payment: req.body});
          } else {
            res.redirect('/');
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        } 
      },
      paymentProccessQr: async (req, res) => {
      if(req.body.qron){
        const data = await productModel.findById(req.params.id);
        const price = data.price * req.body.waranty;
   const input_ = `
   +---------------------+
   |      Pecel Lele      |
   +---------------------+

   | Product: ${data.title} (${req.params.id}) -${data.price}/1
   | Warranty: ${req.body.waranty}
   | Price: ${price}_payment_QRCODE


   +---------------------+
   `;
qrcode.toDataURL(input_,(err,src)=>{
res.render('client/payment_proccessQr',{qrcode:src,price:price,data : data,waranty:req.body.waranty,swaranty : data.price})
})

      }
      if(req.body.cashon){
        const data = await productModel.findById(req.params.id);
        const price = data.price * req.body.waranty;
        res.render('client/payment_proccessCash',{price:price,data : data,waranty:req.body.waranty,swaranty : data.price})
      }
      }
}
export default Controller;