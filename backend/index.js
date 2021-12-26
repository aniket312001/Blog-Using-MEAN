const express = require("express")
const bodyparser = require('body-parser') 
const cors = require('cors')
const mysql = require('mysql2')


const app = express()

app.use(cors())
app.use(bodyparser.json())



// connecting mysql in db
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'blog',
    post:3306
})



// check database connection
db.connect(err=>{
    if(err){
        console.log(err)
    } else{
        console.log("Database Connection Successfull")
    } 
})


app.get('/user',(req,res)=>{
    qrr = `select * from users`

    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length>0){
            res.send({message:"all user",data:result})
        }
    })
})



// get single user by id 

app.get('/user/:id',(req,res)=>{
    // console.log(req.params.id)
    let qrr = `SELECT * FROM users WHERE id = ${req.params.id}`

    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length > 0){ 
            res.send({message:'get data by id',data:result})
        } else {
            res.send({message:'data not found'})
        }
    })
})



// Post data 
app.post('/user',(req,res)=>{
    console.log(req.body)
    // let Id = req.body.id    
    let Name = req.body.name    
    let Email = req.body.email   
    let Password = req.body.password
    
    let qrr = `INSERT INTO users (name, email, password) VALUE ('${Name}','${Email}','${Password}' );`
    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({message:"Data created Successful"})
        }
    })
})



// Update data
app.put('/user/:id',(req,res)=>{
    let uId = req.params.id  // get the id    
    let Name = req.body.name    
    let Email = req.body.email   
    let Password = req.body.password
    let Bio = req.body.bio
    let Img = req.body.img

    let qrr = `update users set name='${Name}', email='${Email}', password='${Password}', bio='${Bio}', img='${Img}'  where id = ${uId}`
    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({message:"Data updated Successfully"})
        }
    })
})

app.delete('/user/:id',(req,res)=>{

    let qrr = `delete from users where id = ${req.params.id}`

    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else {
            res.send({message:"Data delete successfully"})
        }
    })
})

app.get('/post',(req,res)=>{
    let qrr = 'select * from posts'
    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length>0){
            res.send({message:"all post",data:result})
        }
    })
})



// get single post by id

app.get('/post/:id',(req,res)=>{
    // console.log(req.params.id)
    let qrr = `SELECT * FROM posts WHERE id = ${req.params.id}`

    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length > 0){ 
            res.send({message:'get data by id',data:result})
        } else {
            res.send({message:'data not found'})
        }
    })
})


app.get('/userpost/:uid',(req,res)=>{
    let qrr = `select * from posts where user_id = ${req.params.uid}`

    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length>0){
            res.send({message:"this is all post by the user",data:result})
        }
        else{
            res.send({message:'data not found'})
        }
    })
})



// Post data 
app.post('/post',(req,res)=>{
    console.log(req.body)
    // let Id = req.body.id    
    let Title = req.body.title    
    let Name = req.body.pname    
    let UserId = req.body.user_id   
    
    
    let qrr = `INSERT INTO posts (title, pname, user_id) VALUE ('${Title}','${Name}','${UserId}' );`
    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({message:"Data created Successful"})
        }
    })
})



// Update data
app.put('/post/:id',(req,res)=>{
    let pId = req.params.id  // get the id    
    let Title = req.body.title    
    let Name = req.body.pname    
    let UserId = req.body.user_id    


    let qrr = `update posts set pname='${Name}', title='${Title}', user_id='${UserId}'  where id = ${pId}`
    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({message:"Data updated Successfully"})
        }
    })
})


app.delete('/post/:id',(req,res)=>{

    let qrr = `delete from posts where id = ${req.params.id}`

    db.query(qrr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else {
            res.send({message:"Data delete successfully"})
        }
    })
})
















app.listen(3000,()=>{
    console.log(`http://localhost:${3000}`)
})