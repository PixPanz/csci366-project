const db = require ('../model');
const Quiz = db.Quizzes;
const Op = db.Sequelize.Op;

//create a new quiz
exports.create = (req, res) => {
    if (!req.body.quizName) {
        res.status(400), send({
            message: "Content cannot be empty"
        });
        return;
    }
    const quiz = {
        quizName : req.body.quizName,
        quizDesc : req.body.QuizDesc,
        questions : req.body.questions
    }
    Quiz.create(quiz).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500), send ({
            message:
                err.message || "An error has occured while adding a new user"
        });
    });
};
//retrieve all quizzes
exports.findAll = (req, res) => {
    const quizName = req.query.quizName;
    var condition = quizName ? { QuizName: { [Op.iLike]: '%${quizName}%'}} : null;
    Quiz.findAll({where: condition})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occured when getting the full table"
        })
    })
};
//retrieve a quiz by id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Quiz.findByPk(id).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};