let express = require('express');
let models = require('../models');
let router = express.Router();

/* Router for Log In system */

/* Implement message router here */
router.get("/get", (req, res, next) => {
    res.send("Login GET Test");
});

/*SelLoginIDDupeCheck Implementation*/
router.get("/SelLoginIDDupeCheck", (req, res, next) => {
    const FindID = String(req.query.memberID);

    models.Member.findAll({
      where: {MemberID: FindID}
    }).then((result) => {

    if (result.length === 0) {
        const Result = {
            result : "1"
        };
        const Result_json = JSON.stringify(Result);
        res.send(Result_json);
    } else {
        const Result = {
            result : "0"
        };
        const Result_json = JSON.stringify(Result);
        res.send(Result_json);
    }

  });
});

/* if request route that is not implemented */
router.use((req, res, next) => {
    res.send("ERR 0000:There's no route for that request");
});

module.exports = router;
