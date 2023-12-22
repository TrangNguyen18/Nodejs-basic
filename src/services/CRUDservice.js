const connection = require('../config/pgConfig')
const getUsers = async () => {
 let user = await connection.query ('select * from users');
 return user;
}
module.exports = {
    getUsers
};