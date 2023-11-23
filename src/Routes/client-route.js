import express from 'express';
import clientController from './../Controllers/clientController.js'
const Route = express.Router();


Route.get('/',clientController.index)
Route.get('/minuman',clientController.getAllMinuman)
Route.get('/makanan',clientController.getAllMakanan)
Route.get('/detail/menu/:id',clientController.detailMenu)
Route.get('/payment/:id',clientController.paymentView)
Route.post('/payment/get/:id',clientController.payment)
export default Route;