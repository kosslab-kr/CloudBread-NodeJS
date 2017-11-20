let express = require('express');
let models = require('../models');

let router = express.Router();


let getPurchaseLog = (purchase_id) => {
    let result_purchase;
    models.MemberItemPurchase.find({
        where: { MemberItemPurchaseID: String(purchase_id) }
    }).then(result => {
        result_purchase = result;
    });

    return result;
};

let getInventoryItem = (member_id, item_id) => {
    let result_item;
    models.MemberItems.find({
        where: {
            MemberID: String(member_id),
            ItemListID: String(item_id)
        }
    }).then(result => {
        result_item = result;
    });

    return result;
};

let selectItem = function (id) {
    let target_id = String(id);

    models.ItemList.findAll({
        where: { ItemListID: target_id }
    }).then((result) => {
        return result;
    });
};


/* Router for Item Listing system */

/****************************************/
/* B23: selectItemList                       */
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
/* B26: selectItem                           */
/* param List                           */
/* String::itemid = taget item's id     */
/****************************************/
router.get("/selectItem", (req, res, next) => { 
    console.log("in selectitem");
    res.json(selectItem(req.query.itemid));
});

/****************************************/
/* B27: ItemPurchase                */
/* param List                           */
/* String::itemid = target item's id    */
/* String::memberid = target member's id */
/* String::region = target record's region  */
/* int::price = item price */
/* String::quantity = item quantity */
/* String::deviceID = buyer's device id */
/* String::IP = buy's ip address */
/* String::MAC = buy's MAC address */
/****************************************/
router.post("/ItemPurchase", (req, res, next) => {

    //get parameter from query
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
        
        let totalResult;
        if (!target_item) {
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
        res.end();

    });

});

/****************************************/
/* B30: returnItem                */
/* param List                           */
/* String::itemid = target item's id    */
/* String::memberid = target member's id */
/* String::purchaseid = returned purchase log's id */
/* String::deviceID = target's device id */
/* String::IP = target's IP address */
/* String::MAC = target's MAC adddress */
/****************************************/
router.post("/returnItem", (req, res, next) => {
    /**
     * Need Validation for implementation
     */
    let target_item_id = String(req.query.itemid);
    let target_member_id = String(req.query.memberid);
    let target_purchase_id = String(req.query.purchaseid);
    let target_device_id = String(req.query.deviceID);
    let target_ip = String(res.query.IP);
    let target_MAC = String(res.query.MAC);

    //select returned purchase
    let returned_purchase = getPurchaseLog(target_purchase_id);

    //get item from inventory
    let returned_item = getInventoryItem(target_member_id, target_item_id);

    //modify purchase record's status to returned
    models.MemberItemPurchase.update({
        PurchaseCancelYN: String('Y'),
        PurchaseCancelingStatus: String(3),
        PurchaseCancelReturnedAmount: returned_purchase.PurchasePrice,
        PurchaseCancelDeviceID: target_device_id,
        PurchaseCancelDeviceIPAddress: target_ip,
        PurchaseCancelDeviceMACAddress: target_MAC,
        where: { MemberItemPurchaseID: target_purchase_id }
    }).then(result => {
        returned_purchase = result;
    });

    //modify item's count 
    models.MemberItems.update({
        ItemCount: String(parseInt(returned_item.ItemCount) - parseInt(returned_purchase.PurchaseQuantity)),
        where: {
            MemberID: target_member_id,
            ItemListID: target_item_id
        }
    }).then(result => {
        returned_item = result;
    });

    //delete item from inventory when count <= 0
    if (returned_item.ItemCount <= 0) {
        models.MemberItems.destroy({
            where: {
                MemberID: target_member_id,
                ItemListID: target_item_id
            }
        }).then(result => {
            returned_item = {};
        });
    }

    res.end();

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
