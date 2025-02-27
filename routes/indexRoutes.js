const express = require("express");
const router = express.Router();

const {homepage,currentUser,studentsignup,studentsignin,studentsignout,studentsendmail,studentforgetlink,studentresetpassword,studentupdate,studentavatar,applyjob,applyinternship} = require("../controllers/indexController");
const { isAuthenticated } = require("../middlewares/auth");

// GET / 
router.get("/", homepage);

// POST / student
router.post("/student", isAuthenticated , currentUser);

//POST /student/signup
router.post("/student/signup",studentsignup);

//POST /student/signin
router.post("/student/signin",studentsignin);

//GET /student/signout
router.get("/student/signout",isAuthenticated,studentsignout);

//POST /student/send-mail
router.post("/student/send-mail",isAuthenticated,studentsendmail);

//GET /student/forget-link/:studentid
router.get("/student/forget-link/:id",studentforgetlink);

//POST /student/reset-password/:studentid
router.post("/student/reset-password/:id",isAuthenticated,studentresetpassword);

//POST /student/update/:studentid
router.post("/student/update/:id",isAuthenticated,studentupdate);

//POST /student/avatar/:studentid
router.post("/student/avatar/:id",isAuthenticated,studentavatar);

//---------------------------apply internship------------------------

//POST /student/apply/internship/:internshipid
router.post("/student/apply/internship/:internshipid",isAuthenticated,applyinternship);


//---------------------------apply job------------------------------
//POST /student/apply/job/:jobid
router.post("/student/apply/job/:jobid",isAuthenticated,applyjob);


//---------------------------apply job------------------------------

module.exports = router;

//"http://localhost:8080/student/forget-link/671e7e05843b5e8a05fb559b"