import express from "express";
const app = express();
import env from "dotenv";
import clientRoute from './src/Routes/client-route.js'
import adminRoute from './src/Routes/admin-route.js'
import session from "express-session";
env.config();

app.use(session({
    secret: process.env.SESSION_KEY, 
    resave: false,
    saveUninitialized: true,
  }));

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.redirect('/client/')
})
app.use('/client', clientRoute);
app.use('/admin', adminRoute);

app.listen(process.env.LOCAL_PORT,() =>{
    console.log(`Starting on port ${process.env.LOCAL_PORT}`);
});