const connection = require('../config/pgConfig')
const getUsers = async () => {
    let user = await connection.query('select * from users');
    return user;
}

const getUserById = async (id) => {
    let result = await connection.query(`select * from users where id = ${id}`);
    let user = result && result.rows.length > 0 ? result.rows[0] : {};
    return user;
}
module.exports = {
    getUsers,
    getUserById
};
