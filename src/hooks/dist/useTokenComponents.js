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
exports.useTokenComponents = void 0;
var react_1 = require("react");
var chains_1 = require("constants/chains");
var tokens_1 = require("constants/tokens");
var indexApi_1 = require("utils/api/indexApi");
var tokens_2 = require("utils/tokens");
exports.useTokenComponents = function (token, isPerpToken) {
    if (isPerpToken === void 0) { isPerpToken = false; }
    var _a = react_1.useState([]), components = _a[0], setComponents = _a[1];
    var _b = react_1.useState(0), nav = _b[0], setNav = _b[1];
    var _c = react_1.useState([]), vAssets = _c[0], setVAssets = _c[1];
    var fetchComponents = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var chainId, address, indexApi, path, _a, components_1, vAssets_1, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    chainId = token.defaultChain || chains_1.MAINNET.chainId;
                    address = tokens_2.getAddressForToken(token, chainId);
                    if (!address || token.symbol === tokens_1.IndexToken.symbol)
                        return [2 /*return*/];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    indexApi = new indexApi_1.IndexApi();
                    path = "/components?chainId=" + chainId + "&isPerpToken=" + isPerpToken + "&address=" + address;
                    return [4 /*yield*/, indexApi.get(path)];
                case 2:
                    _a = _b.sent(), components_1 = _a.components, vAssets_1 = _a.vAssets;
                    setComponents(components_1);
                    setVAssets(vAssets_1);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    console.log('Error fetching components:', err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [token, isPerpToken]);
    react_1.useEffect(function () {
        fetchComponents();
    }, [fetchComponents]);
    react_1.useMemo(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (components.length === 0 && vAssets.length === 0)
                return [2 /*return*/];
            setNav(getNetAssetValue(components.concat(vAssets)));
            return [2 /*return*/];
        });
    }); }, [components, vAssets]);
    return { components: components, vAssets: vAssets, nav: nav };
};
function fetchIcSmmtNav() {
    return __awaiter(this, void 0, Promise, function () {
        var indexApi, path, nav, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    indexApi = new indexApi_1.IndexApi();
                    path = '/icsmmt/nav';
                    return [4 /*yield*/, indexApi.get(path)];
                case 1:
                    nav = (_a.sent()).nav;
                    return [2 /*return*/, nav];
                case 2:
                    err_2 = _a.sent();
                    console.log('Error fetching NAV for icSMMT:', err_2);
                    return [2 /*return*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getNetAssetValue(components) {
    var totalValue = 0;
    if (components.length > 0)
        components.forEach(function (c) {
            totalValue += parseFloat(c.totalPriceUsd);
        });
    return totalValue;
}
