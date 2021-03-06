const fs = require('fs');
const parser = require('../src/yy');

function exec(input) {
  return parser.parse(input);
}

// 中文
const 函数 = fs.readFileSync(`${__dirname}/cn/函数.yy`, 'utf-8');
const 声明 = fs.readFileSync(`${__dirname}/cn/声明.yy`, 'utf-8');
const 所有 = fs.readFileSync(`${__dirname}/cn/所有.yy`, 'utf-8');
const 模块 = fs.readFileSync(`${__dirname}/cn/模块.yy`, 'utf-8');
const 流程 = fs.readFileSync(`${__dirname}/cn/流程.yy`, 'utf-8');
const 特征 = fs.readFileSync(`${__dirname}/cn/特征.yy`, 'utf-8');

exec(函数);
exec(声明);
exec(所有);
exec(模块);
exec(流程);
exec(特征);

// English
const all = fs.readFileSync(`${__dirname}/en/all.yy`, 'utf-8');
const classes = fs.readFileSync(`${__dirname}/en/class.yy`, 'utf-8');
const flow = fs.readFileSync(`${__dirname}/en/flow.yy`, 'utf-8');
const functions = fs.readFileSync(`${__dirname}/en/function.yy`, 'utf-8');
const modules = fs.readFileSync(`${__dirname}/en/module.yy`, 'utf-8');
const statement = fs.readFileSync(`${__dirname}/en/statement.yy`, 'utf-8');

exec(all);
exec(classes);
exec(flow);
exec(functions);
exec(modules);
exec(statement);
