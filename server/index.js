const express = require('express')
const bodyParser = require('body-parser')
const userApi = require('./api/userApi')
const blogApi = require('./api/blogApi')
const path = require('path');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user',userApi)
app.use('/api/blog',blogApi)

app.listen(3000)

