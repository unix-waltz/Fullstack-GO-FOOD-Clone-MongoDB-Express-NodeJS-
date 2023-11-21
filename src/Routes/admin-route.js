import express from 'express';
const Route = express.Router();
import Controller from "./../Controllers/adminController.js"
Route.get('/dashboard', Controller.dashboardView)
Route.get('/dashboard/product', Controller.productView)

export default Route;