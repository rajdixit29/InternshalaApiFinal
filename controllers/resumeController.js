const { catchAsyncErrors } =require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { v4: uuidv4 } = require('uuid');

exports.resume = catchAsyncErrors(async(req,res,next)=>{
    const { resume } = await Student.findById(req.id).exec();
    res.json({message:"Secured Resume Page!",resume});

});
//---------------------------Education---------------------------------------------------- 


exports.addeducation = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body,id:uuidv4()});
    await student.save();
    res.json({message:"Education Added!"});

});

exports.editeducation = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const eduIndex = student.resume.education.findIndex((i)=>i.id === req.params.eduid);
    student.resume.education[eduIndex] = {...student.resume.education[eduIndex],...req.body};
    await student.save();
    res.json({message:"Education Updated!"});

});


exports.deleteeducation = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const filterededu = student.resume.education.filter((i)=>i.id !== req.params.eduid);
    student.resume.education = filterededu; 
    await student.save();
    res.json({message:"Education Deleted!"});

});
//-------------------------------------------Job------------------------------------------------

exports.addjob = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body,id:uuidv4()});
    await student.save();
    res.json({message:"Job Added!"});

});

exports.editjob = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const jobIndex = student.resume.education.findIndex((i)=>i.id === req.params.jobid);
    student.resume.education[jobIndex] = {...student.resume.education[jobIndex],...req.body};
    await student.save();
    res.json({message:"job Updated!"});

});

exports.deletejob = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredjob = student.resume.education.filter((i)=>i.id !== req.params.jobid);
    student.resume.education = filteredjob; 
    await student.save();
    res.json({message:"Education Deleted!"});

});
//-----------------------------------Internships ----------------------------------------

exports.addintern = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body,id:uuidv4()});
    await student.save();
    res.json({message:"Intern Added!"});

});

exports.editintern = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const internIndex = student.resume.education.findIndex((i)=>i.id === req.params.internid);
    student.resume.education[internIndex] = {...student.resume.education[internIndex],...req.body};
    await student.save();
    res.json({message:"Intern Updated!"});

});

exports.deleteintern= catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredintern = student.resume.education.filter((i)=>i.id !== req.params.internid);
    student.resume.education = filteredintern; 
    await student.save();
    res.json({message:"Intern Deleted!"});

});

//--------------------------------------Responsibilities-------------------------------

exports.addresponse = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body,id:uuidv4()});
    await student.save();
    res.json({message:"Responsibility Added!"});

});

exports.editresponse = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const responseIndex = student.resume.education.findIndex((i)=>i.id === req.params.responseid);
    student.resume.education[responseIndex] = {...student.resume.education[responseIndex],...req.body};
    await student.save();
    res.json({message:"Responsibility Updated!"});

});

exports.deleteresponse = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredresponse = student.resume.education.filter((i)=>i.id !== req.params.responseid);
    student.resume.education = filteredresponse; 
    await student.save();
    res.json({message:"Responsibility Deleted!"});

});

//--------------------------------------Courses-------------------------------

exports.addcourse = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body,id:uuidv4()});
    await student.save();
    res.json({message:"Course Added!"});

});

exports.editcourse = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const courseIndex = student.resume.education.findIndex((i)=>i.id === req.params.courseid);
    student.resume.education[courseIndex] = {...student.resume.education[courseIndex],...req.body};
    await student.save();
    res.json({message:"Course Updated!"});

});

exports.deletecourse = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredcourse = student.resume.education.filter((i)=>i.id !== req.params.courseid);
    student.resume.education = filteredcourse; 
    await student.save();
    res.json({message:"Course Deleted!"});

});

//--------------------------------------Projects-----------------------------------------------------


exports.addproject = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body,id:uuidv4()});
    await student.save();
    res.json({message:"Project Added!"});

});

exports.editproject = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const projectIndex = student.resume.education.findIndex((i)=>i.id === req.params.projectid);
    student.resume.education[projectIndex] = {...student.resume.education[projectIndex],...req.body};
    await student.save();
    res.json({message:"Project Updated!"});

});

exports.deleteproject = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredproject = student.resume.education.filter((i)=>i.id !== req.params.projectid);
    student.resume.education = filteredproject; 
    await student.save();
    res.json({message:"Project Deleted!"});

});

//-------------------------------------------Skills----------------------------------------------------------------------


exports.addskill = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body,id:uuidv4()});
    await student.save();
    res.json({message:"Skill Added!"});

});

exports.editskill = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const skillIndex = student.resume.education.findIndex((i)=>i.id === req.params.skillid);
    student.resume.education[skillIndex] = {...student.resume.education[skillIndex],...req.body};
    await student.save();
    res.json({message:"Skill Updated!"});

});

exports.deleteskill = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredskill = student.resume.education.filter((i)=>i.id !== req.params.skillid);
    student.resume.education = filteredskill; 
    await student.save();
    res.json({message:"Skill Deleted!"});

});

//----------------------------------------Accomplishments----------------------------------------------


exports.addaccomp = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body,id:uuidv4()});
    await student.save();
    res.json({message:"Accomplishment Added!"});

});

exports.editaccomp = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const accompIndex = student.resume.education.findIndex((i)=>i.id === req.params.accompid);
    student.resume.education[accompIndex] = {...student.resume.education[accompIndex],...req.body};
    await student.save();
    res.json({message:"Accomplishment Updated!"});

});

exports.deleteaccomp = catchAsyncErrors(async(req,res,next)=>{
    const student = await Student.findById(req.id).exec();
    const filteredaccomp = student.resume.education.filter((i)=>i.id !== req.params.accompid);
    student.resume.education = filteredaccomp; 
    await student.save();
    res.json({message:"Accomplishment Deleted!"});

});
