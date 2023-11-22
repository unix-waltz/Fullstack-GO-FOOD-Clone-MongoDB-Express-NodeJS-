import express from 'express';
import clientController from './../Controllers/clientController.js'
const Route = express.Router();


Route.get('/',clientController.index)
Route.get('/minuman',clientController.getAllMinuman)
Route.get('/makanan',clientController.getAllMakanan)
export default Route;