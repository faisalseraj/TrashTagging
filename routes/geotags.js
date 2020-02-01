const express= require('express');
const router=express.Router();

const {getOne,
getAll,
post,
delet,
put }=require('../controller/geoTags');

router.post('/geotags',post);
router.get('/geotags/:geotagId',getOne);
router.get('/geotags',getAll);
router.put('/geotags',put);
router.delete('/geotags',delet);

module.exports=router;



