"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Method creates a new array with all sub-array elements concatenated into it
 *
 * @param {Array}  input Array to flatten
 * @returns {Array} Single level Array
 */
function flatten(input) {
    var stack = input.slice();
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
