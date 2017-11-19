/**
* @file CBAddMemberItemPurchaseController.js
* @brief Item purchase API include purchase info. Update MemberGameInfoes, MemberItems and MemberItemPurchases \n
* Regarding to MemberItems, select insert or update data \n
* @author Yoon Seok Hong
* @param string InsertORUpdate  - if itemid exists in MemberItem inventory, then "UPDATE". if not, "INSERT".
* @param MemberItems table object
* @param MemberItemPurchases table object
* @param MemberGameInfoes table object
* @return string "3" - affected rows.
* @see uspAddMemberItemPurchase SP, BehaviorID : B27
* @todo change SP to upsert auto method
*/

exports.Post = (req, res) => {
        
};