module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "csci366",
    DB: "quizApp",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };