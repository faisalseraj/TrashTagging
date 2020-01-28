const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const path= require('path');
const bodyParser= require('body-parser');

router.use(bodyParser.urlencoded({extended:false}));

let location=[];
router.get('/geotags', (req,res) => {
    res.sendFile(path.join(rootDir,'Views','GeoTags.html'));
});

router.post('/geotags', (req,res) => {
    location=[];
    location.push( {lat:req.body.latitude,long:req.body.longitude});
    
    // res.sendFile(path.join(rootDir,'Views','ShowTaggedLocation.html'));
    res.render('showTaggedLocation.pug',{lat_and_long:location});
});




exports.routes = router;
exports.location = location;