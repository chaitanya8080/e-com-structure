

const express = require("express");

const app = express();

const connect = require("./src/config/db")
const cors = require("cors");

app.use(cors())
app.use(express.json());


const userController = require("./src/controllers/userController");
const productsController = require("./src/controllers/productController");
const categoriesController = require("./src/controllers/categoryController");


app.use("/users",userController);

app.use("/products", productsController);

app.use("/category", categoriesController);


app.listen(7089, async()=>{
    try {
        await connect();
        console.log("connected");
    } catch (error) {
        console.log({error:error.message})
    }
})



