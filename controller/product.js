const { where } = require("sequelize");
const db = require("../models")

const CreateProduct = (req, res) => {
    db.Product.create({
        name: req.body.name,
        description: req.body.description,
        price : req.body.price ,
        inStock : req.body.inStock
    }).then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
};

const GetProduct = (req, res) => {
    db.Product.findOne({where:{id:req.params.id}})
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
}
const GetProducts = (req, res) => {
    db.Product.findAll()
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
        console.log("ici")
}
const UpdateTask = (req, res) => {
    db.Product.update({
        name: req.body.name,
        description: req.body.description,
        price : req.body.price ,
        inStock : req.body.inStock
    },{
    where: {id:req.params.id}})
    .then((response) => res.status(200).send({ message: "'Modified!" }),   
     console.log("je suis là"))

    
    
        .catch((err) => res.status(400).send(err))}


const DeleteTask = (req, res) => {
    db.Product.destroy({
            where:{
        id:req.params.id
    }})
        .then((response) => res.status(200).send({ message: "'Deleted!" }))
        .catch((err) => res.status(400).send(err))
}






module.exports =
{
    CreateProduct,
    GetProducts,
    GetProduct ,
    DeleteTask ,
    UpdateTask
}