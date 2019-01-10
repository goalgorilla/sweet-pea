#!/usr/bin/env node
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cli.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/minimist/index.js":
/*!**************************************************************************!*\
  !*** /Users/alexander/Projects/sweet-pea/node_modules/minimist/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (args, opts) {\n    if (!opts) opts = {};\n    \n    var flags = { bools : {}, strings : {}, unknownFn: null };\n\n    if (typeof opts['unknown'] === 'function') {\n        flags.unknownFn = opts['unknown'];\n    }\n\n    if (typeof opts['boolean'] === 'boolean' && opts['boolean']) {\n      flags.allBools = true;\n    } else {\n      [].concat(opts['boolean']).filter(Boolean).forEach(function (key) {\n          flags.bools[key] = true;\n      });\n    }\n    \n    var aliases = {};\n    Object.keys(opts.alias || {}).forEach(function (key) {\n        aliases[key] = [].concat(opts.alias[key]);\n        aliases[key].forEach(function (x) {\n            aliases[x] = [key].concat(aliases[key].filter(function (y) {\n                return x !== y;\n            }));\n        });\n    });\n\n    [].concat(opts.string).filter(Boolean).forEach(function (key) {\n        flags.strings[key] = true;\n        if (aliases[key]) {\n            flags.strings[aliases[key]] = true;\n        }\n     });\n\n    var defaults = opts['default'] || {};\n    \n    var argv = { _ : [] };\n    Object.keys(flags.bools).forEach(function (key) {\n        setArg(key, defaults[key] === undefined ? false : defaults[key]);\n    });\n    \n    var notFlags = [];\n\n    if (args.indexOf('--') !== -1) {\n        notFlags = args.slice(args.indexOf('--')+1);\n        args = args.slice(0, args.indexOf('--'));\n    }\n\n    function argDefined(key, arg) {\n        return (flags.allBools && /^--[^=]+$/.test(arg)) ||\n            flags.strings[key] || flags.bools[key] || aliases[key];\n    }\n\n    function setArg (key, val, arg) {\n        if (arg && flags.unknownFn && !argDefined(key, arg)) {\n            if (flags.unknownFn(arg) === false) return;\n        }\n\n        var value = !flags.strings[key] && isNumber(val)\n            ? Number(val) : val\n        ;\n        setKey(argv, key.split('.'), value);\n        \n        (aliases[key] || []).forEach(function (x) {\n            setKey(argv, x.split('.'), value);\n        });\n    }\n\n    function setKey (obj, keys, value) {\n        var o = obj;\n        keys.slice(0,-1).forEach(function (key) {\n            if (o[key] === undefined) o[key] = {};\n            o = o[key];\n        });\n\n        var key = keys[keys.length - 1];\n        if (o[key] === undefined || flags.bools[key] || typeof o[key] === 'boolean') {\n            o[key] = value;\n        }\n        else if (Array.isArray(o[key])) {\n            o[key].push(value);\n        }\n        else {\n            o[key] = [ o[key], value ];\n        }\n    }\n    \n    function aliasIsBoolean(key) {\n      return aliases[key].some(function (x) {\n          return flags.bools[x];\n      });\n    }\n\n    for (var i = 0; i < args.length; i++) {\n        var arg = args[i];\n        \n        if (/^--.+=/.test(arg)) {\n            // Using [\\s\\S] instead of . because js doesn't support the\n            // 'dotall' regex modifier. See:\n            // http://stackoverflow.com/a/1068308/13216\n            var m = arg.match(/^--([^=]+)=([\\s\\S]*)$/);\n            var key = m[1];\n            var value = m[2];\n            if (flags.bools[key]) {\n                value = value !== 'false';\n            }\n            setArg(key, value, arg);\n        }\n        else if (/^--no-.+/.test(arg)) {\n            var key = arg.match(/^--no-(.+)/)[1];\n            setArg(key, false, arg);\n        }\n        else if (/^--.+/.test(arg)) {\n            var key = arg.match(/^--(.+)/)[1];\n            var next = args[i + 1];\n            if (next !== undefined && !/^-/.test(next)\n            && !flags.bools[key]\n            && !flags.allBools\n            && (aliases[key] ? !aliasIsBoolean(key) : true)) {\n                setArg(key, next, arg);\n                i++;\n            }\n            else if (/^(true|false)$/.test(next)) {\n                setArg(key, next === 'true', arg);\n                i++;\n            }\n            else {\n                setArg(key, flags.strings[key] ? '' : true, arg);\n            }\n        }\n        else if (/^-[^-]+/.test(arg)) {\n            var letters = arg.slice(1,-1).split('');\n            \n            var broken = false;\n            for (var j = 0; j < letters.length; j++) {\n                var next = arg.slice(j+2);\n                \n                if (next === '-') {\n                    setArg(letters[j], next, arg)\n                    continue;\n                }\n                \n                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {\n                    setArg(letters[j], next.split('=')[1], arg);\n                    broken = true;\n                    break;\n                }\n                \n                if (/[A-Za-z]/.test(letters[j])\n                && /-?\\d+(\\.\\d*)?(e-?\\d+)?$/.test(next)) {\n                    setArg(letters[j], next, arg);\n                    broken = true;\n                    break;\n                }\n                \n                if (letters[j+1] && letters[j+1].match(/\\W/)) {\n                    setArg(letters[j], arg.slice(j+2), arg);\n                    broken = true;\n                    break;\n                }\n                else {\n                    setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);\n                }\n            }\n            \n            var key = arg.slice(-1)[0];\n            if (!broken && key !== '-') {\n                if (args[i+1] && !/^(-|--)[^-]/.test(args[i+1])\n                && !flags.bools[key]\n                && (aliases[key] ? !aliasIsBoolean(key) : true)) {\n                    setArg(key, args[i+1], arg);\n                    i++;\n                }\n                else if (args[i+1] && /true|false/.test(args[i+1])) {\n                    setArg(key, args[i+1] === 'true', arg);\n                    i++;\n                }\n                else {\n                    setArg(key, flags.strings[key] ? '' : true, arg);\n                }\n            }\n        }\n        else {\n            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {\n                argv._.push(\n                    flags.strings['_'] || !isNumber(arg) ? arg : Number(arg)\n                );\n            }\n            if (opts.stopEarly) {\n                argv._.push.apply(argv._, args.slice(i + 1));\n                break;\n            }\n        }\n    }\n    \n    Object.keys(defaults).forEach(function (key) {\n        if (!hasKey(argv, key.split('.'))) {\n            setKey(argv, key.split('.'), defaults[key]);\n            \n            (aliases[key] || []).forEach(function (x) {\n                setKey(argv, x.split('.'), defaults[key]);\n            });\n        }\n    });\n    \n    if (opts['--']) {\n        argv['--'] = new Array();\n        notFlags.forEach(function(key) {\n            argv['--'].push(key);\n        });\n    }\n    else {\n        notFlags.forEach(function(key) {\n            argv._.push(key);\n        });\n    }\n\n    return argv;\n};\n\nfunction hasKey (obj, keys) {\n    var o = obj;\n    keys.slice(0,-1).forEach(function (key) {\n        o = (o[key] || {});\n    });\n\n    var key = keys[keys.length - 1];\n    return key in o;\n}\n\nfunction isNumber (x) {\n    if (typeof x === 'number') return true;\n    if (/^0x[0-9a-f]+$/i.test(x)) return true;\n    return /^[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(e[-+]?\\d+)?$/.test(x);\n}\n\n\n\n//# sourceURL=webpack:////Users/alexander/Projects/sweet-pea/node_modules/minimist/index.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, author, license, bin, scripts, peerDependencies, dependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"@sweet-pea/cli\",\"version\":\"0.2.0\",\"description\":\"CLI to the Open Social front-end build tools\",\"author\":\"Alexander Varwijk <alexander@goalgorilla.com>\",\"license\":\"GPL-2.0\",\"bin\":{\"sp\":\"dist/cli.js\"},\"scripts\":{\"build\":\"webpack src/cli.js -o bin/cli.js\",\"lint\":\"eslint src/cli.js\"},\"peerDependencies\":{\"@sweet-pea/core\":\">=0.1.0\"},\"dependencies\":{\"minimist\":\"^1.2.0\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/cli.js":
/*!********************!*\
  !*** ./src/cli.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimist */ \"../../node_modules/minimist/index.js\");\n/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sweet-pea/core */ \"@sweet-pea/core\");\n/* harmony import */ var _sweet_pea_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\n\n\n\nconst toolInfo = __webpack_require__(/*! ../package.json */ \"./package.json\");\n/**\n * A mapping of commands to their usage information and handlers.\n */\n\n\nconst commands = {\n  'clean': {\n    usage: 'Remove the compiled css/js files.',\n    run: target => {\n      // TODO: Once these return promises they should run as parallel promises.\n      Object(_sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__[\"cleanCss\"])(target);\n      Object(_sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__[\"cleanJs\"])(target);\n    }\n  },\n  'clean:css': {\n    usage: 'Remove the compiled css files.',\n    run: _sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__[\"cleanCss\"]\n  },\n  'clean:js': {\n    usage: 'Remove the compiled js files.',\n    run: _sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__[\"cleanJs\"]\n  },\n  'scripts': {\n    usage: 'Compile the javascript of the current theme.',\n    run: _sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__[\"scripts\"]\n  },\n  'styles': {\n    usage: 'Compile the sass of the current theme.',\n    run: _sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__[\"styles\"]\n  }\n}; // We always print version info.\n\nconsole.log(`${toolInfo.name} v${toolInfo.version}`); // Strip the node executable and cli filename from the arguments.\n\nconst args = process.argv.slice(2); // Require at least a single argument to indicate the user action.\n\nObject(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"assertUsage\"])(args.length > 0); // The first argument must be a command (not prefixed with \"-\" or \"--\").\n\nconst command = args.shift();\nObject(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"assertUsage\"])(command.substr(0, 1) !== \"-\"); // For the help command we can terminate early.\n\nif (command === 'help') {\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"printUsage\"])(commands);\n  process.exit(0);\n} // If we're dealing with an unknown command then we can exit.\nelse if (typeof commands[command] === 'undefined') {\n    console.error(`Unknown command: ${command}`);\n    console.log(\"For usage instructions try `sp help`\");\n    process.exit(1);\n  }\n\nconst options = minimist__WEBPACK_IMPORTED_MODULE_1___default()(args);\nlet directory = process.cwd(); // Allow the user to provide a relative or absolute path to the theme.\n\nif (typeof options['directory'] !== 'undefined') {\n  directory = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(directory, options['directory']);\n} // TODO: Allow this program to run for modules instead of themes.\n\n\nconst Theme = _sweet_pea_core__WEBPACK_IMPORTED_MODULE_2__[\"DrupalTheme\"].loadFromDirectory(directory);\ncommands[command].run(Theme);\n\n//# sourceURL=webpack:///./src/cli.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: assertUsage, printUsage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assertUsage\", function() { return assertUsage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printUsage\", function() { return printUsage; });\n/**\n * If the condition is false, prints the usage instructions and exits.\n *\n * @param condition\n *   The condition that is required for the program to run.\n */\nfunction assertUsage(condition) {\n  if (condition) {\n    return;\n  }\n\n  printUsage();\n  process.exit(1);\n}\n/**\n * Prints the usage instructions for this program.\n *\n * @param commands { command: { usage: string, run: function }, ... }\n *   An object that contains a mapping of command names to usage instructions.\n * @param nameMaxLength integer\n *   The maximum length to use for displaying the names of commands and options.\n */\n\nfunction printUsage(commands, nameMaxLength = 20) {\n  console.log(\"Usage: sp <command>\");\n  console.log();\n  console.log(\"Commands:\");\n  console.group();\n  console.log(`${'help'.padEnd(nameMaxLength)} Prints these usage instructions.`);\n\n  for (let command in commands) {\n    console.log(`${command.padEnd(nameMaxLength)} ${commands[command].usage}`);\n  }\n\n  console.groupEnd();\n  console.log();\n  console.log(\"Options: \");\n  console.group();\n  console.log(`${'--folder=<path>'.padEnd(nameMaxLength)} Takes a path to a folder to use instead of the current directory.`);\n  console.groupEnd();\n}\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "@sweet-pea/core":
/*!**********************************!*\
  !*** external "@sweet-pea/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sweet-pea/core\");\n\n//# sourceURL=webpack:///external_%22@sweet-pea/core%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ })));