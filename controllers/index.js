const fs = require('fs');
const path = require('path');

const controllers = {};

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const controller = require(path.resolve(__dirname, file));
    const file_name = path.basename(path.resolve(__dirname, file), '.js');

    controllers[file_name] = controller;
  });

module.exports = controllers;
