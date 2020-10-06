const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('database.json');
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/userInfo', (req, res) => {
// res.send([
//     { message: 'Hello Express!' },
//     { message: '중복가능' }
// ]);
    connection.query(
        'select * from userInfo',
        (err,rows,fields) =>{
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));
