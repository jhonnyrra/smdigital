import {Sequelize} from 'sequelize'

const db = new Sequelize('smdigital', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})
 export default db