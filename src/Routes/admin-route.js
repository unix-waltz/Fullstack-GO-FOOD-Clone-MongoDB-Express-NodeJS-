import express from 'express';
const Route = express.Router();

Route.get('/dashboard', (req, res) => {
    res.render('admin/dashboard');
})


export default Route;