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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sweet-pea/core */ \"@sweet-pea/core\");\n/* harmony import */ var _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nconst toolInfo = __webpack_require__(/*! ../package.json */ \"./package.json\");\n/**\n * If the condition is false, prints the usage instructions and exits.\n *\n * @param condition\n *   The condition that is required for the program to run.\n */\n\n\nfunction assertUsage(condition) {\n  if (condition) {\n    return;\n  }\n\n  printUsage();\n  process.exit(1);\n}\n/**\n * Prints the usage instructions for this program.\n */\n\n\nfunction printUsage() {\n  console.log(\"Usage: sp command [options]\");\n  console.log();\n  console.log(\"Commands:\");\n  console.log(\"\\thelp\\t\\tPrints these usage instructions.\");\n  console.log(\"\\tclean\\t\\tRemove the compiled css/js files.\");\n  console.log(\"\\tclean:css\\t\\tRemove the compiled css files.\");\n  console.log(\"\\tclean:js\\t\\tRemove the compiled js files.\");\n  console.log(\"\\tscripts\\t\\tCompile the javascript of the current theme.\");\n  console.log(\"\\tstyles\\t\\tCompile the sass of the current theme.\");\n} // We always print version info.\n\n\nconsole.log(`${toolInfo.name} v${toolInfo.version}`); // Strip the node executable and cli filename from the arguments.\n\nconst args = process.argv.slice(2); // Require at least a single argument to indicate the user action.\n\nassertUsage(args.length > 0); // The first argument must be a command (not prefixed with \"-\" or \"--\").\n\nconst command = args[0];\nassertUsage(command.substr(0, 1) !== \"-\"); // Resolve the provided command to an action that we can execute.\n// TODO: Parse args here instead of in resolveCommand.\n\nlet action;\n\ntry {\n  action = Object(_sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"resolveCommand\"])(command, args.slice(1));\n} catch (e) {\n  console.error(`Unknown command: ${command}`);\n  console.log(\"For help try `sp help`\");\n  process.exit(1);\n} // TODO: Allow this program to run for modules instead of themes.\n// TODO: Add folder option here to use instead of current working dir.\n// It could be that an action was requested that could be executed without\n// loading a theme. In that case we're all done.\n\n\nif (!action) {\n  process.exit(0);\n}\n\nconst Theme = _sweet_pea_core__WEBPACK_IMPORTED_MODULE_0__[\"DrupalTheme\"].loadFromDirectory(process.cwd());\naction(Theme);\n\n//# sourceURL=webpack:///./src/cli.js?");

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