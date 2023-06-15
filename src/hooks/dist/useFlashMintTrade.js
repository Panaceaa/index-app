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
exports.useFlashMintTrade = void 0;
var react_1 = require("react");
var bignumber_1 = require("@ethersproject/bignumber");
var useNetwork_1 = require("hooks/useNetwork");
var useWallet_1 = require("hooks/useWallet");
var analytics_1 = require("utils/api/analytics");
var sentry_1 = require("utils/api/sentry");
var gasEstimatooor_1 = require("utils/gasEstimatooor");
var tokens_1 = require("utils/tokens");
exports.useFlashMintTrade = function () {
    var _a = useWallet_1.useWallet(), address = _a.address, signer = _a.signer;
    var chainId = useNetwork_1.useNetwork().chainId;
    var _b = react_1.useState(false), isTransacting = _b[0], setIsTransacting = _b[1];
    var _c = react_1.useState(false), txWouldFail = _c[0], setTxWouldFail = _c[1];
    var executeFlashMintTrade = react_1.useCallback(function (quote, slippage, override) {
        if (override === void 0) { override = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            var indexTokenAmount, inputToken, isMinting, outputToken, inputTokenAddress, outputTokenAddress, indexToken, tx, defaultGasEstimate, gasEstimatooor, canFail, gasLimit, res, contractFunction, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!address || !chainId || !quote)
                            return [2 /*return*/];
                        indexTokenAmount = quote.indexTokenAmount, inputToken = quote.inputToken, isMinting = quote.isMinting, outputToken = quote.outputToken;
                        inputTokenAddress = tokens_1.getAddressForToken(inputToken, chainId);
                        outputTokenAddress = tokens_1.getAddressForToken(outputToken, chainId);
                        if (!outputTokenAddress || !inputTokenAddress)
                            return [2 /*return*/];
                        indexToken = isMinting ? outputTokenAddress : inputTokenAddress;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        setIsTransacting(true);
                        tx = quote.tx;
                        defaultGasEstimate = bignumber_1.BigNumber.from(6000000);
                        gasEstimatooor = new gasEstimatooor_1.GasEstimatooor(signer, defaultGasEstimate);
                        canFail = override;
                        console.log(tx);
                        return [4 /*yield*/, gasEstimatooor.estimate(tx, canFail)];
                    case 2:
                        gasLimit = _a.sent();
                        tx.gasLimit = gasLimit;
                        return [4 /*yield*/, signer.sendTransaction(tx)];
                    case 3:
                        res = _a.sent();
                        contractFunction = quote.isMinting
                            ? sentry_1.CaptureExchangeIssuanceFunctionKey.issueErc20
                            : sentry_1.CaptureExchangeIssuanceFunctionKey.redeemErc20;
                        sentry_1.captureTransaction({
                            // TODO: make dynamic
                            exchangeIssuance: sentry_1.CaptureExchangeIssuanceKey.wrapped,
                            "function": contractFunction,
                            setToken: indexToken,
                            setAmount: indexTokenAmount.toString(),
                            gasLimit: gasLimit.toString(),
                            slippage: slippage.toString()
                        });
                        analytics_1.logTx(chainId !== null && chainId !== void 0 ? chainId : -1, 'Wrapped', res);
                        setIsTransacting(false);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log('Error sending FlashMint tx', error_1);
                        console.log('Override?', override);
                        setIsTransacting(false);
                        if (error_1 instanceof gasEstimatooor_1.GasEstimatooorFailedError &&
                            error_1.statusCode === 1001) {
                            setTxWouldFail(true);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, [address, signer]);
    return { executeFlashMintTrade: executeFlashMintTrade, isTransacting: isTransacting, txWouldFail: txWouldFail };
};
