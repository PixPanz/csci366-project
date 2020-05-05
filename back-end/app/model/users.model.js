module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
        userId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username:{
            type: Sequelize.STRING,
            Unique: true,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        pastQuizzes:{
            type: Sequelize.ARRAY(Sequelize.INTEGER)
        }
    })
    return Users
}