import * as Parse from 'parse';
/**
 * Fetches all records in the query passed, 1000 at a time and returns all the values.
 * @param {Parse.Query} query  Parse Query
 * @Returns {Promise<any[]>} Returns a Promise with the array of results requested.
 */
declare function getAllRecords(query: Parse.Query): Promise<any[]>;
declare const _default: {
    parse: {
        getAllRecords: typeof getAllRecords;
    };
};
export default _default;
