const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);


module.exports = (sequelize, DataTypes) => {
	return sequelize.define('MemberItemPurchase',{
				MemberItemPurchaseID:{
					type : Sequelize.STRING(128),
					primaryKey : true,
					defaultValue : DataTypes.UUIDV4 
				},
				MemberID:{
					type : Sequelize.STRING(256),
					allowNull : false,
					defaultValue : ''
				},
				ItemListID:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				PurchasePrice:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseQuantity:{
					type : Sequelize.STRING(512),
					allowNull : false,
					defaultValue : ''
				},
				PGinfo1:{
					type : Sequelize.STRING(512),
					allowNull : false,
					defaultValue : ''
				},
				PGinfo2:{
					type : Sequelize.STRING(512),
					allowNull : false,
					defaultValue : ''
				},
				PGinfo3:{
					type : Sequelize.STRING(512),
					allowNull : false,
					defaultValue : ''
				},
				PGinfo4:{
					type : Sequelize.STRING(512),
					allowNull : false,
					defaultValue : ''
				},
				PGinfo5:{
					type : Sequelize.STRING(512),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseDeviceID:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseDeviceIPAddress:{
					type : Sequelize.STRING(64),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseDeviceMACAddress:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseDT:{
					type : Sequelize.STRING(64),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseCancelYN:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : 'N'
				},
				PurchaseCancelDT:{
					type : Sequelize.STRING(64),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseCancelingStatus:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseCancelReturnedAmount:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseCancelDeviceID:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseCancelDeviceIPAddress:{
					type : Sequelize.STRING(64),
					allowNull : false,
					defaultValue : ''
				},
				PurchaseCancelDeviceMACAddress:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				sCol1:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol2:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol3:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol4:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol5:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol6:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol7:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol8:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol9:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				sCol10:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				PurchaseCancelConfirmAdminMemberID:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				HideYN:{
					type : Sequelize.STRING(1),
					allowNull : false,
					defaultValue : 'N'
				},
				DeleteYN:{
					type : Sequelize.STRING(1),
					allowNull : false,
					defaultValue : 'N'
				},
				DataFromRegion:{
					type : Sequelize.STRING(64),
					allowNull : false,
					defaultValue : ''
				},
				DataFromRegionDT:{
					type : Sequelize.DATE,
					allowNull : false,
					defaultValue : sequelize.fn('NOW')
				}
			},{
				freezeTableName : true
			});
}