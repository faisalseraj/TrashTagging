const express=require('express');

const app=express();

const path= require('path');

const tagging= require('./Routes/geoTags');

const showtagging= require('./Routes/showingTags');

app.use(express.static(path.join(__dirname,"public")));

app.set('view engine' , 'pug');
app.set('views' , 'Views');


app.use("/api/v1",tagging.routes);
app.use("/api/v1",showtagging);

app.use('/', (req,res ) => {
    res.sendFile(path.join(__dirname,'Views','pageNotFound.html'));
    console.log(tagging.location);
});

app.listen(3000);
