var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mysql = require('mysql');


const PORT = 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
var jsonParser = bodyParser.json();
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// view engine setup

// error handler


let connection = mysql.createConnection({
  host: 'localhost', //'localhost',
  user: 'root',
  password : 'root',
  port : 3306, //port mysql
  database:'db'
});
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  
  console.log('Connected to the MySQL server.');
});
app.post('/add_task',jsonParser,(req,res)=>{
 
  console.log(req.body);
  connection.query("INSERT INTO tasks set ? ",req.body, 
  function(err, rows)
  {

    if (err){
      //If error
      res.status(400).json('Sorry!!Unable To Add');
      console.log("Error inserting : %s ",err );
    }
    else
    //If success
    res.status(200).json(req.body)

  });



  });
  app.post('/update_check',jsonParser,(req,res)=>{
 
    const {id} = req.body;
    connection.query("Update tasks set checked = 1 where id = ? ",id, 
    function(err, rows)
    {
  
      if (err){
        //If error
        res.status(400).json('Sorry!!Unable To Add');
        console.log("Error inserting : %s ",err );
      }
      else
      //If success
      res.status(200).json(req.body)
  
    });
  
  
  
    });
    app.post('/take_tasks',jsonParser,(req,res)=>{
 
      
      connection.query("select * from tasks", 
      function(err, rows)
      {
    
        if (err){
          //If error
          res.status(400).json('Sorry!!Unable To Add');
          console.log("Error inserting : %s ",err );
        }
        else
        //If success
        console.log(rows);
        res.status(200).json(rows)
    
      });});

      app.post('/take_tasks_by_date',jsonParser,(req,res)=>{
            
        const {dates} = req.body;
        console.log(dates);
        connection.query("Select * from tasks where dates = ?", dates,
        function(err, rows)
        {
      
          if (err){
            //If error
            res.status(400).json('Sorry!!Unable To Add');
            console.log("Error inserting : %s ",err );
          }
          else
          //If success
          console.log(rows);
          res.status(200).json(rows)
      
        });});



      

app.post('/take_tasks',jsonParser,(req,res)=>{
 
      
      connection.query("select * from tasks", 
      function(err, rows)
      {
    
        if (err){
          //If error
          res.status(400).json('Sorry!!Unable To Add');
          console.log("Error inserting : %s ",err );
        }
        else
        //If success
        console.log(rows);
        res.status(200).json(rows)
    
      });
    
    
    
      });



  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  
  module.exports = app;