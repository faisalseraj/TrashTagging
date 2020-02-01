const express= require('express');
const router=express.Router();

const {getOne,
getAll,
post,
deleteGeoTag,
put }=require('../controller/geoTags');

router.post('/geotags',post);
router.get('/geotags/:geotagId',getOne);
router.get('/geotags',getAll);
router.put('/geotags',put);
router.delete('/geotags/:geotagId',deleteGeoTag);

module.exports=router;



