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
exports.useTradeFlashMintZeroEx = void 0;
var react_1 = require("react");
var bignumber_1 = require("@ethersproject/bignumber");
var flash_mint_sdk_1 = require("flash-mint-sdk");
var gas_1 = require("constants/gas");
var tokens_1 = require("constants/tokens");
var useNetwork_1 = require("hooks/useNetwork");
var useWallet_1 = require("hooks/useWallet");
var Balances_1 = require("providers/Balances");
var utils_1 = require("utils");
var analytics_1 = require("utils/api/analytics");
var sentry_1 = require("utils/api/sentry");
var flashMintZeroExTransaction_1 = require("utils/flashMint/flashMintZeroExTransaction");
var gasEstimatooor_1 = require("utils/gasEstimatooor");
var tokens_2 = require("utils/tokens");
exports.useTradeFlashMintZeroEx = function () {
    var _a = useWallet_1.useWallet(), address = _a.address, provider = _a.provider, signer = _a.signer;
    var chainId = useNetwork_1.useNetwork().chainId;
    var getTokenBalance = Balances_1.useBalanceData().getTokenBalance;
    var _b = react_1.useState(false), isTransacting = _b[0], setIsTransacting = _b[1];
    var _c = react_1.useState(false), txWouldFail = _c[0], setTxWouldFail = _c[1];
    var executeFlashMintZeroExTrade = react_1.useCallback(function (quote, slippage, override) {
        if (override === void 0) { override = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            var isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, gasLimit, componentQuotes, outputTokenAddress, inputTokenAddress, setTokenSymbol, issuanceModule, spendingTokenBalance, requiredBalance, contract, flashMint, tx, defaultGasEstimate, gasEstimatooor, canFail, gasLimit_1, isSellingNativeChainToken, mintTx, maxAmountInputToken, mintTx, isRedeemingNativeChainToken, minOutputReceive, redeemTx, redeemTx, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!address || !chainId || !quote)
                            return [2 /*return*/];
                        isMinting = quote.isMinting;
                        inputToken = quote.inputToken;
                        outputToken = quote.outputToken;
                        indexTokenAmount = quote.indexTokenAmount;
                        inputOutputTokenAmount = quote.inputOutputTokenAmount;
                        gasLimit = quote.gas;
                        componentQuotes = quote.componentQuotes;
                        outputTokenAddress = tokens_2.getAddressForToken(outputToken, chainId);
                        inputTokenAddress = tokens_2.getAddressForToken(inputToken, chainId);
                        if (!outputTokenAddress || !inputTokenAddress)
                            return [2 /*return*/];
                        setTokenSymbol = isMinting ? outputToken.symbol : inputToken.symbol;
                        issuanceModule = flash_mint_sdk_1.getIssuanceModule(setTokenSymbol, chainId);
                        spendingTokenBalance = getTokenBalance(inputToken.symbol, chainId) || bignumber_1.BigNumber.from(0);
                        requiredBalance = utils_1.fromWei(quote.inputOutputTokenAmount, inputToken.decimals);
                        if (spendingTokenBalance.lt(requiredBalance))
                            return [2 /*return*/];
                        contract = flash_mint_sdk_1.getFlashMintZeroExContractForToken(setTokenSymbol, signer, chainId);
                        flashMint = new flash_mint_sdk_1.FlashMintZeroEx(contract);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 13, , 14]);
                        setIsTransacting(true);
                        return [4 /*yield*/, flashMintZeroExTransaction_1.getFlashMintZeroExTransaction(isMinting, inputToken, outputToken, indexTokenAmount, inputOutputTokenAmount, componentQuotes, provider, signer, chainId)];
                    case 2:
                        tx = _a.sent();
                        if (!tx)
                            throw new Error('No transaction object');
                        defaultGasEstimate = bignumber_1.BigNumber.from(gas_1.DefaultGasLimitFlashMintZeroEx);
                        gasEstimatooor = new gasEstimatooor_1.GasEstimatooor(signer, defaultGasEstimate);
                        canFail = override;
                        return [4 /*yield*/, gasEstimatooor.estimate(tx, canFail)];
                    case 3:
                        gasLimit_1 = _a.sent();
                        if (!isMinting) return [3 /*break*/, 8];
                        isSellingNativeChainToken = inputToken.symbol === tokens_1.ETH.symbol ||
                            inputToken.symbol === tokens_1.MATIC.symbol;
                        if (!isSellingNativeChainToken) return [3 /*break*/, 5];
                        sentry_1.captureTransaction({
                            exchangeIssuance: sentry_1.CaptureExchangeIssuanceKey.zeroEx,
                            "function": sentry_1.CaptureExchangeIssuanceFunctionKey.issueEth,
                            setToken: outputTokenAddress,
                            setAmount: indexTokenAmount.toString(),
                            gasLimit: gasLimit_1.toString(),
                            slippage: slippage.toString()
                        });
                        return [4 /*yield*/, flashMint.mintExactSetFromETH(outputTokenAddress, indexTokenAmount, componentQuotes, issuanceModule.address, issuanceModule.isDebtIssuance, inputOutputTokenAmount, { gasLimit: gasLimit_1 })];
                    case 4:
                        mintTx = _a.sent();
                        analytics_1.logTx(chainId !== null && chainId !== void 0 ? chainId : -1, '0xEI', mintTx);
                        return [3 /*break*/, 7];
                    case 5:
                        maxAmountInputToken = inputOutputTokenAmount;
                        sentry_1.captureTransaction({
                            exchangeIssuance: sentry_1.CaptureExchangeIssuanceKey.zeroEx,
                            "function": sentry_1.CaptureExchangeIssuanceFunctionKey.issueErc20,
                            setToken: outputTokenAddress,
                            setAmount: indexTokenAmount.toString(),
                            gasLimit: gasLimit_1.toString(),
                            slippage: slippage.toString()
                        });
                        return [4 /*yield*/, flashMint.mintExactSetFromToken(outputTokenAddress, inputTokenAddress, indexTokenAmount, maxAmountInputToken, componentQuotes, issuanceModule.address, issuanceModule.isDebtIssuance, { gasLimit: gasLimit_1 })];
                    case 6:
                        mintTx = _a.sent();
                        analytics_1.logTx(chainId !== null && chainId !== void 0 ? chainId : -1, '0xEI', mintTx);
                        _a.label = 7;
                    case 7: return [3 /*break*/, 12];
                    case 8:
                        isRedeemingNativeChainToken = outputToken.symbol === tokens_1.ETH.symbol ||
                            outputToken.symbol === tokens_1.MATIC.symbol;
                        minOutputReceive = inputOutputTokenAmount;
                        sentry_1.captureTransaction({
                            exchangeIssuance: sentry_1.CaptureExchangeIssuanceKey.zeroEx,
                            "function": sentry_1.CaptureExchangeIssuanceFunctionKey.redeemEth,
                            setToken: inputTokenAddress,
                            setAmount: indexTokenAmount.toString(),
                            gasLimit: gasLimit_1.toString(),
                            slippage: slippage.toString()
                        });
                        if (!isRedeemingNativeChainToken) return [3 /*break*/, 10];
                        return [4 /*yield*/, flashMint.redeemExactSetForETH(inputTokenAddress, indexTokenAmount, minOutputReceive, componentQuotes, issuanceModule.address, issuanceModule.isDebtIssuance, { gasLimit: gasLimit_1 })];
                    case 9:
                        redeemTx = _a.sent();
                        analytics_1.logTx(chainId !== null && chainId !== void 0 ? chainId : -1, '0xEI', redeemTx);
                        return [3 /*break*/, 12];
                    case 10:
                        sentry_1.captureTransaction({
                            exchangeIssuance: sentry_1.CaptureExchangeIssuanceKey.zeroEx,
                            "function": sentry_1.CaptureExchangeIssuanceFunctionKey.redeemErc20,
                            setToken: inputTokenAddress,
                            setAmount: indexTokenAmount.toString(),
                            gasLimit: gasLimit_1.toString(),
                            slippage: slippage.toString()
                        });
                        return [4 /*yield*/, flashMint.redeemExactSetForToken(inputTokenAddress, outputTokenAddress, indexTokenAmount, minOutputReceive, componentQuotes, issuanceModule.address, issuanceModule.isDebtIssuance, { gasLimit: gasLimit_1 })];
                    case 11:
                        redeemTx = _a.sent();
                        analytics_1.logTx(chainId !== null && chainId !== void 0 ? chainId : -1, '0xEI', redeemTx);
                        _a.label = 12;
                    case 12:
                        setIsTransacting(false);
                        return [3 /*break*/, 14];
                    case 13:
                        error_1 = _a.sent();
                        console.log('Error sending FlashMintZeroEx tx', error_1);
                        console.log('Override?', override);
                        setIsTransacting(false);
                        if (error_1 instanceof gasEstimatooor_1.GasEstimatooorFailedError &&
                            error_1.statusCode === 1001) {
                            setTxWouldFail(true);
                        }
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/];
                }
            });
        });
    }, [address, signer]);
    return { executeFlashMintZeroExTrade: executeFlashMintZeroExTrade, isTransacting: isTransacting, txWouldFail: txWouldFail };
};
