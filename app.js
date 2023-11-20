import express from "express";
const app = express();
import env from "dotenv";
env.config();
app.set('view engine', 'ejs');


import clientRoute from './src/Routes/client-route.js'
app.get('/', (req, res) => {
    res.redirect('/client/')
})
app.use('/client', clientRoute);


app.listen(process.env.LOCAL_PORT,() =>{
    console.log(`Starting on port ${process.env.LOCAL_PORT}`);
});