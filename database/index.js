const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cows'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!
var query = (cb) => {
  var getQuery = 'SELECT * FROM cowlist';
  connection.query(getQuery, ((err, res) => {
    if (err) {
      console.log(err);
    }
    cb(err, res);
  }));
}

var add = (data, cb) => {
  // console.log(data)
  var addQuery = `INSERT INTO cowlist (name, description, catchphrase) VALUES ('${data[0]}', '${data[1]}', '${data[2]}')`;
  connection.query(addQuery, ((err, res) => {
    if (err) {
      console.log(err);
    }
    cb(err, res);
  }));
}



// Don't forget to export your functions!
module.exports = {
  query: query,
  add: add
};
