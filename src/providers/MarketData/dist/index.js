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
exports.MarketDataProvider = exports.useMarketData = exports.MarketDataContext = void 0;
var react_1 = require("react");
var tokens_1 = require("constants/tokens");
var coingeckoApi_1 = require("utils/api/coingeckoApi");
exports.MarketDataContext = react_1.createContext({
    getMarketDataBySymbol: function () { return null; },
    selectLatestMarketData: function () { return 0; },
    selectMarketDataByToken: function () { return [[]]; }
});
exports.useMarketData = function () { return react_1.useContext(exports.MarketDataContext); };
exports.MarketDataProvider = function (props) {
    var _a = react_1.useState({}), dsEthMarketData = _a[0], setDsEthMarketData = _a[1];
    var _b = react_1.useState({}), gtcEthMarketData = _b[0], setGtcEthMarketData = _b[1];
    var _c = react_1.useState({}), ethMarketData = _c[0], setEthMarketData = _c[1];
    var _d = react_1.useState({}), indexMarketData = _d[0], setIndexMarketData = _d[1];
    var _e = react_1.useState({}), dpiMarketData = _e[0], setDpiMarketData = _e[1];
    var _f = react_1.useState({}), mviMarketData = _f[0], setMviMarketData = _f[1];
    var _g = react_1.useState({}), bedMarketData = _g[0], setBedMarketData = _g[1];
    var _h = react_1.useState({}), ethFliMarketData = _h[0], setEthFliMarketData = _h[1];
    var _j = react_1.useState({}), btcFliMarketData = _j[0], setBtcFliMarketData = _j[1];
    var _k = react_1.useState({}), icEthMarketData = _k[0], setIcEthMarketData = _k[1];
    var _l = react_1.useState({}), mmiMarketData = _l[0], setMmiMarketData = _l[1];
    var _m = react_1.useState({}), gmiMarketData = _m[0], setGmiMarketData = _m[1];
    var _o = react_1.useState({}), b4bMarketData = _o[0], setb4bMarketData = _o[1];
    var selectLatestMarketData = function (marketData) { var _a; return ((_a = marketData === null || marketData === void 0 ? void 0 : marketData[marketData.length - 1]) === null || _a === void 0 ? void 0 : _a[1]) || 0; };
    var selectMarketDataByToken = function (token) {
        switch (token) {
            case tokens_1.B4BIndex:
                return b4bMarketData;
            default:
                return 0;
        }
    };
    var getMarketDataBySymbol = function (token) {
        switch (token) {
            case tokens_1.IndexToken:
                return indexMarketData;
            case tokens_1.B4BIndex:
                return b4bMarketData;
            default:
                return null;
        }
    };
    var fetchMarketData = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var marketData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        coingeckoApi_1.fetchHistoricalTokenMarketData(tokens_1.ETH.coingeckoId),
                        coingeckoApi_1.fetchHistoricalTokenMarketData(tokens_1.IndexToken.coingeckoId),
                        coingeckoApi_1.fetchHistoricalTokenMarketData(tokens_1.B4BIndex.coingeckoId),
                    ])];
                case 1:
                    marketData = _a.sent();
                    setEthMarketData(marketData[0]);
                    setIndexMarketData(marketData[1]);
                    setb4bMarketData(marketData[2]);
                    return [2 /*return*/];
            }
        });
    }); }, []);
    react_1.useEffect(function () {
        fetchMarketData();
    }, [fetchMarketData]);
    return (React.createElement(exports.MarketDataContext.Provider, { value: {
            getMarketDataBySymbol: getMarketDataBySymbol,
            selectLatestMarketData: selectLatestMarketData,
            selectMarketDataByToken: selectMarketDataByToken,
            eth: ethMarketData,
            index: indexMarketData,
            b4b: b4bMarketData
        } }, props.children));
};
