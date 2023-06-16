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
var tokens_1 = require("constants/tokens");
var tokens_2 = require("./tokens");
describe('getAddressForToken()', function () {
    test('should return undefined for undefined chain', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address;
        return __generator(this, function (_a) {
            address = tokens_2.getAddressForToken(tokens_1.WETH, undefined);
            expect(address).toBeUndefined();
            return [2 /*return*/];
        });
    }); });
    test('should return correct token address for WETH on Ethereum', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address;
        return __generator(this, function (_a) {
            address = tokens_2.getAddressForToken(tokens_1.WETH, 1);
            expect(address).toBeDefined();
            expect(address).toEqual(tokens_1.WETH.address);
            return [2 /*return*/];
        });
    }); });
    test('should return correct token address for WETH on Optimism', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address;
        return __generator(this, function (_a) {
            address = tokens_2.getAddressForToken(tokens_1.WETH, 10);
            expect(address).toBeDefined();
            expect(address).toEqual(tokens_1.WETH.optimismAddress);
            return [2 /*return*/];
        });
    }); });
    test('should return correct token address for WETH on Polygon', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address;
        return __generator(this, function (_a) {
            address = tokens_2.getAddressForToken(tokens_1.WETH, 137);
            expect(address).toBeDefined();
            expect(address).toEqual(tokens_1.WETH.polygonAddress);
            return [2 /*return*/];
        });
    }); });
});
describe('getCurrencyTokens()', function () {
    test('returns empty array for unsupported chain', function () { return __awaiter(void 0, void 0, void 0, function () {
        var currencyTokens;
        return __generator(this, function (_a) {
            currencyTokens = tokens_2.getCurrencyTokens(100);
            expect(currencyTokens).toEqual([]);
            return [2 /*return*/];
        });
    }); });
    test('returns correct currency tokens for mainnet', function () { return __awaiter(void 0, void 0, void 0, function () {
        var currencyTokens;
        return __generator(this, function (_a) {
            currencyTokens = tokens_2.getCurrencyTokens(1);
            expect(currencyTokens).toEqual(tokens_1.mainnetCurrencyTokens);
            return [2 /*return*/];
        });
    }); });
    test('returns correct currency tokens for optimism', function () { return __awaiter(void 0, void 0, void 0, function () {
        var currencyTokens;
        return __generator(this, function (_a) {
            currencyTokens = tokens_2.getCurrencyTokens(10);
            expect(currencyTokens).toEqual(tokens_1.optimismCurrencyTokens);
            return [2 /*return*/];
        });
    }); });
    test('returns correct currency tokens for polygon', function () { return __awaiter(void 0, void 0, void 0, function () {
        var currencyTokens;
        return __generator(this, function (_a) {
            currencyTokens = tokens_2.getCurrencyTokens(137);
            expect(currencyTokens).toEqual(tokens_1.polygonCurrencyTokens);
            return [2 /*return*/];
        });
    }); });
});
describe('getCurrencyTokensForIndex()', function () {
    test('returns default currency tokens', function () { return __awaiter(void 0, void 0, void 0, function () {
        var chainId, token, defaultTokens, currencyTokens;
        return __generator(this, function (_a) {
            chainId = 1;
            token = tokens_1.B4BIndex;
            defaultTokens = tokens_2.getCurrencyTokens(chainId);
            currencyTokens = tokens_2.getCurrencyTokensForIndex(token, chainId, true);
            expect(currencyTokens.length).toEqual(defaultTokens.length);
            expect(currencyTokens).toEqual(defaultTokens);
            return [2 /*return*/];
        });
    }); });
    test('returns default currency tokens', function () { return __awaiter(void 0, void 0, void 0, function () {
        var chainId, token, defaultTokens, currencyTokens;
        return __generator(this, function (_a) {
            chainId = 137;
            token = tokens_1.B4BIndex;
            defaultTokens = tokens_2.getCurrencyTokens(chainId);
            currencyTokens = tokens_2.getCurrencyTokensForIndex(token, chainId, true);
            expect(currencyTokens.length).toEqual(defaultTokens.length);
            expect(currencyTokens).toEqual(defaultTokens);
            return [2 /*return*/];
        });
    }); });
});
describe('getNativeToken()', function () {
    test('should return undefined for undefined chain', function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeToken;
        return __generator(this, function (_a) {
            nativeToken = tokens_2.getNativeToken(undefined);
            expect(nativeToken).toBeNull();
            return [2 /*return*/];
        });
    }); });
    test('should return correct token address for WETH on Ethereum', function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeToken;
        return __generator(this, function (_a) {
            nativeToken = tokens_2.getNativeToken(1);
            expect(nativeToken).toBeDefined();
            expect(nativeToken).toEqual(tokens_1.ETH);
            return [2 /*return*/];
        });
    }); });
    test('should return correct token address for WETH on Optimism', function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeToken;
        return __generator(this, function (_a) {
            nativeToken = tokens_2.getNativeToken(10);
            expect(nativeToken).toBeDefined();
            expect(nativeToken).toEqual(tokens_1.ETH);
            return [2 /*return*/];
        });
    }); });
    test('should return correct token address for WETH on Polygon', function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeToken;
        return __generator(this, function (_a) {
            nativeToken = tokens_2.getNativeToken(137);
            expect(nativeToken).toBeDefined();
            expect(nativeToken).toEqual(tokens_1.MATIC);
            return [2 /*return*/];
        });
    }); });
});
describe('isLeveragedToken()', function () {
    test('should return false for non leveraged tokens', function () { return __awaiter(void 0, void 0, void 0, function () {
        var b4b;
        return __generator(this, function (_a) {
            b4b = tokens_2.isLeveragedToken(tokens_1.B4BIndex);
            expect(b4b).toBe(false);
            return [2 /*return*/];
        });
    }); });
});
