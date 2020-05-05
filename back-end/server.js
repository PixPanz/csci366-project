var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
const db = require('./app/config/db.config.js');

db.sequelize.sync({force: true}).then(() =>{
    console.log("drop and resync");
    initial();
});

require('./app/route/users.route.js')(app);
require('./app/route/questions.route.js')(app);
require('./app/route/quizzes.route.js')(app);


//server
var server = app.listen(8080, function() {
    let host = server.address().address
    let port = server.address().port
    console.log('App listening at http://%s:%s', host, port);
})

function initial(){
    let users = [
        {
            username: "jsmith",
            password: "123",
            pastQuizzes: []
        },
        {
            username: "proGame60",
            password: "123",
            pastQuizzes: [1,3,6]
        }
        
    ]
    let quizzes = [
        {
            quizName: "testQuiz",
            quizDesc: "This is a test",
            quizQuestions: [1,2,5,3]
        },
        {
            quizName: "testQuiz2",
            quizDesc: "",
            quizQuestions: [1,5,2,12]
        }
    ]
    let questions = [
        {
            text: "Test Question",
            answers: ["test 1", "test 2", "test 3", "test 4"],
            correct: "test 1"
        },
        {
            text: "Test Question 2",
            answers: ["test 1", "test 2", "test 3", "test 4"],
            correct: "test 4"
        }
    ]
    const User = db.users;
    const Quiz = db.quizzes;
    const Question = db.questions
    for(let i = 0; i < users.length; i++){
        User.create(users[i]);
    }
    for (let i = 0; i < quizzes.length; i++){
        Quiz.create(quizzes[i]);
    }
    for(let i = 0; i < questions.length; i++){
        Question.create(questions[i]);
    }
}