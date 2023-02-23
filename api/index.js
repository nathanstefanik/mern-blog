const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
var bcrypt = require('bcryptjs');
const app = express();

var salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jgjfzkv.mongodb.net/?retryWrites=true&w=majority`)

app.post('/register', async (req,res) => {
  const {username,password} = req.body;
  try{
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch(e) {
    res.status(400).json(e);
  }
})

app.listen(4000);
