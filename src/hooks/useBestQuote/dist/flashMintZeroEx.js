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
exports.getEnhancedFlashMintZeroExQuote = exports.isEligibleTradePairZeroEx = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var flash_mint_sdk_1 = require("flash-mint-sdk");
var chains_1 = require("constants/chains");
var gas_1 = require("constants/gas");
var tokens_1 = require("constants/tokens");
var costs_1 = require("utils/costs");
var flashMintZeroExTransaction_1 = require("utils/flashMint/flashMintZeroExTransaction");
var gasEstimatooor_1 = require("utils/gasEstimatooor");
var _1 = require("./");
function isEligibleTradePairZeroEx(inputToken, outputToken) {
    if (inputToken.symbol === tokens_1.IndexToken.symbol ||
        outputToken.symbol === tokens_1.IndexToken.symbol)
        return false;
    return true;
}
exports.isEligibleTradePairZeroEx = isEligibleTradePairZeroEx;
function getEnhancedFlashMintZeroExQuote(isMinting, inputTokenAddress, outputTokenAddress, inputTokenBalance, sellToken, buyToken, indexTokenAmount, sellTokenPrice, nativeTokenPrice, gasPrice, slippage, chainId, provider, zeroExApi, signer) {
    return __awaiter(this, void 0, Promise, function () {
        var isEligibleTradePair, inputToken, outputToken, quote0x, tx, defaultGasEstimate, gasEstimatooor, canFail, gasEstimate, gasCosts, gasCostsInUsd, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Allow trading only on mainnet and polygon (for deprecated/rebalanced tokens)
                    if (chainId !== chains_1.MAINNET.chainId && chainId !== 137)
                        return [2 /*return*/, null
                            // For mainnet some tokens are disabled additionally
                        ];
                    isEligibleTradePair = isEligibleTradePairZeroEx(sellToken, buyToken);
                    if (!isEligibleTradePair)
                        return [2 /*return*/, null];
                    inputToken = {
                        symbol: sellToken.symbol,
                        decimals: sellToken.decimals,
                        address: inputTokenAddress
                    };
                    outputToken = {
                        symbol: buyToken.symbol,
                        decimals: buyToken.decimals,
                        address: outputTokenAddress
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, flash_mint_sdk_1.getFlashMintZeroExQuote(inputToken, outputToken, indexTokenAmount, isMinting, slippage, zeroExApi, provider, chainId)];
                case 2:
                    quote0x = _a.sent();
                    if (!quote0x) return [3 /*break*/, 5];
                    return [4 /*yield*/, flashMintZeroExTransaction_1.getFlashMintZeroExTransaction(isMinting, sellToken, buyToken, indexTokenAmount, quote0x.inputOutputTokenAmount, quote0x.componentQuotes, provider, signer, chainId)];
                case 3:
                    tx = _a.sent();
                    if (!tx)
                        throw new Error('No transaction object');
                    defaultGasEstimate = bignumber_1.BigNumber.from(gas_1.DefaultGasLimitFlashMintZeroEx);
                    gasEstimatooor = new gasEstimatooor_1.GasEstimatooor(signer, defaultGasEstimate);
                    canFail = false;
                    return [4 /*yield*/, gasEstimatooor.estimate(tx, canFail)];
                case 4:
                    gasEstimate = _a.sent();
                    gasCosts = gasEstimate.mul(gasPrice);
                    gasCostsInUsd = costs_1.getGasCostsInUsd(gasCosts, nativeTokenPrice);
                    return [2 /*return*/, {
                            type: _1.QuoteType.exchangeIssuanceZeroEx,
                            isMinting: isMinting,
                            inputToken: sellToken,
                            outputToken: buyToken,
                            gas: gasEstimate,
                            gasPrice: gasPrice,
                            gasCosts: gasCosts,
                            gasCostsInUsd: gasCostsInUsd,
                            fullCostsInUsd: costs_1.getFullCostsInUsd(quote0x.inputOutputTokenAmount, gasEstimate.mul(gasPrice), sellToken.decimals, sellTokenPrice, nativeTokenPrice),
                            priceImpact: 0,
                            indexTokenAmount: indexTokenAmount,
                            inputOutputTokenAmount: quote0x.inputOutputTokenAmount,
                            // type specific properties
                            componentQuotes: quote0x.componentQuotes
                        }];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    console.warn('Error fetching FlashMintZeroEx quote', e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, null];
            }
        });
    });
}
exports.getEnhancedFlashMintZeroExQuote = getEnhancedFlashMintZeroExQuote;
