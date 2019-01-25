"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
function map(maybeT, f) {
    return maybeT == null ? undefined : f(maybeT);
}
exports.map = map;
function first(iter, f) {
    var e_1, _a;
    try {
        for (var iter_1 = __values(iter), iter_1_1 = iter_1.next(); !iter_1_1.done; iter_1_1 = iter_1.next()) {
            var t = iter_1_1.value;
            if (t != null) {
                var v = f(t);
                if (v != null)
                    return v;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (iter_1_1 && !iter_1_1.done && (_a = iter_1.return)) _a.call(iter_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return;
}
exports.first = first;
//# sourceMappingURL=Maybe.js.map