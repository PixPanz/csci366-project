module.exports = function(app){
    const questions = require('../controller/question.controller.js');
    app.post('/api/questions', questions.create);
}