'use strict';

const index = require('./index-65c190da.js');

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-two.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["checkbox-bold_2.cjs",[[4,"checkbox-bold",{"id":[1],"checked":[4],"disabled":[4],"isChecked":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["rating-stars.cjs",[[1,"rating-stars",{"maxValue":[2,"max-value"],"value":[2],"starList":[32],"internalValue":[32]}]]]], options);
});
