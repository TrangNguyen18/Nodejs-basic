const getHomepage = (req, res) => {
    res.render('sample.ejs');
};
const login = (req, res) => {
    res.render('user.ejs');
};
const forgotPw = (req,res)=>{
    res.send ('Do you want to reset pw ?')
}
module.exports={getHomepage, login, forgotPw};