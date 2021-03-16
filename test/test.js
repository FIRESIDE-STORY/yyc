const fs = require('fs');
const 原力 = require('../lib');

const 函数 = fs.readFileSync(`${__dirname}/operator.yy`, 'utf-8');
const 声明 = fs.readFileSync(`${__dirname}/statements.yy`, 'utf-8');

原力.compile(函数);
原力.compile(声明);
