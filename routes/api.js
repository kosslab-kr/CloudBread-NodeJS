const express = require('express');

const router = express.Router();

const controllers = require('../controllers');
const cbPing = require('../controllers/CBPingController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello CloudBread');
});

// router.get('ping', controllers.CBPing)
router.get('/ping', controllers.CBPingController.get);

/* To-do : 각각 컨트롤러로 구현 */
router.post('/CBAddMemberItemPurchase', controllers.CBAddMemberItemPurchaseController.Post);
router.post('/CBAddUseMemberItem', controllers.CBAddUseMemberItemController.Post);

module.exports = router;
