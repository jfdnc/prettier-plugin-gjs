# @glimmerx/prettier-plugin-component-templates

## Background

[Prettier](https://prettier.io/docs/en/index.html) is an opinionated code formatter. Prettier does not support the experimental syntax (similar to `.tsx`) that `.gjs` components are authored in.

## Introduction

This plugin extends the internal printers to handle `.gjs` syntax (usage of `<template>` syntax alongside familiar `.js` and `.ts` syntax).

## Installation and Usage

```bash
yarn add -D <TODO(jdurham): identifier of wherever this ends up>
```

Once added prettier will discover and use the plugin to format any `.gjs` tagged template expression.

### Options

In your prettier config options (e.g. `.prettierrc`, `prettier.config.js`, etc.)

`.prettierrc`

```json
{
  "hbsSingleQuote": true
}
```

Defaults to `false` forcing double-quotes for all attributes in an hbs embed. When `true` will rewrite all quotes to single-quotes.

## Development

Generate a test case, add it to the tests file,

Add `PRETTIER_DEBUG=true` to the environment when running the plugin in order to get complete stack traces on errors.

### Debugging

#### Debugging

```
PRETTIER_DEBUG=true node --inspect-brk  node_modules/.bin/prettier --config=./test/fixtures/basic/config.js ./test/fixtures/basic/code.js
```

### Generate a snapshot

```
node node_modules/.bin/prettier --ignore-path --config=./test/fixtures/simple-formatted/config.js ./test/fixtures/simple-formatted/code.js > ./test/fixtures/simple-formatted/output.js
```

### Testing

#### Run all tests

```
yarn test
```
