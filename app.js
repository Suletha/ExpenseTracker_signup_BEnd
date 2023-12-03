const path = require("path");
const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');

const sequelize=require('./util/database');


//Controllers
const userRoutes = require('./routes/item-routes');
const expenseRoutes = require('./routes/expense-routes');
const authenticationMW = require("./util/authentication");
//Models
const User = require("./models/user");
const Expense = require("./models/expense");

const app = express();




app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.use('/item-routes', userRoutes);
app.use('/expense-routes', expenseRoutes);

User.hasMany(Expense);
Expense.belongsTo(User);



sequelize.sync()
.then((result)=>{
    //console.log(result);
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
});