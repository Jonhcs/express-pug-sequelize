const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const Sequelize = require('sequelize')

const app = express()

//const sequelize = new Sequelize('mysql://root:hello123@localhost:3000/sequelize')
const sequelize = new Sequelize('sequelize', 'root', 'info@1234', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op
})
sequelize
    .authenticate()
    .then(() => console.log('OK!'))
    .catch(() => console.log('erro!'))

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/index')(app)

app.listen(3000, () => {
    console.log('Express started')
})
