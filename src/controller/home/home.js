const sequelize = require('./../../model')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res ) => {
    return res.render('home/index', {
        title: "Jhonatan Carvalho",
        msg:"Welcome from website"
    })
}