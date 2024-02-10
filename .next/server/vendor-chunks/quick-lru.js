"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/quick-lru";
exports.ids = ["vendor-chunks/quick-lru"];
exports.modules = {

/***/ "(ssr)/./node_modules/quick-lru/index.js":
/*!*****************************************!*\
  !*** ./node_modules/quick-lru/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nclass QuickLRU {\n    constructor(options = {}){\n        if (!(options.maxSize && options.maxSize > 0)) {\n            throw new TypeError(\"`maxSize` must be a number greater than 0\");\n        }\n        this.maxSize = options.maxSize;\n        this.onEviction = options.onEviction;\n        this.cache = new Map();\n        this.oldCache = new Map();\n        this._size = 0;\n    }\n    _set(key, value) {\n        this.cache.set(key, value);\n        this._size++;\n        if (this._size >= this.maxSize) {\n            this._size = 0;\n            if (typeof this.onEviction === \"function\") {\n                for (const [key, value] of this.oldCache.entries()){\n                    this.onEviction(key, value);\n                }\n            }\n            this.oldCache = this.cache;\n            this.cache = new Map();\n        }\n    }\n    get(key) {\n        if (this.cache.has(key)) {\n            return this.cache.get(key);\n        }\n        if (this.oldCache.has(key)) {\n            const value = this.oldCache.get(key);\n            this.oldCache.delete(key);\n            this._set(key, value);\n            return value;\n        }\n    }\n    set(key, value) {\n        if (this.cache.has(key)) {\n            this.cache.set(key, value);\n        } else {\n            this._set(key, value);\n        }\n        return this;\n    }\n    has(key) {\n        return this.cache.has(key) || this.oldCache.has(key);\n    }\n    peek(key) {\n        if (this.cache.has(key)) {\n            return this.cache.get(key);\n        }\n        if (this.oldCache.has(key)) {\n            return this.oldCache.get(key);\n        }\n    }\n    delete(key) {\n        const deleted = this.cache.delete(key);\n        if (deleted) {\n            this._size--;\n        }\n        return this.oldCache.delete(key) || deleted;\n    }\n    clear() {\n        this.cache.clear();\n        this.oldCache.clear();\n        this._size = 0;\n    }\n    *keys() {\n        for (const [key] of this){\n            yield key;\n        }\n    }\n    *values() {\n        for (const [, value] of this){\n            yield value;\n        }\n    }\n    *[Symbol.iterator]() {\n        for (const item of this.cache){\n            yield item;\n        }\n        for (const item of this.oldCache){\n            const [key] = item;\n            if (!this.cache.has(key)) {\n                yield item;\n            }\n        }\n    }\n    get size() {\n        let oldCacheSize = 0;\n        for (const key of this.oldCache.keys()){\n            if (!this.cache.has(key)) {\n                oldCacheSize++;\n            }\n        }\n        return Math.min(this._size + oldCacheSize, this.maxSize);\n    }\n}\nmodule.exports = QuickLRU;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcXVpY2stbHJ1L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUE7SUFDTEMsWUFBWUMsVUFBVSxDQUFDLENBQUMsQ0FBRTtRQUN6QixJQUFJLENBQUVBLENBQUFBLFFBQVFDLE9BQU8sSUFBSUQsUUFBUUMsT0FBTyxHQUFHLElBQUk7WUFDOUMsTUFBTSxJQUFJQyxVQUFVO1FBQ3JCO1FBRUEsSUFBSSxDQUFDRCxPQUFPLEdBQUdELFFBQVFDLE9BQU87UUFDOUIsSUFBSSxDQUFDRSxVQUFVLEdBQUdILFFBQVFHLFVBQVU7UUFDcEMsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSUM7UUFDakIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSUQ7UUFDcEIsSUFBSSxDQUFDRSxLQUFLLEdBQUc7SUFDZDtJQUVBQyxLQUFLQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtRQUNoQixJQUFJLENBQUNOLEtBQUssQ0FBQ08sR0FBRyxDQUFDRixLQUFLQztRQUNwQixJQUFJLENBQUNILEtBQUs7UUFFVixJQUFJLElBQUksQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQ04sT0FBTyxFQUFFO1lBQy9CLElBQUksQ0FBQ00sS0FBSyxHQUFHO1lBRWIsSUFBSSxPQUFPLElBQUksQ0FBQ0osVUFBVSxLQUFLLFlBQVk7Z0JBQzFDLEtBQUssTUFBTSxDQUFDTSxLQUFLQyxNQUFNLElBQUksSUFBSSxDQUFDSixRQUFRLENBQUNNLE9BQU8sR0FBSTtvQkFDbkQsSUFBSSxDQUFDVCxVQUFVLENBQUNNLEtBQUtDO2dCQUN0QjtZQUNEO1lBRUEsSUFBSSxDQUFDSixRQUFRLEdBQUcsSUFBSSxDQUFDRixLQUFLO1lBQzFCLElBQUksQ0FBQ0EsS0FBSyxHQUFHLElBQUlDO1FBQ2xCO0lBQ0Q7SUFFQVEsSUFBSUosR0FBRyxFQUFFO1FBQ1IsSUFBSSxJQUFJLENBQUNMLEtBQUssQ0FBQ1UsR0FBRyxDQUFDTCxNQUFNO1lBQ3hCLE9BQU8sSUFBSSxDQUFDTCxLQUFLLENBQUNTLEdBQUcsQ0FBQ0o7UUFDdkI7UUFFQSxJQUFJLElBQUksQ0FBQ0gsUUFBUSxDQUFDUSxHQUFHLENBQUNMLE1BQU07WUFDM0IsTUFBTUMsUUFBUSxJQUFJLENBQUNKLFFBQVEsQ0FBQ08sR0FBRyxDQUFDSjtZQUNoQyxJQUFJLENBQUNILFFBQVEsQ0FBQ1MsTUFBTSxDQUFDTjtZQUNyQixJQUFJLENBQUNELElBQUksQ0FBQ0MsS0FBS0M7WUFDZixPQUFPQTtRQUNSO0lBQ0Q7SUFFQUMsSUFBSUYsR0FBRyxFQUFFQyxLQUFLLEVBQUU7UUFDZixJQUFJLElBQUksQ0FBQ04sS0FBSyxDQUFDVSxHQUFHLENBQUNMLE1BQU07WUFDeEIsSUFBSSxDQUFDTCxLQUFLLENBQUNPLEdBQUcsQ0FBQ0YsS0FBS0M7UUFDckIsT0FBTztZQUNOLElBQUksQ0FBQ0YsSUFBSSxDQUFDQyxLQUFLQztRQUNoQjtRQUVBLE9BQU8sSUFBSTtJQUNaO0lBRUFJLElBQUlMLEdBQUcsRUFBRTtRQUNSLE9BQU8sSUFBSSxDQUFDTCxLQUFLLENBQUNVLEdBQUcsQ0FBQ0wsUUFBUSxJQUFJLENBQUNILFFBQVEsQ0FBQ1EsR0FBRyxDQUFDTDtJQUNqRDtJQUVBTyxLQUFLUCxHQUFHLEVBQUU7UUFDVCxJQUFJLElBQUksQ0FBQ0wsS0FBSyxDQUFDVSxHQUFHLENBQUNMLE1BQU07WUFDeEIsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ1MsR0FBRyxDQUFDSjtRQUN2QjtRQUVBLElBQUksSUFBSSxDQUFDSCxRQUFRLENBQUNRLEdBQUcsQ0FBQ0wsTUFBTTtZQUMzQixPQUFPLElBQUksQ0FBQ0gsUUFBUSxDQUFDTyxHQUFHLENBQUNKO1FBQzFCO0lBQ0Q7SUFFQU0sT0FBT04sR0FBRyxFQUFFO1FBQ1gsTUFBTVEsVUFBVSxJQUFJLENBQUNiLEtBQUssQ0FBQ1csTUFBTSxDQUFDTjtRQUNsQyxJQUFJUSxTQUFTO1lBQ1osSUFBSSxDQUFDVixLQUFLO1FBQ1g7UUFFQSxPQUFPLElBQUksQ0FBQ0QsUUFBUSxDQUFDUyxNQUFNLENBQUNOLFFBQVFRO0lBQ3JDO0lBRUFDLFFBQVE7UUFDUCxJQUFJLENBQUNkLEtBQUssQ0FBQ2MsS0FBSztRQUNoQixJQUFJLENBQUNaLFFBQVEsQ0FBQ1ksS0FBSztRQUNuQixJQUFJLENBQUNYLEtBQUssR0FBRztJQUNkO0lBRUEsQ0FBRVksT0FBTztRQUNSLEtBQUssTUFBTSxDQUFDVixJQUFJLElBQUksSUFBSSxDQUFFO1lBQ3pCLE1BQU1BO1FBQ1A7SUFDRDtJQUVBLENBQUVXLFNBQVM7UUFDVixLQUFLLE1BQU0sR0FBR1YsTUFBTSxJQUFJLElBQUksQ0FBRTtZQUM3QixNQUFNQTtRQUNQO0lBQ0Q7SUFFQSxDQUFFLENBQUNXLE9BQU9DLFFBQVEsQ0FBQyxHQUFHO1FBQ3JCLEtBQUssTUFBTUMsUUFBUSxJQUFJLENBQUNuQixLQUFLLENBQUU7WUFDOUIsTUFBTW1CO1FBQ1A7UUFFQSxLQUFLLE1BQU1BLFFBQVEsSUFBSSxDQUFDakIsUUFBUSxDQUFFO1lBQ2pDLE1BQU0sQ0FBQ0csSUFBSSxHQUFHYztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUNuQixLQUFLLENBQUNVLEdBQUcsQ0FBQ0wsTUFBTTtnQkFDekIsTUFBTWM7WUFDUDtRQUNEO0lBQ0Q7SUFFQSxJQUFJQyxPQUFPO1FBQ1YsSUFBSUMsZUFBZTtRQUNuQixLQUFLLE1BQU1oQixPQUFPLElBQUksQ0FBQ0gsUUFBUSxDQUFDYSxJQUFJLEdBQUk7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQ2YsS0FBSyxDQUFDVSxHQUFHLENBQUNMLE1BQU07Z0JBQ3pCZ0I7WUFDRDtRQUNEO1FBRUEsT0FBT0MsS0FBS0MsR0FBRyxDQUFDLElBQUksQ0FBQ3BCLEtBQUssR0FBR2tCLGNBQWMsSUFBSSxDQUFDeEIsT0FBTztJQUN4RDtBQUNEO0FBRUEyQixPQUFPQyxPQUFPLEdBQUcvQiIsInNvdXJjZXMiOlsid2VicGFjazovL21vYmlsZS8uL25vZGVfbW9kdWxlcy9xdWljay1scnUvaW5kZXguanM/YWY3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFF1aWNrTFJVIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cdFx0aWYgKCEob3B0aW9ucy5tYXhTaXplICYmIG9wdGlvbnMubWF4U2l6ZSA+IDApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdgbWF4U2l6ZWAgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubWF4U2l6ZSA9IG9wdGlvbnMubWF4U2l6ZTtcblx0XHR0aGlzLm9uRXZpY3Rpb24gPSBvcHRpb25zLm9uRXZpY3Rpb247XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLm9sZENhY2hlID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMuX3NpemUgPSAwO1xuXHR9XG5cblx0X3NldChrZXksIHZhbHVlKSB7XG5cdFx0dGhpcy5jYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5fc2l6ZSsrO1xuXG5cdFx0aWYgKHRoaXMuX3NpemUgPj0gdGhpcy5tYXhTaXplKSB7XG5cdFx0XHR0aGlzLl9zaXplID0gMDtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm9uRXZpY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5vbGRDYWNoZS5lbnRyaWVzKCkpIHtcblx0XHRcdFx0XHR0aGlzLm9uRXZpY3Rpb24oa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbGRDYWNoZSA9IHRoaXMuY2FjaGU7XG5cdFx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHRcdH1cblx0fVxuXG5cdGdldChrZXkpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KGtleSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2xkQ2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5vbGRDYWNoZS5nZXQoa2V5KTtcblx0XHRcdHRoaXMub2xkQ2FjaGUuZGVsZXRlKGtleSk7XG5cdFx0XHR0aGlzLl9zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0c2V0KGtleSwgdmFsdWUpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0dGhpcy5jYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NldChrZXksIHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhhcyhrZXkpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWNoZS5oYXMoa2V5KSB8fCB0aGlzLm9sZENhY2hlLmhhcyhrZXkpO1xuXHR9XG5cblx0cGVlayhrZXkpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KGtleSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2xkQ2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLm9sZENhY2hlLmdldChrZXkpO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZShrZXkpIHtcblx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5jYWNoZS5kZWxldGUoa2V5KTtcblx0XHRpZiAoZGVsZXRlZCkge1xuXHRcdFx0dGhpcy5fc2l6ZS0tO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm9sZENhY2hlLmRlbGV0ZShrZXkpIHx8IGRlbGV0ZWQ7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmNhY2hlLmNsZWFyKCk7XG5cdFx0dGhpcy5vbGRDYWNoZS5jbGVhcigpO1xuXHRcdHRoaXMuX3NpemUgPSAwO1xuXHR9XG5cblx0KiBrZXlzKCkge1xuXHRcdGZvciAoY29uc3QgW2tleV0gb2YgdGhpcykge1xuXHRcdFx0eWllbGQga2V5O1xuXHRcdH1cblx0fVxuXG5cdCogdmFsdWVzKCkge1xuXHRcdGZvciAoY29uc3QgWywgdmFsdWVdIG9mIHRoaXMpIHtcblx0XHRcdHlpZWxkIHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdCogW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMuY2FjaGUpIHtcblx0XHRcdHlpZWxkIGl0ZW07XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMub2xkQ2FjaGUpIHtcblx0XHRcdGNvbnN0IFtrZXldID0gaXRlbTtcblx0XHRcdGlmICghdGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0XHR5aWVsZCBpdGVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldCBzaXplKCkge1xuXHRcdGxldCBvbGRDYWNoZVNpemUgPSAwO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIHRoaXMub2xkQ2FjaGUua2V5cygpKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdFx0b2xkQ2FjaGVTaXplKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgubWluKHRoaXMuX3NpemUgKyBvbGRDYWNoZVNpemUsIHRoaXMubWF4U2l6ZSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWlja0xSVTtcbiJdLCJuYW1lcyI6WyJRdWlja0xSVSIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsIm1heFNpemUiLCJUeXBlRXJyb3IiLCJvbkV2aWN0aW9uIiwiY2FjaGUiLCJNYXAiLCJvbGRDYWNoZSIsIl9zaXplIiwiX3NldCIsImtleSIsInZhbHVlIiwic2V0IiwiZW50cmllcyIsImdldCIsImhhcyIsImRlbGV0ZSIsInBlZWsiLCJkZWxldGVkIiwiY2xlYXIiLCJrZXlzIiwidmFsdWVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJpdGVtIiwic2l6ZSIsIm9sZENhY2hlU2l6ZSIsIk1hdGgiLCJtaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/quick-lru/index.js\n");

/***/ })

};
;