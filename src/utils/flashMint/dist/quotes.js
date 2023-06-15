"use strict";
exports.__esModule = true;
exports.getQuoteAmount = exports.getContractForQuote = void 0;
var flash_mint_sdk_1 = require("flash-mint-sdk");
var contractAddresses_1 = require("constants/contractAddresses");
var fmNotionalContract_1 = require("utils/flashMintNotional/fmNotionalContract");
exports.getContractForQuote = function (quoteResult, chainId) {
    var quotes = quoteResult === null || quoteResult === void 0 ? void 0 : quoteResult.quotes;
    if (!quotes || !chainId)
        return null;
    if (quotes.flashMint) {
        return quotes.flashMint.contract;
    }
    if (quotes.flashMintPerp) {
        return contractAddresses_1.FlashMintPerp;
    }
    if (quotes.flashMintLeveraged) {
        var setToken = quotes.flashMintLeveraged.isMinting
            ? quotes.flashMintLeveraged.outputToken
            : quotes.flashMintLeveraged.inputToken;
        return flash_mint_sdk_1.getFlashMintLeveragedContractForToken(setToken.symbol, undefined, chainId).address;
    }
    if (quotes.flashMintNotional) {
        return fmNotionalContract_1.FlashMintNotionalContractAddress;
    }
    if (quotes.flashMintZeroEx) {
        var setToken = quotes.flashMintZeroEx.isMinting
            ? quotes.flashMintZeroEx.outputToken
            : quotes.flashMintZeroEx.inputToken;
        return flash_mint_sdk_1.getFlashMintZeroExContractForToken(setToken.symbol, undefined, chainId).address;
    }
    return null;
};
exports.getQuoteAmount = function (quoteResult, chainId) {
    var quotes = quoteResult === null || quoteResult === void 0 ? void 0 : quoteResult.quotes;
    if (!quotes || !chainId)
        return null;
    if (quotes.flashMint) {
        return quotes.flashMint.inputOutputTokenAmount;
    }
    if (quotes.flashMintPerp) {
        return quotes.flashMintPerp.inputOutputTokenAmount;
    }
    if (quotes.flashMintLeveraged) {
        return quotes.flashMintLeveraged.inputOutputTokenAmount;
    }
    if (quotes.flashMintNotional) {
        return quotes.flashMintNotional.inputOutputTokenAmount;
    }
    if (quotes.flashMintZeroEx) {
        return quotes.flashMintZeroEx.inputOutputTokenAmount;
    }
    return null;
};
