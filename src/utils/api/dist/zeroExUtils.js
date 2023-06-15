"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getDisplayAdjustedAmount = exports.get0xApiParams = exports.getZeroExTradeData = exports.getNetworkKey = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var chains_1 = require("constants/chains");
var server_1 = require("constants/server");
var utils_1 = require("utils");
var indexApi_1 = require("utils/api/indexApi");
var API_0X_INDEX_URL = "/0x";
function getNetworkKey(chainId) {
    switch (chainId) {
        case chains_1.POLYGON.chainId:
            return 'polygon';
        case chains_1.OPTIMISM.chainId:
            return 'optimism';
        default:
            return 'mainnet';
    }
}
exports.getNetworkKey = getNetworkKey;
function getApiUrl(query, chainId) {
    var quotePath = '/swap/v1/quote';
    var networkKey = getNetworkKey(chainId);
    if (networkKey.includes('mainnet')) {
        return "https://api.0x.org/" + quotePath + "?" + query + "&affiliateAddress=" + server_1.ZeroExAffiliateAddress;
    }
    else {
        return "https://polygon.api.0x.org/" + quotePath + "?" + query + "&affiliateAddress=" + server_1.ZeroExAffiliateAddress;
    }
    // example: https://api.indexcoop.com/0x/mainnet/swap/v1/quote?sellToken=ETH&buyToken=0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b&sellAmount=10000000000000000000&affiliateAddress=
}
//${API_0X_INDEX_URL}/${networkKey}
/**
 *
 * @param slippagePercentage  The maximum acceptable slippage buy/sell amount. Slippage percentage: 0.03 for 3% slippage allowed.
 */
exports.getZeroExTradeData = function (isExactInput, sellToken, buyToken, amount, slippagePercentage, chainId, rawData) {
    if (rawData === void 0) { rawData = false; }
    return __awaiter(void 0, void 0, Promise, function () {
        var params, query, path, indexApi, resp, zeroExData, apiResult, _a, e_1, errorResponse;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    params = getApiParamsForTokens(isExactInput, sellToken, buyToken, amount, chainId);
                    params.slippagePercentage = slippagePercentage;
                    query = new URLSearchParams(params).toString();
                    path = getApiUrl(query, chainId);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    indexApi = new indexApi_1.IndexApi();
                    return [4 /*yield*/, indexApi.get(path)];
                case 2:
                    resp = _b.sent();
                    zeroExData = resp;
                    if (!rawData) return [3 /*break*/, 3];
                    _a = resp;
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, processApiResult(zeroExData, isExactInput, sellToken, buyToken, amount)];
                case 4:
                    _a = _b.sent();
                    _b.label = 5;
                case 5:
                    apiResult = _a;
                    return [2 /*return*/, { success: true, value: apiResult }];
                case 6:
                    e_1 = _b.sent();
                    errorResponse = e_1.response;
                    if (errorResponse &&
                        errorResponse.status === 400 &&
                        errorResponse.data.validationErrors[0].reason ===
                            'INSUFFICIENT_ASSET_LIQUIDITY') {
                        return [2 /*return*/, {
                                success: false,
                                error: new Error('Insufficient Asset Liquidity')
                            }];
                    }
                    return [2 /*return*/, { success: false, error: new Error('Error retrieving 0x API data') }];
                case 7: return [2 /*return*/];
            }
        });
    });
};
exports.get0xApiParams = function (isExactInput, sellToken, sellTokenDecimals, buyToken, buyTokenDecimals, buySellAmount) {
    var params;
    params = {
        sellToken: sellToken,
        buyToken: buyToken
    };
    if (isExactInput) {
        params.sellAmount = getDecimalAdjustedAmount(buySellAmount, sellTokenDecimals);
    }
    else {
        params.buyAmount = getDecimalAdjustedAmount(buySellAmount, buyTokenDecimals);
    }
    return params;
};
var getChainTokenAddress = function (token, chainId) {
    if (chainId === chains_1.POLYGON.chainId)
        return token.symbol === 'MATIC' ? 'MATIC' : token.polygonAddress;
    if (chainId === chains_1.OPTIMISM.chainId)
        return token.symbol === 'ETH' ? 'ETH' : token.optimismAddress;
    return token.symbol === 'ETH' ? 'ETH' : token.address;
};
/* Convenience function for Token's */
var getApiParamsForTokens = function (isExactInput, sellToken, buyToken, buySellAmount, chainId) {
    var _a, _b;
    return exports.get0xApiParams(isExactInput, (_a = getChainTokenAddress(sellToken, chainId)) !== null && _a !== void 0 ? _a : '', sellToken.decimals, (_b = getChainTokenAddress(buyToken, chainId)) !== null && _b !== void 0 ? _b : '', buyToken.decimals, buySellAmount);
};
// Adds some additional information to the ZeroExData return object. This extra information is only used for display purposes, and
// will have no effect on the outcome of the transaction
var processApiResult = function (zeroExData, isExactInput, sellToken, buyToken, amount) { return __awaiter(void 0, void 0, Promise, function () {
    var amountInWei, priceInWei, guaranteedPrice;
    return __generator(this, function (_a) {
        zeroExData.displaySellAmount = exports.getDisplayAdjustedAmount(zeroExData.sellAmount, sellToken.decimals);
        zeroExData.displayBuyAmount = exports.getDisplayAdjustedAmount(zeroExData.buyAmount, buyToken.decimals);
        amountInWei = utils_1.toWei(amount, isExactInput ? sellToken.decimals : buyToken.decimals);
        priceInWei = utils_1.toWei(zeroExData.guaranteedPrice);
        guaranteedPrice = bignumber_1.BigNumber.from(priceInWei);
        zeroExData.minOutput = isExactInput
            ? guaranteedPrice
                .mul(bignumber_1.BigNumber.from(zeroExData.sellAmount))
                .div(bignumber_1.BigNumber.from(10).pow(sellToken.decimals))
            : bignumber_1.BigNumber.from(amountInWei);
        zeroExData.maxInput = isExactInput
            ? bignumber_1.BigNumber.from(amountInWei)
            : guaranteedPrice
                .mul(bignumber_1.BigNumber.from(zeroExData.buyAmount))
                .div(bignumber_1.BigNumber.from(10).pow(buyToken.decimals));
        zeroExData.formattedSources = formatSources(zeroExData.sources);
        return [2 /*return*/, zeroExData];
    });
}); };
exports.getDisplayAdjustedAmount = function (amount, decimals) {
    var e18 = bignumber_1.BigNumber.from(10).pow(decimals);
    return bignumber_1.BigNumber.from(amount).div(e18).toNumber();
};
var formatSources = function (sources) {
    var activeSources = [];
    sources.forEach(function (source) {
        if (source.proportion !== '0')
            activeSources.push(source);
    });
    var sourceNames = activeSources.map(function (source) {
        return source.name.replaceAll('_', ' ');
    });
    return sourceNames.length === 1
        ? sourceNames[0]
        : sourceNames.slice(0, -1).join(', ') + ' and ' + sourceNames.slice(-1);
};
var getDecimalAdjustedAmount = function (amount, decimals) {
    var amountInWei = utils_1.toWei(amount, decimals);
    return amountInWei.toString();
};
