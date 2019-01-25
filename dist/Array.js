"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compact(array) {
    return array.filter(function (elem) { return elem != null; });
}
exports.compact = compact;
function times(n, f) {
    return Array(n)
        .fill(undefined)
        .map(function (_, i) { return f(i); });
}
exports.times = times;
/**
 * Remove all elements from the given array that return false from the given
 * predicate `filter`.
 */
function filterInPlace(arr, filter) {
    var j = 0;
    arr.forEach(function (ea, i) {
        if (filter(ea)) {
            if (i != j)
                arr[j] = ea;
            j++;
        }
    });
    arr.length = j;
    return arr;
}
exports.filterInPlace = filterInPlace;
function uniq(arr) {
    return arr.reduce(function (acc, ea) {
        if (acc.indexOf(ea) == -1)
            acc.push(ea);
        return acc;
    }, []);
}
exports.uniq = uniq;
//# sourceMappingURL=Array.js.map