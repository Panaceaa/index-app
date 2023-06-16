"use strict";
exports.__esModule = true;
var slippage_1 = require("./slippage");
describe('getSlippageOverrideOrNull()', function () {
    it('returns null for unaltered slippage', function () {
        var symbol = 'MVI';
        var slippageOverride = slippage_1.getSlippageOverrideOrNull(symbol, '');
        expect(slippageOverride).toBe(null);
    });
});
describe('selectSlippage()', function () {
    it('returns given slippage for undefined token', function () {
        var symbol = 'MVI';
        var slippageModified = slippage_1.getSlippageOverrideOrNull(symbol, '');
        var result = slippage_1.selectSlippage(1, symbol, '');
        expect(slippageModified).toBeNull();
        expect(result).toBe(1);
    });
});
