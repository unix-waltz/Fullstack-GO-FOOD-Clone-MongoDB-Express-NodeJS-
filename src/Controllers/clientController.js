import DB from "./../Database/MonggoDB.js";
import productModel from "./../Model/productModel.js";
import inboxModel from "./../Model/InboxModel.js";
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
      },
      inboxView: (req,res)=>{
        res.render('client/inboxView',{message :req.flash('message'),alert: req.flash('alert')})
      },
      inbox: async (req,res)=>{
        let inbox =  new inboxModel({
          nama : req.body.nama,
          pesan : req.body.pesan,
          saran: req.body.saran,
      });
        inbox = await inbox.save();
      if(inbox){
       
      req.flash('message',"Berhasil Dikirim 😊")
          req.flash('alert','primary')
  res.redirect('http://127.0.0.1:3004/client/inbox')
      }else{
          req.flash('message',"Failed 😈 !")
          req.flash('alert','danger')
          res.redirect('http://127.0.0.1:3004/client/inbox')
      }
      },
      MultiplepaymentView: async (req, res) => {
        try {
          const data = req.query.items.split(',');

          let arr = [];

          await Promise.all(data.map(async e => {
              const result = await productModel.findById(e);
              if (result) {
                  arr.push(result);
              }
          }));
          if (arr.length > 0) {
            res.render('client/Multiplepayment', { data: arr,param : req.query.items });
          } else {
            res.redirect('/');
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        } 
      },
      MultiplepaymentProccess: async (req, res) => {
        try {
          const data = req.query.items.split(',');

          let arr = [];

          await Promise.all(data.map(async e => {
              const result = await productModel.findById(e);
              if (result) {
                  arr.push(result);
              }
          }));
          const totalPrice = arr.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price;
        }, 0);
          if (arr.length > 0) {
            res.render('client/Multiplepayment2', { data: arr,price: totalPrice});
          } else {
            res.redirect('/');
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        } 
      },
}
export default Controller;