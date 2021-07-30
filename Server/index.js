const express = require('express')
const cors = require('cors')
const routes = require('./network/routes')
const mongoose = require('mongoose')
require('dotenv').config()

var app = express()

const PORT = process.env.PORT || 5000
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
// app.use("/", express.static("app"));
app.use(cors());
routes(app)

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
      app.listen(PORT,()=>{
          console.log(`Listening on port: ${PORT}`)
      })
  })
  .catch((error)=>{
    console.error(`Error connecting: ${error}`)
  })
  
mongoose.set('useFindAndModify', false)
