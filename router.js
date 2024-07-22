const express=require('express');
const router=express.Router();
const {getp,postpost,postt,putpost,deletepost}=require("./controllers");

router.use(express.urlencoded({extended:false}));
router.use(express.json())

/*router.get("/",getp)
router.post("/postman",postpost)
router.post("/",postt)
router.put("/:id",putpost)
router.delete("/:id",deletepost)*/

router.route("/").get(getp).post(postt)
router.route("/:id").put(putpost).delete(deletepost)
router.route("/postman").post(postpost)

module.exports=router;