const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);

module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('MemberGameInfoStages',{
				MemberGameInfoStagesID:{
					type : Sequelize.STRING(128),
					primaryKey : true,
					defaultValue : DataTypes.UUIDV4
				},
				MemberID:{
					type : Sequelize.STRING(256),
					allowNull : false,
					defaultValue : ''
				},
				StageName:{
					type : Sequelize.STRING(100),
					allowNull : false,
					defaultValue : ''
				},
				StageStatus:{
					type : Sequelize.STRING(40),
					allowNull : false,
					defaultValue : ''
				},
				Category1:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Category2:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Category3:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Mission1:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Mission2:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Mission3:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Mission4:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Mission5:{
					type : Sequelize.STRING(80),
					allowNull : false,
					defaultValue : ''
				},
				Points:{
					type : Sequelize.STRING(50),
					allowNull : false,
					defaultValue : ''
				},
				StageStat1:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				StageStat2:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				StageStat3:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				StageStat4:{
					type : Sequelize.STRING,
					allowNull : false,
					defaultValue : ''
				},
				StageStat5:{
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