"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Method creates a new array with all sub-array elements concatenated into it
 *
 * @param {Array}  input Array to flatten
 * @returns {Array} Single level Array
 */
function flatten(input) {
    var stack = __spreadArrays(input);
    var res = [];
    while (stack.length) {
        // pop value from stack
        var next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push.apply(stack, next);
        }
        else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}
exports.flatten = flatten;
/**
* Removes Duplicates from array
*
* @param {Array}  a Array to remove duplicates from
* @returns {Array} Array without duplicates
*/
function noDuplicate(a) {
    var temp = {};
    for (var i = 0; i < a.length; i++) {
        temp[a[i]] = true;
    }
    var r = [];
    for (var k in temp) {
        r.push(k);
    }
    return r;
}
exports.noDuplicate = noDuplicate;
