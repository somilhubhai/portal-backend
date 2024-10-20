const express = require("express");
const User = require("../model/user");

const router = express.Router();

// login route
router.post("/login" , async(req , res) => {
    const { id, password, role } = req.body;
    try {
        const user = await User.findOne({ id });
        if (user.password === password && user.role === role) {
          return res.json({ success: true, user: user });
        }
    } catch (error) {
        console.log(error.message);
        return res.json({ error : error.message })
    }
});

module.exports = router;