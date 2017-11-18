const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);
const db = require('./models');

// sequelize.Sequelize.Promise.all([
// 	db.MemberItemPurchase.belongsTo(db.Member,{
// 		foreignKey : 'MemberID',
// 		targetKey : 'MemberID'
// 	}),
// 	db.MemberItemPurchase.belongsTo(db.ItemList, {
// 		foreignKey : 'ItemListID', 
// 		targetKey : 'ItemListID'
// 	}),
// 	db.MemberItems.belongsTo(db.Member, {
// 		foreignKey : 'MemberID', 
// 		targetKey : 'MemberID'
// 	}),
// 	db.MemberItems.belongsTo(db.ItemList, {
// 		foreignKey : 'ItemListID', 
// 		targetKey : 'ItemListID'
// 	}),
// 	db.MemberGameInfoStages.belongsTo(db.Member, {
// 		foreignKey : 'MemberID', 
// 		targetKey : 'MemberID'
// 	}),
// 	db.GiftDepository.belongsTo(db.ItemList, {
// 		foreignKey : 'ItemListID',
// 		targetKey : 'ItemListID'
// 	}),
// 	db.GiftDepository.belongsTo(db.Member, {
// 		foreignKey : 'FromMemberID',
// 		targetKey : 'MemberID'	
// 	}),
// 	db.GiftDepository.belongsTo(db.Member,{
// 		foreignKey : 'ToMemberID',
// 		targetKey : 'MemberID'
// 	}),
// 	db.GameEvents.belongsTo(db.ItemList,{
// 		foreignKey : 'ItemListID',
// 		targetKey : 'ItemListID'
// 	}),
// 	db.Coupon.belongsTo(db.ItemList,{
// 		foreignKey : 'ItemListID',
// 		targetKey : 'ItemListID'
// 	}),
// 	db.CouponMember.belongsTo(db.Coupon,{
// 		foreignKey : 'CouponID',
// 		targetKey : 'CouponID'
// 	}),
// 	db.CouponMember.belongsTo(db.Member,{
// 		foreignKey : 'MemberID',
// 		targetKey : 'MemberID'
// 	}),
// 	db.MemberAccountBlockLog.belongsTo(db.Member,{
// 		foreignKey : 'MemberID',
// 		targetKey : 'MemberID'
// 	})
// 	])
// 	.catch(function(err){
// 		console.log(err);
// 	})

sequelize.Sequelize.Promise.all([
	db.Member.sync(),
	db.AdminMember.sync(),
	db.ItemList.sync(),
	db.MemberItems.sync(),
	db.MemberGameInfo.sync(),
	db.MemberGameInfoStages.sync(),
	db.MemberAccountBlockLog.sync(),
	db.MemberItemPurchase.sync(),
	db.Coupon.sync(),
	db.CouponMember.sync(),
	db.GameEvents.sync(),
	db.GiftDepository.sync(),
	db.Notices.sync(),
	db.ServerInfo.sync(),
	db.StatData.sync()
	
	])