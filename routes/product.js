const express = require ("express")
const { CreateProduct ,GetProduct ,GetProducts ,UpdateTask, DeleteTask} = require("../controller/product")
const app = express.Router()


//Creating PRODUCT 


app.post("/products",CreateProduct )

// Get Product By ID 
app.get("/products/:id",GetProduct )

//Get all Products
app.get("/products",GetProducts )


// update Product 
app.put("/products/:id",UpdateTask )

// Delete Product
app.delete("/products/:id",DeleteTask )




module.exports = app
