const express = require('express');
const {createProduct } = require("../controller/productCtrl");

// const multer = require('multer');
// const upload = multer({ dest: 'products/' }); 



const userRouter = express.Router();

userRouter.post("/create", createProduct);
// userRouter.post('/api/v1/users/create', upload.single('image'), createProduct);

module.exports = userRouter;