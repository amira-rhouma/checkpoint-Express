const express = require('express')
const path = require('path')
const port=5000;
const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//midelware
const time =(res, req, next) => {
const timer = new Date();
 console.log(timer.getHours())

  const heur = timer.getHours;
  const day = timer.getDay();
  if ((heur > 09 && heur < 17) || (day >= 1 && day <= 5)) {
    console.log("welcome")
    res.next();
  } else {
    console.log('merci de connecter de lundi au vendredi de 9h jusqu a 17:00')
  }
}
app.use(time);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

  

app.listen(5000,(err)=>{
    if(err){
        throw err
    }else{
        console.log('SERVER IS RUNNING...')

    }
})