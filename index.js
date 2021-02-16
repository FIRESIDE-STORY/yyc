#! /usr/bin/env node

const fs = require('fs');
const rl = require('readline');

const prompts = rl.createInterface(process.stdin, process.stdout);
const yy = require('./lib');

const fileName = process.argv[2];

const repl = () => {
  prompts.question('> ', (code) => {
    try {
      const result = yy.compile(code);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
    repl();
  });
};

const file = (fileName) => {
  fs.readFile(fileName, 'utf8', (err, codes) => {
    if (!err) {
      const result = yy.compile(codes);
      console.log(result);
    } else {
      console.error(err.message);
    }

    prompts.close();
  });
};

return fileName ? file(fileName) : repl();
