let express = require('express');
let router = express.Router();

/* Router for Table Procedure system */

/* Implement message router here */
router.get("/get", (req, res, next) => {
    res.send("Table Procedure GET Test");
});

/* if request route that is not implemented */
router.use((req, res, next) => {
    res.send("ERR 0000:There's no route for that request");
});

module.exports = router;
