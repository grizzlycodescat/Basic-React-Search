var express = require('express')
var mysql = require('mysql')
var cors = require('cors')
var fs = require('fs')

const app = express()
const RESTAURANT_PATH = '/Users/JeromePapalie/Google Drive/Git Repos/Test_1_Glints/restaurants.csv'
// const INSERT_QUERY = 'INSERT INTO restaurants(id, name, day_id_first, day_id_last, start_t, end_t) VALUES ("3","test3", "1", "5", "11:30:00", "21:00:00")'
// var restNamesList = []

app.use(cors())

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'tb214403',
  database: 'react_sql'
})

connection.connect(function (error) {
  if (error) {
    console.log(error)
  } else {
    console.log('Database Connected')
  }
})

// get days from days table
app.get('/days', function (req, res) {
  connection.query('SELECT * FROM days', function (error, results) {
    if (error) {
      // console.log(error)
      return res.send(error)
    } else {
      // console.log(res)
      return res.json({
        data: results
      })
    }
  })
})

// main page
app.get('/', function (req, res) {
  res.send('go to restaurants page')
})

// get restaurants from restaurants table
app.get('/restaurants', (req, res) => {
  connection.query('SELECT * FROM restaurants', function (error, results) {
    if (error) {
      return res.send(error)
    } else {
      res.json(results)
      // console.log(testRes)
    }
  })
})

// update the database with the CSV file content
// need to have a better way to store the time. For now I'll pull from DB and process it like a string.
fs.readFile(RESTAURANT_PATH, 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    // console.log(data)
    var restID = 0
    var lines = data.split('\n')
    // console.log(lines)
    for (var i = 0; i < lines.length; i++) {
      var currentLine = lines[i].split(',')
      var restNames = currentLine[0]
      var openHours = currentLine[1]
      var INSERT_QUERY = `INSERT INTO restaurants(id, name, Operation_Hours) VALUES (${restID},${restNames},${openHours})`
      restID++
      connection.query(INSERT_QUERY, (err, res) => {
        if (err) {
          // console.log(err)
          return err
        } else {
          console.log('DB Populated')
        }
      })
    }
  }
})

// to test if the page route works
app.listen(4000, () => {
  console.log('server listening on port 4000')
})
