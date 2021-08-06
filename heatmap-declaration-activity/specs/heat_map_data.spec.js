"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heat_map_data_js_1 = require("./../heat_map_data.js");
require("jasmine");
describe("heat map data shape", () => {
    it("should have an attribute called batterHotZones", () => {
        const result = Object.keys(heat_map_data_js_1.data).includes("batterHotZones");
        expect(result).toBe(true);
    });
    it("should have an attribute called pitcherHotZones", () => {
        const result = Object.keys(heat_map_data_js_1.data).includes("pitcherHotZones");
        expect(result).toBe(true);
    });
    it("should have an optional attribute called coordinateMap", () => {
        const result = Object.keys(heat_map_data_js_1.data).includes("coordinateMap");
        expect(result).toBe(true);
    });
    it("should have a method called findMatch", () => {
        let jon;
        jon = {
            batterHotZones: [[12.2, -3], [10.2, -5], [3, 2]],
            pitcherHotZones: [[3, 2], [-12.2, 3], [-10.2, 5]]
        };
        const result = heat_map_data_js_1.findMatch(jon.batterHotZones, jon.pitcherHotZones);
        expect(result).toEqual([[3, 2]]);
    });
});
