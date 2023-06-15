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
exports.getFlashMintLeveragedTransaction = void 0;
var flash_mint_sdk_1 = require("flash-mint-sdk");
var tokens_1 = require("utils/tokens");
/**
 * Returns a gas estimate for FlashMintLeveraged.
 *
 * If the tx would fail an estimate is returned.
 *
 * @param isMinting                   Minting or redeeming?
 * @param inputToken                  The input token.
 * @param outputToken                 The output token.
 * @param indexTokenAmount            The Index token amount.
 * @param inputOutputTokenAmount      The input/ouput token amount (depending on minting/redeeming).
 * @param inputTokenBalance           The input token's balance.
 * @param swapDataDebtCollateral      The debt collateral swap data (from the quote).
 * @param swapDataInputOutputToken    The input (minting) output (redeeming) token swap data (from the quote).
 * @param provider                    A provider.
 * @param signer                      A signer.
 * @param chainId                     The current's chain ID.
 */
function getFlashMintLeveragedTransaction(isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, swapDataDebtCollateral, swapDataInputOutputToken, provider, signer, chainId) {
    return __awaiter(this, void 0, Promise, function () {
        var outputTokenAddress, inputTokenAddress, setTokenSymbol, block, gasLimitLastBlock, contract, isSellingNativeChainToken, tx, maxAmountInputToken, tx, isRedeemingNativeChainToken, minAmountOutputToken, tx, tx, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Return null - as we can't fetch an estimate without a provider or signer
                    if (!provider || !signer)
                        return [2 /*return*/, null];
                    outputTokenAddress = tokens_1.getAddressForToken(outputToken, chainId);
                    inputTokenAddress = tokens_1.getAddressForToken(inputToken, chainId);
                    if (!outputTokenAddress || !inputTokenAddress)
                        return [2 /*return*/, null];
                    setTokenSymbol = isMinting ? outputToken.symbol : inputToken.symbol;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 12, , 13]);
                    return [4 /*yield*/, provider.getBlock()];
                case 2:
                    block = _a.sent();
                    gasLimitLastBlock = block.gasLimit;
                    contract = flash_mint_sdk_1.getFlashMintLeveragedContractForToken(setTokenSymbol, signer, chainId);
                    if (!isMinting) return [3 /*break*/, 7];
                    isSellingNativeChainToken = tokens_1.isNativeCurrency(inputToken, chainId);
                    if (!isSellingNativeChainToken) return [3 /*break*/, 4];
                    return [4 /*yield*/, contract.populateTransaction.issueExactSetFromETH(outputTokenAddress, indexTokenAmount, swapDataDebtCollateral, swapDataInputOutputToken, { value: inputOutputTokenAmount, gasLimit: gasLimitLastBlock })];
                case 3:
                    tx = _a.sent();
                    return [2 /*return*/, tx];
                case 4:
                    maxAmountInputToken = inputOutputTokenAmount;
                    return [4 /*yield*/, contract.populateTransaction.issueExactSetFromERC20(outputTokenAddress, indexTokenAmount, inputTokenAddress, maxAmountInputToken, swapDataDebtCollateral, swapDataInputOutputToken, { gasLimit: gasLimitLastBlock })];
                case 5:
                    tx = _a.sent();
                    return [2 /*return*/, tx];
                case 6: return [3 /*break*/, 11];
                case 7:
                    isRedeemingNativeChainToken = tokens_1.isNativeCurrency(outputToken, chainId);
                    minAmountOutputToken = inputOutputTokenAmount;
                    if (!isRedeemingNativeChainToken) return [3 /*break*/, 9];
                    return [4 /*yield*/, contract.populateTransaction.redeemExactSetForETH(inputTokenAddress, indexTokenAmount, minAmountOutputToken, swapDataDebtCollateral, swapDataInputOutputToken, { gasLimit: gasLimitLastBlock })];
                case 8:
                    tx = _a.sent();
                    return [2 /*return*/, tx];
                case 9: return [4 /*yield*/, contract.populateTransaction.redeemExactSetForERC20(inputTokenAddress, indexTokenAmount, outputTokenAddress, minAmountOutputToken, swapDataDebtCollateral, swapDataInputOutputToken, {
                        gasLimit: gasLimitLastBlock
                    })];
                case 10:
                    tx = _a.sent();
                    return [2 /*return*/, tx];
                case 11: return [3 /*break*/, 13];
                case 12:
                    error_1 = _a.sent();
                    console.log('Error getting tx for FlashMintLeveraged:', error_1);
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/, null];
            }
        });
    });
}
exports.getFlashMintLeveragedTransaction = getFlashMintLeveragedTransaction;
