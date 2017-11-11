let express = require('express');
let models = require('../models');

let router = express.Router();

/* function for data processing */
let newid = function (table, pk) {
    table.findAll({
        attributes: pk,
        order: pk + ' DESC',
        limit: 1
    }).then((result) => {
        result.
    });
};

/* Router for Item Listing system */

/****************************************/
/* selectItemList                       */
/* param List                           */
/* int::page = Number of Page to lookup */
/* String::memberid = taget member's id */
/****************************************/
router.get("/selectItemList", (req, res, next) => {
    let page = parseInt(req.query.page);
    let target_id = String(req.query.memberid);

    models.MemberItems.findAll({
        where: { MemberID: target_id }
    }).then((result) => {
        res.json(result);
    });
    
});

/****************************************/
/* selectItem                           */
/* param List                           */
/* String::itemid = taget item's id     */
/****************************************/
let selectItem = function (id) {
    let target_id = String(id);

    models.ItemList.findAll({
        where: { ItemListID: target_id }
    }).then((result) => {
        return result;
    });
};

router.get("/selectItem", (req, res, next) => { 
    console.log("in selectitem");
    res.json(selectItem(req.query.itemid));
});


/****************************************/
/* addMemberItemPurchase                */
/* param List                           */
/* String::itemid = target item's id    */
/* String::memberid = taget member's id */
/****************************************/
router.get("/addMemberItemPurchase", (req, res, next) => {
    let target_item_id = String(req.query.itemid);
    let target_member_id = String(req.query.memberid);

    let target_item = selectItem(req.query.itemid);

    if (target_item === null) {
        //item isn't present. -> insert
        models.MemberItems.create()

    } else {
        //item is present. -> update

    }
});

/* Implement message router here */
router.get("/get", (req, res, next) => {
    res.send("Item Listing GET Test");
});

/* if request route that is not implemented */
router.use((req, res, next) => {
    res.send("ERR 0000:There's no route for that request");
});

module.exports = router;
