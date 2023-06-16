"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ethers_1 = require("ethers");
var utils_1 = require("utils");
var _1 = require("./");
describe('getBestQuote()', function () {
    test('should return 0x as best trade option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var bestTradeOption;
        return __generator(this, function (_a) {
            bestTradeOption = _1.getBestQuote(1, 2, 2, 3.5);
            expect(bestTradeOption.type).toEqual(_1.QuoteType.zeroEx);
            return [2 /*return*/];
        });
    }); });
    test('should return EI as the best option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var bestTradeOption;
        return __generator(this, function (_a) {
            bestTradeOption = _1.getBestQuote(2, 1, 3, 1);
            expect(bestTradeOption.type).toEqual(_1.QuoteType.exchangeIssuanceZeroEx);
            return [2 /*return*/];
        });
    }); });
    test('should return Leveraged EI as the best option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var bestTradeOption;
        return __generator(this, function (_a) {
            bestTradeOption = _1.getBestQuote(2, 2, 1, 1);
            expect(bestTradeOption.type).toEqual(_1.QuoteType.exchangeIssuanceLeveraged);
            return [2 /*return*/];
        });
    }); });
    test('should return 0x if everything else is not defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var bestTradeOption;
        return __generator(this, function (_a) {
            bestTradeOption = _1.getBestQuote(1, null, null, 1);
            expect(bestTradeOption.type).toEqual(_1.QuoteType.zeroEx);
            return [2 /*return*/];
        });
    }); });
    test('should return EI if everything else is not defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var bestTradeOption;
        return __generator(this, function (_a) {
            bestTradeOption = _1.getBestQuote(null, 1, null, 1);
            expect(bestTradeOption.type).toEqual(_1.QuoteType.exchangeIssuanceZeroEx);
            return [2 /*return*/];
        });
    }); });
    test('should return Leveraged EI if everything else is not defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var bestTradeOption;
        return __generator(this, function (_a) {
            bestTradeOption = _1.getBestQuote(null, null, 1, 1);
            expect(bestTradeOption.type).toEqual(_1.QuoteType.exchangeIssuanceLeveraged);
            return [2 /*return*/];
        });
    }); });
    test('should NOT return 0x if price impact is too high', function () { return __awaiter(void 0, void 0, void 0, function () {
        var bestTradeOption, bestTradeOption2;
        return __generator(this, function (_a) {
            bestTradeOption = _1.getBestQuote(1, 1, null, 5);
            expect(bestTradeOption.type).toEqual(_1.QuoteType.exchangeIssuanceZeroEx);
            expect(bestTradeOption.priceImpact).toEqual(true);
            bestTradeOption2 = _1.getBestQuote(1, null, 1, 5);
            expect(bestTradeOption2.type).toEqual(_1.QuoteType.exchangeIssuanceLeveraged);
            expect(bestTradeOption2.priceImpact).toEqual(true);
            return [2 /*return*/];
        });
    }); });
    test('should NOT return 0x if price impact is too high (higher quotes)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var bestTradeOption, bestTradeOption2;
        return __generator(this, function (_a) {
            bestTradeOption = _1.getBestQuote(1, 1.1, null, 5);
            expect(bestTradeOption.type).toEqual(_1.QuoteType.exchangeIssuanceZeroEx);
            expect(bestTradeOption.priceImpact).toEqual(true);
            bestTradeOption2 = _1.getBestQuote(1, null, 1.1, 5);
            expect(bestTradeOption2.type).toEqual(_1.QuoteType.exchangeIssuanceLeveraged);
            expect(bestTradeOption2.priceImpact).toEqual(true);
            return [2 /*return*/];
        });
    }); });
});
describe('getSetTokenAmount()', function () {
    test('should return correct set token amount if issuing - with dex option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption, setTokenAmount;
        return __generator(this, function (_a) {
            isIssuance = true;
            sellTokenAmount = '1';
            sellTokenDecimals = 18;
            sellTokenPrice = 0;
            buyTokenPrice = 0;
            dexSwapOption = __assign(__assign({}, zeroExDataMock), { buyAmount: '2000000000000000000', estimatedPriceImpact: '0.3' });
            setTokenAmount = _1.getSetTokenAmount(isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption);
            expect(setTokenAmount.toString()).toEqual(dexSwapOption.buyAmount);
            return [2 /*return*/];
        });
    }); });
    test('should return correct set token amount if issuing - with dex option - which price impact is higher than max allowed', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, priceImpact, dexSwapOption, sellTokenTotal, approxOutputAmount, expectedSetTokenAmount, setTokenAmount;
        return __generator(this, function (_a) {
            isIssuance = true;
            sellTokenAmount = '1';
            sellTokenDecimals = 18;
            sellTokenPrice = 1.5;
            buyTokenPrice = 5;
            priceImpact = _1.maxPriceImpact + 1;
            dexSwapOption = __assign(__assign({}, zeroExDataMock), { buyAmount: '2000000000000000000', estimatedPriceImpact: priceImpact.toString() });
            sellTokenTotal = parseFloat(sellTokenAmount) * sellTokenPrice;
            approxOutputAmount = Math.floor(sellTokenTotal / buyTokenPrice);
            expectedSetTokenAmount = utils_1.toWei(approxOutputAmount, sellTokenDecimals);
            setTokenAmount = _1.getSetTokenAmount(isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption);
            expect(setTokenAmount.toString()).toEqual(expectedSetTokenAmount.toString());
            return [2 /*return*/];
        });
    }); });
    test('should return correct set token amount if issuing - without a dex option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption, sellTokenTotal, approxOutputAmount, expectedSetTokenAmount, setTokenAmount;
        return __generator(this, function (_a) {
            isIssuance = true;
            sellTokenAmount = '1';
            sellTokenDecimals = 18;
            sellTokenPrice = 1.5;
            buyTokenPrice = 5;
            dexSwapOption = null;
            sellTokenTotal = parseFloat(sellTokenAmount) * sellTokenPrice;
            approxOutputAmount = Math.floor(sellTokenTotal / buyTokenPrice);
            expectedSetTokenAmount = utils_1.toWei(approxOutputAmount, sellTokenDecimals);
            setTokenAmount = _1.getSetTokenAmount(isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption);
            expect(setTokenAmount.toString()).toEqual(expectedSetTokenAmount.toString());
            return [2 /*return*/];
        });
    }); });
    test('should return correct set token amount if redeeming - with dex option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption, expectedSetTokenAmount, setTokenAmount;
        return __generator(this, function (_a) {
            isIssuance = false;
            sellTokenAmount = '1';
            sellTokenDecimals = 18;
            sellTokenPrice = 0;
            buyTokenPrice = 0;
            dexSwapOption = __assign(__assign({}, zeroExDataMock), { buyAmount: '2000000000000000000' });
            expectedSetTokenAmount = utils_1.toWei(sellTokenAmount, sellTokenDecimals);
            setTokenAmount = _1.getSetTokenAmount(isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption);
            expect(setTokenAmount.toString()).toEqual(expectedSetTokenAmount.toString());
            return [2 /*return*/];
        });
    }); });
    test('should return correct set token amount if redeeming - without a dex option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption, expectedSetTokenAmount, setTokenAmount;
        return __generator(this, function (_a) {
            isIssuance = false;
            sellTokenAmount = '1';
            sellTokenDecimals = 18;
            sellTokenPrice = 0;
            buyTokenPrice = 0;
            dexSwapOption = null;
            expectedSetTokenAmount = utils_1.toWei(sellTokenAmount, sellTokenDecimals);
            setTokenAmount = _1.getSetTokenAmount(isIssuance, sellTokenAmount, sellTokenDecimals, sellTokenPrice, buyTokenPrice, dexSwapOption);
            expect(setTokenAmount.toString()).toEqual(expectedSetTokenAmount.toString());
            return [2 /*return*/];
        });
    }); });
});
var zeroExDataMock = {
    chainId: '1',
    data: '',
    estimatedPriceImpact: '',
    price: '',
    guaranteedPrice: '',
    buyTokenAddress: '',
    sellTokenAddress: '',
    buyAmount: '',
    sellAmount: '',
    to: '',
    from: '',
    sources: [],
    displayBuyAmount: 0,
    displaySellAmount: 0,
    minOutput: ethers_1.BigNumber.from(0),
    maxInput: ethers_1.BigNumber.from(0),
    gas: undefined,
    gasPrice: '',
    formattedSources: '',
    buyTokenCost: '',
    sellTokenCost: '',
    value: ''
};
