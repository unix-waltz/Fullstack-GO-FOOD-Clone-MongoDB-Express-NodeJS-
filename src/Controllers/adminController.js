const Controller = {
dashboardView : (req, res) => {
    res.render('admin/dashboard');
},
productView : (req, res) => {
    res.render('admin/product');
},
newProductView : (req, res) => {
    res.render('admin/productNew');
},
newProduct : (req, res) => {
    
}
}
export default Controller;