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
var utils_1 = require("utils");
var test_utils_1 = require("utils/test-utils");
var flashMintZeroExTransaction_1 = require("./flashMintZeroExTransaction");
var provider = test_utils_1.LocalhostProvider;
var wallet = test_utils_1.SignerAccount0;
describe('getFlashMintZeroExTransaction()', function () {
    beforeEach(function () {
        jest.setTimeout(1000000);
    });
    it('should return null if no signer is provided', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, txNoSigner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isMinting = true;
                    inputToken = tokens_1.ETH;
                    outputToken = tokens_1.B4BIndex;
                    indexTokenAmount = utils_1.toWei(1);
                    inputOutputTokenAmount = utils_1.toWei('0.1');
                    componentQuotes = [];
                    return [4 /*yield*/, flashMintZeroExTransaction_1.getFlashMintZeroExTransaction(isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, provider, null, 1)];
                case 1:
                    txNoSigner = _a.sent();
                    expect(txNoSigner).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return null if no provider is present', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, txNoProvider;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isMinting = true;
                    inputToken = tokens_1.ETH;
                    outputToken = tokens_1.B4BIndex;
                    indexTokenAmount = utils_1.toWei(1);
                    inputOutputTokenAmount = utils_1.toWei('0.1');
                    componentQuotes = [];
                    return [4 /*yield*/, flashMintZeroExTransaction_1.getFlashMintZeroExTransaction(isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, null, wallet, 1)];
                case 1:
                    txNoProvider = _a.sent();
                    expect(txNoProvider).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return null if ouput token address is undefined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isMinting = true;
                    inputToken = tokens_1.ETH;
                    outputToken = tokens_1.B4BIndex;
                    indexTokenAmount = utils_1.toWei(1);
                    inputOutputTokenAmount = utils_1.toWei('0.1');
                    componentQuotes = [];
                    return [4 /*yield*/, flashMintZeroExTransaction_1.getFlashMintZeroExTransaction(isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, provider, wallet, 10 // Optimism as MVI is not available there
                        )];
                case 1:
                    tx = _a.sent();
                    expect(tx).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return null if input token address is undefined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isMinting = false;
                    inputToken = tokens_1.B4BIndex;
                    outputToken = tokens_1.ETH;
                    indexTokenAmount = utils_1.toWei(1);
                    inputOutputTokenAmount = utils_1.toWei('0.1');
                    componentQuotes = [];
                    return [4 /*yield*/, flashMintZeroExTransaction_1.getFlashMintZeroExTransaction(isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, provider, wallet, 10 // Optimism as MVI is not available there
                        )];
                case 1:
                    tx = _a.sent();
                    expect(tx).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return a populated tx for minting with ETH', function () { return __awaiter(void 0, void 0, void 0, function () {
        var chainId, isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chainId = 1;
                    isMinting = true;
                    inputToken = tokens_1.ETH;
                    outputToken = tokens_1.B4BIndex;
                    indexTokenAmount = utils_1.toWei(1);
                    inputOutputTokenAmount = utils_1.toWei('0.1');
                    componentQuotes = [];
                    return [4 /*yield*/, flashMintZeroExTransaction_1.getFlashMintZeroExTransaction(isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, provider, wallet, chainId)];
                case 1:
                    tx = _a.sent();
                    if (!tx)
                        fail();
                    expect(tx.from).toEqual(wallet.address);
                    expect(tx.value).toEqual(inputOutputTokenAmount);
                    return [2 /*return*/];
            }
        });
    }); });
});
