"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMatch = exports.data = void 0;
const _ = require("lodash");
exports.data = {
    batterHotZones: [[10.2, -5], [3, 2]],
    pitcherHotZones: [[3, 2]],
};
exports.data.coordinateMap = findMatch(exports.data.batterHotZones, exports.data.pitcherHotZones);
function findMatch(a, b) {
    return _.intersectionWith(a, b, _.isEqual);
}
exports.findMatch = findMatch;
