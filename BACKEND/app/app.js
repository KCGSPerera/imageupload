const express =  require('express');
const morgan = require('morgan');
const userRouter = require('../routes/product');
// const userRouter = require('../routes/users');

const cors = require('cors');

const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/products", userRouter);

module.exports = app;