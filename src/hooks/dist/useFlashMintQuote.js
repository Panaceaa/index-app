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
exports.useFlashMintQuote = void 0;
var react_1 = require("react");
var bignumber_1 = require("@ethersproject/bignumber");
var useNetwork_1 = require("hooks/useNetwork");
var Balances_1 = require("providers/Balances");
var gasStation_1 = require("utils/api/gasStation");
var zeroExApi_1 = require("utils/api/zeroExApi");
var zeroExUtils_1 = require("utils/api/zeroExUtils");
var tokens_1 = require("utils/tokens");
var useIssuanceQuote_1 = require("./issuance/useIssuanceQuote");
var flashMintLeveraged_1 = require("./useBestQuote/flashMintLeveraged");
var flashMintNotional_1 = require("./useBestQuote/flashMintNotional");
var flashMintZeroEx_1 = require("./useBestQuote/flashMintZeroEx");
var useWallet_1 = require("./useWallet");
exports.useFlashMintQuote = function () {
    var chainId = useNetwork_1.useNetwork().chainId;
    var getTokenBalance = Balances_1.useBalanceData().getTokenBalance;
    var _a = useWallet_1.useWallet(), provider = _a.provider, signer = _a.signer;
    var getQuote = useIssuanceQuote_1.useIssuanceQuote().getQuote;
    var _b = react_1.useState(false), isFetching = _b[0], setIsFetching = _b[1];
    var _c = react_1.useState(null), quoteResult = _c[0], setQuoteResult = _c[1];
    /**
     *
     * @param slippage  The max acceptable slippage, e.g. 3 for 3 %
     */
    var fetchQuote = function (isMinting, indexToken, inputOutputToken, indexTokenAmount, sellTokenPrice, nativeTokenPrice, slippage) { return __awaiter(void 0, void 0, void 0, function () {
        var inputToken, outputToken, inputTokenAddress, outputTokenAddress, flashMintQuote, flashMintLeveragedQuote, flashMintNotionalQuote, flashMintPerpQuote, flashMintZeroExQuote, inputTokenBalance, isOptimismNetwork, estimatedQuoteAmount, gasStation, gasPrice, networkKey, swapPathOverride, zeroExApi, quoteResult;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!indexTokenAmount.gt(bignumber_1.BigNumber.from(0))) {
                        setQuoteResult(null);
                        return [2 /*return*/];
                    }
                    inputToken = isMinting ? inputOutputToken : indexToken;
                    outputToken = isMinting ? indexToken : inputOutputToken;
                    inputTokenAddress = tokens_1.getAddressForToken(inputToken, chainId);
                    outputTokenAddress = tokens_1.getAddressForToken(outputToken, chainId);
                    if (!provider || !chainId) {
                        console.error('Error fetching quotes - no provider or chain id present');
                        return [2 /*return*/];
                    }
                    if (!inputTokenAddress || !outputTokenAddress) {
                        console.log(inputTokenAddress, 'inputTokenAddress');
                        console.log(outputTokenAddress, 'outputTokenAddress');
                        console.error('Error can not determine input/ouput token address');
                        return [2 /*return*/];
                    }
                    setIsFetching(true);
                    flashMintQuote = null;
                    flashMintLeveragedQuote = null;
                    flashMintNotionalQuote = null;
                    flashMintPerpQuote = null;
                    flashMintZeroExQuote = null;
                    inputTokenBalance = (_a = getTokenBalance(inputToken.symbol, chainId)) !== null && _a !== void 0 ? _a : bignumber_1.BigNumber.from(0);
                    isOptimismNetwork = chainId === 10;
                    if (!isOptimismNetwork) return [3 /*break*/, 2];
                    return [4 /*yield*/, getQuote(isMinting, indexToken, indexTokenAmount)];
                case 1:
                    estimatedQuoteAmount = _b.sent();
                    flashMintPerpQuote = {
                        inputOutputTokenAmount: estimatedQuoteAmount
                    };
                    return [3 /*break*/, 7];
                case 2:
                    gasStation = new gasStation_1.GasStation(provider);
                    return [4 /*yield*/, gasStation.getGasPrice()
                        // Create an instance of ZeroExApi (to pass to quote functions)
                    ];
                case 3:
                    gasPrice = _b.sent();
                    networkKey = zeroExUtils_1.getNetworkKey(chainId);
                    swapPathOverride = "/" + networkKey + "/swap/v1/quote";
                    zeroExApi = zeroExApi_1.getConfiguredZeroExApi(swapPathOverride);
                    return [4 /*yield*/, flashMintLeveraged_1.getEnhancedFlashMintLeveragedQuote(isMinting, inputTokenAddress, outputTokenAddress, inputTokenBalance, inputToken, outputToken, indexTokenAmount, sellTokenPrice, nativeTokenPrice, gasPrice, slippage, chainId, provider, zeroExApi, signer)];
                case 4:
                    flashMintLeveragedQuote = _b.sent();
                    return [4 /*yield*/, flashMintZeroEx_1.getEnhancedFlashMintZeroExQuote(isMinting, inputTokenAddress, outputTokenAddress, inputTokenBalance, inputToken, outputToken, indexTokenAmount, sellTokenPrice, nativeTokenPrice, gasPrice, slippage, chainId, provider, zeroExApi, signer)];
                case 5:
                    flashMintZeroExQuote = _b.sent();
                    return [4 /*yield*/, flashMintNotional_1.getEnhancedFlashMintNotionalQuote(isMinting, inputToken, outputToken, indexTokenAmount, gasPrice, sellTokenPrice, nativeTokenPrice, slippage, chainId, provider, signer)];
                case 6:
                    flashMintNotionalQuote = _b.sent();
                    _b.label = 7;
                case 7:
                    quoteResult = {
                        quotes: {
                            flashMint: flashMintQuote,
                            flashMintLeveraged: flashMintLeveragedQuote,
                            flashMintNotional: flashMintNotionalQuote,
                            flashMintPerp: flashMintPerpQuote,
                            flashMintZeroEx: flashMintZeroExQuote
                        },
                        inputTokenBalance: inputTokenBalance,
                        slippage: slippage
                    };
                    setQuoteResult(quoteResult);
                    setIsFetching(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        fetchQuote: fetchQuote,
        isFetchingQuote: isFetching,
        quoteResult: quoteResult
    };
};
