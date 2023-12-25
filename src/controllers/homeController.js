const pool = require('../config/pgConfig');
const connection = require('../config/pgConfig');
const { getUsers, getUserById } = require('../services/CRUDservice');
const getHomepage = async (req, res) => {
    const userList = await getUsers();
    //console.log(userList);
    return res.render('home.ejs', { users: userList.rows });

};
const addUser = (req, res) => {
    res.render('user.ejs');
};
const postAddNewUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.username;
    const results = await connection.query(`insert into users (name, email) values ('${name}','${email}')`);
    res.redirect('/');
}
const editUser = async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.render('edit.ejs', { userEdit: user });
}
const postUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.username;
    const results = await connection.query(`update users set name = '${name}', email = '${email}' where id = ${id}`);
    res.send('Update success');
}
const deleteUser = async (req, res) => {
    let userId = req.params.id;
    const results = await connection.query(`delete from users where id = ${userId}`);
    res.send('Delete success');
}
module.exports = { getHomepage, addUser, postAddNewUser, editUser, postUpdateUser, deleteUser };

