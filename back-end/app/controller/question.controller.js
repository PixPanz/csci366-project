const db = require ('../config/db.config.js');
const Question = db.Questions

exports.create = (req,res) => {
    Question.create({
        "text": req.body.text,
        "answers": req.body.answers,
        "correct": req.body.correct
    })
}