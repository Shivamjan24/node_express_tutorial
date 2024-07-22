let {people}=require("./data.js");

const postpost=(req,res)=>{
    const {name}=req.body;
    if(!name)
    {
        return res.status(400).json({success:false,message:"no content in the name field of post request"})
    }
    else
    {
        res.status(201).json({success:true,data:{name:name}});
    }
}

const getp=(req,res)=>{
    res.status(200).json({success:true,data:people});
}

const postt=(req,res)=>{
    const {name,id}=req.body;
    if(!name)
    {
        return res.status(400).json({success:false,message:"no content in name field of post request body"})
    }
    else
    {
        return res.status(201).json({success:true,data:[...people,{name:name,id:Number(id)}]});
    }
}

const putpost=(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    if(!name)
    {
        return res.status(400).json({success:false,message:"no content in the name field of post request to update the existing value"});
    }
    else
    {
        const person=people.map((pers)=>{
            if(pers.id===Number(id))
                pers.name=name;
            return pers;
        })
        return res.status(201).json({success:true,data:person});
    }
}

const deletepost=(req,res)=>{
    const {id}=req.params;
    const person=people.filter((pers)=>{
        if(pers.id!==Number(id))
            return pers;
    })
    return res.status(201).json({success:true,data:person});
}

module.exports={getp,postpost,postt,putpost,deletepost};
