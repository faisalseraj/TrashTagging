const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

const tags=require('../Routes/geoTags');

const path= require('path');
router.get('/showTaggedLocation',(req,res ) => {
    console.log(tags.location);
    res.sendFile(path.join(rootDir,'Views','ShowTaggedLocation.html'));
});

module.exports = router;