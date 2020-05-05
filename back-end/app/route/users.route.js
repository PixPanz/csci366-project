module.exports = function(app){
    const users = require('../controller/users.controller.js');
    app.post('/api/users', users.create);
    app.get('/api/users', users.findAll);
    app.patch('/api/users', users.takenQuiz);
}