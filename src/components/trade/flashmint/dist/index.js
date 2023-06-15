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
var react_1 = require("react");
var debounce_1 = require("lodash/debounce");
var react_2 = require("@chakra-ui/react");
var bignumber_1 = require("@ethersproject/bignumber");
var chains_1 = require("constants/chains");
var useApproval_1 = require("hooks/useApproval");
var useFlashMintQuote_1 = require("hooks/useFlashMintQuote");
var useNetwork_1 = require("hooks/useNetwork");
var useTradeTokenLists_1 = require("hooks/useTradeTokenLists");
var useWallet_1 = require("hooks/useWallet");
var Balances_1 = require("providers/Balances");
var Slippage_1 = require("providers/Slippage");
var utils_1 = require("utils");
var blockExplorer_1 = require("utils/blockExplorer");
var quotes_1 = require("utils/flashMint/quotes");
var slippage_1 = require("utils/slippage");
var tokens_1 = require("utils/tokens");
var footer_1 = require("../_shared/footer");
var QuickTradeFormatter_1 = require("../_shared/QuickTradeFormatter");
var SelectTokenModal_1 = require("../_shared/SelectTokenModal");
var TransactionReviewModal_1 = require("../_shared/TransactionReview/TransactionReviewModal");
var DirectIssuance_1 = require("./DirectIssuance");
var FlashMint = function (props) {
    var _a, _b;
    var address = useWallet_1.useWallet().address;
    var _c = useNetwork_1.useNetwork(), chainId = _c.chainId, isSupportedNetwork = _c.isSupportedNetwork;
    var _d = react_2.useDisclosure(), isInputOutputTokenModalOpen = _d.isOpen, onOpenInputOutputTokenModal = _d.onOpen, onCloseInputOutputTokenModal = _d.onClose;
    var _e = react_2.useDisclosure(), isIndexTokenModalOpen = _e.isOpen, onOpenIndexTokenModal = _e.onOpen, onCloseIndexTokenModal = _e.onClose;
    var _f = react_2.useDisclosure(), isTransactionReviewOpen = _f.isOpen, onOpenTransactionReview = _f.onOpen, onCloseTransactionReview = _f.onClose;
    var _g = useTradeTokenLists_1.useTradeTokenLists(props.singleToken, true), indexToken = _g.buyToken, indexTokenList = _g.buyTokenList, indexTokenPrice = _g.buyTokenPrice, inputOutputToken = _g.sellToken, inputOutputTokenList = _g.sellTokenList, inputOutputPrice = _g.sellTokenPrice, changeIndexToken = _g.changeBuyToken, changeInputOutputToken = _g.changeSellToken;
    var getTokenBalance = Balances_1.useBalanceData().getTokenBalance;
    var slippage = Slippage_1.useSlippage().slippage;
    var _h = react_1.useState(null), contractAddress = _h[0], setContractAddress = _h[1];
    var _j = react_1.useState('0.0'), indexTokenAmountFormatted = _j[0], setIndexTokenAmountFormatted = _j[1];
    var _k = react_1.useState(bignumber_1.BigNumber.from(0)), inputOutputTokenAmount = _k[0], setInputOutputTokenAmount = _k[1];
    var _l = react_1.useState('0'), indexTokenAmount = _l[0], setIndexTokenAmount = _l[1];
    var _m = react_1.useState(true), isMinting = _m[0], setIsMinting = _m[1];
    var _o = react_1.useState(null), transactionReview = _o[0], setTransactionReview = _o[1];
    var indexTokenAmountWei = utils_1.toWei(indexTokenAmount, indexToken.decimals);
    var _p = useFlashMintQuote_1.useFlashMintQuote(), fetchQuote = _p.fetchQuote, isFetchingQuote = _p.isFetchingQuote, quoteResult = _p.quoteResult;
    var _q = useApproval_1.useApproval(indexToken, contractAddress, indexTokenAmountWei), approveIndexToken = _q.approve, isApprovedIndexToken = _q.isApproved, isApprovingIndexToken = _q.isApproving;
    var _r = useApproval_1.useApproval(inputOutputToken, contractAddress, inputOutputTokenAmount), approveInputOutputToken = _r.approve, isApprovedInputOutputToken = _r.isApproved, isApprovingInputOutputToken = _r.isApproving;
    var hasInsufficientFundsInputOutputToken = QuickTradeFormatter_1.getHasInsufficientFunds(false, inputOutputTokenAmount, getTokenBalance(inputOutputToken.symbol, chainId));
    var hasInsufficientFundsIndexToken = QuickTradeFormatter_1.getHasInsufficientFunds(false, indexTokenAmountWei, getTokenBalance(indexToken.symbol, chainId));
    var getSlippage = react_1.useCallback(function () {
        var useSlippage = slippage_1.selectSlippage(slippage, indexToken.symbol, inputOutputToken.symbol);
        return useSlippage;
    }, [inputOutputToken, indexToken, slippage]);
    react_1.useEffect(function () {
        var _a;
        var contractAddress = quotes_1.getContractForQuote(quoteResult, chainId);
        setContractAddress(contractAddress);
        var inputOutputTokenAmount = (_a = quotes_1.getQuoteAmount(quoteResult, chainId)) !== null && _a !== void 0 ? _a : bignumber_1.BigNumber.from(0);
        setInputOutputTokenAmount(inputOutputTokenAmount);
    }, [chainId, quoteResult]);
    react_1.useEffect(function () {
        var indexTokenAmountWei = utils_1.toWei(indexTokenAmount, indexToken.decimals);
        var slippage = getSlippage();
        fetchQuote(isMinting, indexToken, inputOutputToken, indexTokenAmountWei, 0, 0, slippage);
    }, [indexToken, indexTokenAmount, inputOutputToken, isMinting, getSlippage]);
    react_1.useEffect(function () {
        if (!transactionReview)
            return;
        onOpenTransactionReview();
    }, [transactionReview]);
    var approve = function () {
        if (isMinting)
            return approveInputOutputToken();
        return approveIndexToken();
    };
    var isApproved = function () {
        var _a, _b;
        if (isMinting) {
            var isNativeCurrency = (_b = inputOutputToken.symbol === ((_a = tokens_1.getNativeToken(chainId)) === null || _a === void 0 ? void 0 : _a.symbol)) !== null && _b !== void 0 ? _b : '';
            return isNativeCurrency ? true : isApprovedInputOutputToken;
        }
        return isApprovedIndexToken;
    };
    var isApproving = function () {
        if (isMinting)
            return isApprovingInputOutputToken;
        return isApprovingIndexToken;
    };
    var getTradeButtonDisabledState = function () {
        if (!isSupportedNetwork)
            return true;
        if (!address)
            return true;
        return (indexTokenAmount === '0' ||
            (isMinting && hasInsufficientFundsInputOutputToken) ||
            (!isMinting && hasInsufficientFundsIndexToken) ||
            tokens_1.isNotTradableToken(props.singleToken, chainId));
    };
    /**
     * Get the correct trade button label according to different states
     * @returns string label for trade button
     */
    var getTradeButtonLabel = function () {
        if (!address)
            return 'Connect Wallet';
        if (!isSupportedNetwork)
            return 'Wrong Network';
        if (tokens_1.isNotTradableToken(props.singleToken, chainId)) {
            var chainName = 'this Network';
            switch (chainId) {
                case chains_1.MAINNET.chainId:
                    chainName = 'Mainnet';
                    break;
                case chains_1.POLYGON.chainId:
                    chainName = 'Polygon';
                    break;
                case chains_1.OPTIMISM.chainId:
                    chainName = 'Optimism';
                    break;
            }
            return "Not Available on " + chainName;
        }
        if (indexTokenAmount === '0') {
            return 'Enter an amount';
        }
        if (isMinting && hasInsufficientFundsInputOutputToken) {
            return 'Insufficient funds';
        }
        if (!isMinting && hasInsufficientFundsIndexToken) {
            return 'Insufficient funds';
        }
        if (isApproving()) {
            return 'Approving...';
        }
        if (!isApproved()) {
            return 'Approve Token';
        }
        return 'Review Transaction';
    };
    var getTransactionReview = function () {
        if (isFetchingQuote)
            return null;
        if (chainId && contractAddress && quoteResult) {
            var slippage_2 = getSlippage();
            return {
                chainId: chainId,
                contractAddress: contractAddress,
                isMinting: isMinting,
                inputToken: isMinting ? inputOutputToken : indexToken,
                outputToken: isMinting ? indexToken : inputOutputToken,
                inputTokenAmount: isMinting
                    ? inputOutputTokenAmount
                    : indexTokenAmountWei,
                outputTokenAmount: isMinting
                    ? indexTokenAmountWei
                    : inputOutputTokenAmount,
                quoteResult: quoteResult,
                slippage: slippage_2
            };
        }
        return null;
    };
    var resetData = function () {
        setIndexTokenAmount('0');
        setIndexTokenAmountFormatted('0.0');
    };
    var onChangeIndexTokenAmount = debounce_1["default"](function (token, input) {
        if (input === '') {
            resetData();
            return;
        }
        if (!utils_1.isValidTokenInput(input, token.decimals))
            return;
        setIndexTokenAmount(input || '0');
    }, 1000);
    var onClickTradeButton = function () { return __awaiter(void 0, void 0, void 0, function () {
        var transactionReview;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!address)
                        return [2 /*return*/];
                    if (isMinting && hasInsufficientFundsInputOutputToken)
                        return [2 /*return*/];
                    if (!isMinting && hasInsufficientFundsIndexToken)
                        return [2 /*return*/];
                    if (!!isApproved()) return [3 /*break*/, 2];
                    return [4 /*yield*/, approve()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    transactionReview = getTransactionReview();
                    setTransactionReview(transactionReview);
                    return [2 /*return*/];
            }
        });
    }); };
    // SelectTokenModal
    var inputOutputTokenBalances = inputOutputTokenList.map(function (inputOutputToken) { var _a; return (_a = getTokenBalance(inputOutputToken.symbol, chainId)) !== null && _a !== void 0 ? _a : bignumber_1.BigNumber.from(0); });
    var outputTokenBalances = indexTokenList.map(function (indexToken) { var _a; return (_a = getTokenBalance(indexToken.symbol, chainId)) !== null && _a !== void 0 ? _a : bignumber_1.BigNumber.from(0); });
    var inputOutputTokenItems = SelectTokenModal_1.getSelectTokenListItems(inputOutputTokenList, inputOutputTokenBalances, chainId);
    var indexTokenItems = SelectTokenModal_1.getSelectTokenListItems(indexTokenList, outputTokenBalances, chainId);
    // DirectIssuance
    var isNarrow = (_a = props.isNarrowVersion) !== null && _a !== void 0 ? _a : false;
    var inputOutputTokenAmountFormatted = QuickTradeFormatter_1.formattedBalance(inputOutputToken, inputOutputTokenAmount);
    var inputOutputTokenBalanceFormatted = QuickTradeFormatter_1.formattedBalance(inputOutputToken, getTokenBalance(inputOutputToken.symbol, chainId));
    var indexTokenFiatFormatted = QuickTradeFormatter_1.formattedFiat(parseFloat(indexTokenAmount), indexTokenPrice);
    var inputOutputTokenFiatFormatted = QuickTradeFormatter_1.formattedFiat(parseFloat((_b = utils_1.displayFromWei(inputOutputTokenAmount, 2, inputOutputToken.decimals)) !== null && _b !== void 0 ? _b : '0'), inputOutputPrice);
    // TradeButtonContainer
    var buttonLabel = getTradeButtonLabel();
    var isButtonDisabled = getTradeButtonDisabledState();
    var isLoading = isApproving() || isFetchingQuote;
    var contractBlockExplorerUrl = contractAddress === null
        ? null
        : blockExplorer_1.getBlockExplorerContractUrl(contractAddress, chainId);
    return (React.createElement(react_2.Box, { mt: '32px' },
        React.createElement(DirectIssuance_1["default"], { indexToken: indexToken, indexTokenList: indexTokenList, indexTokenAmountFormatted: indexTokenAmountFormatted, indexTokenFiatFormatted: indexTokenFiatFormatted, inputOutputToken: inputOutputToken, inputOutputTokenAmountFormatted: inputOutputTokenAmountFormatted, inputOutputTokenBalanceFormatted: inputOutputTokenBalanceFormatted, inputOutputTokenFiatFormatted: inputOutputTokenFiatFormatted, isIssue: isMinting, isMintable: true, isNarrow: isNarrow, onChangeBuyTokenAmount: onChangeIndexTokenAmount, onSelectIndexToken: function () {
                if (indexTokenItems.length > 1)
                    onOpenIndexTokenModal();
            }, onSelectInputOutputToken: function () {
                if (inputOutputTokenItems.length > 1)
                    onOpenInputOutputTokenModal();
            }, onToggleIssuance: function (isMinting) { return setIsMinting(isMinting); }, priceImpact: undefined }),
        React.createElement(footer_1.TradeButtonContainer, { indexToken: indexToken, inputOutputToken: inputOutputToken, buttonLabel: buttonLabel, isButtonDisabled: isButtonDisabled, isLoading: isLoading, showMevProtectionMessage: true, onClickTradeButton: onClickTradeButton, contractAddress: contractAddress, contractExplorerUrl: contractBlockExplorerUrl }),
        React.createElement(SelectTokenModal_1.SelectTokenModal, { isOpen: isInputOutputTokenModalOpen, onClose: onCloseInputOutputTokenModal, onSelectedToken: function (tokenSymbol) {
                changeInputOutputToken(tokenSymbol);
                onCloseInputOutputTokenModal();
            }, items: inputOutputTokenItems }),
        React.createElement(SelectTokenModal_1.SelectTokenModal, { isOpen: isIndexTokenModalOpen, onClose: onCloseIndexTokenModal, onSelectedToken: function (tokenSymbol) {
                if (tokenSymbol === 'ETH2X-FLI-P' ||
                    tokenSymbol === 'BTC2x-FLI-P' ||
                    tokenSymbol === 'MATIC2x-FLI-P') {
                    alert(tokenSymbol + " is currently sell only. Please use Swap instead of FlashMint.");
                }
                else {
                    changeIndexToken(tokenSymbol);
                }
                onCloseIndexTokenModal();
            }, items: indexTokenItems }),
        transactionReview && (React.createElement(TransactionReviewModal_1.TransactionReviewModal, { isOpen: isTransactionReviewOpen, onClose: onCloseTransactionReview, tx: transactionReview }))));
};
exports["default"] = FlashMint;
