module.exports = app => {
    const quizzes = require("../controller/quiz.controller");
    var router = require("express").Router();
    //Create a new quiz
    router.post("/", quizzes.create);
    //print out all quizzes
    router.get("/", quizzes.findAll);
    //get a quiz by id
    router.get("/:id", quizzes.findOne);
    app.use('/api/quizzes', router);
}