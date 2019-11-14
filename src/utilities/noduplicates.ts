/**
  * Removes Duplicates from array
  * 
  * @param {Array}  a Array to remove duplicates from
  * @returns {Array} Array without duplicates
  */
 export function noDuplicate(a: Array<any>): Array<any> {
    var temp:any = {};
    for (var i = 0; i < a.length; i++) {
      temp[a[i]] = true;
    }
    var r = [];
    for (var k in temp) {
      r.push(k);
    }
    return r;
  }