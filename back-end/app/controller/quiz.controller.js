const db = require ('../config/db.config.js');
const Quiz = db.Quizzes
exports.create = (req, res) => {
    Quiz.create({
        "quizName": req.body.quizName,
        "quizdesc": req.body.quizdesc,
        "quizQuestions": req.body.quizQuestions
    })
}
exports.findAll = (req, res) => {
    Quiz.findAll().then(Quizzes =>{
        res.json(Users.sort(function(c1,c2){return c1.id - c2.id}))
    }).catch(err =>{
        console.log(err);
        res.status(500).json({msg: "error", details: err})
    })
}
