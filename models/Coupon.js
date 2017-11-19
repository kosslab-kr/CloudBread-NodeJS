const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('Coupon',{
				CouponID:{
					type : Sequelize.STRING(128),
					primaryKey : true,
					defaultValue : DataTypes.UUIDV4
				},
				CouponCategory1:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				CouponCategory2:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				CouponCategory3:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				ItemListID:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				ItemCount:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				ItemStatus:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				TargetGroup:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				TargetOS:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : ''
				},
				TargetDevice:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Title:{
					type : Sequelize.STRING(100),
					allowNull : false,
					defaultValue : ''
				},
				Content:{
					type : Sequelize.STRING(4000),
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
				CouponDurationFrom:{
					type : Sequelize.DATE,
					allowNull : false,
					defaultValue : sequelize.fn('NOW')
				},
				CouponDurationTo:{
					type : Sequelize.DATE,
					allowNull : false,
					defaultValue : sequelize.fn('NOW')
				},
				OtherNumber:{
					type : Sequelize.INTEGER,
					allowNull : false,
					defaultValue : 0
				},
				DupeYN:{
					type : Sequelize.STRING(1),
					allowNull : false,
					defaultValue : 'N'
				},
				CreateAdminID:{
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