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

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, author, license, bin, scripts, peerDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"@sweet-pea/cli\",\"version\":\"0.2.0\",\"description\":\"CLI to the Open Social front-end build tools\",\"author\":\"Alexander Varwijk <alexander@goalgorilla.com>\",\"license\":\"GPL-2.0\",\"bin\":{\"sp\":\"dist/cli.js\"},\"scripts\":{\"build\":\"webpack src/cli.js -o bin/cli.js\",\"lint\":\"eslint src/cli.js\"},\"peerDependencies\":{\"@sweet-pea/core\":\">=0.1.0\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/cli.js":
/*!********************!*\
  !*** ./src/cli.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sweet-pea/core */ \"@sweet-pea/core\");\n/* harmony import */ var _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\n\nconst toolInfo = __webpack_require__(/*! ../package.json */ \"./package.json\");\n/**\n * A mapping of commands to their usage information and handlers.\n */\n\n\nconst commands = {\n  'clean': {\n    usage: 'Remove the compiled css/js files.',\n    run: target => {\n      // TODO: Once these return promises they should run as parallel promises.\n      Object(_sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"cleanCss\"])(target);\n      Object(_sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"cleanJs\"])(target);\n    }\n  },\n  'clean:css': {\n    usage: 'Remove the compiled css files.',\n    run: _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"cleanCss\"]\n  },\n  'clean:js': {\n    usage: 'Remove the compiled js files.',\n    run: _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"cleanJs\"]\n  },\n  'scripts': {\n    usage: 'Compile the javascript of the current theme.',\n    run: _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"scripts\"]\n  },\n  'styles': {\n    usage: 'Compile the sass of the current theme.',\n    run: _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"styles\"]\n  }\n}; // We always print version info.\n\nconsole.log(`${toolInfo.name} v${toolInfo.version}`); // Strip the node executable and cli filename from the arguments.\n\nconst args = process.argv.slice(2); // Require at least a single argument to indicate the user action.\n\nObject(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"assertUsage\"])(args.length > 0); // The first argument must be a command (not prefixed with \"-\" or \"--\").\n\nconst command = args[0];\nObject(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"assertUsage\"])(command.substr(0, 1) !== \"-\"); // For the help command we can terminate early.\n\nif (command === 'help') {\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"printUsage\"])(commands);\n  process.exit(0);\n} // If we're dealing with an unknown command then we can exit.\n\n\nif (typeof commands[command] === 'undefined') {\n  console.error(`Unknown command: ${command}`);\n  console.log(\"For usage instructions try `sp help`\");\n  process.exit(1);\n} // TODO: Allow this program to run for modules instead of themes.\n// TODO: Add folder option here to use instead of current working dir.\n\n\nconst Theme = _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"DrupalTheme\"].loadFromDirectory(process.cwd());\naction(Theme);\n\n//# sourceURL=webpack:///./src/cli.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: assertUsage, printUsage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assertUsage\", function() { return assertUsage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printUsage\", function() { return printUsage; });\n/**\n * If the condition is false, prints the usage instructions and exits.\n *\n * @param condition\n *   The condition that is required for the program to run.\n */\nfunction assertUsage(condition) {\n  if (condition) {\n    return;\n  }\n\n  printUsage();\n  process.exit(1);\n}\n/**\n * Prints the usage instructions for this program.\n *\n * @param commands { command: { usage: string, run: function }, ... }\n *   An object that contains a mapping of command names to usage instructions.\n * @param commandMaxLength integer\n *   The maximum length to use for displaying the command names.\n */\n\nfunction printUsage(commands, commandMaxLength = 15) {\n  console.log(\"Usage: sp COMMAND\");\n  console.log();\n  console.log(\"Commands:\");\n  console.group();\n  console.log(`${'help'.padEnd(commandMaxLength)} Prints these usage instructions.`);\n\n  for (let command in commands) {\n    console.log(`${command.padEnd(commandMaxLength)} ${commands[command].usage}`);\n  }\n\n  console.groupEnd();\n}\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "@sweet-pea/core":
/*!**********************************!*\
  !*** external "@sweet-pea/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sweet-pea/core\");\n\n//# sourceURL=webpack:///external_%22@sweet-pea/core%22?");

/***/ })

/******/ })));