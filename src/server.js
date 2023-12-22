const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const sql = require('mysql');

const conn = sql.createConnection(

  {
      host:'localhost',
      user: 'root',
      password: '',
      database: 'airlines'
  }

);

app.post('/login',bodyParser.json(),(req,res)=>{
  const Q = "SELECT * FROM user_table WHERE email = "+ JSON.stringify(req.body.email);
  conn.query(Q,(err,data)=>{
    if(err) console.log(err);
    else{
      if(data[0]['password']===req.body.password)
      {
        res.send({"auth":1,'email':req.body.email});
      }
      else{
        res.send({"auth":0});
      }
    }
  })
});


app.post('/register',bodyParser.json(),(req,res)=>
{
  const Qu = "INSERT INTO user_table VALUES ( 2, " + JSON.stringify(req.body.name) + " , " + JSON.stringify(req.body.email)
  + " , " + JSON.stringify(req.body.password) + " )";
  console.log(req.body.email);
  conn.query(Qu,(err,data)=>{
      if(err) console.log(err);
      else{
          res.send({'authentication':1});
      }
  });
}
);


app.post('/bookticket',bodyParser.json(),(req,res)=>{
   conn.query("SELECT COUNT(*) FROM TICKET_TABLE",(error,dat)=>{
    if(error) console.log(error);
    else{
        const x = dat[0]['COUNT(*)']+1;
        const Q = `INSERT INTO TICKET_TABLE VALUES ( ${x} , `+ JSON.stringify(req.body.email) + " , " + JSON.stringify(req.body.name)
  + " , " + JSON.stringify(req.body.phno) + " , " + JSON.stringify(req.body.destination)+
   " , " + JSON.stringify(req.body.From)+" , " + JSON.stringify(req.body.seats)+
   " , " + JSON.stringify(req.body.date)+" )"
        conn.query(Q,(err,data)=>{
          if(err) console.log(err);
          else{
              res.send({'confirm':1})
          }
      });
    }
   });
});

app.post('/ticketdisplay',bodyParser.json(),(req,res)=>{
  const Q = `SELECT * FROM ticket_table WHERE email='${req.body.email}'`;
  conn.query(Q,(err,data)=>{
    if(err) console.log(err);
    else{
      console.log(data);
      res.send(data);
    }
  })
})

app.post('/cancelticket',bodyParser.json(),(req,res)=>{
  const Q = `DELETE FROM ticket_table WHERE email = '${req.body.email}'`
  conn.query(Q,(err,data)=>{
    if(err) console.log(err);
    else{
      console.log('iuguu');
      res.send({"auth":1})
    }
  })
})
app.listen(3001,()=>console.log("server running"));