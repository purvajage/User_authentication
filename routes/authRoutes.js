const express=require("express");
const router=express.Router();
const authcontroller=require("../controllers/authcontroller");
const authMiddleware=require("../middlewares/authmiddleware");
router.post('/register', authcontroller.registeruser);
router.post('/login', authcontroller.loginUser);
router.get('/protected', authmiddleware.authenticate, (req, res) => {
    res.json({ message: 'You have access!' });
});

module.exports = router;