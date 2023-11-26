import express from 'express';
import upload from './../Middleware/multerMiddleware.js'
const Route = express.Router();
import Controller from "./../Controllers/adminController.js"
Route.get('/dashboard', Controller.dashboardView)
Route.get('/dashboard/inbox', Controller.inboxView)
Route.get('/dashboard/product', Controller.productView)
Route.get('/dashboard/product/new', Controller.newProductView)
Route.post('/dashboard/product/new', upload.single('thumbnail'),Controller.newProduct)
Route.delete('/delete/inbox/:id', Controller.inboxDelete)
export default Route;