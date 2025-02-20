'use strict';
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

module.exports = function renderPDFs() {
    const sourcePath = path.resolve(path.dirname(__filename), '../src/certificats');
    const destPath = path.resolve(path.dirname(__filename), '../dist/.');
    
    sh.cp('-R', sourcePath, destPath)
};