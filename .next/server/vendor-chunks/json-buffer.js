/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json-buffer";
exports.ids = ["vendor-chunks/json-buffer"];
exports.modules = {

/***/ "(ssr)/./node_modules/json-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/json-buffer/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("//TODO: handle reviver/dehydrate function like normal\n//and handle indentation, like normal.\n//if anyone needs this... please send pull request.\nexports.stringify = function stringify(o) {\n    if (\"undefined\" == typeof o) return o;\n    if (o && Buffer.isBuffer(o)) return JSON.stringify(\":base64:\" + o.toString(\"base64\"));\n    if (o && o.toJSON) o = o.toJSON();\n    if (o && \"object\" === typeof o) {\n        var s = \"\";\n        var array = Array.isArray(o);\n        s = array ? \"[\" : \"{\";\n        var first = true;\n        for(var k in o){\n            var ignore = \"function\" == typeof o[k] || !array && \"undefined\" === typeof o[k];\n            if (Object.hasOwnProperty.call(o, k) && !ignore) {\n                if (!first) s += \",\";\n                first = false;\n                if (array) {\n                    if (o[k] == undefined) s += \"null\";\n                    else s += stringify(o[k]);\n                } else if (o[k] !== void 0) {\n                    s += stringify(k) + \":\" + stringify(o[k]);\n                }\n            }\n        }\n        s += array ? \"]\" : \"}\";\n        return s;\n    } else if (\"string\" === typeof o) {\n        return JSON.stringify(/^:/.test(o) ? \":\" + o : o);\n    } else if (\"undefined\" === typeof o) {\n        return \"null\";\n    } else return JSON.stringify(o);\n};\nexports.parse = function(s) {\n    return JSON.parse(s, function(key, value) {\n        if (\"string\" === typeof value) {\n            if (/^:base64:/.test(value)) return Buffer.from(value.substring(8), \"base64\");\n            else return /^:/.test(value) ? value.substring(1) : value;\n        }\n        return value;\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNvbi1idWZmZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JELHNDQUFzQztBQUN0QyxtREFBbUQ7QUFFbkRBLGlCQUFpQixHQUFHLFNBQVNDLFVBQVdDLENBQUM7SUFDdkMsSUFBRyxlQUFlLE9BQU9BLEdBQUcsT0FBT0E7SUFFbkMsSUFBR0EsS0FBS0MsT0FBT0MsUUFBUSxDQUFDRixJQUN0QixPQUFPRyxLQUFLSixTQUFTLENBQUMsYUFBYUMsRUFBRUksUUFBUSxDQUFDO0lBRWhELElBQUdKLEtBQUtBLEVBQUVLLE1BQU0sRUFDZEwsSUFBS0EsRUFBRUssTUFBTTtJQUVmLElBQUdMLEtBQUssYUFBYSxPQUFPQSxHQUFHO1FBQzdCLElBQUlNLElBQUk7UUFDUixJQUFJQyxRQUFRQyxNQUFNQyxPQUFPLENBQUNUO1FBQzFCTSxJQUFJQyxRQUFRLE1BQU07UUFDbEIsSUFBSUcsUUFBUTtRQUVaLElBQUksSUFBSUMsS0FBS1gsRUFBRztZQUNkLElBQUlZLFNBQVMsY0FBYyxPQUFPWixDQUFDLENBQUNXLEVBQUUsSUFBSyxDQUFDSixTQUFTLGdCQUFnQixPQUFPUCxDQUFDLENBQUNXLEVBQUU7WUFDaEYsSUFBR0UsT0FBT0MsY0FBYyxDQUFDQyxJQUFJLENBQUNmLEdBQUdXLE1BQU0sQ0FBQ0MsUUFBUTtnQkFDOUMsSUFBRyxDQUFDRixPQUNGSixLQUFLO2dCQUNQSSxRQUFRO2dCQUNSLElBQUlILE9BQU87b0JBQ1QsSUFBR1AsQ0FBQyxDQUFDVyxFQUFFLElBQUlLLFdBQ1RWLEtBQUs7eUJBRUxBLEtBQUtQLFVBQVVDLENBQUMsQ0FBQ1csRUFBRTtnQkFDdkIsT0FBTyxJQUFJWCxDQUFDLENBQUNXLEVBQUUsS0FBSyxLQUFLLEdBQUk7b0JBQzNCTCxLQUFLUCxVQUFVWSxLQUFLLE1BQU1aLFVBQVVDLENBQUMsQ0FBQ1csRUFBRTtnQkFDMUM7WUFDRjtRQUNGO1FBRUFMLEtBQUtDLFFBQVEsTUFBTTtRQUVuQixPQUFPRDtJQUNULE9BQU8sSUFBSSxhQUFhLE9BQU9OLEdBQUc7UUFDaEMsT0FBT0csS0FBS0osU0FBUyxDQUFDLEtBQUtrQixJQUFJLENBQUNqQixLQUFLLE1BQU1BLElBQUlBO0lBQ2pELE9BQU8sSUFBSSxnQkFBZ0IsT0FBT0EsR0FBRztRQUNuQyxPQUFPO0lBQ1QsT0FDRSxPQUFPRyxLQUFLSixTQUFTLENBQUNDO0FBQzFCO0FBRUFGLGFBQWEsR0FBRyxTQUFVUSxDQUFDO0lBQ3pCLE9BQU9ILEtBQUtlLEtBQUssQ0FBQ1osR0FBRyxTQUFVYSxHQUFHLEVBQUVDLEtBQUs7UUFDdkMsSUFBRyxhQUFhLE9BQU9BLE9BQU87WUFDNUIsSUFBRyxZQUFZSCxJQUFJLENBQUNHLFFBQ2xCLE9BQU9uQixPQUFPb0IsSUFBSSxDQUFDRCxNQUFNRSxTQUFTLENBQUMsSUFBSTtpQkFFdkMsT0FBTyxLQUFLTCxJQUFJLENBQUNHLFNBQVNBLE1BQU1FLFNBQVMsQ0FBQyxLQUFLRjtRQUNuRDtRQUNBLE9BQU9BO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21vYmlsZS8uL25vZGVfbW9kdWxlcy9qc29uLWJ1ZmZlci9pbmRleC5qcz9jMjkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vVE9ETzogaGFuZGxlIHJldml2ZXIvZGVoeWRyYXRlIGZ1bmN0aW9uIGxpa2Ugbm9ybWFsXG4vL2FuZCBoYW5kbGUgaW5kZW50YXRpb24sIGxpa2Ugbm9ybWFsLlxuLy9pZiBhbnlvbmUgbmVlZHMgdGhpcy4uLiBwbGVhc2Ugc2VuZCBwdWxsIHJlcXVlc3QuXG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5IChvKSB7XG4gIGlmKCd1bmRlZmluZWQnID09IHR5cGVvZiBvKSByZXR1cm4gb1xuXG4gIGlmKG8gJiYgQnVmZmVyLmlzQnVmZmVyKG8pKVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSgnOmJhc2U2NDonICsgby50b1N0cmluZygnYmFzZTY0JykpXG5cbiAgaWYobyAmJiBvLnRvSlNPTilcbiAgICBvID0gIG8udG9KU09OKClcblxuICBpZihvICYmICdvYmplY3QnID09PSB0eXBlb2Ygbykge1xuICAgIHZhciBzID0gJydcbiAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KG8pXG4gICAgcyA9IGFycmF5ID8gJ1snIDogJ3snXG4gICAgdmFyIGZpcnN0ID0gdHJ1ZVxuXG4gICAgZm9yKHZhciBrIGluIG8pIHtcbiAgICAgIHZhciBpZ25vcmUgPSAnZnVuY3Rpb24nID09IHR5cGVvZiBvW2tdIHx8ICghYXJyYXkgJiYgJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBvW2tdKVxuICAgICAgaWYoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobywgaykgJiYgIWlnbm9yZSkge1xuICAgICAgICBpZighZmlyc3QpXG4gICAgICAgICAgcyArPSAnLCdcbiAgICAgICAgZmlyc3QgPSBmYWxzZVxuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBpZihvW2tdID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHMgKz0gJ251bGwnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcyArPSBzdHJpbmdpZnkob1trXSlcbiAgICAgICAgfSBlbHNlIGlmIChvW2tdICE9PSB2b2lkKDApKSB7XG4gICAgICAgICAgcyArPSBzdHJpbmdpZnkoaykgKyAnOicgKyBzdHJpbmdpZnkob1trXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHMgKz0gYXJyYXkgPyAnXScgOiAnfSdcblxuICAgIHJldHVybiBzXG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBvKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KC9eOi8udGVzdChvKSA/ICc6JyArIG8gOiBvKVxuICB9IGVsc2UgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2Ygbykge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0gZWxzZVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvKVxufVxuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHMpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UocywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mIHZhbHVlKSB7XG4gICAgICBpZigvXjpiYXNlNjQ6Ly50ZXN0KHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlLnN1YnN0cmluZyg4KSwgJ2Jhc2U2NCcpXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAvXjovLnRlc3QodmFsdWUpID8gdmFsdWUuc3Vic3RyaW5nKDEpIDogdmFsdWUgXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9KVxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzdHJpbmdpZnkiLCJvIiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJKU09OIiwidG9TdHJpbmciLCJ0b0pTT04iLCJzIiwiYXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJmaXJzdCIsImsiLCJpZ25vcmUiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ1bmRlZmluZWQiLCJ0ZXN0IiwicGFyc2UiLCJrZXkiLCJ2YWx1ZSIsImZyb20iLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/json-buffer/index.js\n");

/***/ })

};
;