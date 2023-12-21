const pool = require('../config/pgConfig');
const connection = require('../config/pgConfig');
const getHomepage = (req, res) => {
    res.render('home.ejs');
    
};
const addUser = (req, res) => {
    res.render('user.ejs');
};
const forgotPw = (req, res)=>{
    res.send ('Do you want to reset pw ?')
};
const postAddNewUser = async(req, res)=>{
    let email = req.body.email;
    let name = req.body.username;
    console.log('user = ',name, 'email =', email);
    const sql  = 'Insert into users (name, email) values (? ,?)';
    const [results, fields] = connection.query(sql,[name, email]);
   // console.log(results);
    //res.send('Tao user thanh cong')
}
module.exports={getHomepage, addUser ,postAddNewUser, forgotPw};

