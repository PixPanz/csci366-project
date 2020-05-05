module.exports = function(app){
    const quizzes = require('../controller/quiz.controller.js');
    app.post('/api/quizzes', quizzes.create);
    app.get('/api/quizzes', quizzes.findAll)
}