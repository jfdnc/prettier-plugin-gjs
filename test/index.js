import fs from 'fs';
import prettier from 'prettier';
import path from 'path';
import { expect } from 'chai';

describe('integration', function () {
  this.timeout(3000);

  const defaults = { extension: '.js', message: 'should match snapshot' };
  function transform(testKey, options = {}) {
    const { extension, message } = { ...defaults, ...options };
    const testFixtureDir = path.resolve(__dirname, 'fixtures/', testKey);

    const configFile = path.resolve(testFixtureDir, `./config.js`);
    const codeFile = path.resolve(testFixtureDir, `./code${extension}`);
    const outputFile = path.resolve(testFixtureDir, `./output${extension}`);

    const prettierOptions = require(configFile);

    const code = fs.readFileSync(codeFile, 'utf8');
    const expected = fs.readFileSync(outputFile, 'utf8');

    const actual = prettier.format(code, {
      filepath: codeFile, // Provide the path so prettier can infer parser based off file extension
      ...prettierOptions,
    });

    expect(actual).to.equal(expected, message);
  }

  it('simple-noop', () => {
    transform('simple-noop', { message: 'if already formatted, it should do nothing' });
  });

  it('simple-formatted', () => {
    transform('simple-formatted', { message: 'should format simple templates' });
  });

  it('nested-html', () => {
    transform('nested-html', { message: 'should format multiple nested indent levels'});
  });

  it('options.hbsSingleQuote', () => {
    transform('options-hbs-single-quote', { message: 'should format single quotes option'});
  });

  it('with comments', () => {
    transform('with-comments', { message: 'should handle various comments correctly'});
  });

  it('extension .gjs', () => {
    transform('extension-gjs', { extension: '.gjs', message: 'should handle `.gjs` file containing `.hbs` syntax in template markup' });
  });

  it('typescript parser', () => {
    transform('typescript-parser', { extension: '.ts', message: 'should handle `.hbs` file' });
  });
});
