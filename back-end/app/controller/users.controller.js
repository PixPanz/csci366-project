const db = require ('../config/db.config.js');
const User = db.Users

exports.create = (req,res) => {
    User.create({
        "username": req.body.username,
        "password": req.body.password,
        "pastQuizzes": req.body.pastQuizzes
    })
}
exports.findAll = (req, res) => {
    User.findAll().then(Users =>{
        res.json(Users.sort(function(c1,c2){return c1.id - c2.id}));
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err})
    })
}
