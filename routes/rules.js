const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("etc/rules" , {session: req.session});
});

module.exports = router;
