const express = require("express");
const router = express.Router();
const {resume,addeducation,editeducation,deleteeducation ,addjob,editjob,deletejob,addintern,editintern,deleteintern,addresponse,editresponse,deleteresponse,addcourse,editcourse,deletecourse,addproject,editproject,deleteproject,addskill,editskill,deleteskill,addaccomp,editaccomp,deleteaccomp} = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");

// GET / 
router.get("/",isAuthenticated, resume);

//------------------------Education----------------------

// POST / 
router.post("/add-edu",isAuthenticated, addeducation);

// POST / 
router.post("/edit-edu/:eduid",isAuthenticated, editeducation);

// POST / 
router.post("/delete-edu/:eduid",isAuthenticated, deleteeducation);

//-----------------------Job----------------------------

//POST /
router.post("/add-job",isAuthenticated,addjob);

//POST /
router.post("/edit-job/:jobid",isAuthenticated,editjob);

//POST /
router.post("/delete-job/:jobid",isAuthenticated,deletejob);

//--------------------------------Internships-----------------------

//POST /
router.post("/add-intern",isAuthenticated,addintern);

//POST /
router.post("/edit-intern/:internid",isAuthenticated,editintern);

//POST /
router.post("/delete-intern/:internid",isAuthenticated,deleteintern);

//----------------------------------Responsibilities------------------------

//POST /
router.post("/add-response",isAuthenticated,addresponse);

//POST /
router.post("/edit-response/:responseid",isAuthenticated,editresponse);

//POST /
router.post("/delete-response/:responseid",isAuthenticated,deleteresponse);



//------------------------Courses----------------------

// POST / 
router.post("/add-course",isAuthenticated, addcourse);

// POST / 
router.post("/edit-course/:courseid",isAuthenticated, editcourse);

// POST / 
router.post("/delete-course/:courseid",isAuthenticated, deletecourse);

//-----------------------Projects----------------------------

//POST /
router.post("/add-project",isAuthenticated,addproject);

//POST /
router.post("/edit-project/:projectid",isAuthenticated,editproject);

//POST /
router.post("/delete-project/:projectid",isAuthenticated,deleteproject);

//--------------------------------Skills----------------------------------

//POST /
router.post("/add-skill",isAuthenticated,addskill);

//POST /
router.post("/edit-skill/:skillid",isAuthenticated,editskill);

//POST /
router.post("/delete-skill/:skillid",isAuthenticated,deleteskill);

//----------------------------------accomplishments------------------------

//POST /
router.post("/add-accomp",isAuthenticated,addaccomp);

//POST /
router.post("/edit-accomp/:accompid",isAuthenticated,editaccomp);

//POST /
router.post("/delete-accomp/:accompid",isAuthenticated,deleteaccomp);


module.exports = router;

//"http://localhost:8080/student/forget-link/671e7e05843b5e8a05fb559b"