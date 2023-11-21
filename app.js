import express from "express";
const app = express();
import env from "dotenv";
import clientRoute from './src/Routes/client-route.js'
import adminRoute from './src/Routes/admin-route.js'
env.config();
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.redirect('/client/')
})
app.use('/client', clientRoute);
app.use('/admin', adminRoute);

app.listen(process.env.LOCAL_PORT,() =>{
    console.log(`Starting on port ${process.env.LOCAL_PORT}`);
});