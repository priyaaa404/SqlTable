import mysql2 from 'mysql2';
import express from 'express';
import cors from 'cors'; // Import the cors middleware

const connection = mysql2.createConnection({
    host: 'localhost', // '127.0.0.1'
    database: 'five_database',
    user: 'root',
    password: '@Mysql1986'
});

const app = express();

const PORT = 5000;

app.use(cors()); // Use the cors middleware for all routes

connection.connect((err) => {
    if (err) {
        console.error('DATABASE CONNECTION ERROR:', err);
    } else {
        console.log('DATABASE CONNECTED');
        
        app.listen(PORT, () => {
            console.log(`SERVER: http://localhost:${PORT}`);
        });
    }
});

app.get('/all', (req, res) => {
    const sql_query = 'SELECT * FROM teacher_table';
    connection.query(sql_query, (err, result) => {
        if (err) {
            console.error('DATABASE QUERY ERROR:', err);
            res.status(500).send('Error fetching data from database.');
        } else {
            res.send(result);
        }
    });
});
