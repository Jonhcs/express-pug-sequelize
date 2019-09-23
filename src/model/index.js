const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:info@1234@localhost:3306/sequelize')
/*const sequelize = new Sequelize('sequelize', 'root', 'info@1234', {
    host: 'localhost',
    dialect: 'mysql',
})
*/
sequelize
    .authenticate()
    .then(() => console.log('OK!'))
    .catch(err => {console.error(err); process.exit(1);})

module.exports = sequelize