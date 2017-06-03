/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inflected__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inflected___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inflected__);

var Case = (function () {
    function Case(name, entityType) {
        this.dash = name;
        this.title = __WEBPACK_IMPORTED_MODULE_0_inflected__["titleize"](name);
        this.camel = __WEBPACK_IMPORTED_MODULE_0_inflected__["camelize"](name.replace('-', '_'), false);
        this.class = __WEBPACK_IMPORTED_MODULE_0_inflected__["camelize"](name.replace('-', '_'));
        this.entityType = entityType;
    }
    Object.defineProperty(Case.prototype, "file", {
        get: function () {
            return this.dash + "." + this.entityType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "fileInDir", {
        get: function () {
            return this.dash + "/" + this.dash + "." + this.entityType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "classTyped", {
        get: function () {
            return this.class + __WEBPACK_IMPORTED_MODULE_0_inflected__["camelize"](this.entityType);
        },
        enumerable: true,
        configurable: true
    });
    Case.prototype.toString = function () {
        return this.dash;
    };
    Case.for = function (name, entityType) {
        return new Case(name, entityType);
    };
    return Case;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_options__ = __webpack_require__(9);

/* harmony default export */ __webpack_exports__["default"] = (function (di) {
    [
        __webpack_require__(10).default(di),
        __webpack_require__(11).default(di),
        __webpack_require__(12).default(di),
        __webpack_require__(13).default(di),
        __webpack_require__(14).default(di),
        __webpack_require__(15).default(di),
    ]
        .forEach(function (prog) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_app_common_options__["a" /* commonOptions */])(prog); });
});;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<strong><%= name %> Component</strong>\n"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_find_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_find_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_find_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);


var Config = (function () {
    function Config(data) {
        if (data === void 0) { data = {}; }
        this.rootDir = 'src';
        this.outDir = 'dist';
        this.appPrefix = 'app';
        this.indentation = '  ';
        this.styleExt = 'scss';
        this.sharedStylePath = '~styles/shared';
        this.useUnitTests = false;
        this.useE2ETests = false;
        this.debuggerEnabled = true;
        this.debuggerPackage = 'app/core/service';
        Object.assign(this, data);
    }
    Config.prototype.path = function () {
        var relativePath = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            relativePath[_i] = arguments[_i];
        }
        if (!relativePath.length) {
            return process.cwd();
        }
        var parts = [process.cwd()];
        relativePath.forEach(function (item) {
            var path = item instanceof Object
                ? item.toString()
                : item;
            parts.push(path);
        });
        return parts.join('/');
    };
    return Config;
}());

var ConfigLoader = (function () {
    function ConfigLoader() {
        this.findConfig();
    }
    Object.defineProperty(ConfigLoader.prototype, "hasConfig", {
        get: function () {
            return !!this.configPath;
        },
        enumerable: true,
        configurable: true
    });
    ConfigLoader.prototype.load = function () {
        var strConfig = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(this.configPath).toString();
        var jsonConfig = JSON.parse(strConfig);
        if (!jsonConfig) {
            return false;
        }
        this._config = new Config(jsonConfig);
        return true;
    };
    ConfigLoader.prototype.reset = function () {
        if (!this.configPath) {
            this.configPath = process.cwd() + '/' + ConfigLoader.fileName;
        }
        this._config = new Config();
    };
    ConfigLoader.prototype.save = function () {
        var configStr = JSON.stringify(this._config, null, 2);
        __WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync(this.configPath, configStr);
    };
    Object.defineProperty(ConfigLoader.prototype, "config", {
        get: function () {
            return Object.freeze(this._config || {});
        },
        enumerable: true,
        configurable: true
    });
    ConfigLoader.prototype.findConfig = function () {
        this.configPath = __WEBPACK_IMPORTED_MODULE_0_find_config___default()(ConfigLoader.fileName);
        return !!this.configPath;
    };
    return ConfigLoader;
}());

ConfigLoader.fileName = '.ng-generator.json';


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Di; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_fs_wrapper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_string_helper__ = __webpack_require__(17);


var Di = (function () {
    function Di(prog, config) {
        this.prog = prog;
        this.config = config;
    }
    Di.prototype.init = function () {
        this.fs = new __WEBPACK_IMPORTED_MODULE_0_app_fs_wrapper__["a" /* FsWrapper */](this);
        this.str = new __WEBPACK_IMPORTED_MODULE_1_app_string_helper__["a" /* StringHelper */](this);
    };
    return Di;
}());



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"name": "ankor-ng-generator",
	"version": "0.0.3",
	"description": "Angular 4 Entities Generator.",
	"main": "dist/main.js",
	"bin": {
		"ngg": "./bin/ngg"
	},
	"scripts": {
		"prod": "webpack",
		"dev": "webpack --watch",
		"start": "npm run dev",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "Anton Korniychuk <dev@korniychuk.pro>",
	"license": "MIT",
	"dependencies": {
		"find-config": "^1.0.0",
		"inflected": "^2.0.1",
		"lodash": "^4.17.4",
		"caporal": "~0.6.0",
		"chalk": "~1.1.3"
	},
	"devDependencies": {
		"@types/webpack": "^2.2.15",
		"@types/node": "^6.0.0",
		"@types/chalk": "^0.4.31",
		"@types/inflected": "^1.1.29",
		"@types/lodash": "^4.14.65",
		"webpack": "~2.6.1",
		"webpack-node-externals": "~1.6.0",
		"typescript": "~2.3.4",
		"tslib": "~1.7.1",
		"json-loader": "~0.5.4",
		"raw-loader": "~0.5.1",
		"awesome-typescript-loader": "~3.1.3"
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("caporal");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = commonOptions;
function commonOptions(prog) {
    return prog
        .option('-d, --debug', 'Enable/Disable inject debug service', prog.BOOL);
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('component', 'Generates angular component')
        .argument('<name>', 'Component name')
        .option('-t, --inline-template')
        .option('-s, --inline-style')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'component');
        var hasDir = !opts.inlineStyle || !opts.inlineTemplate;
        str.labelCreation(name);
        //
        // 1. Make dir
        //
        if (hasDir) {
            fs.dir(name.dash);
        }
        //
        // 2. Make index.ts file
        //
        //
        // 3. HTML template
        //
        var templateVars = {
            name: name.title,
        };
        var template, templateFile;
        if (opts.inlineTemplate) {
            template = str.indent(fs.tplAsStr(__webpack_require__(2), templateVars), 2);
        }
        else {
            fs.tpl(name.fileInDir + ".html", __webpack_require__(2), templateVars);
            templateFile = name.file + ".html";
        }
        //
        // 4. Style file
        //
        var styleVars = {
            sharedStylePath: config.sharedStylePath,
        };
        var style, styleFile;
        if (opts.inlineStyle) {
            style = str.indent(fs.tplAsStr(__webpack_require__(19), styleVars), 2);
        }
        else {
            fs.tpl(name.fileInDir + "." + config.styleExt, __webpack_require__(20), styleVars);
            styleFile = name.file + "." + config.styleExt;
        }
        //
        // 5. The component
        //
        var tsVars = {
            selector: config.appPrefix + "-" + name.dash,
            className: name.classTyped,
            debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                ? config.debuggerPackage
                : false,
            style: style, styleFile: styleFile,
            template: template, templateFile: templateFile,
        };
        fs.tpl((hasDir ? name.fileInDir : name.file) + ".ts", __webpack_require__(21), tsVars);
        //
        // 6. Unit-test
        //
        //
        // 7. e2e test
        //
        str.labelDone();
    });
});;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('directive', 'Generates angular directive')
        .argument('<name>', 'Directive name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'directive');
        str.labelCreation(name);
        //
        // 1. Create the directive file
        //
        fs.tpl(name.file + ".ts", __webpack_require__(22), {
            selector: "" + config.appPrefix + name.class,
            className: name.classTyped,
            debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                ? config.debuggerPackage
                : false,
        });
        str.labelDone();
    });
});;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('guard', 'Generates angular guard service')
        .argument('<name>', 'Guard service name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'component');
        str.labelCreation(name);
        //
        // 1.
        //
        str.labelDone();
    });
});;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('model', 'Generates angular model')
        .argument('<name>', 'Model name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'component');
        str.labelCreation(name);
        //
        // 1.
        //
        str.labelDone();
    });
});;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('pipe', 'Generates angular pipe')
        .argument('<name>', 'Pipe name')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'component');
        str.labelCreation(name);
        //
        // 1.
        //
        str.labelDone();
    });
});;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_case__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var prog = _a.prog, fs = _a.fs, config = _a.config, str = _a.str;
    return prog
        .command('service', 'Generates angular service')
        .argument('<name>', 'Service name')
        .option('-i, --init-method', 'Create init method')
        .action(function (args, opts, logger) {
        var name = __WEBPACK_IMPORTED_MODULE_0_app_case__["a" /* Case */].for(args.name, 'service');
        str.labelCreation(name);
        //
        // 1. Create the service file
        //
        fs.tpl(name.file + ".ts", __webpack_require__(26), {
            className: name.classTyped,
            camelName: name.camel,
            debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                ? config.debuggerPackage
                : false,
            hasInit: opts.initMethod,
        });
        str.labelDone();
    });
});;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FsWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);



var FsWrapper = (function () {
    function FsWrapper(_a) {
        var config = _a.config;
        this.path = config.path();
    }
    FsWrapper.prototype.dir = function (dirName) {
        if (__WEBPACK_IMPORTED_MODULE_0_fs___default.a.existsSync(this.fullPath(dirName))) {
            console.log("%s:  " + dirName + " ...", __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.cyan('Dir'), __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.yellow("EXISTS"));
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_fs___default.a.mkdirSync(this.fullPath(dirName));
            console.log("%s:  " + dirName + " ... ", __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.cyan('Dir'), __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.green("OK"));
        }
    };
    FsWrapper.prototype.tplAsStr = function (rawTpl, vars) {
        if (vars === void 0) { vars = {}; }
        var compiler = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template(rawTpl);
        var compiledTpl = compiler(vars);
        return compiledTpl;
    };
    FsWrapper.prototype.tpl = function (fileName, rawTpl, vars) {
        if (vars === void 0) { vars = {}; }
        this.file(fileName, this.tplAsStr(rawTpl, vars));
    };
    FsWrapper.prototype.file = function (fileName, content) {
        var path = this.fullPath(fileName);
        var exists = __WEBPACK_IMPORTED_MODULE_0_fs___default.a.existsSync(path);
        __WEBPACK_IMPORTED_MODULE_0_fs___default.a.writeFileSync(path, content);
        console.log("%s: " + fileName + " ... ", __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.cyan('File'), exists ? __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.yellow('OVERWROTE') : __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.green('OK'));
    };
    FsWrapper.prototype.fullPath = function (name) {
        return this.path + "/" + name;
    };
    return FsWrapper;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chalk__);

var StringHelper = (function () {
    function StringHelper(_a) {
        var config = _a.config;
        this.indentation = config.indentation;
    }
    StringHelper.prototype.indent = function (text, size) {
        var _this = this;
        if (size === void 0) { size = 1; }
        if (typeof text !== 'string') {
            return '';
        }
        var res = text
            .split('\n')
            .map(function (line) {
            return /^\s*$/.test(line) // is space only string?
                ? ''
                : _this.indentation.repeat(size) + line;
        })
            .join('\n');
        return this.trimRight(res);
    };
    /*
    public repeat(str: string, number: number): string {
      let res = String(str);
  
      for (let i = 0, ilen = number - 2; i < ilen; i++) {
        res += str;
      }
  
      return res;
    }
    */
    StringHelper.prototype.trimRight = function (str) {
        return str.replace(/[\s]+(?!\n)$/gm, '');
    };
    StringHelper.prototype.labelCreation = function (name) {
        console.log('\nCreation %s: "%s"\n', name.entityType, __WEBPACK_IMPORTED_MODULE_0_chalk___default.a.blue.bold(name.dash));
    };
    StringHelper.prototype.labelDone = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_0_chalk___default.a.green('\nDone!\n'));
    };
    return StringHelper;
}());



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_caporal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_caporal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_caporal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_config_loader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_di__ = __webpack_require__(5);




var configLoader = new __WEBPACK_IMPORTED_MODULE_2_app_config_loader__["a" /* ConfigLoader */]();
var isConfigOk = configLoader.hasConfig && configLoader.load();
if (!isConfigOk && process.argv[2] !== 'init') {
    console.warn(__WEBPACK_IMPORTED_MODULE_1_chalk___default.a.red("\nError: Can not load config file."));
}
var version = __webpack_require__(6).version;
__WEBPACK_IMPORTED_MODULE_0_caporal___default.a
    .version(version)
    .command('init', 'Create\\Reset configuration file')
    .action(function (args, opts, logger) {
    configLoader.reset();
    configLoader.save();
    logger.info(__WEBPACK_IMPORTED_MODULE_1_chalk___default.a.green('Done!'));
});
if (isConfigOk) {
    var di = new __WEBPACK_IMPORTED_MODULE_3_app_di__["a" /* Di */](__WEBPACK_IMPORTED_MODULE_0_caporal___default.a, configLoader.config);
    di.init();
    __webpack_require__(1).default(di);
}
__WEBPACK_IMPORTED_MODULE_0_caporal___default.a.parse(process.argv);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = ":host {\n\n}\n"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "@import '<%= sharedStylePath %>';\n\n:host {\n\n}\n"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n<% if (debug) { %>\nimport { DebugService, DebugLevel } from '<%= debug %>';\n<% } %>\n\n/**\n *\n * @example\n *\n *     <<%= selector %>\n *     ></<%= selector %>>\n *\n */\n@Component({\n  selector: '<%= selector %>',<% if (templateFile) { %>\n  templateUrl: './<%= templateFile %>',<% } %><% if (template) { %>\n\n  template: `\n<%= template %>\n  `,<% } %><% if (styleFile) { %>\n  styleUrls: [ './<%= styleFile %>' ],<% } %><% if (style) { %>\n\n  styles:   [ `\n<%= style %>\n  ` ],<% } %>\n})\nexport class <%= className %> implements OnInit {<% if (debug) { %>\n\n  private debug: DebugService;\n<% } %>\n  public constructor(<% if (debug) { %>\n    debug: DebugService,<% } %>\n  ) {<% if (debug) { %>\n    this.debug = debug.factory(new.target.name, DebugLevel.All);<% } %>\n  }\n\n  public ngOnInit() {\n  }\n\n}\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "import { Directive, ElementRef, Renderer } from '@angular/core';<% if (debug) { %>\n\nimport { DebugLevel, DebugService } from '<%= debug %>';<% } %>\n\n/**\n * The directive description ...\n\n * Usage:\n *\n *    <div <%= selector %>></div>\n\n */\n@Directive({\n  selector: '[<%= selector %>]',\n})\nexport class <%= className %> {<% if (debug) { %>\n\n  private debug: DebugService;<% } %>\n\n  public constructor(\n    private el: ElementRef,\n    private renderer: Renderer,<% if (debug) { %>\n    debug: DebugService,<% } %>\n  ) {<% if (debug) { %>\n    this.debug = debug.factory(new.target.name, DebugLevel.All);<% } %>\n    this.init();\n  }\n\n  public init(): void {\n\n  }\n\n}\n"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("find-config");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("inflected");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "import { Injectable } from '@angular/core';<% if (debug) { %>\n\nimport { DebugLevel, DebugService } from '<%= debug %>';<% } %>\n\n/**\n *\n * @example\n *\n *     class ... {\n *       constructor(private <%= camelName %>: <%= className %>) {\n *\n *       }\n *     }\n *\n */\n@Injectable()\nexport class <%= className %> {<% if (debug) { %>\n\n  private debug: DebugService;<% } %>\n\n  public constructor(<% if (debug) { %>\n    debug: DebugService,<% } %>\n  ) {<% if (debug) { %>\n    this.debug = debug.factory(new.target.name, DebugLevel.All);<% } %><% if (hasInit) { %>\n    this.init();<% } %>\n  }<% if (hasInit) { %>\n\n  private init(): void {\n\n  }<% } %>\n\n}\n"

/***/ })
/******/ ]);