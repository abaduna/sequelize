import Sequelize  from 'sequelize'

const db =  new Sequelize(
    `database_app`,`root`,`1234`,{
        host:`localhost`,
     dialect:"mysql"
    }
)
export default db