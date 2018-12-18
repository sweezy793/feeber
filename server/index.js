const express=require('express');
const mongoose=require('mongoose');
const authRoutes=require('./routes/authRoutes')
const keys=require('./config/keys')
require('./models/user')
require('./services/passport')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const app=express();



authRoutes(app);

const PORT=process.env.PORT || 3000;
app.listen(PORT);