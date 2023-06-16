"use strict";
exports.__esModule = true;
exports.selectSlippage = exports.getSlippageOverrideOrNull = void 0;
var slippage_1 = require("constants/slippage");
var tokens_1 = require("constants/tokens");
function getSlippageOverrideOrNull(tokenSymbol, inputOutputTokenSymbol) {
    if (inputOutputTokenSymbol === tokens_1.USDC.symbol) {
        return 0.1;
    }
    if ((inputOutputTokenSymbol === tokens_1.DAI.symbol ||
        inputOutputTokenSymbol === tokens_1.USDC.symbol ||
        inputOutputTokenSymbol === tokens_1.USDT.symbol)) {
        return 0.001;
    }
    return 0.1;
}
exports.getSlippageOverrideOrNull = getSlippageOverrideOrNull;
function selectSlippage(slippage, indexSymbol, inputOutputTokenSymbol) {
    if (slippage !== slippage_1.slippageDefault)
        return slippage;
    var slippageOverrride = getSlippageOverrideOrNull(indexSymbol, inputOutputTokenSymbol);
    return slippageOverrride !== null && slippageOverrride !== void 0 ? slippageOverrride : slippage;
}
exports.selectSlippage = selectSlippage;
