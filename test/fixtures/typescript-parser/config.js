const path = require('path');
const PRETTIER_PLUGIN = path.resolve(__dirname, '../../../index');
module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 115,
  plugins: [PRETTIER_PLUGIN],
};
