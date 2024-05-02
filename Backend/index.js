const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
const port =3002
const Product=require('./Product')
const User=require('./Sup')

// Middlewares
app.use(express.json())
app.use(cors())

//connection to url
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{console.log("connected to database")}).catch((err)=>{console.log(err)})



//API
app.get('/',(req,res)=>res.send("hello world"));

app.post('/Addproduct',(req,res)=>{
  const ProductDetail=req.body;
  console.log(ProductDetail)
  Product.create(ProductDetail).then(()=>res.send('added successful')).catch((err)=>res.send('err'))
})

app.get('/get', (req, res) => {
  Product.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.post('/Sup',(req,res)=>{
  UserDetails=req.body
  User.create(UserDetails).then(()=>res.send('user added')).catch((err)=>res.send(err))
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
      .then(user => {
          if (user) {
              if(user.password === password) {
                  res.status(200).send("User found");
              } else {
                  res.status(401).send("Incorrect password");
              }
          } else {
                res.status(404).send('No user found');
          }
      })
      .catch(err => {
          console.error(err);
          res.status(500).send('Internal Server Error');
      });
});


app.listen(port,()=>console.log("listening on the port",port));