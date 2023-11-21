const Controller = {
dashboardView : (req, res) => {
    res.render('admin/dashboard');
},
productView : (req, res) => {
    res.render('admin/product');
}
}
export default Controller;