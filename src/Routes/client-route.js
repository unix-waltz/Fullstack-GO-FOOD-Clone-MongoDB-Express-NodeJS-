import express from 'express';
import clientController from './../Controllers/clientController.js'
const Route = express.Router();
// import tblMiddleware from './../Middleware/tblMiddleware.js'
// Route.use(tblMiddleware)
Route.get('/',clientController.index)
Route.get('/minuman',clientController.getAllMinuman)
Route.get('/makanan',clientController.getAllMakanan)
Route.get('/detail/menu/:id',clientController.detailMenu)
Route.get('/payment/:id',clientController.paymentView)
Route.post('/payment/get/:id',clientController.payment)
Route.post('/payment/proccess/:id',clientController.paymentProccessQr)
Route.get('/inbox',clientController.inboxView)
Route.post('/inbox',clientController.inbox)
Route.post('/ver/tbl',clientController.selectTBL)
Route.get('/your/beli/langsung/url',clientController.MultiplepaymentView)
Route.get('/your/beli/langsung/urlm',clientController.MultiplepaymentProccess)
export default Route;