/// <reference path = "./types/HeatMapTypes.d.ts" />
import D = require("HeatMapTypes");
import _ = require("lodash");

export let data: D.Pitcher;

data = {
  batterHotZones: [[10.2, -5], [3, 2]],
  pitcherHotZones: [[3, 2]],
};

data.coordinateMap = findMatch(data.batterHotZones, data.pitcherHotZones)

export function findMatch(a: number[][], b: number[][]): number[][] {
  return _.intersectionWith(a, b, _.isEqual);
}