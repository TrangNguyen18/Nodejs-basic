const getHomepage = (req, res) => {
    res.render('home.ejs');
};
const addUser = (req, res) => {
    res.render('user.ejs');
};
const forgotPw = (req, res)=>{
    res.send ('Do you want to reset pw ?')
};
const postAddNewUser = (req, res)=>{
    console.log('>>> check response:', req.body)
    // res.send ('Create user successfully')
};
module.exports={getHomepage, addUser ,postAddNewUser, forgotPw};