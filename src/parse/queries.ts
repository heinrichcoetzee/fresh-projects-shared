import * as Parse from 'parse';

/**
 * Fetches all records in the query passed, 1000 at a time and returns all the values. 
 * @param {Parse.Query} query  Parse Query
 * @Returns {Promise<any[]>} Returns a Promise with the array of results requested.
 */
async function getAllRecords(query: Parse.Query) : Promise<any[]> {
    var allResults:Array<any> = [];
    function getAllLoop(loopCount:number): Promise<any[]> {
        return new Promise((resolve, reject) => {
            query.limit(1000);
            query.skip(loopCount * 1000);
            query.find({ useMasterKey: true }).then(
                async function (results) {
                    if (results.length > 0) {
                        allResults = allResults.concat(results);
                        loopCount++;
                        await getAllLoop(loopCount);
                    } else {
                        resolve(allResults);
                    }
                },
                function (error) {
                    reject(error);
                });
        });
    }

    await getAllLoop(0);

    return allResults;
}



export default { parse: { getAllRecords } };