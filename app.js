const express = require('express');
const bodyParser = require('body-parser');
// const indexRouter = require('./routes/app');
// const taskController = require('./app/controllers/tasksController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


// app.use('/', indexRouter);
// app.use('/tasks', taskController);
require('./app/controllers/authController')(app);
require('./app/controllers/projectController')(app);

app.listen(3000);
console.log(`app funcionando na porta 3000`);