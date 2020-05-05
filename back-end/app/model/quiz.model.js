module.exports = (sequelize, Sequelize) => {
    const Quizzes = sequelize.define('quizzes',{
        quizId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quizName:{
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        quizDesc:{
            type: Sequelize.STRING
        },
        quizQuestions:{
            type: Sequelize.ARRAY(Sequelize.INTEGER),
            allowNull: false
        }
    })
    return Quizzes
}