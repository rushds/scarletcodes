const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
});
const getTests = (request, response) => {
    pool.query('SELECT * FROM pgtest', (error, results) => {
        if (error) {
            reject(error);
        }
        if (results && results.rows){
            resolve(results.rows);
        }
        else{
            reject(new Error("No Results Found"));
        }
    });
};  
//this is bad practice, should figure a way to fix later
