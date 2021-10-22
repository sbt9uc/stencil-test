'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b92a7936.js');

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["checkbox-bold_2.cjs",[[4,"checkbox-bold",{"id":[1],"checked":[4],"disabled":[4],"isChecked":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
