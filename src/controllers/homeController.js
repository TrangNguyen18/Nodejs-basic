const pool = require('../config/pgConfig');
const connection = require('../config/pgConfig');
const {getUsers} = require('../services/CRUDservice');
const getHomepage = async (req, res) => {
    const userList = await getUsers();
    //console.log(userList);
    return res.render('home.ejs',{users : userList.rows});
    
};
const addUser = (req, res) => {
    res.render('user.ejs');
};
const forgotPw = (req, res)=>{
    res.send ('Do you want to reset pw ?')
};
const postAddNewUser = async(req, res) => {
    let email = req.body.email;
    let name = req.body.username;
    const results = await connection.query(`insert into users (name, email) values ('${name}','${email}')`);
    res.redirect('/');
}
module.exports={getHomepage, addUser ,postAddNewUser, forgotPw};

