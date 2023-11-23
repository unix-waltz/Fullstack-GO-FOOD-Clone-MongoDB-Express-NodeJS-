import express from 'express';
import clientController from './../Controllers/clientController.js'
const Route = express.Router();


Route.get('/',clientController.index)
Route.get('/minuman',clientController.getAllMinuman)
Route.get('/makanan',clientController.getAllMakanan)
Route.get('/detail/menu/:id',clientController.detailMenu)
export default Route;