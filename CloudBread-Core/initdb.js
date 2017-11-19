const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);
const db = require('./models');

	sequelize.Sequelize.Promise.all([
		db.Member.hasMany(db.MemberItems, {
			foreignKey : 'MemberID', 
			targetKey : 'MemberID'
		}),
		db.ItemList.hasMany(db.MemberItems, {
			foreignKey : 'ItemListID', 
			targetKey : 'ItemListID'
		}),
		db.Member.hasMany(db.MemberGameInfoStages, {
			foreignKey : 'MemberID', 
			targetKey : 'MemberID'
		}),
		db.ItemList.hasMany(db.GiftDepository, {
			foreignKey : 'ItemListID',
			targetKey : 'ItemListID'
		}),
		db.Member.hasMany(db.GiftDepository, {
			foreignKey : 'FromMemberID',
			targetKey : 'MemberID'	
		}),
		db.Member.hasMany(db.GiftDepository,{
			foreignKey : 'ToMemberID',
			targetKey : 'MemberID'
		}),
		db.ItemList.hasMany(db.GameEvents,{
			foreignKey : 'ItemListID',
			targetKey : 'ItemListID'
		}),
		db.ItemList.hasMany(db.Coupon,{
			foreignKey : 'ItemListID',
			targetKey : 'ItemListID'
		}),
		db.Coupon.hasMany(db.CouponMember,{
			foreignKey : 'CouponID',
			targetKey : 'CouponID'
		}),
		db.Member.hasMany(db.CouponMember,{
			foreignKey : 'MemberID',
			targetKey : 'MemberID'
		}),
		db.Member.hasMany(db.MemberAccountBlockLog,{
			foreignKey : 'MemberID',
			targetKey : 'MemberID'
		}),
		db.ItemList.hasMany(db.MemberItemPurchase, {
			foreignKey : 'ItemListID', 
			targetKey : 'ItemListID'
		}),
		db.Member.hasMany(db.MemberItemPurchase, {
			foreignKey : 'MemberID',
			targetKey : 'MemberID'
		}),
		db.Member.hasMany(db.GameEventMember,{
			foreignKey : 'MemberID',
			targetKey : 'MemberID'
		}),
		db.Member.sync(),
		db.AdminMember.sync(), 
		db.ItemList.sync(),    
		db.Notices.sync(),
		db.ServerInfo.sync(), 
		db.StatData.sync(),
		db.MemberGameInfo.sync(),
		db.MemberGameInfoStages.sync(),
		db.MemberAccountBlockLog.sync(),
		db.MemberItemPurchase.sync(),  
		db.MemberItems.sync(),
		db.GiftDepository.sync(),
		db.GameEvents.sync(),
		db.GameEventMember.sync(),  
		db.Coupon.sync(), // 2
		db.CouponMember.sync(),

		
		////Sample insert

		//Member
		db.Member.create({MemberID:'aaa', MemberPWD:'MemberPWD', EmailAddress:'aaa@aa.com', EmailConfirmedYN:'Y', PhoneNumber1:'PhoneNumber1', PhoneNumber2:'PhoneNumber2', PINumber:'PINumber', Name1:'aaa', Name2:'Name2', Name3:'Name3', DOB:'19900101', RecommenderID:'RecommenderID', MemberGroup:'MemberGropu', LastDeviceID:'LastDeviceID', LastIPaddress:'LastIPaddress', LastLoginDT: sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), LastMACAddress:'LastMACAddress', AccountBlockYN:'N', AccountBlockEndDT:'1900-01-01', AnonymousYN:'N', ThirdAuthProvider : '3rdAuthProvider' , ThirdAuthID: '3rdAuthIDaaa', ThirdAuthParam:'3rdAuthParam', PushNotificationID:'PushNotisficationID', PushNotificationProvider:'PushNotificationProvider', PushNotificationGroup:'PushNotificationGroup', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', TimeZoneID:'Korea Standard Time', DataFromRegion: '', DataFromRegionDT:sequelize.fn('GETDATE')}),
		db.Member.create({MemberID:'bbb', MemberPWD:'MemberPWD', EmailAddress:'bbb@aa.com', EmailConfirmedYN:'Y', PhoneNumber1:'PhoneNumber1', PhoneNumber2:'PhoneNumber2', PINumber:'PINumber', Name1:'bbb', Name2:'Name2', Name3:'Name3', DOB:'19900101', RecommenderID:'RecommenderID', MemberGroup:'MemberGropu', LastDeviceID:'LastDeviceID', LastIPaddress:'LastIPaddress', LastLoginDT: sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), LastMACAddress:'LastMACAddress', AccountBlockYN:'N', AccountBlockEndDT:'1900-01-01', AnonymousYN:'N', ThirdAuthProvider : '3rdAuthProvider' , ThirdAuthID: '3rdAuthIDaaa', ThirdAuthParam:'3rdAuthParam', PushNotificationID:'PushNotisficationID', PushNotificationProvider:'PushNotificationProvider', PushNotificationGroup:'PushNotificationGroup', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', TimeZoneID:'Korea Standard Time', DataFromRegion: '', DataFromRegionDT:sequelize.fn('GETDATE')}),
		db.Member.create({MemberID:'ccc', MemberPWD:'MemberPWD', EmailAddress:'ccc@aa.com', EmailConfirmedYN:'Y', PhoneNumber1:'PhoneNumber1', PhoneNumber2:'PhoneNumber2', PINumber:'PINumber', Name1:'ccc', Name2:'Name2', Name3:'Name3', DOB:'19900101', RecommenderID:'RecommenderID', MemberGroup:'MemberGropu', LastDeviceID:'LastDeviceID', LastIPaddress:'LastIPaddress', LastLoginDT: sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), LastMACAddress:'LastMACAddress', AccountBlockYN:'N', AccountBlockEndDT:'1900-01-01', AnonymousYN:'N', ThirdAuthProvider : '3rdAuthProvider' , ThirdAuthID: '3rdAuthIDaaa', ThirdAuthParam:'3rdAuthParam', PushNotificationID:'PushNotisficationID', PushNotificationProvider:'PushNotificationProvider', PushNotificationGroup:'PushNotificationGroup', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', TimeZoneID:'Korea Standard Time', DataFromRegion: '', DataFromRegionDT:sequelize.fn('GETDATE')}),
		db.Member.create({MemberID:'ddd', MemberPWD:'MemberPWD', EmailAddress:'ddd@aa.com', EmailConfirmedYN:'Y', PhoneNumber1:'PhoneNumber1', PhoneNumber2:'PhoneNumber2', PINumber:'PINumber', Name1:'ddd', Name2:'Name2', Name3:'Name3', DOB:'19900101', RecommenderID:'RecommenderID', MemberGroup:'MemberGropu', LastDeviceID:'LastDeviceID', LastIPaddress:'LastIPaddress', LastLoginDT: sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), LastMACAddress:'LastMACAddress', AccountBlockYN:'N', AccountBlockEndDT:'1900-01-01', AnonymousYN:'N', ThirdAuthProvider : '3rdAuthProvider' , ThirdAuthID: '3rdAuthIDaaa', ThirdAuthParam:'3rdAuthParam', PushNotificationID:'PushNotisficationID', PushNotificationProvider:'PushNotificationProvider', PushNotificationGroup:'PushNotificationGroup', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', TimeZoneID:'Korea Standard Time', DataFromRegion: '', DataFromRegionDT:sequelize.fn('GETDATE')}),
		db.Member.create({MemberID:'eee', MemberPWD:'MemberPWD', EmailAddress:'eee@aa.com', EmailConfirmedYN:'Y', PhoneNumber1:'PhoneNumber1', PhoneNumber2:'PhoneNumber2', PINumber:'PINumber', Name1:'eee', Name2:'Name2', Name3:'Name3', DOB:'19900101', RecommenderID:'RecommenderID', MemberGroup:'MemberGropu', LastDeviceID:'LastDeviceID', LastIPaddress:'LastIPaddress', LastLoginDT: sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), LastMACAddress:'LastMACAddress', AccountBlockYN:'N', AccountBlockEndDT:'1900-01-01', AnonymousYN:'N', ThirdAuthProvider : '3rdAuthProvider' , ThirdAuthID: '3rdAuthIDaaa', ThirdAuthParam:'3rdAuthParam', PushNotificationID:'PushNotisficationID', PushNotificationProvider:'PushNotificationProvider', PushNotificationGroup:'PushNotificationGroup', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', TimeZoneID:'Korea Standard Time', DataFromRegion: '', DataFromRegionDT:sequelize.fn('GETDATE')}),

		//ItemList
		db.ItemList.create({ItemListID:'itemid1', ItemName:'ItemName1', ItemDescription:'ItemDescription', ItemPrice:'10', ItemSellPrice:'10', ItemCategory1:'ItemCategory1', ItemCategory2:'ItemCategory2', ItemCategory3:'ItemCategory3', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', ItemCreateAdminID:'IteamCreateAdminID', ItemUpdateAdminID:'IteamUpdateAdminID', HideYN:"N", DeleteYN:"N"}),
		db.ItemList.create({ItemListID:'itemid2', ItemName:'ItemName2', ItemDescription:'ItemDescription', ItemPrice:'10', ItemSellPrice:'10', ItemCategory1:'ItemCategory1', ItemCategory2:'ItemCategory2', ItemCategory3:'ItemCategory3', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', ItemCreateAdminID:'IteamCreateAdminID', ItemUpdateAdminID:'IteamUpdateAdminID', HideYN:"N", DeleteYN:"N"}),
		db.ItemList.create({ItemListID:'itemid3', ItemName:'ItemName3', ItemDescription:'ItemDescription', ItemPrice:'10', ItemSellPrice:'10', ItemCategory1:'ItemCategory1', ItemCategory2:'ItemCategory2', ItemCategory3:'ItemCategory3', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', ItemCreateAdminID:'IteamCreateAdminID', ItemUpdateAdminID:'IteamUpdateAdminID', HideYN:"N", DeleteYN:"N"}),
		db.ItemList.create({ItemListID:'itemid4', ItemName:'ItemName4', ItemDescription:'ItemDescription', ItemPrice:'10', ItemSellPrice:'10', ItemCategory1:'ItemCategory1', ItemCategory2:'ItemCategory2', ItemCategory3:'ItemCategory3', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', ItemCreateAdminID:'IteamCreateAdminID', ItemUpdateAdminID:'IteamUpdateAdminID', HideYN:"N", DeleteYN:"N"}),
	

		//GiftDepository
		db.GiftDepository.create({GiftDepositoryID:'GiftID1', ItemListID:'itemid1', ItemCount:'1', FromMemberID:'bbb', ToMemberID:'aaa', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', SentMemberYN:'N', HideYN:'N', DeleteYN:'N'}),
		db.GiftDepository.create({GiftDepositoryID:'GiftID2', ItemListID:'itemid1', ItemCount:'2', FromMemberID:'ccc', ToMemberID:'aaa', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', SentMemberYN:'N', HideYN:'N', DeleteYN:'N'}),
		db.GiftDepository.create({GiftDepositoryID:'GiftID3', ItemListID:'itemid2', ItemCount:'3', FromMemberID:'bbb', ToMemberID:'aaa', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', SentMemberYN:'N', HideYN:'N', DeleteYN:'N'}),
		db.GiftDepository.create({GiftDepositoryID:'GiftID4', ItemListID:'itemid2', ItemCount:'4', FromMemberID:'ccc', ToMemberID:'bbb', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', SentMemberYN:'N', HideYN:'N', DeleteYN:'N'}),


		//MemberItems
		db.MemberItems.create({MemberItemID:'MemberItemsID1', MemberID:'aaa', ItemListID:'itemid1', ItemCount:'1', ItemStatus:'ItemStatus', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:"N", DeleteYN:"N"}),
		db.MemberItems.create({MemberItemID:'MemberItemsID2', MemberID:'aaa', ItemListID:'itemid2', ItemCount:'1', ItemStatus:'ItemStatus', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:"N", DeleteYN:"N"}),
		db.MemberItems.create({MemberItemID:'MemberItemsID3', MemberID:'aaa', ItemListID:'itemid3', ItemCount:'1', ItemStatus:'ItemStatus', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:"N", DeleteYN:"N"}),
		db.MemberItems.create({MemberItemID:'MemberItemsID4', MemberID:'bbb', ItemListID:'itemid1', ItemCount:'1', ItemStatus:'ItemStatus', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:"N", DeleteYN:"N"}),
		db.MemberItems.create({MemberItemID:'MemberItemsID5', MemberID:'aaa', ItemListID:'itemid4', ItemCount:'1', ItemStatus:'ItemStatus', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:"N", DeleteYN:"N"}),
																																																																									 

		//MemberGameInfo
		db.MemberGameInfo.create({MemberID:'aaa', Level:'10', Exps:'10', Points:'10', UserSTAT1:'UserSTAT1', UserSTAT2:'UserSTAT2', UserSTAT3:'UserSTAT3', UserSTAT4:'UserSTAT4', UserSTAT5:'UserSTAT5', UserSTAT6:'UserSTAT6', UserSTAT7:'UserSTAT7', UserSTAT8:'UserSTAT8', UserSTAT9:'UserSTAT9', UserSTAT10:'UserSTAT10', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.MemberGameInfo.create({MemberID:'bbb', Level:'20', Exps:'20', Points:'20', UserSTAT1:'UserSTAT1', UserSTAT2:'UserSTAT2', UserSTAT3:'UserSTAT3', UserSTAT4:'UserSTAT4', UserSTAT5:'UserSTAT5', UserSTAT6:'UserSTAT6', UserSTAT7:'UserSTAT7', UserSTAT8:'UserSTAT8', UserSTAT9:'UserSTAT9', UserSTAT10:'UserSTAT10', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.MemberGameInfo.create({MemberID:'ccc', Level:'30', Exps:'30', Points:'30', UserSTAT1:'UserSTAT1', UserSTAT2:'UserSTAT2', UserSTAT3:'UserSTAT3', UserSTAT4:'UserSTAT4', UserSTAT5:'UserSTAT5', UserSTAT6:'UserSTAT6', UserSTAT7:'UserSTAT7', UserSTAT8:'UserSTAT8', UserSTAT9:'UserSTAT9', UserSTAT10:'UserSTAT10', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.MemberGameInfo.create({MemberID:'ddd', Level:'40', Exps:'40', Points:'40', UserSTAT1:'UserSTAT1', UserSTAT2:'UserSTAT2', UserSTAT3:'UserSTAT3', UserSTAT4:'UserSTAT4', UserSTAT5:'UserSTAT5', UserSTAT6:'UserSTAT6', UserSTAT7:'UserSTAT7', UserSTAT8:'UserSTAT8', UserSTAT9:'UserSTAT9', UserSTAT10:'UserSTAT10', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
					

		//MemberItemPurchase
		db.MemberItemPurchase.create({MemberItemPurchaseID:'MemberItemPurchasesID1', MemberID:'aaa', ItemListID:'itemid1', PurchaseQuantity:'10', PurchasePrice:'10', PGinfo1:'PGinfo1', PGinfo2:'PGinfo2', PGinfo3:'PGinfo3', PGinfo4:'PGinfo4', PGinfo5:'PGinfo5', PurchaseDeviceID:'PurchaseDeviceID', PurchaseDeviceIPAddress:'PurchaseDeviceIPAddress', PurchaseDeviceMACAddress:'PurchaseDeviceMACAddress', PurchaseDT:sequelize.fn('GETDATE'), PurchaseCancelYN:'N', PurchaseCancelDT:'1900-01-01', PurchaseCancelingStatus:'ok', PurchaseCancelReturnedAmount:'100', PurchaseCancelDeviceID:'PurchaseCancelDeviceID', PurchaseCancelDeviceIPAddress:'PurchaseCancelDeviceIPAddress', PurchaseCancelDeviceMACAddress:'PurchaseCancelDeviceMACAddress', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N', PurchaseCancelConfirmAdminMemberID:'admin1', DataFromRegionDT:'1900-01-01'}),
		db.MemberItemPurchase.create({MemberItemPurchaseID:'MemberItemPurchasesID2', MemberID:'aaa', ItemListID:'itemid2', PurchaseQuantity:'10', PurchasePrice:'10', PGinfo1:'PGinfo1', PGinfo2:'PGinfo2', PGinfo3:'PGinfo3', PGinfo4:'PGinfo4', PGinfo5:'PGinfo5', PurchaseDeviceID:'PurchaseDeviceID', PurchaseDeviceIPAddress:'PurchaseDeviceIPAddress', PurchaseDeviceMACAddress:'PurchaseDeviceMACAddress', PurchaseDT:sequelize.fn('GETDATE'), PurchaseCancelYN:'N', PurchaseCancelDT:'1900-01-01', PurchaseCancelingStatus:'ok', PurchaseCancelReturnedAmount:'100', PurchaseCancelDeviceID:'PurchaseCancelDeviceID', PurchaseCancelDeviceIPAddress:'PurchaseCancelDeviceIPAddress', PurchaseCancelDeviceMACAddress:'PurchaseCancelDeviceMACAddress', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N', PurchaseCancelConfirmAdminMemberID:'admin1', DataFromRegionDT:'1900-01-01'}),
		db.MemberItemPurchase.create({MemberItemPurchaseID:'MemberItemPurchasesID3', MemberID:'aaa', ItemListID:'itemid3', PurchaseQuantity:'10', PurchasePrice:'10', PGinfo1:'PGinfo1', PGinfo2:'PGinfo2', PGinfo3:'PGinfo3', PGinfo4:'PGinfo4', PGinfo5:'PGinfo5', PurchaseDeviceID:'PurchaseDeviceID', PurchaseDeviceIPAddress:'PurchaseDeviceIPAddress', PurchaseDeviceMACAddress:'PurchaseDeviceMACAddress', PurchaseDT:sequelize.fn('GETDATE'), PurchaseCancelYN:'N', PurchaseCancelDT:'1900-01-01', PurchaseCancelingStatus:'ok', PurchaseCancelReturnedAmount:'100', PurchaseCancelDeviceID:'PurchaseCancelDeviceID', PurchaseCancelDeviceIPAddress:'PurchaseCancelDeviceIPAddress', PurchaseCancelDeviceMACAddress:'PurchaseCancelDeviceMACAddress', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N', PurchaseCancelConfirmAdminMemberID:'admin1', DataFromRegionDT:'1900-01-01'}),
		db.MemberItemPurchase.create({MemberItemPurchaseID:'MemberItemPurchasesID4', MemberID:'ccc', ItemListID:'itemid1', PurchaseQuantity:'10', PurchasePrice:'10', PGinfo1:'PGinfo1', PGinfo2:'PGinfo2', PGinfo3:'PGinfo3', PGinfo4:'PGinfo4', PGinfo5:'PGinfo5', PurchaseDeviceID:'PurchaseDeviceID', PurchaseDeviceIPAddress:'PurchaseDeviceIPAddress', PurchaseDeviceMACAddress:'PurchaseDeviceMACAddress', PurchaseDT:sequelize.fn('GETDATE'), PurchaseCancelYN:'N', PurchaseCancelDT:'1900-01-01', PurchaseCancelingStatus:'ok', PurchaseCancelReturnedAmount:'100', PurchaseCancelDeviceID:'PurchaseCancelDeviceID', PurchaseCancelDeviceIPAddress:'PurchaseCancelDeviceIPAddress', PurchaseCancelDeviceMACAddress:'PurchaseCancelDeviceMACAddress', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N', PurchaseCancelConfirmAdminMemberID:'admin1', DataFromRegionDT:'1900-01-01'}),


		//AdminMembers
		db.AdminMember.create({AdminMemberID:'admin1', AdminMemberPWD:'AdminMemberPWD', AdminMemberEmail:'admin1@abc.com', IDCreateAdminMember:'admin1', AdminGroup:'AdminGroup', TimeZoneID:'Korea Standard Time', PINumber:'PINumber', Name1:'Name1', Name2:'Name2', Name3:'Name3', DOB:'19991212', LastIPaddress:'LastIPaddress', LastLoginDT:sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.AdminMember.create({AdminMemberID:'admin2', AdminMemberPWD:'AdminMemberPWD', AdminMemberEmail:'admin2@abc.com', IDCreateAdminMember:'admin1', AdminGroup:'AdminGroup', TimeZoneID:'Korea Standard Time', PINumber:'PINumber', Name1:'Name1', Name2:'Name2', Name3:'Name3', DOB:'19991212', LastIPaddress:'LastIPaddress', LastLoginDT:sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),																																																						
		db.AdminMember.create({AdminMemberID:'admin3', AdminMemberPWD:'AdminMemberPWD', AdminMemberEmail:'admin3@abc.com', IDCreateAdminMember:'admin2', AdminGroup:'AdminGroup', TimeZoneID:'Korea Standard Time', PINumber:'PINumber', Name1:'Name1', Name2:'Name2', Name3:'Name3', DOB:'19991212', LastIPaddress:'LastIPaddress', LastLoginDT:sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.AdminMember.create({AdminMemberID:'admin4', AdminMemberPWD:'AdminMemberPWD', AdminMemberEmail:'admin4@abc.com', IDCreateAdminMember:'admin2', AdminGroup:'AdminGroup', TimeZoneID:'Korea Standard Time', PINumber:'PINumber', Name1:'Name1', Name2:'Name2', Name3:'Name3', DOB:'19991212', LastIPaddress:'LastIPaddress', LastLoginDT:sequelize.fn('GETDATE'), LastLogoutDT:sequelize.fn('GETDATE'), sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),


		//MemberGameInfoStages
		db.MemberGameInfoStages.create({MemberGameInfoStageID:'MemberGameInfoStageID1', MemberID:'aaa', StageName:'StageName1', StageStatus:'StageStatus', Category1:'Category1', Category2:'Category2', Category3:'Category3', Mission1:'Mission1', Mission2:'Mission2', Mission3:'Mission3', Mission4:'Mission4', Mission5:'Mission5', Points:'100', StageStat1:'StageStat1', StageStat2:'StageStat2', StageStat3:'StageStat3', StageStat4:'StageStat4', StageStat5:'StageStat5', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.MemberGameInfoStages.create({MemberGameInfoStageID:'MemberGameInfoStageID2', MemberID:'aaa', StageName:'StageName2', StageStatus:'StageStatus', Category1:'Category1', Category2:'Category2', Category3:'Category3', Mission1:'Mission1', Mission2:'Mission2', Mission3:'Mission3', Mission4:'Mission4', Mission5:'Mission5', Points:'100', StageStat1:'StageStat1', StageStat2:'StageStat2', StageStat3:'StageStat3', StageStat4:'StageStat4', StageStat5:'StageStat5', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.MemberGameInfoStages.create({MemberGameInfoStageID:'MemberGameInfoStageID3', MemberID:'aaa', StageName:'StageName3', StageStatus:'StageStatus', Category1:'Category1', Category2:'Category2', Category3:'Category3', Mission1:'Mission1', Mission2:'Mission2', Mission3:'Mission3', Mission4:'Mission4', Mission5:'Mission5', Points:'100', StageStat1:'StageStat1', StageStat2:'StageStat2', StageStat3:'StageStat3', StageStat4:'StageStat4', StageStat5:'StageStat5', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.MemberGameInfoStages.create({MemberGameInfoStageID:'MemberGameInfoStageID4', MemberID:'bbb', StageName:'StageName1', StageStatus:'StageStatus', Category1:'Category1', Category2:'Category2', Category3:'Category3', Mission1:'Mission1', Mission2:'Mission2', Mission3:'Mission3', Mission4:'Mission4', Mission5:'Mission5', Points:'100', StageStat1:'StageStat1', StageStat2:'StageStat2', StageStat3:'StageStat3', StageStat4:'StageStat4', StageStat5:'StageStat5', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),


		//Notices
		db.Notices.create({NoticeID:'NoticeID1', NoticeCategory1:'NoticeCategory1', NoticeCategory2:'NoticeCategory2', NoticeCategory3:'NoticeCategory3', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', NoticeImageLink:'NoticeImageLink', title:'title1', content:'content',sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', NoticeDurationFrom:'2015-03-01', NoticeDurationTo:'2025-04-01', OrderNumber:0, CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.Notices.create({NoticeID:'NoticeID2', NoticeCategory1:'NoticeCategory1', NoticeCategory2:'NoticeCategory2', NoticeCategory3:'NoticeCategory3', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', NoticeImageLink:'NoticeImageLink', title:'title2', content:'content',sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', NoticeDurationFrom:'2015-03-01', NoticeDurationTo:'2025-04-01', OrderNumber:0, CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.Notices.create({NoticeID:'NoticeID3', NoticeCategory1:'NoticeCategory1', NoticeCategory2:'NoticeCategory2', NoticeCategory3:'NoticeCategory3', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', NoticeImageLink:'NoticeImageLink', title:'title3', content:'content',sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', NoticeDurationFrom:'2015-03-01', NoticeDurationTo:'2025-04-01', OrderNumber:0, CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.Notices.create({NoticeID:'NoticeID4', NoticeCategory1:'NoticeCategory1', NoticeCategory2:'NoticeCategory2', NoticeCategory3:'NoticeCategory3', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', NoticeImageLink:'NoticeImageLink', title:'title4', content:'content',sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', NoticeDurationFrom:'2015-03-01', NoticeDurationTo:'2025-04-01', OrderNumber:0, CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),

		//GameEvents
		db.GameEvents.create({GameEventID:'evtid1', EventCategory1:'EventCategory1', EventCategory2:'EventCategory2', EventCategory3:'EventCategory3', ItemListID:'itemid1', ItemCount:1, Itemstatus:'Itemstatus', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', EventImageLink:'EventImageLink', Title:'Title1', Content:'Content', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', EventDurationFrom:'2015-03-01', EventDurationTo:'2025-04-01', OrderNumber:0, CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.GameEvents.create({GameEventID:'evtid2', EventCategory1:'EventCategory1', EventCategory2:'EventCategory2', EventCategory3:'EventCategory3', ItemListID:'itemid1', ItemCount:2, Itemstatus:'Itemstatus', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', EventImageLink:'EventImageLink', Title:'Title2', Content:'Content', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', EventDurationFrom:'2015-03-01', EventDurationTo:'2025-04-01', OrderNumber:0, CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.GameEvents.create({GameEventID:'evtid3', EventCategory1:'EventCategory1', EventCategory2:'EventCategory2', EventCategory3:'EventCategory3', ItemListID:'itemid1', ItemCount:3, Itemstatus:'Itemstatus', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', EventImageLink:'EventImageLink', Title:'Title3', Content:'Content', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', EventDurationFrom:'2015-03-01', EventDurationTo:'2025-04-01', OrderNumber:0, CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.GameEvents.create({GameEventID:'evtid4', EventCategory1:'EventCategory1', EventCategory2:'EventCategory2', EventCategory3:'EventCategory3', ItemListID:'itemid1', ItemCount:4, Itemstatus:'Itemstatus', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', EventImageLink:'EventImageLink', Title:'Title4', Content:'Content', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', EventDurationFrom:'2015-03-01', EventDurationTo:'2025-04-01', OrderNumber:0, CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		

		//GameEventMember																																				 	
		db.GameEventMember.create({GameEventMemberID:'GameEventMemberID1', eventID:'evtid1', MemberID:'aaa', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.GameEventMember.create({GameEventMemberID:'GameEventMemberID2', eventID:'evtid2', MemberID:'aaa', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.GameEventMember.create({GameEventMemberID:'GameEventMemberID3', eventID:'evtid3', MemberID:'aaa', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),
		db.GameEventMember.create({GameEventMemberID:'GameEventMemberID4', eventID:'evtid2', MemberID:'bbb', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', HideYN:'N', DeleteYN:'N'}),																																										

		//Coupon
		db.Coupon.create({CouponID:'cpid1', CouponCategory1:'CouponCategory1', CouponCategory2:'CouponCategory2', CouponCategory3:'CouponCategory3', ItemListID:'itemid1', ItemCount:'1', ItemStatus:'ItemStatus', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', Title:'Title1', Content:'Content', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', DupeYN:'N', OrderNumber:'0', CouponDurationFrom:'2015-03-01', CouponDurationTo:'2025-04-01', CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.Coupon.create({CouponID:'cpid2', CouponCategory1:'CouponCategory1', CouponCategory2:'CouponCategory2', CouponCategory3:'CouponCategory3', ItemListID:'itemid2', ItemCount:'2', ItemStatus:'ItemStatus', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', Title:'Title2', Content:'Content', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', DupeYN:'Y', OrderNumber:'0', CouponDurationFrom:'2015-03-01', CouponDurationTo:'2025-04-01', CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.Coupon.create({CouponID:'cpid3', CouponCategory1:'CouponCategory1', CouponCategory2:'CouponCategory2', CouponCategory3:'CouponCategory3', ItemListID:'itemid3', ItemCount:'3', ItemStatus:'ItemStatus', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', Title:'Title3', Content:'Content', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', DupeYN:'N', OrderNumber:'0', CouponDurationFrom:'2015-03-01', CouponDurationTo:'2025-04-01', CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.Coupon.create({CouponID:'cpid4', CouponCategory1:'CouponCategory1', CouponCategory2:'CouponCategory2', CouponCategory3:'CouponCategory3', ItemListID:'itemid4', ItemCount:'4', ItemStatus:'ItemStatus', TargetGroup:'TargetGroup', TargetOS:'TargetOS', TargetDevice:'TargetDevice', Title:'Title4', Content:'Content', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', DupeYN:'Y', OrderNumber:'0', CouponDurationFrom:'2015-03-01', CouponDurationTo:'2025-04-01', CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		

		//MemberAccountBlockLog
		db.MemberAccountBlockLog.create({MemberAccountBlockID:'MemberAccountBlockLog1', MemberID:'ddd', MemberAccountBlockReasonCategory1:'cheater', MemberAccountBlockReasonCategory2:'MemberAccountBlockReasonCategory2', MemberAccountBlockReasonCategory3:'MemberAccountBlockReasonCategory3', MemberAccountBlockReason:'MemberAccountBlockReason', MemberAccountBlockProcess:'block start', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.MemberAccountBlockLog.create({MemberAccountBlockID:'MemberAccountBlockLog2', MemberID:'ccc', MemberAccountBlockReasonCategory1:'cheater', MemberAccountBlockReasonCategory2:'MemberAccountBlockReasonCategory2', MemberAccountBlockReasonCategory3:'MemberAccountBlockReasonCategory3', MemberAccountBlockReason:'MemberAccountBlockReason', MemberAccountBlockProcess:'block end', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.MemberAccountBlockLog.create({MemberAccountBlockID:'MemberAccountBlockLog3', MemberID:'ddd', MemberAccountBlockReasonCategory1:'cheater', MemberAccountBlockReasonCategory2:'MemberAccountBlockReasonCategory2', MemberAccountBlockReasonCategory3:'MemberAccountBlockReasonCategory3', MemberAccountBlockReason:'MemberAccountBlockReason', MemberAccountBlockProcess:'block canceled', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),
		db.MemberAccountBlockLog.create({MemberAccountBlockID:'MemberAccountBlockLog4', MemberID:'ddd', MemberAccountBlockReasonCategory1:'cheater', MemberAccountBlockReasonCategory2:'MemberAccountBlockReasonCategory2', MemberAccountBlockReasonCategory3:'MemberAccountBlockReasonCategory3', MemberAccountBlockReason:'MemberAccountBlockReason', MemberAccountBlockProcess:'block delete', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', sCol6:'sCol6', sCol7:'sCol7', sCol8:'sCol8', sCol9:'sCol9', sCol10:'sCol10', CreateAdminID:'admin1', HideYN:'N', DeleteYN:'N'}),

		//ServerInfo
		db.ServerInfo.create({InfoID:'InfoID1', FEServerLists:'FEServerLists', SocketServerLists:'SocketServerLists', Version:'1.0', ResourceLink:'ResourceLink', EULAText:'EULAText', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', CreatedAt:'1900-01-01', UpdatedAt:'1900-01-01', DataFromRegionDT:'1900-01-01'}),
		db.ServerInfo.create({InfoID:'InfoID2', FEServerLists:'frontend1,frontend2', SocketServerLists:'socketServer1,socketServer1', Version:'1.2', ResourceLink:'bloblink', EULAText:'EULA', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', CreatedAt:'1900-01-01', UpdatedAt:'1900-01-01', DataFromRegionDT:'1900-01-01'}),
		db.ServerInfo.create({InfoID:'InfoID3', FEServerLists:'webserver1,webserver2', SocketServerLists:'tcpserver1,tcpserver2', Version:'1.0', ResourceLink:'ResourceLink', EULAText:'EULAText', sCol1:'sCol1', sCol2:'sCol2', sCol3:'sCol3', sCol4:'sCol4', sCol5:'sCol5', CreatedAt:'1900-01-01', UpdatedAt:'1900-01-01', DataFromRegionDT:'1900-01-01'})
		
		//statInfo
		
		])
		.catch(function(err){
			console.log(err);
		})
