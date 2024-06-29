const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const body = require('body-parser')
const jwt = require('jsonwebtoken')
const menuItem = require('./models/menuItem')
const app = express();
app.use(express.json);
app.use(cors());

const mongoDBUri  = "mongodb+srv://Dhruv:Dhruv@cluster0.h6fh7fu.mongodb.net/foodzyy?retryWrites=true&w=majority";

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});


app.get('/menu', async (req, res) => {
    try {
      const menu = await menuItem.find();
    
      res.send(menu);
    } catch (error) {
      console.error('Error fetching plants:', error);
      res.status(500).send('Internal Server Error');
    }
  });

const port = 3000;
app.listen(port,()=>console.log("Server started Enjoy!"))