//create the client and connectionString
const { Pool, Client } = require('pg')
const connectionString = 'postgressql://postgres:cs366@localhost:5432/QuizApp'
const client = new Client({
    connectionString: connectionString
})

//connect to the database
client.connect()

//query the database
client.query('SELECT * from users',(err, res) =>{
    console.log(err,res)
    client.end()
})