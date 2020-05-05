module.exports = (sequelize, Sequelize) => {
    const Questions = sequelize.define('questions',{
      questionId:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      text:{
          type: Sequelize.STRING,
          allowNull: false
      },
      answers:{
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      correct:{
          type: Sequelize.STRING,
          allowNull: false
      }
    })
    return Questions
}