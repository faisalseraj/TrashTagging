const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

const tags=require('../Routes/geoTags');
const location=[];
const path= require('path');
router.get('/showTaggedLocation',(req,res ) => {
    // console.log(tags.location);
    // res.sendFile(path.join(rootDir,'Views','ShowTaggedLocation.html'));
    location.push({lat:"0",long:"0"});
    res.render('ShowTaggedLocation.pug',{lat_and_long :location,Title:"Tagged Locations",path:"/api/v1/showTaggedLocation/"});
});

module.exports = router;