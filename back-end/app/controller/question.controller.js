const db = require ('../model');
const Question = db.Questions;
const Op = db.Sequelize.Op;


//create a new Question
exports.create = (req, res) => {
    if (!req.body.text) {
        res.status(400), send({
            message: "Content cannot be empty"
        });
        return;
    }
    const question = {
        text: req.body.text,
        answers: req.body.answers,
        correct: req.body.correct
    }
    Question.create(question).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500), send ({
            message:
                err.message || "An error has occured while adding a new user"
        });
    });
};
exports.findAll = (req, res) => {
    const text = req.query.text;
    var condition = text ? { text: { [Op.iLike]: '%${text}%'}} : null;
    Text.findAll({where: condition})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occured when getting the full table"
        })
    })
};
exports.findOne = (req, res) => {
    const id = req.params.id;
    Question.findByPk(id).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};