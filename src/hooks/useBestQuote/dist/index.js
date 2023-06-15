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
exports.useBestQuote = exports.getSetTokenAmount = exports.getBestQuote = exports.maxPriceImpact = exports.QuoteType = void 0;
var react_1 = require("react");
var bignumber_1 = require("@ethersproject/bignumber");
var useNetwork_1 = require("hooks/useNetwork");
var Balances_1 = require("providers/Balances");
var utils_1 = require("utils");
var gasStation_1 = require("utils/api/gasStation");
var zeroExApi_1 = require("utils/api/zeroExApi");
var zeroExUtils_1 = require("utils/api/zeroExUtils");
var costs_1 = require("utils/costs");
var tokens_1 = require("utils/tokens");
var useWallet_1 = require("../useWallet");
var flashMintLeveraged_1 = require("./flashMintLeveraged");
var flashMintZeroEx_1 = require("./flashMintZeroEx");
var QuoteType;
(function (QuoteType) {
    QuoteType["notAvailable"] = "notAvailable";
    QuoteType["exchangeIssuanceLeveraged"] = "exchangeIssuanceLeveraged";
    QuoteType["exchangeIssuanceZeroEx"] = "exchangeIssuanceZeroEx";
    QuoteType["flashMint"] = "flashMint";
    QuoteType["flashMintNotional"] = "flashMintNotional";
    QuoteType["zeroEx"] = "zeroEx";
})(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
// To determine if price impact for DEX is smaller 5%
exports.maxPriceImpact = 5;
function getBestQuote(fullCosts0x, fullCostsEI, fullCostsLevEI, priceImpactDex) {
    if (fullCostsEI === null && fullCostsLevEI === null) {
        return { type: QuoteType.zeroEx, priceImpact: false };
    }
    var quotes = [];
    if (fullCosts0x) {
        quotes.push([QuoteType.zeroEx, fullCosts0x]);
    }
    if (fullCostsEI) {
        quotes.push([QuoteType.exchangeIssuanceZeroEx, fullCostsEI]);
    }
    if (fullCostsLevEI) {
        quotes.push([QuoteType.exchangeIssuanceLeveraged, fullCostsLevEI]);
    }
    var cheapestQuotes = quotes.sort(function (q1, q2) { return q1[1] - q2[1]; });
    if (cheapestQuotes.length <= 0) {
        return { type: QuoteType.zeroEx, priceImpact: false };
    }
    var cheapestQuote = cheapestQuotes[0];
    var bestOption = cheapestQuote[0];
    // If only one quote, return best option immediately
    if (cheapestQuotes.length === 1) {
        return { type: bestOption, priceImpact: false };
    }
    // If multiple quotes, check price impact of 0x option
    if (bestOption === QuoteType.zeroEx && priceImpactDex >= exports.maxPriceImpact) {
        // In case price impact is too high, return cheapest exchange issuance
        return { type: cheapestQuotes[1][0], priceImpact: true };
    }
    return { type: bestOption, priceImpact: false };
}
exports.getBestQuote = getBestQuote;
exports.getSetTokenAmount = function (isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption) {
    var _a;
    if (!isIssuance) {
        return utils_1.toWei(sellTokenAmount, sellTokenDecimals);
    }
    var setTokenAmount = bignumber_1.BigNumber.from((_a = dexSwapOption === null || dexSwapOption === void 0 ? void 0 : dexSwapOption.buyAmount) !== null && _a !== void 0 ? _a : '0');
    var priceImpact = dexSwapOption && dexSwapOption.estimatedPriceImpact
        ? parseFloat(dexSwapOption.estimatedPriceImpact)
        : 0;
    if (!dexSwapOption || priceImpact >= exports.maxPriceImpact) {
        // Recalculate the exchange issue/redeem quotes if not enough DEX liquidity
        var sellTokenTotal = parseFloat(sellTokenAmount) * sellTokenPrice;
        var approxOutputAmount = buyTokenPrice === 0 ? 0 : Math.floor(sellTokenTotal / buyTokenPrice);
        setTokenAmount = utils_1.toWei(approxOutputAmount, sellTokenDecimals);
    }
    return setTokenAmount;
};
var defaultQuoteResult = {
    error: null,
    quotes: {
        zeroEx: null
    }
};
exports.useBestQuote = function () {
    var _a = useWallet_1.useWallet(), provider = _a.provider, signer = _a.signer;
    var networkChainId = useNetwork_1.useNetwork().chainId;
    var getTokenBalance = Balances_1.useBalanceData().getTokenBalance;
    // Assume mainnet when no chain is connected (to be able to fetch quotes)
    var chainId = networkChainId !== null && networkChainId !== void 0 ? networkChainId : 1;
    var _b = react_1.useState(false), isFetching = _b[0], setIsFetching = _b[1];
    var _c = react_1.useState(false), isFetchingMoreOptions = _c[0], setIsFetchingMoreOptions = _c[1];
    var _d = react_1.useState(defaultQuoteResult), quoteResult = _d[0], setQuoteResult = _d[1];
    var _e = react_1.useState({
        hasBetterQuote: false,
        isReasonPriceImpact: false,
        quotes: {
            exchangeIssuanceLeveraged: null,
            exchangeIssuanceZeroEx: null
        },
        savingsUsd: 0
    }), quoteResultOptions = _e[0], setQuoteResultOptions = _e[1];
    /**
     *
     * @param slippage   The max acceptable slippage, e.g. 3 for 3 %
     */
    var fetchAndCompareOptions = function (sellToken, sellTokenAmount, sellTokenPrice, buyToken, 
    // buyTokenAmount: string,
    buyTokenPrice, nativeTokenPrice, isMinting, slippage) { return __awaiter(void 0, void 0, void 0, function () {
        var inputTokenAddress, outputTokenAddress, slippagePercentage, zeroExResult, dexSwapOption, dexSwapError, gasLimit0x, gasPrice0x, gas0x, sellTokenAmountInWei, gasCostsInUsd, zeroExQuote, fetchAndCompareMoreOptions, quoteResult;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    inputTokenAddress = tokens_1.getAddressForToken(sellToken, chainId);
                    outputTokenAddress = tokens_1.getAddressForToken(buyToken, chainId);
                    if (!provider || !chainId) {
                        console.error('Error fetching quotes - no provider or chain id present');
                        return [2 /*return*/];
                    }
                    if (!inputTokenAddress || !outputTokenAddress) {
                        console.log(inputTokenAddress, outputTokenAddress);
                        console.error('Error can not determine input/ouput token address');
                        return [2 /*return*/];
                    }
                    setIsFetching(true);
                    slippagePercentage = slippage / 100;
                    return [4 /*yield*/, zeroExUtils_1.getZeroExTradeData(
                        // for now we only allow selling
                        true, sellToken, buyToken, 
                        // for now we only allow specifing selling amount,
                        // so sell token amount will always be correct
                        sellTokenAmount, slippagePercentage, chainId)];
                case 1:
                    zeroExResult = _d.sent();
                    dexSwapOption = zeroExResult.success ? zeroExResult.value : null;
                    dexSwapError = zeroExResult.success
                        ? null
                        : new Error('Not enough liqiuidity available for trade.');
                    gasLimit0x = bignumber_1.BigNumber.from((_a = dexSwapOption === null || dexSwapOption === void 0 ? void 0 : dexSwapOption.gas) !== null && _a !== void 0 ? _a : '0');
                    gasPrice0x = bignumber_1.BigNumber.from((_b = dexSwapOption === null || dexSwapOption === void 0 ? void 0 : dexSwapOption.gasPrice) !== null && _b !== void 0 ? _b : '0');
                    gas0x = gasPrice0x.mul(gasLimit0x);
                    sellTokenAmountInWei = utils_1.toWei(sellTokenAmount, sellToken.decimals);
                    gasCostsInUsd = costs_1.getGasCostsInUsd(gas0x, nativeTokenPrice);
                    zeroExQuote = dexSwapOption
                        ? {
                            type: QuoteType.zeroEx,
                            isMinting: isMinting,
                            inputToken: sellToken,
                            outputToken: buyToken,
                            gas: gasLimit0x,
                            gasPrice: gasPrice0x,
                            gasCosts: gas0x,
                            gasCostsInUsd: gasCostsInUsd,
                            fullCostsInUsd: costs_1.getFullCostsInUsd(utils_1.toWei(sellTokenAmount, sellToken.decimals), gas0x, sellToken.decimals, sellTokenPrice, nativeTokenPrice),
                            priceImpact: parseFloat((_c = dexSwapOption.estimatedPriceImpact) !== null && _c !== void 0 ? _c : '5'),
                            indexTokenAmount: isMinting
                                ? bignumber_1.BigNumber.from(dexSwapOption.buyAmount)
                                : sellTokenAmountInWei,
                            inputOutputTokenAmount: isMinting
                                ? sellTokenAmountInWei
                                : bignumber_1.BigNumber.from(dexSwapOption.buyAmount),
                            // type specific properties
                            chainId: dexSwapOption.chainId,
                            data: dexSwapOption.data,
                            minOutput: dexSwapOption.minOutput,
                            sources: dexSwapOption.sources,
                            to: dexSwapOption.to,
                            value: dexSwapOption.value
                        }
                        : null;
                    fetchAndCompareMoreOptions = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var indexTokenAmount, gasStation, gasPrice, networkKey, swapPathOverride, zeroExApi, inputTokenBalance, exchangeIssuanceLeveragedQuote, exchangeIssuanceZeroExQuote, bestQuote, isFlashMintLeveragedBestQuote, isFlashMintZeroExBestQuote, isReasonPriceImpact, hasBetterQuote, getSavings, savingsUsd, quoteResult;
                        var _a, _b, _c, _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    setIsFetchingMoreOptions(true);
                                    indexTokenAmount = exports.getSetTokenAmount(isMinting, sellTokenAmount, sellToken.decimals, sellTokenPrice, buyTokenPrice, dexSwapOption);
                                    gasStation = new gasStation_1.GasStation(provider);
                                    return [4 /*yield*/, gasStation.getGasPrice()
                                        // Create an instance of ZeroExApi (to pass to quote functions)
                                    ];
                                case 1:
                                    gasPrice = _f.sent();
                                    networkKey = zeroExUtils_1.getNetworkKey(chainId);
                                    swapPathOverride = "/" + networkKey + "/swap/v1/quote";
                                    zeroExApi = zeroExApi_1.getConfiguredZeroExApi(swapPathOverride);
                                    inputTokenBalance = (_a = getTokenBalance(sellToken.symbol, chainId)) !== null && _a !== void 0 ? _a : bignumber_1.BigNumber.from(0);
                                    return [4 /*yield*/, flashMintLeveraged_1.getEnhancedFlashMintLeveragedQuote(isMinting, inputTokenAddress, outputTokenAddress, inputTokenBalance, sellToken, buyToken, indexTokenAmount, sellTokenPrice, nativeTokenPrice, gasPrice, slippage, chainId, provider, zeroExApi, signer)];
                                case 2:
                                    exchangeIssuanceLeveragedQuote = _f.sent();
                                    return [4 /*yield*/, flashMintZeroEx_1.getEnhancedFlashMintZeroExQuote(isMinting, inputTokenAddress, outputTokenAddress, inputTokenBalance, sellToken, buyToken, indexTokenAmount, sellTokenPrice, nativeTokenPrice, gasPrice, slippage, chainId, provider, zeroExApi, signer)
                                        // console.log('////////')
                                        // console.log('exchangeIssuanceZeroExQuote', exchangeIssuanceZeroExQuote)
                                        // console.log(
                                        //   'exchangeIssuanceLeveragedQuote',
                                        //   exchangeIssuanceLeveragedQuote
                                        // )
                                        // console.log(
                                        //   zeroExQuote?.fullCostsInUsd ?? null,
                                        //   exchangeIssuanceZeroExQuote?.fullCostsInUsd ?? null,
                                        //   exchangeIssuanceLeveragedQuote?.fullCostsInUsd ?? null,
                                        //   'FC'
                                        // )
                                    ];
                                case 3:
                                    exchangeIssuanceZeroExQuote = _f.sent();
                                    bestQuote = getBestQuote((_b = zeroExQuote === null || zeroExQuote === void 0 ? void 0 : zeroExQuote.fullCostsInUsd) !== null && _b !== void 0 ? _b : null, (_c = exchangeIssuanceZeroExQuote === null || exchangeIssuanceZeroExQuote === void 0 ? void 0 : exchangeIssuanceZeroExQuote.fullCostsInUsd) !== null && _c !== void 0 ? _c : null, (_d = exchangeIssuanceLeveragedQuote === null || exchangeIssuanceLeveragedQuote === void 0 ? void 0 : exchangeIssuanceLeveragedQuote.fullCostsInUsd) !== null && _d !== void 0 ? _d : null, (_e = zeroExQuote === null || zeroExQuote === void 0 ? void 0 : zeroExQuote.priceImpact) !== null && _e !== void 0 ? _e : 5);
                                    isFlashMintLeveragedBestQuote = bestQuote.type === QuoteType.exchangeIssuanceLeveraged;
                                    isFlashMintZeroExBestQuote = bestQuote.type === QuoteType.exchangeIssuanceZeroEx;
                                    isReasonPriceImpact = bestQuote.priceImpact;
                                    hasBetterQuote = isFlashMintLeveragedBestQuote || isFlashMintZeroExBestQuote;
                                    getSavings = function () {
                                        var _a, _b, _c, _d;
                                        if (!zeroExQuote)
                                            return 0;
                                        if (isFlashMintLeveragedBestQuote && exchangeIssuanceLeveragedQuote) {
                                            return (((_a = zeroExQuote.fullCostsInUsd) !== null && _a !== void 0 ? _a : 0) -
                                                ((_b = exchangeIssuanceLeveragedQuote.fullCostsInUsd) !== null && _b !== void 0 ? _b : 0));
                                        }
                                        if (isFlashMintZeroExBestQuote && exchangeIssuanceZeroExQuote) {
                                            return (((_c = zeroExQuote.fullCostsInUsd) !== null && _c !== void 0 ? _c : 0) -
                                                ((_d = exchangeIssuanceZeroExQuote.fullCostsInUsd) !== null && _d !== void 0 ? _d : 0));
                                        }
                                        return 0;
                                    };
                                    savingsUsd = getSavings();
                                    quoteResult = {
                                        hasBetterQuote: hasBetterQuote,
                                        isReasonPriceImpact: isReasonPriceImpact,
                                        quotes: {
                                            // TODO: add flash mint quote
                                            exchangeIssuanceLeveraged: isFlashMintLeveragedBestQuote
                                                ? exchangeIssuanceLeveragedQuote
                                                : null,
                                            exchangeIssuanceZeroEx: isFlashMintZeroExBestQuote
                                                ? exchangeIssuanceZeroExQuote
                                                : null
                                        },
                                        savingsUsd: savingsUsd
                                    };
                                    setQuoteResultOptions(quoteResult);
                                    setIsFetchingMoreOptions(false);
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    // The individual Flash Mint functions will check if the the token pair is eligible
                    fetchAndCompareMoreOptions();
                    quoteResult = {
                        error: dexSwapError,
                        quotes: {
                            zeroEx: zeroExQuote
                        }
                    };
                    setQuoteResult(quoteResult);
                    setIsFetching(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        fetchAndCompareOptions: fetchAndCompareOptions,
        isFetchingZeroEx: isFetching,
        isFetchingMoreOptions: isFetchingMoreOptions,
        quoteResult: quoteResult,
        quoteResultOptions: quoteResultOptions
    };
};
