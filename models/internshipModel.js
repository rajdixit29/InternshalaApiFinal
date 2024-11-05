const mongoose = require("mongoose");
const { stringify } = require("uuid");



const internshipModel = new mongoose.Schema({
    students:[{type:mongoose.Schema.Types.ObjectId,ref:'student'}],
    employe:{type:mongoose.Schema.Types.ObjectId,ref:'employe'},
   profile:String,
   skill:String,
   internshiptype:{type:String,enum:["In office","Remote"]},
   openings:Number,
   from:String,
   to:String,
   duration:String,
   responsibility:String,
   stipend:{
    status:{
        type:String,
        enum:["Fixed","Negotiable","Performance based","Unpaid"],
    },
    amount:Number,
 },
 perks:String,
 assessments:String,

},
{timestamps:true}
);

const Internship = mongoose.model("internship",internshipModel);

module.exports = Internship;