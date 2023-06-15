"use strict";
exports.__esModule = true;
exports.isTokenAvailableForFlashMint = exports.isPerpToken = exports.isNotTradableToken = exports.isNativeCurrency = exports.isLeveragedToken = exports.getNativeToken = exports.getCurrencyTokensForIndex = exports.getCurrencyTokens = exports.getAddressForToken = void 0;
var chains_1 = require("constants/chains");
var tokens_1 = require("constants/tokens");
function getAddressForToken(token, chainId) {
    if (token.symbol === tokens_1.IndexToken.symbol)
        return token.address;
    switch (chainId) {
        case chains_1.MAINNET.chainId:
            return token.address;
        case chains_1.OPTIMISM.chainId:
            return token.optimismAddress;
        case chains_1.POLYGON.chainId:
            return token.polygonAddress;
        default:
            return undefined;
    }
}
exports.getAddressForToken = getAddressForToken;
/**
 * Gets the list of currency tokens for the selected chain.
 * @returns Token[] list of tokens
 */
function getCurrencyTokens(chainId) {
    switch (chainId) {
        case chains_1.MAINNET.chainId:
            return tokens_1.mainnetCurrencyTokens;
        case chains_1.OPTIMISM.chainId:
            return tokens_1.optimismCurrencyTokens;
        case chains_1.POLYGON.chainId:
            return tokens_1.polygonCurrencyTokens;
        default:
            return [];
    }
}
exports.getCurrencyTokens = getCurrencyTokens;
/**
 * Gets the supported currency tokens for the given index.
 * @returns Token[] list of supported currency tokens
 */
function getCurrencyTokensForIndex(index, chainId, isMinting) {
    var currencyTokens = getCurrencyTokens(chainId);
    return currencyTokens;
}
exports.getCurrencyTokensForIndex = getCurrencyTokensForIndex;
function getNativeToken(chainId) {
    switch (chainId) {
        case chains_1.MAINNET.chainId:
            return tokens_1.ETH;
        case chains_1.OPTIMISM.chainId:
            return tokens_1.ETH;
        case chains_1.POLYGON.chainId:
            return tokens_1.MATIC;
        default:
            return null;
    }
}
exports.getNativeToken = getNativeToken;
function isLeveragedToken(token) {
    return false;
}
exports.isLeveragedToken = isLeveragedToken;
exports.isNativeCurrency = function (token, chainId) {
    var nativeCurrency = getNativeToken(chainId);
    if (!nativeCurrency)
        return false;
    return token.symbol === nativeCurrency.symbol;
};
exports.isNotTradableToken = function (token, chainId) {
    if (!token || !chainId)
        return false;
    switch (chainId) {
        case chains_1.MAINNET.chainId:
            return (tokens_1.indexNamesMainnet.filter(function (t) { return t.symbol === token.symbol; }).length === 0);
        case chains_1.POLYGON.chainId:
            return (tokens_1.indexNamesPolygon.filter(function (t) { return t.symbol === token.symbol; }).length === 0);
        default:
            return false;
    }
};
function isPerpToken(token) {
    return token.isPerp ? true : false;
}
exports.isPerpToken = isPerpToken;
function isTokenAvailableForFlashMint(token, chainId) {
    if (!chainId)
        return false;
    switch (chainId) {
        case chains_1.MAINNET.chainId:
            return (tokens_1.flashMintIndexesMainnetRedeem.filter(function (t) { return t.symbol === token.symbol; })
                .length > 0);
        case chains_1.POLYGON.chainId:
            return (tokens_1.flashMintIndexesPolygonRedeem.filter(function (t) { return t.symbol === token.symbol; })
                .length > 0);
        default:
            return false;
    }
}
exports.isTokenAvailableForFlashMint = isTokenAvailableForFlashMint;
