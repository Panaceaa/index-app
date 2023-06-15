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
exports.getFlashMintNotionalTransaction = void 0;
var tokens_1 = require("utils/tokens");
var fmNotionalContract_1 = require("./fmNotionalContract");
function getFlashMintNotionalTransaction(isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, swapData, slippage, provider, signer, chainId) {
    return __awaiter(this, void 0, Promise, function () {
        var inputTokenAddress, outputTokenAddress, contract, fixedTokenAddress, issuanceModule, isDebtIssuance, redeemMaturedPositions, block, gasLimitLastBlock, maxAmountInputToken, mintTx, minAmountOutputToken, redeemTx, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Return default - as we can't construct a tx without a provider or signer
                    if (!provider || !signer)
                        return [2 /*return*/, null];
                    inputTokenAddress = tokens_1.getAddressForToken(inputToken, chainId);
                    outputTokenAddress = tokens_1.getAddressForToken(outputToken, chainId);
                    if (!outputTokenAddress || !inputTokenAddress)
                        return [2 /*return*/, null];
                    contract = fmNotionalContract_1.getFlashMintNotionalContract(signer, chainId);
                    fixedTokenAddress = isMinting ? outputTokenAddress : inputTokenAddress;
                    issuanceModule = '0xa0a98EB7Af028BE00d04e46e1316808A62a8fd59';
                    isDebtIssuance = true;
                    redeemMaturedPositions = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, provider.getBlock()];
                case 2:
                    block = _a.sent();
                    gasLimitLastBlock = block.gasLimit;
                    if (!isMinting) return [3 /*break*/, 4];
                    maxAmountInputToken = inputOutputTokenAmount;
                    return [4 /*yield*/, contract.populateTransaction.issueExactSetFromToken(fixedTokenAddress, inputToken.address, indexTokenAmount, maxAmountInputToken, swapData, issuanceModule, isDebtIssuance, slippage, redeemMaturedPositions, { gasLimit: gasLimitLastBlock })];
                case 3:
                    mintTx = _a.sent();
                    return [2 /*return*/, mintTx];
                case 4:
                    minAmountOutputToken = inputOutputTokenAmount;
                    return [4 /*yield*/, contract.populateTransaction.redeemExactSetForToken(fixedTokenAddress, outputToken.address, indexTokenAmount, minAmountOutputToken, swapData, issuanceModule, isDebtIssuance, slippage, redeemMaturedPositions, { gasLimit: gasLimitLastBlock })];
                case 5:
                    redeemTx = _a.sent();
                    return [2 /*return*/, redeemTx];
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.log('Error sending FlashMintNotional tx', error_1);
                    return [2 /*return*/, null];
                case 8: return [2 /*return*/, null];
            }
        });
    });
}
exports.getFlashMintNotionalTransaction = getFlashMintNotionalTransaction;
