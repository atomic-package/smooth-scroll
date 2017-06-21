/*
 * Author: Daisuke Takayama
 */

'use strict';
let e = eval, global: NodeJS.Global = e('this');

import SmoothScroll from './controller/';

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: {
      scroll: SmoothScroll
    };
  }
}

// npm & node
if (typeof module !== 'undefined') {
  module.exports = SmoothScroll;
}

// browser
if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    Object.assign(global, { AP: {} });
  }

  if (typeof global.AP.scroll === 'undefined') {
    Object.assign(global.AP, { scroll: new SmoothScroll });
  }
}
