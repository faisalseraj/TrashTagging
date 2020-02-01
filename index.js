const express= require('express');
const app=express();

const bodyParser=require('body-parser');

const geoTagrouter= require('./routes/geotags');
app.use(bodyParser.json());
// app.use((req, res, next ) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT ,PATCH ,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
//     next();
// });
app.use('/api/v1/',geoTagrouter);

app.listen(8080);