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
exports.getEnhancedFlashMintNotionalQuote = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var gas_1 = require("constants/gas");
var costs_1 = require("utils/costs");
var fmNotionalQuote_1 = require("utils/flashMintNotional/fmNotionalQuote");
var fmNotionalTransaction_1 = require("utils/flashMintNotional/fmNotionalTransaction");
var gasEstimatooor_1 = require("utils/gasEstimatooor");
var _1 = require("./");
function getEnhancedFlashMintNotionalQuote(isMinting, inputToken, outputToken, indexTokenAmount, gasPrice, inputTokenPrice, nativeTokenPrice, slippage, chainId, provider, signer) {
    return __awaiter(this, void 0, Promise, function () {
        var isTradablePair, fixedTokenAddress, inputOutputTokenAddress, quote, tx, defaultGasEstimate, gasEstimatooor, canFail, gasEstimate, gasCosts, gasCostsInUsd, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isTradablePair = isTradableForFlashMintNotional(inputToken, outputToken);
                    if (!isTradablePair)
                        return [2 /*return*/, null];
                    fixedTokenAddress = isMinting ? outputToken.address : inputToken.address;
                    inputOutputTokenAddress = isMinting
                        ? inputToken.address
                        : outputToken.address;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fmNotionalQuote_1.getFlashMintNotionalQuote(isMinting, fixedTokenAddress, inputOutputTokenAddress, indexTokenAmount, slippage, provider)];
                case 2:
                    quote = _a.sent();
                    if (!quote) return [3 /*break*/, 5];
                    return [4 /*yield*/, fmNotionalTransaction_1.getFlashMintNotionalTransaction(isMinting, inputToken, outputToken, quote.indexTokenAmount, quote.inputOutputTokenAmount, quote.swapData, slippage, provider, signer, chainId)];
                case 3:
                    tx = _a.sent();
                    if (!tx)
                        throw new Error('No transaction object');
                    defaultGasEstimate = bignumber_1.BigNumber.from(gas_1.DefaultGasLimitFlashMintNotional);
                    gasEstimatooor = new gasEstimatooor_1.GasEstimatooor(signer, defaultGasEstimate);
                    canFail = false;
                    return [4 /*yield*/, gasEstimatooor.estimate(tx, canFail)];
                case 4:
                    gasEstimate = _a.sent();
                    gasCosts = gasEstimate.mul(gasPrice);
                    gasCostsInUsd = costs_1.getGasCostsInUsd(gasCosts, nativeTokenPrice);
                    return [2 /*return*/, {
                            type: _1.QuoteType.flashMintNotional,
                            isMinting: isMinting,
                            inputToken: inputToken,
                            outputToken: outputToken,
                            gas: gasEstimate,
                            gasPrice: gasPrice,
                            gasCosts: gasCosts,
                            gasCostsInUsd: gasCostsInUsd,
                            fullCostsInUsd: costs_1.getFullCostsInUsd(quote.inputOutputTokenAmount, gasEstimate.mul(gasPrice), inputToken.decimals, inputTokenPrice, nativeTokenPrice),
                            priceImpact: 0,
                            indexTokenAmount: indexTokenAmount,
                            inputOutputTokenAmount: quote.inputOutputTokenAmount,
                            // type specific properties
                            swapData: quote.swapData
                        }];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    console.warn('Error generating quote from FlashMintNotional', e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, null];
            }
        });
    });
}
exports.getEnhancedFlashMintNotionalQuote = getEnhancedFlashMintNotionalQuote;
var isTradableForFlashMintNotional = function (input, output) {
    return false;
};
