const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/config/sequelize.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password,config);
const db = require('./models');

db.Member.create({ MemberID : 'sherry92'});
//db.StatData.sync();