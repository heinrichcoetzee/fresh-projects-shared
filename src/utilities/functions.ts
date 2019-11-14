  /**
   * Method creates a new array with all sub-array elements concatenated into it
   * 
   * @param {Array}  input Array to flatten
   * @returns {Array} Single level Array 
   */
  export function flatten(input: Array<any>): Array<any> {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      // pop value from stack
      const next = stack.pop();
      if (Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // reverse to restore input order
    return res.reverse();
  }


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