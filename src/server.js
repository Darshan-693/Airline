const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const sql = require('mysql');
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // `true` for port 465, `false` for all other ports
  auth: {
    user: "captaincopper777@gmail.com",
    pass: "aulo aejt ypnj vajt",
  },
});


function sendmail(email,tinfo){

   transporter.sendMail({
    from:"captaincopper777@gmail.com",
    to: email,
    subject: `Ticket no. IIA000${tinfo.sl_no}`,
    text:`\nBoarding location: ${tinfo.from}\n
    Destination:${tinfo.to}\n
    Date:${tinfo.date}\n
    Seats:${tinfo.seats}`
  },(error,info)=>{
    if(error){console.log(error);
      }
    else{
   console.log(info);
  }
  });
}

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
  conn.query(Q,async(err,data)=>{
    if(err) res.send({"auth":0});
    else{
      if(data.length === 0)
      {
        res.send({"auth":0});
      }
      else{
        let valid = await bcrypt.compare(req.body.password,data[0].password)
        if(valid===true){
          res.send({"auth":1,"email":data[0].email})
        }
        else{
          res.send({"auth":0})
        }
        }
      }
    })
  })

app.post('/register',bodyParser.json(),async (req,res)=>
{
  let d_pass = await bcrypt.hash(req.body.password,10);
  const Qu = "INSERT INTO user_table VALUES ( 2, " + JSON.stringify(req.body.name) + " , " + JSON.stringify(req.body.email)
  + " , " + `'${d_pass}'` + " )";
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
      res.send(data);
    }
  })
})

app.post('/cancelticket',bodyParser.json(),(req,res)=>{
  const Q = `DELETE FROM ticket_table WHERE sl_no = '${req.body.sl_no}'`
  conn.query(Q,(err,data)=>{
    if(err) console.log(err);
    else{
      res.send({"auth":1})
    }
  })
})

app.post('/getname',bodyParser.json(),(req,res)=>{
  console.log(req.body.email)
  const Q = `SELECT * FROM user_table WHERE email = '${req.body.email}'`
  conn.query(Q,(err,data)=>{
    if(err) console.log(err);
    else{
      res.send(data);
    }
  })
})

app.post('/download',bodyParser.json(),(req,res)=>{
  sendmail("drbsc999@gmail.com",req.body);
  res.send({"auth":1});
})
app.listen(3001,()=>console.log("server running"));
