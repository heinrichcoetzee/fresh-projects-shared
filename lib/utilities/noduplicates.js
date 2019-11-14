"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
