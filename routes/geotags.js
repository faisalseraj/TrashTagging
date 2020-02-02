const express= require('express');
const router=express.Router();

const {getOne,
getAll,
post,
deleteGeoTag,
}=require('../controller/geoTags');

router.post('/geotags',post);
router.get('/geotags/:geotagId',getOne);
router.get('/geotags',getAll);
// router.put('/geotags/:geotagId',putOne);
router.delete('/geotags/:geotagId',deleteGeoTag);

module.exports=router;



