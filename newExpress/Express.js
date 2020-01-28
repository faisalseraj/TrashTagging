//const http=require('http');
const express= require('express');
const bodyParser=require('body-parser');
const app= new express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next) => {
    res.send("This is Add Product page");
});
app.use("/product",(req,res,next) => {
    res.send(req.body);
    
});
app.use("/", (req,res,next) => {
    res.send("In the MiddleWre");
});
//const server= http.createServer(app)
app.listen(3000);

