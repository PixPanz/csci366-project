const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


//create a new user
exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400), send({
            message: "Content cannot be empty"
        });
        return;
    }
    const user = {
        username: req.body.username,
        password: req.body.password,
        pastQuizzes: req.body.pastQuizzes
    }
    User.create(user).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500), send ({
            message:
                err.message || "An error has occured while adding a new user"
        });
    });
};
//retrieve all users
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { title: { [Op.iLike]: '%${username}%'}} : null;
    User.findAll({where: condition})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occured when getting the full table"
        })
    })
};
//retrieve a user with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};
//find all previsously taken quizzes
