
exports.getOne=(req,res) => {
   
    res.status(200).json({
        getOne: [{Note:"REST API for getOne Location against an Id ", Id:req.params.geotagId}]
    });
};

exports.getAll=(req,res,next) => {
    const offset=req.query.offset;
    const limit=req.query.limit;

    res.status(200).json({
        getAll: [{Note:"REST API for getting Limited Tagged geoLocations where ",offset:offset,limit:limit }]
        
    });
};

exports.post=(req,res,next) => {
    res.status(200).json({
        posts: [{title:"This is first Title for Post", content:"This is first Content for Post"}]
    });
};

exports.put=(req,res,next) => {
    res.status(200).json({
        posts: [{Description:"This is Api for put end point of api/v1/geotags"}]
    });
};

exports.delet=(req,res,next) => {
    res.status(200).json({
        posts: [{Description:"This is Api for delete end point of api/v1/geotags"}]
    });
};