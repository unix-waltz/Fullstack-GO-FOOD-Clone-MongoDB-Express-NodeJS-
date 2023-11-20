import express from 'express';
const Route = express.Router();


Route.get('/',(req,res)=>{
    res.render('client/index')
})

export default Route;