const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/model/index.js');


db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.get("/", (req, res) => {
    res.json({message: "Welcome to the quizzing app"})
})
app.use(bodyParser.json())
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
})

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});


