(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-smooth-scroll"] = factory();
	else
		root["ap-smooth-scroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-common"] = factory();
	else
		root["ap-common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.isArray = function (data) {
        return Array.isArray(data) || typeof data !== 'object' && /^\[(\d|[^[|,])/.test(data);
    };
    Model.isObject = function (data) {
        var type = typeof data;
        return type === 'function' || type === 'object' && !!data;
    };
    Model.getSearchItems = function (dataList, type) {
        if (!type)
            return;
        var key = Object.keys(type)[0];
        if (type === 'all') {
            return dataList;
        }
        else {
            return dataList.filter(function (data) {
                return (data[key] == type[key]);
            });
        }
    };
    Model.stringToNumber = function (data) {
        if (parseInt(data, 10) && /^\d|(^\-)/.test(data)) {
            return parseInt(data, 10);
        }
        else {
            return data;
        }
    };
    Model.stringToObjectCheck = function (data) {
        return /{.*:.*}/.test(data);
    };
    Model.stringToJson = function (data) {
        return JSON.parse(data
            .replace(/([\$\w]+)\s*:/g, function (_, $1) { return '"' + $1 + '":'; })
            .replace(/'([^']+)'/g, function (_, $1) { return '"' + $1 + '"'; }));
    };
    Model.stringToArray = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            var splitList = data.replace(/^\[/g, '').replace(/\s+/g, '').replace(/\]$/g, '').split(","), newSplitList_1 = [];
            if (this.stringToObjectCheck(splitList)) {
                splitList.forEach(function (item) {
                    if (_this.stringToObjectCheck(item)) {
                        newSplitList_1.push(_this.stringToJson(item.trim()));
                    }
                    else {
                        newSplitList_1.push(_this.stringToNumber(item));
                    }
                });
                return newSplitList_1;
            }
            else {
                splitList.forEach(function (item) {
                    newSplitList_1.push(_this.stringToNumber(item));
                });
                return newSplitList_1;
            }
        }
        else {
            return data;
        }
    };
    Model.checkType = function (data) {
        switch (typeof data) {
            case 'object':
                return data;
            case 'number':
                return { id: data };
            case 'string':
                if (/^#/.test(data)) {
                    return { idName: data.substr(1) };
                }
                else if (/^\./.test(data)) {
                    return { className: data.substr(1) };
                }
                else if (/all/gi.test(data)) {
                    return 'all';
                }
                else if (this.stringToNumber(data)) {
                    return { id: data };
                }
                break;
        }
    };
    Model.search = function (dataList, type) {
        var _this = this;
        if (this.isArray(type)) {
            var keys_1 = [], searchItems_1 = [], resultItem_1 = [];
            this.stringToArray(type).forEach(function (item) {
                keys_1.push(_this.checkType(item));
            });
            keys_1.forEach(function (key) {
                searchItems_1 = _this.getSearchItems(dataList, key);
                searchItems_1.forEach(function (item) {
                    resultItem_1.push(item);
                });
            });
            return resultItem_1;
        }
        else {
            return this.getSearchItems(dataList, this.checkType(type));
        }
    };
    Model.uniq = function (stringArr) {
        var newArr = stringArr.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return newArr;
    };
    Model.flattenArray = function (array) {
        return [].concat.apply(array);
    };
    Model.createTriggerModel = function (triggerView, triggerClass) {
        var triggerList = [];
        triggerView.forEach(function (trigger) {
            triggerList.push(triggerClass.fromData(trigger));
        });
        return triggerList;
    };
    Model.createTargetModel = function (targetView, targetClass) {
        var targetList = [];
        targetView.forEach(function (target) {
            targetList.push(targetClass.fromData(target));
        });
        return targetList;
    };
    Model.setTriggerTargetId = function (triggerList, targetList) {
        for (var i = 0; i < triggerList.length; i++) {
            triggerList[i].setTargetId(targetList);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var View = (function () {
    function View() {
    }
    View.getFirstChildLastNode = function (child) {
        if (child.children.length > 0) {
            return this.getFirstChildLastNode(child.children[0]);
        }
        else {
            return child;
        }
    };
    View.createFromTriggerElement = function (selectors, trigger) {
        var triggerList = [], triggerViewList = [];
        selectors.forEach(function (selector) {
            triggerList.push(document.querySelectorAll(selector));
        });
        triggerList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                triggerViewList.push(trigger.fromData(nodeList[i]));
            }
        });
        return triggerViewList;
    };
    View.createTargetView = function (triggerList, target) {
        var selectors = this.getTargetSelectors(triggerList), targetNodeList = this.getTargetNodeList(selectors), createTargetList = this.createFromTargetsElement(targetNodeList, target);
        return this.getTargetViewList(createTargetList);
    };
    View.getTargetSelectors = function (triggerList) {
        var selectors = [];
        triggerList.forEach(function (trigger) {
            if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        return _1.default.uniq(selectors);
    };
    View.getTargetNodeList = function (selectors) {
        var targetNodeList = [];
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] !== "all") {
                targetNodeList.push(document.querySelectorAll(selectors[i]));
            }
        }
        return targetNodeList;
    };
    View.createFromTargetsElement = function (targetList, target) {
        var targetViewList = [];
        targetList.forEach(function (nodeList) {
            for (var i = 0; i < nodeList.length; i++) {
                targetViewList.push(target.fromData({ node: nodeList[i] }));
            }
        });
        return targetViewList;
    };
    View.getTargetViewList = function (createTargetList) {
        var targetViewList = [];
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(0);
var _2 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
if (true) {
    module.exports.Model = _1.default;
    module.exports.View = _2.default;
    module.exports.Target = index_1.Target;
    module.exports.Trigger = index_1.Trigger;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.model === 'undefined') {
        Object.assign(global.AP.common, { model: _1.default });
    }
    if (typeof global.AP.common.view === 'undefined') {
        Object.assign(global.AP.common, { view: _2.default });
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_target_num = 0;
var Target = (function () {
    function Target(id, idName, className, node) {
        this.id = id;
        this.idName = idName;
        this.className = className;
        this.node = node;
        this.id = this.createContentsId();
    }
    Target.fromData = function (data) {
        return new Target(0, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_target_num;
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _created_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.node = node;
        this.callBackFunction = function () { };
        this.id = this.createTriggerId();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apToggle ? data.dataset.apToggle : null, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_trigger_num;
    };
    Trigger.prototype.getItemNode = function () {
        return this.node;
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tween = __webpack_require__(3);
var _created_scroll_target_num = 0;
var Target = (function () {
    function Target(id, triggerId, idName, className, coordinate, node) {
        this.id = id;
        this.triggerId = triggerId;
        this.idName = idName;
        this.className = className;
        this.coordinate = coordinate;
        this.node = node;
        this.id = this.createContentsId();
        if (this.node && this.coordinate == 0) {
            this.coordinate = this.getCoordinate(this.node);
        }
    }
    Target.fromData = function (data) {
        return new Target(0, data.triggerId ? data.triggerId : null, data.node && data.node.id ? data.node.id : null, data.node && data.node.className ? data.node.className : null, data.coordinate ? data.coordinate : 0, data.node ? data.node : null);
    };
    Target.prototype.createContentsId = function () {
        return ++_created_scroll_target_num;
    };
    Target.prototype.getCoordinate = function (node) {
        var rect = node.getBoundingClientRect();
        return rect.top + window.pageYOffset;
    };
    Target.prototype.fixedScroll = function (scrollTarget) {
        scrollTarget.scrollTop = this.coordinate;
    };
    Target.prototype.scroll = function () {
        var _this = this;
        var target = navigator.userAgent.indexOf('WebKit') < 0 ? document.documentElement : document.body;
        var tween = Tween.fromData({
            start: {
                scrollTop: window.pageYOffset
            },
            end: {
                scrollTop: this.coordinate
            },
            option: {
                duration: 500,
                easing: 'easeOutCubic',
                step: function (val) {
                    target.scrollTop = val.scrollTop;
                },
                complete: function () {
                    tween = null;
                    _this.fixedScroll(target);
                }
            }
        });
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(7);
var _2 = __webpack_require__(5);
var SmoothScroll = (function () {
    function SmoothScroll() {
        var _this = this;
        if (SmoothScroll._instance) {
            return SmoothScroll._instance;
        }
        else {
            _2.default.fetchElements(function (data) {
                _this.model = _1.default.fromData(data);
            });
            SmoothScroll._instance = this;
        }
    }
    SmoothScroll.prototype.create = function (data) {
    };
    SmoothScroll.prototype.createTargets = function (data) {
    };
    SmoothScroll.prototype.scroll = function (data) {
    };
    SmoothScroll.prototype.resetSelected = function (data) {
    };
    return SmoothScroll;
}());
SmoothScroll._instance = null;
exports.SmoothScroll = SmoothScroll;
exports.default = SmoothScroll;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-tween"] = factory();
	else
		root["ap-tween"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tween = (function () {
    function Tween(start, end, option) {
        var _this = this;
        this.start = start;
        this.end = end;
        this.option = option;
        this.timer = null;
        this.isPlaying = false;
        this._startTime = Date.now();
        this.setting = {
            duration: 200,
            easing: 'linear',
            step: function () { },
            complete: function () { }
        };
        this._loopHandler = function () {
            _this.update();
        };
        this.setting = this._extend(this.setting, option);
        this.init();
    }
    Tween.fromData = function (data) {
        return new Tween(data.start ? data.start : null, data.end ? data.end : null, data.option ? data.option : null);
    };
    Tween.prototype.init = function () {
        this.play();
    };
    Tween.prototype._extend = function (arg, options) {
        if (arguments.length < 2) {
            return arg;
        }
        if (!arg) {
            arg = {};
        }
        for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                if (arguments[i][key] !== null && typeof (arguments[i][key]) === "object") {
                    arg[key] = this._extend(arg[key], arguments[i][key]);
                }
                else {
                    arg[key] = arguments[i][key];
                }
            }
        }
        return arg;
    };
    Tween.prototype.checkSteps = function (elapsedTime) {
        if (this.setting.duration <= elapsedTime) {
            this.stop();
            this.setting.complete.apply(this, []);
        }
        else {
            this.timer = window.requestAnimationFrame(this._loopHandler);
        }
    };
    Tween.prototype.play = function () {
        this.isPlaying = true;
        this.timer = window.requestAnimationFrame(this._loopHandler);
    };
    Tween.prototype.stop = function () {
        this.isPlaying = false;
        if (this.timer) {
            this.timer = null;
            window.cancelAnimationFrame(this._loopHandler);
        }
        return this;
    };
    Tween.prototype.update = function () {
        var now = Date.now(), elapsedTime = now - this._startTime, val = {};
        for (var key in this.end) {
            var start = this.start[key], variation = this.end[key] - start, eased = Tween.Easing[this.setting.easing](elapsedTime, start, variation, this.setting.duration);
            val[key] = eased;
        }
        this.setting.step.apply(this, [val]);
        this.checkSteps(elapsedTime);
    };
    return Tween;
}());
Tween.Easing = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeInQuad: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s_1 = p / 4;
        }
        else {
            var s_2 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s_3 = p / 4;
        }
        else {
            var s_4 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s_5 = p / 4;
        }
        else {
            var s_6 = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1)
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (t, b, c, d) {
        return c - Tween.Easing.easeOutBounce(d - t, 0, c, d) + b;
    },
    easeOutBounce: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        }
        else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (t, b, c, d) {
        if (t < d / 2)
            return Tween.Easing.easeInBounce(t * 2, 0, c, d) * .5 + b;
        return Tween.Easing.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
};
exports.Tween = Tween;
exports.default = Tween;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var Tween_1 = __webpack_require__(0);
if (true) {
    module.exports = Tween_1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.tween === 'undefined') {
        Object.assign(global.AP.common, { tween: Tween_1.default });
    }
}


/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target_1 = __webpack_require__(1);
var _created_scroll_trigger_num = 0;
var Trigger = (function () {
    function Trigger(id, className, idName, target, coordinate, moveCoordinate, node) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.coordinate = coordinate;
        this.moveCoordinate = moveCoordinate;
        this.node = node;
        this.clickCallBackFunction = function () { };
        this.id = this.createTriggerId();
        this.coordinate = this.getCoordinate(this.node);
        this.setEventListener();
    }
    Trigger.fromData = function (data) {
        return new Trigger(0, data.className ? data.className : null, data.id ? data.id : null, data.dataset.apScroll ? data.dataset.apScroll : null, 0, 0, data ? data : null);
    };
    Trigger.prototype.createTriggerId = function () {
        return ++_created_scroll_trigger_num;
    };
    Trigger.prototype.getCoordinate = function (node) {
        var rect = node.getBoundingClientRect();
        return rect.top + window.pageYOffset;
    };
    Trigger.prototype.setEventListener = function () {
        var _this = this;
        this.node.addEventListener('click', function (event) {
            event.preventDefault();
            _this.click(_this.clickCallBackFunction);
        }, false);
    };
    Trigger.prototype.click = function (fn, isFirst) {
        this.clickCallBackFunction = fn;
        if (!isFirst) {
            fn(this);
        }
    };
    Trigger.prototype.setMoveCoordinate = function () {
        this.moveCoordinate = parseInt(this.target, 10);
        this.target = null;
    };
    Trigger.prototype.createMoveCoordinate = function () {
        return Target_1.default.fromData({
            triggerId: this.id,
            coordinate: this.coordinate + this.moveCoordinate
        });
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APView = __webpack_require__(0).View;
var APModel = __webpack_require__(0).Model;
var Trigger_1 = __webpack_require__(4);
var Target_1 = __webpack_require__(1);
var View = (function () {
    function View() {
    }
    View.fetchElements = function (callback) {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            var triggerList = APView.createFromTriggerElement(['[data-ap-scroll]'], Trigger_1.default);
            callback({
                triggerList: triggerList,
                targetList: _this.createTargetView(triggerList)
            });
        });
    };
    View.createTargetView = function (triggerList) {
        var selectors = [], targetList = [], targetViewList = [];
        triggerList.forEach(function (trigger) {
            if (parseInt(trigger.target, 10)) {
                trigger.setMoveCoordinate();
                targetViewList.push(trigger.createMoveCoordinate());
            }
            else if (trigger.target) {
                selectors.push(trigger.target);
            }
        });
        selectors = APModel.uniq(selectors);
        for (var i = 0; i < selectors.length; i++) {
            targetList.push(document.querySelectorAll(selectors[i]));
        }
        var createTargetList = APView.createFromTargetsElement(targetList, Target_1.default);
        createTargetList.forEach(function (createTarget) {
            targetViewList.push(createTarget);
        });
        return targetViewList;
    };
    return View;
}());
exports.View = View;
exports.default = View;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var _1 = __webpack_require__(2);
if (true) {
    module.exports = _1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.scroll === 'undefined') {
        Object.assign(global.AP, { scroll: new _1.default });
    }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var _1 = __webpack_require__(10);
var Model = (function () {
    function Model(targetList, triggerList) {
        this.targetList = targetList;
        this.triggerList = triggerList;
        this.setTriggerCallBack();
        this.setTriggerTargetId();
    }
    Model.fromData = function (data) {
        return new Model(data.targetList ? APModel.createTargetModel(data.targetList, _1.Target) : [], data.triggerList ? APModel.createTriggerModel(data.triggerList, _1.Trigger) : []);
    };
    Model.prototype.setTriggerTargetId = function () {
        for (var i = 0; i < this.triggerList.length; i++) {
            this.triggerList[i].setTargetId(this.targetList);
        }
    };
    Model.prototype.setTriggerCallBack = function () {
        var _this = this;
        this.triggerList.forEach(function (trigger) {
            trigger.view.click(function (triggerView) {
                _this.triggerClick(trigger);
            }, true);
        });
    };
    Model.prototype.triggerClick = function (trigger) {
        for (var i = 0; i < this.targetList.length; i++) {
            this.targetList[i].scroll(trigger);
        }
    };
    return Model;
}());
exports.Model = Model;
exports.default = Model;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Target = (function () {
    function Target(id, triggerId, className, idName, coordinate, view) {
        this.id = id;
        this.triggerId = triggerId;
        this.className = className;
        this.idName = idName;
        this.coordinate = coordinate;
        this.view = view;
    }
    Target.fromData = function (data) {
        return new Target(data.id ? data.id : 1, data.triggerId ? data.triggerId : null, data.className ? data.className : null, data.idName ? data.idName : null, data.coordinate ? data.coordinate : 0, data ? data : null);
    };
    Target.prototype.scroll = function (trigger) {
        if (trigger.targetId == this.id) {
            this.view.scroll();
        }
    };
    return Target;
}());
exports.Target = Target;
exports.default = Target;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APModel = __webpack_require__(0).Model;
var Trigger = (function () {
    function Trigger(id, className, idName, target, targetId, coordinate, view) {
        this.id = id;
        this.className = className;
        this.idName = idName;
        this.target = target;
        this.targetId = targetId;
        this.coordinate = coordinate;
        this.view = view;
    }
    Trigger.fromData = function (data) {
        return new Trigger(data.id ? data.id : 1, data.className ? data.className : null, data.idName ? data.idName : null, data.target ? data.target : null, data.targetId ? data.targetId : 0, data.coordinate ? data.coordinate : 0, data ? data : null);
    };
    Trigger.prototype.setTargetId = function (targetViewList) {
        var searchContents;
        if (this.target) {
            searchContents = APModel.search(targetViewList, this.target);
        }
        else {
            searchContents = APModel.search(targetViewList, { triggerId: this.id });
        }
        if (searchContents) {
            this.targetId = searchContents[0].id;
        }
    };
    return Trigger;
}());
exports.Trigger = Trigger;
exports.default = Trigger;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ })
/******/ ]);
});