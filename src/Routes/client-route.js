import express from 'express';
import clientController from './../Controllers/clientController.js'
const Route = express.Router();


Route.get('/',(req,res)=>{
    res.render('client/index')
})
Route.get('/minuman',clientController.getAllMinuman)
Route.get('/makanan',clientController.getAllMakanan)
export default Route;