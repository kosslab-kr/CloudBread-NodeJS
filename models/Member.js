const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = function(sequelize, DataTypes) {
	const Member = sequelize.define('Member', {
				MemberID:{
					type : Sequelize.STRING(256),
					primaryKey : true,
					defaultValue : DataTypes.UUIDV4
				},
				MemberPWD:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				EmailAddress:{
					type : Sequelize.STRING(450),
					allowNull : false,
					defaultValue : ''
				},
				EmailConfirmedYN:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : 'N'
				},
				PhoneNumber1:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				PhoneNumber2:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				PINumber:{
					type : Sequelize.STRING(100),
					allowNull : false,
					defaultValue : ''
				},
				Name1:{
					type : Sequelize.STRING(100),
					allowNull : false,
					defaultValue : ''
				},
				Name2:{
					type : Sequelize.STRING(100),
					allowNull : false,
					defaultValue : ''
				},
				Name3:{
					type : Sequelize.STRING(100),
					allowNull : false,
					defaultValue : ''
				},
				DOB:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				RecommenderID:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				MemberGroup:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				LastDeviceID:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				LastIPaddress:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				LastLoginDT:{
					type : Sequelize.STRING(64),
					allowNull : false,
					defaultValue : ''
				},
				LastLogoutDT:{
					type : Sequelize.STRING(64),
					allowNull : false,
					defaultValue : ''
				},
				LastMACAddress:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				AccountBlockYN:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : ''
				},
				AccountBlockEndDT:{
					type : Sequelize.STRING(64),
					allowNull : false,
					defaultValue : ''
				},
				AnonymousYN:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : ''
				},
				ThirdAuthProvider:{
					type : Sequelize.STRING(128),
					allowNull : false,
					defaultValue : ''
				},
				ThirdAuthID:{
					type : Sequelize.STRING(256),
					allowNull : false,
					defaultValue : ''
				},
				ThirdAuthParam:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				PushNotificationID:{
					type : Sequelize.STRING(512),
					allowNull : false,
					defaultValue : ''
				},
				PushNotificationProvider:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				PushNotificationGroup:{
					type : Sequelize.STRING,
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
				TimeZoneID:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : '2100'
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
				freezeTableName:true,
				timestamps: true
			});
	return Member;
};