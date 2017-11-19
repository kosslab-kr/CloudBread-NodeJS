const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('AdminMember',{
				AdminMemberID:{
					type : Sequelize.STRING(128),
					primaryKey : true
				},
				AdminMemberPWD:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				AdminMemberEmail:{
					type : Sequelize.STRING(256),
					allowNull : false,
					defaultValue : ''
				},
				IDCreateAdminMember:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				AdminGroup:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : ''
				},
				TimeZoneID:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : '2100'
				},
				PINumber:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				Name1:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				Name2:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				Name3:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				DOB:{
					type : Sequelize.STRING(16),
					allowNull : false,
					defaultValue : ''
				},
				LastIPaddress:{
					type : Sequelize.STRING(32),
					allowNull : false,
					defaultValue : ''
				},
				LastLoginDT:{
					type : Sequelize.STRING(32),
					allowNull : false,
					defaultValue : ''
				},
				LastLogoutDT:{
					type : Sequelize.STRING(32),
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