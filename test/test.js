const fs = require('fs');
const 大能 = require('../lib');

const 操作符 = fs.readFileSync(`${__dirname}/operator.yy`, 'utf-8');
const 声明 = fs.readFileSync(`${__dirname}/statements.yy`, 'utf-8');
const 特征 = fs.readFileSync(`${__dirname}/class.yy`, 'utf-8');
const 流程 = fs.readFileSync(`${__dirname}/flow.yy`, 'utf-8');
const 函数 = fs.readFileSync(`${__dirname}/function.yy`, 'utf-8');

大能.compile(操作符);
大能.compile(声明);
大能.compile(特征);
大能.compile(流程);
// 大能.compile(函数);
