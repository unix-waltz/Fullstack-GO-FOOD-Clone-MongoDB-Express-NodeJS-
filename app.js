import express from "express";
const app = express();
import env from "dotenv";
import cookieParser from "cookie-parser";
import tableModel from "./src/Model/tableModel.js";
import clientRoute from './src/Routes/client-route.js'
import adminRoute from './src/Routes/admin-route.js'

import flash from 'connect-flash';
import  MethodOverride  from "method-override";
app.use(MethodOverride('_method'));
app.use(cookieParser());
env.config();


app.use(flash())
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.get('/',async (req, res) => {
    const falsed = await tableModel.find({ used:false });
   res.render('client/select_tbl',{data: falsed})
})
app.use('/client', clientRoute);
app.use('/admin', adminRoute);
app.use((req, res, next) => {
    res.status(404).render('404/index');
  });
app.listen(process.env.LOCAL_PORT,() =>{
    console.log(`Starting on port ${process.env.LOCAL_PORT}`);
});
