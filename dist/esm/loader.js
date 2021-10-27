import { p as promiseResolve, b as bootstrapLazy } from './index-be9951dc.js';

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["checkbox-bold_2",[[4,"checkbox-bold",{"id":[1],"checked":[4],"disabled":[4],"isChecked":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["rating-stars",[[1,"rating-stars",{"maxValue":[2,"max-value"],"value":[2],"starList":[32],"internalValue":[32]}]]]], options);
  });
};

export { defineCustomElements };
