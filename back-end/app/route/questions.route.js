module.exports = app => {
    const questions = require("../controller/question.controller");
    var router = require("express").Router();

    router.post("/", questions.create);
    router.get("/", questions.findAll);
    router.get("/:id", questions.findOne);
    app.use('/api/questions',router);
}