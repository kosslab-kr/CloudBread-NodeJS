let express = require('express');
let models = require('../models');

let router = express.Router();

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
/* String::memberid = target member's id */
/* String::region = target item */
/* int::price = item price */
/* String::quantity = item quantity */
/* String::deviceID = buyer's device id */
/* String::IP = buy's ip address */
/* String::MAC = buy's MAC address */
/****************************************/
router.get("/addMemberItemPurchase", (req, res, next) => {
    let target_item_id = String(req.query.itemid);
    let target_member_id = String(req.query.memberid);
    let target_region = String(req.query.region);
    let target_price = parseInt(req.query.price);
    let target_quantity = String(req.query.quantity);
    let target_deviceID = String(req.query.deviceID);
    let target_IP = String(req.query.IP);
    let target_MAC = String(req.query.MAC);


    //find item in target's inventory
    let target_item;
    models.MemberItems.find({
        where: {
            MemberID: target_member_id,
            ItemListID: target_item_id
        }
    }).then((result) => {
        target_item = result;
    });

    let totalResult;
    if (target_item === null) {
        //item isn't present. -> insert to inventory & make purchase log
        models.MemberItems.create({
            MemberID: target_member_id,
            ItemListID: target_item_id,
            ItemCount: target_quantity,
            DataFromRegion: target_region,
            DataFromRegionDT: new Date()
        }).then((result) => {
            totalResult.miResult = result;
        });

        models.MemberItemPurchase.create({
            MemberID: target_member_id,
            ItemListID: target_item_id,
            PurchasePrice: target_price,
            PurchaseQuantity: target_quantity,
            PurchaseDeviceID: target_deviceID,
            PurchaseDeviceIPAddress: target_IP,
            PurchaseDeviceMACAddress: target_MAC,
            PurchaseDT: new Date(),
            PurchaseCancelConfirmAdminMemberID: 'Not Canceled',
            DataFromRegion: target_region,
            DataFromRegionDT: new Date()
        }).then((result) => {
            totalResult.mpResult = result;
        });

    } else {
        //item is present. -> update inventory
        models.MemberItems.update({
            ItemCount: String(parseInt(target_item.ItemCount) + parseInt(target_quantity)),
            DataFromRegion: target_region,
            DataFromRegionDT: new Date(),
            where: {
                MemberID: target_member_id,
                ItemListID: target_item_id
            }
        }).then((result) => {
            totalResult.miResult = result;
        });

        //to maintain purchase log, make new purchase log.
        models.MemberItemPurchase.create({
            MemberID: target_member_id,
            ItemListID: target_item_id,
            PurchasePrice: target_price,
            PurchaseQuantity: target_quantity,
            PurchaseDeviceID: target_deviceID,
            PurchaseDeviceIPAddress: target_IP,
            PurchaseDeviceMACAddress: target_MAC,
            PurchaseDT: new Date(),
            PurchaseCancelConfirmAdminMemberID: 'Not Canceled',
            DataFromRegion: target_region,
            DataFromRegionDT: new Date()
        }).then((result) => {
            totalResult.mpResult = result;
        });

    }


    res.json(result);
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
