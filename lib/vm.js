const util = require('./util');
const runtime = require('./runtime');

const parseCallFunction = (ctx) => {
  if (ctx.name === 'print') {
    return `console.log(${ctx.args});`;
  }

  if (ctx.args.length) {
    return `(${ctx.name})(${ctx.args.map(parse)});`;
  }

  return `(${ctx.name})();`;
};

const parseClassFunction = (ctx) => {
  if (ctx.args.length) {
    return `${ctx.name} (${ctx.args}) { ${parse(ctx.fact)}; };`;
  }

  return `${ctx.name} () { ${parse(ctx.fact)}; };`;
};

/**
 * type: ${Sting} 类型
 * name: ${Sting} 名字
 * fact: ${Sting|Array|Fn} 声明块
 * args: ${Array} 参数列表
 *
 */
const parseBasicTypeExpression = (ctx) => {
  switch (ctx && ctx.type) {
    case 'const':
      return `const ${ctx.name} = ${parse(ctx.fact)};`;
    case 'let':
      return `let ${ctx.name} = ${parse(ctx.fact)};`;
    case 'def':
      return `var ${ctx.name} = ${parse(ctx.fact)};`;
    case 'fn':
      return `function ${ctx.name}(${ctx.args}) { ${parse(ctx.fact)} };`;
    case 'import':
      return `const ${ctx.name} = require("fs");`;
    case 'if':
      return `if(${parse(ctx.when)}) { ${parse(ctx.fact)}; }`;
    case 'match':
      return `switch(${parse(ctx.when)}) { ${parse(ctx.fact)}; }`;
    case 'case':
      return `case ${parse(ctx.when)}: ${parse(ctx.fact)};`;
    case 'default':
      return `default: ${parse(ctx.fact)};`;
    case 'break':
      return `break;`;
    case 'return':
      return `return ${parse(ctx.fact)};`;
    case 'loop':
      return `while (true) { ${parse(ctx.fact)}; }`;
    case 'each':
      return `for (let ${ctx.name} of ${parse(ctx.args)}) { ${parse(ctx.fact)}; }`;
    case 'cover':
      return `${ctx.name} = ${parse(ctx.fact)};`;
    case 'callFunction':
      return parseCallFunction(ctx);
    case 'class':
      return `class ${ctx.name} extends BaseClass { ${parse(ctx.fact)}; };`;
    case 'classFunction':
      return parseClassFunction(ctx);
    default:
      throw new Error('Undefined keywords');
  }
};

handleParams = (ctx) => {
  if (util.helper.isObject(ctx) && Reflect.has(ctx, 'fact')) {
    ctx.fact = util.helper.stringify(ctx.fact);
  }
};

const parse = (ctx) => {
  // console.log('current parse ctx is :', { ctx });
  handleParams(ctx);

  if (util.validators.hasKey(ctx, 'type')) {
    return parseBasicTypeExpression(ctx);
  }

  return ctx;
};

module.exports = Object.assign({}, util, { parse, runtime });
