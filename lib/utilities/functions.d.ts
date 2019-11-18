/**
 * Method creates a new array with all sub-array elements concatenated into it
 *
 * @param {Array}  input Array to flatten
 * @returns {Array} Single level Array
 */
export declare function flatten(input: Array<any>): Array<any>;
/**
* Removes Duplicates from array
*
* @param {Array}  a Array to remove duplicates from
* @returns {Array} Array without duplicates
*/
export declare function noDuplicate(a: Array<any>): Array<any>;
declare const _default: {
    functions: {
        flatten: typeof flatten;
        noDuplicate: typeof noDuplicate;
    };
};
export default _default;
