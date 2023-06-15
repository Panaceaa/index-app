"use strict";

var _InterestCompoundingE;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __export = function __export(target, all) {
  for (var name in all) {
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  }
};

var __copyProps = function __copyProps(to, from, except, desc) {
  if (from && _typeof(from) === "object" || typeof from === "function") {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: function get() {
            return from[key];
          },
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      };

      for (var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return to;
};

var __toESM = function __toESM(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps( // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod);
};

var __toCommonJS = function __toCommonJS(mod) {
  return __copyProps(__defProp({}, "__esModule", {
    value: true
  }), mod);
}; // src/index.ts


var src_exports = {};

__export(src_exports, {
  B4BIndex: function B4BIndex() {
    return _B4BIndex;
  },
  BTC2xFlexibleLeverageIndex: function BTC2xFlexibleLeverageIndex() {
    return _BTC2xFlexibleLeverageIndex;
  },
  BTC2xFlexibleLeverageIndexPolygon: function BTC2xFlexibleLeverageIndexPolygon() {
    return _BTC2xFlexibleLeverageIndexPolygon;
  },
  BanklessBEDIndex: function BanklessBEDIndex() {
    return _BanklessBEDIndex;
  },
  BasicIssuanceModuleAddress: function BasicIssuanceModuleAddress() {
    return _BasicIssuanceModuleAddress;
  },
  BasicIssuanceModulePolygonAddress: function BasicIssuanceModulePolygonAddress() {
    return _BasicIssuanceModulePolygonAddress;
  },
  DAI: function DAI() {
    return _DAI;
  },
  DebtIssuanceModuleAddress: function DebtIssuanceModuleAddress() {
    return _DebtIssuanceModuleAddress;
  },
  DebtIssuanceModuleV2Address: function DebtIssuanceModuleV2Address() {
    return _DebtIssuanceModuleV2Address;
  },
  DebtIssuanceModuleV2PolygonAddress: function DebtIssuanceModuleV2PolygonAddress() {
    return _DebtIssuanceModuleV2PolygonAddress;
  },
  DefiPulseIndex: function DefiPulseIndex() {
    return _DefiPulseIndex;
  },
  DiversifiedStakedETHIndex: function DiversifiedStakedETHIndex() {
    return _DiversifiedStakedETHIndex;
  },
  ERC4626QuoteProvider: function ERC4626QuoteProvider() {
    return _ERC4626QuoteProvider;
  },
  ERC4626TransactionBuilder: function ERC4626TransactionBuilder() {
    return _ERC4626TransactionBuilder;
  },
  ETH: function ETH() {
    return _ETH;
  },
  ETH2xFlexibleLeverageIndex: function ETH2xFlexibleLeverageIndex() {
    return _ETH2xFlexibleLeverageIndex;
  },
  ETH2xFlexibleLeverageIndexPolygon: function ETH2xFlexibleLeverageIndexPolygon() {
    return _ETH2xFlexibleLeverageIndexPolygon;
  },
  Exchange: function Exchange() {
    return _Exchange;
  },
  ExchangeIssuanceLeveragedMainnetAddress: function ExchangeIssuanceLeveragedMainnetAddress() {
    return _ExchangeIssuanceLeveragedMainnetAddress;
  },
  ExchangeIssuanceLeveragedPolygonAddress: function ExchangeIssuanceLeveragedPolygonAddress() {
    return _ExchangeIssuanceLeveragedPolygonAddress;
  },
  ExchangeIssuanceZeroExMainnetAddress: function ExchangeIssuanceZeroExMainnetAddress() {
    return _ExchangeIssuanceZeroExMainnetAddress;
  },
  ExchangeIssuanceZeroExPolygonAddress: function ExchangeIssuanceZeroExPolygonAddress() {
    return _ExchangeIssuanceZeroExPolygonAddress;
  },
  FlashMint4626Address: function FlashMint4626Address() {
    return _FlashMint4626Address;
  },
  FlashMintContractType: function FlashMintContractType() {
    return _FlashMintContractType;
  },
  FlashMintLeveraged: function FlashMintLeveraged() {
    return _FlashMintLeveraged;
  },
  FlashMintLeveragedForCompoundAddress: function FlashMintLeveragedForCompoundAddress() {
    return _FlashMintLeveragedForCompoundAddress;
  },
  FlashMintQuoteProvider: function FlashMintQuoteProvider() {
    return _FlashMintQuoteProvider;
  },
  FlashMintWrappedAddress: function FlashMintWrappedAddress() {
    return _FlashMintWrappedAddress;
  },
  FlashMintZeroEx: function FlashMintZeroEx() {
    return _FlashMintZeroEx;
  },
  FlashMintZeroExMainnetAddress: function FlashMintZeroExMainnetAddress() {
    return _FlashMintZeroExMainnetAddress;
  },
  GMIIndex: function GMIIndex() {
    return _GMIIndex;
  },
  GitcoinStakedETHIndex: function GitcoinStakedETHIndex() {
    return _GitcoinStakedETHIndex;
  },
  IndexDebtIssuanceModuleV2Address: function IndexDebtIssuanceModuleV2Address() {
    return _IndexDebtIssuanceModuleV2Address;
  },
  InterestCompoundingETHIndex: function InterestCompoundingETHIndex() {
    return _InterestCompoundingETHIndex;
  },
  InverseBTCFlexibleLeverageIndex: function InverseBTCFlexibleLeverageIndex() {
    return _InverseBTCFlexibleLeverageIndex;
  },
  InverseETHFlexibleLeverageIndex: function InverseETHFlexibleLeverageIndex() {
    return _InverseETHFlexibleLeverageIndex;
  },
  InverseMATICFlexibleLeverageIndex: function InverseMATICFlexibleLeverageIndex() {
    return _InverseMATICFlexibleLeverageIndex;
  },
  JPGIndex: function JPGIndex() {
    return _JPGIndex;
  },
  LeveragedTransactionBuilder: function LeveragedTransactionBuilder() {
    return _LeveragedTransactionBuilder;
  },
  MATIC: function MATIC() {
    return _MATIC;
  },
  MATIC2xFlexibleLeverageIndex: function MATIC2xFlexibleLeverageIndex() {
    return _MATIC2xFlexibleLeverageIndex;
  },
  MetaverseIndex: function MetaverseIndex() {
    return _MetaverseIndex;
  },
  MoneyMarketIndexToken: function MoneyMarketIndexToken() {
    return _MoneyMarketIndexToken;
  },
  USDC: function USDC() {
    return _USDC;
  },
  USDT: function USDT() {
    return _USDT;
  },
  WETH: function WETH() {
    return _WETH;
  },
  Web3DataEconomyIndex: function Web3DataEconomyIndex() {
    return _Web3DataEconomyIndex;
  },
  WrappedQuoteProvider: function WrappedQuoteProvider() {
    return _WrappedQuoteProvider;
  },
  WrappedTransactionBuilder: function WrappedTransactionBuilder() {
    return _WrappedTransactionBuilder;
  },
  ZeroExApi: function ZeroExApi() {
    return _ZeroExApi;
  },
  ZeroExTransactionBuilder: function ZeroExTransactionBuilder() {
    return _ZeroExTransactionBuilder;
  },
  collateralDebtSwapData: function collateralDebtSwapData() {
    return _collateralDebtSwapData;
  },
  debtCollateralSwapData: function debtCollateralSwapData() {
    return _debtCollateralSwapData;
  },
  extractPoolFees: function extractPoolFees() {
    return _extractPoolFees;
  },
  getAddressForToken: function getAddressForToken() {
    return _getAddressForToken;
  },
  getEchangeFrom0xKey: function getEchangeFrom0xKey() {
    return _getEchangeFrom0xKey;
  },
  getExchangeIssuanceLeveragedContractAddress: function getExchangeIssuanceLeveragedContractAddress() {
    return _getExchangeIssuanceLeveragedContractAddress;
  },
  getExchangeIssuanceZeroExContractAddress: function getExchangeIssuanceZeroExContractAddress() {
    return _getExchangeIssuanceZeroExContractAddress;
  },
  getFlashMint4626Contract: function getFlashMint4626Contract() {
    return _getFlashMint4626Contract;
  },
  getFlashMintLeveragedContract: function getFlashMintLeveragedContract() {
    return _getFlashMintLeveragedContract;
  },
  getFlashMintLeveragedContractForToken: function getFlashMintLeveragedContractForToken() {
    return _getFlashMintLeveragedContractForToken;
  },
  getFlashMintLeveragedForCompoundContract: function getFlashMintLeveragedForCompoundContract() {
    return _getFlashMintLeveragedForCompoundContract;
  },
  getFlashMintLeveragedQuote: function getFlashMintLeveragedQuote() {
    return _getFlashMintLeveragedQuote;
  },
  getFlashMintWrappedContract: function getFlashMintWrappedContract() {
    return _getFlashMintWrappedContract;
  },
  getFlashMintZeroExContract: function getFlashMintZeroExContract() {
    return _getFlashMintZeroExContract;
  },
  getFlashMintZeroExContractForToken: function getFlashMintZeroExContractForToken() {
    return _getFlashMintZeroExContractForToken;
  },
  getFlashMintZeroExQuote: function getFlashMintZeroExQuote() {
    return _getFlashMintZeroExQuote;
  },
  getIncludedSources: function getIncludedSources() {
    return _getIncludedSources;
  },
  getIndexFlashMintZeroExContract: function getIndexFlashMintZeroExContract() {
    return _getIndexFlashMintZeroExContract;
  },
  getIndexFlashMintZeroExContractAddress: function getIndexFlashMintZeroExContractAddress() {
    return _getIndexFlashMintZeroExContractAddress;
  },
  getIssuanceComponentSwapData: function getIssuanceComponentSwapData() {
    return _getIssuanceComponentSwapData;
  },
  getIssuanceERC4626SwapData: function getIssuanceERC4626SwapData() {
    return _getIssuanceERC4626SwapData;
  },
  getIssuanceModule: function getIssuanceModule() {
    return _getIssuanceModule;
  },
  getPaymentTokenAddress: function getPaymentTokenAddress() {
    return _getPaymentTokenAddress;
  },
  getRedemptionComponentSwapData: function getRedemptionComponentSwapData() {
    return _getRedemptionComponentSwapData;
  },
  getRedemptionERC4626SwapData: function getRedemptionERC4626SwapData() {
    return _getRedemptionERC4626SwapData;
  },
  getRequiredComponents: function getRequiredComponents() {
    return _getRequiredComponents;
  },
  getSwapData: function getSwapData() {
    return _getSwapData;
  },
  getSwapDataAndPaymentTokenAmount: function getSwapDataAndPaymentTokenAmount() {
    return _getSwapDataAndPaymentTokenAmount;
  },
  getSwapDataCollateralDebt: function getSwapDataCollateralDebt() {
    return _getSwapDataCollateralDebt;
  },
  getSwapDataDebtCollateral: function getSwapDataDebtCollateral() {
    return _getSwapDataDebtCollateral;
  },
  getWrapData: function getWrapData() {
    return _getWrapData;
  },
  inputSwapData: function inputSwapData() {
    return _inputSwapData;
  },
  outputSwapData: function outputSwapData() {
    return _outputSwapData;
  },
  sETH2: function sETH2() {
    return _sETH;
  },
  slippageAdjustedTokenAmount: function slippageAdjustedTokenAmount() {
    return _slippageAdjustedTokenAmount;
  },
  stETH: function stETH() {
    return _stETH;
  },
  swapDataFrom0xQuote: function swapDataFrom0xQuote() {
    return _swapDataFrom0xQuote;
  },
  wei: function wei() {
    return _wei;
  },
  wsETH2: function wsETH2() {
    return _wsETH;
  },
  wstETH: function wstETH() {
    return _wstETH;
  }
});

module.exports = __toCommonJS(src_exports); // src/constants/contracts.ts

var _FlashMint4626Address = "  ";
var _FlashMintLeveragedForCompoundAddress = "0xeA716Ed94964Ed0126Fb2fA3b546eD7F209cC2b8";
var _FlashMintWrappedAddress = "0x5C0D0a9a0c3A0a5B591496fF894686893b69FaA2";
var _FlashMintZeroExMainnetAddress = "0x9d648E5564B794B918d99C84B0fbf4b0bf36ce45";
var _IndexDebtIssuanceModuleV2Address = "0xa0a98EB7Af028BE00d04e46e1316808A62a8fd59";
var _BasicIssuanceModuleAddress = "0xd8EF3cACe8b4907117a45B0b125c68560532F94D";
var _BasicIssuanceModulePolygonAddress = "0x38E5462BBE6A72F79606c1A0007468aA4334A92b";
var _DebtIssuanceModuleAddress = "0x39F024d621367C044BacE2bf0Fb15Fb3612eCB92";
var _DebtIssuanceModuleV2Address = "0x69a592D2129415a4A1d1b1E309C17051B7F28d57";
var _DebtIssuanceModuleV2PolygonAddress = "0xf2dC2f456b98Af9A6bEEa072AF152a7b0EaA40C9";
var _ExchangeIssuanceLeveragedMainnetAddress = "0x981b21A2912A427f491f1e5b9Bf9cCa16FA794e1";
var _ExchangeIssuanceLeveragedPolygonAddress = "0xE86636f23B502B8746A72A1Ed87d65F096E419Db";
var _ExchangeIssuanceZeroExMainnetAddress = "0xf42eCDC112365fF79a745B4cf7D4C266bd6E4b25";
var _ExchangeIssuanceZeroExPolygonAddress = "0x0F5C21d4929f6F17119f43b0c51E665f12367A19"; // src/utils/swapData.ts

var import_bignumber = require("@ethersproject/bignumber"); // src/utils/UniswapPath.ts


var ADDR_SIZE = 40;
var FEE_SIZE = 6;

var hexToDecimal = function hexToDecimal(hex) {
  return parseInt(hex, 16);
};

function _extractPoolFees(path) {
  var fees = [];
  var rangeStart = ADDR_SIZE + 2;
  var rangeEnd = rangeStart + FEE_SIZE;

  while (path.length > rangeEnd) {
    var feeAsHex = path.slice(rangeStart, rangeEnd);
    var fee = hexToDecimal(feeAsHex);
    fees.push(fee);
    rangeStart = rangeEnd + ADDR_SIZE;
    rangeEnd = rangeStart + FEE_SIZE;
  }

  return fees;
} // src/utils/swapData.ts


var _Exchange =
/* @__PURE__ */
function (Exchange2) {
  Exchange2[Exchange2["None"] = 0] = "None";
  Exchange2[Exchange2["Quickswap"] = 1] = "Quickswap";
  Exchange2[Exchange2["Sushiswap"] = 2] = "Sushiswap";
  Exchange2[Exchange2["UniV3"] = 3] = "UniV3";
  Exchange2[Exchange2["Curve"] = 4] = "Curve";
  return Exchange2;
}(_Exchange || {});

var _getSwapDataCollateralDebt = function _getSwapDataCollateralDebt(leveragedTokenData, includedSources, slippage, chainId, zeroExApi) {
  var result, swapDataDebtCollateral, zeroExQuote, collateralSold;
  return regeneratorRuntime.async(function _getSwapDataCollateralDebt$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_getSwapData({
            buyToken: leveragedTokenData.debtToken,
            buyAmount: leveragedTokenData.debtAmount.toString(),
            sellToken: leveragedTokenData.collateralToken,
            includedSources: includedSources
          }, slippage, chainId, zeroExApi));

        case 2:
          result = _context.sent;

          if (result) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", null);

        case 5:
          swapDataDebtCollateral = result.swapData, zeroExQuote = result.zeroExQuote;
          collateralSold = import_bignumber.BigNumber.from(zeroExQuote.sellAmount);
          return _context.abrupt("return", {
            swapDataDebtCollateral: swapDataDebtCollateral,
            collateralObtainedOrSold: collateralSold
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _getSwapDataDebtCollateral = function _getSwapDataDebtCollateral(leveragedTokenData, includedSources, slippage, chainId, zeroExApi) {
  var result, swapDataDebtCollateral, zeroExQuote, collateralObtained;
  return regeneratorRuntime.async(function _getSwapDataDebtCollateral$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_getSwapData({
            buyToken: leveragedTokenData.collateralToken,
            sellAmount: leveragedTokenData.debtAmount.toString(),
            sellToken: leveragedTokenData.debtToken,
            includedSources: includedSources
          }, slippage, chainId, zeroExApi));

        case 2:
          result = _context2.sent;

          if (result) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", null);

        case 5:
          swapDataDebtCollateral = result.swapData, zeroExQuote = result.zeroExQuote;
          collateralObtained = import_bignumber.BigNumber.from(zeroExQuote.buyAmount);
          return _context2.abrupt("return", {
            swapDataDebtCollateral: swapDataDebtCollateral,
            collateralObtainedOrSold: collateralObtained
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var _getSwapData = function _getSwapData(params, slippage, chainId, zeroExApi) {
  var zeroExQuote, swapData;
  return regeneratorRuntime.async(function _getSwapData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(zeroExApi.getSwapQuote(_objectSpread({}, params, {
            slippagePercentage: slippage / 100
          }), chainId));

        case 2:
          zeroExQuote = _context3.sent;
          swapData = _swapDataFrom0xQuote(zeroExQuote);

          if (!swapData) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", {
            swapData: swapData,
            zeroExQuote: zeroExQuote
          });

        case 6:
          return _context3.abrupt("return", null);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

function _getEchangeFrom0xKey(key) {
  switch (key) {
    case "Curve":
      return 4
      /* Curve */
      ;

    case "QuickSwap":
      return 1
      /* Quickswap */
      ;

    case "SushiSwap":
      return 2
      /* Sushiswap */
      ;

    case "Uniswap_V3":
      return 3
      /* UniV3 */
      ;

    default:
      return null;
  }
}

function _swapDataFrom0xQuote(zeroExQuote) {
  if (zeroExQuote === void 0 || zeroExQuote === null || zeroExQuote.orders === void 0 || zeroExQuote.orders.length < 1) return null;
  var order = zeroExQuote.orders[0];
  var fillData = order.fillData;

  var exchange = _getEchangeFrom0xKey(order.source);

  if (!fillData || !exchange) return null;

  if (exchange === 4
  /* Curve */
  ) {
      return swapDataFromCurve(order);
    }

  var fees = [];

  if (exchange === 3
  /* UniV3 */
  ) {
      fees = fillData.path ? _extractPoolFees(fillData.path) : [500];
    }

  return {
    exchange: exchange,
    path: fillData.tokenAddressPath,
    fees: fees,
    pool: "0x0000000000000000000000000000000000000000"
  };
}

function swapDataFromCurve(order) {
  var fillData = order.fillData;
  if (!fillData) return null;
  return {
    exchange: 4
    /* Curve */
    ,
    path: fillData.pool.tokens,
    fees: [],
    pool: fillData.pool.poolAddress
  };
} // src/constants/tokens.ts


var _BanklessBEDIndex = {
  address: "0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6",
  symbol: "BED"
};
var _BTC2xFlexibleLeverageIndex = {
  address: "0x0B498ff89709d3838a063f1dFA463091F9801c2b",
  symbol: "BTC2x-FLI"
};
var _DefiPulseIndex = {
  address: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
  addressPolygon: "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369",
  symbol: "DPI"
};
var _DiversifiedStakedETHIndex = {
  address: "0x341c05c0E9b33C0E38d64de76516b2Ce970bB3BE",
  symbol: "dsETH"
};
var _ETH2xFlexibleLeverageIndex = {
  address: "0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
  symbol: "ETH2x-FLI"
};
var _GitcoinStakedETHIndex = {
  address: "0x36c833Eed0D376f75D1ff9dFDeE260191336065e",
  symbol: "gtcETH"
};
var _InterestCompoundingETHIndex = {
  symbol: "icETH",
  address: "0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84"
};
var _JPGIndex = {
  address: "0x02e7ac540409d32c90bfb51114003a9e1ff0249c",
  symbol: "JPG"
};
var _MetaverseIndex = {
  address: "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
  addressPolygon: "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1",
  symbol: "MVI"
};
var _MoneyMarketIndexToken = {
  address: "0xc30FBa978743a43E736fc32FBeEd364b8A2039cD",
  symbol: "icSMMT"
};
var _DAI = {
  symbol: "DAI",
  address: "0x6b175474e89094c44da98b954eedeac495271d0f"
};
var _ETH = {
  symbol: "ETH",
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
};
var _MATIC = {
  symbol: "MATIC",
  addressPolygon: "0x0000000000000000000000000000000000001010"
};
var _sETH = {
  symbol: "sETH2",
  address: "0xFe2e637202056d30016725477c5da089Ab0A043A"
};
var _stETH = {
  symbol: "stETH",
  address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
};
var _USDC = {
  symbol: "USDC",
  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
};
var _USDT = {
  symbol: "USDT",
  address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
};
var _WETH = {
  symbol: "WETH",
  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  addressOptimism: "0x4200000000000000000000000000000000000006",
  addressPolygon: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
};
var _B4BIndex = {
  symbol: "B4B",
  address: "0x7b76b274dea7abe248ff764fdc11cbb9ba3585fb",
  addressPolygon: "0x56a15aaa0f88338fceb5aec28aba249acc75f185"
};
var _wsETH = {
  symbol: "wsETH2",
  address: "0x5dA21D9e63F1EA13D34e48B7223bcc97e3ecD687"
};
var _wstETH = {
  symbol: "wstETH",
  address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0"
};
var _BTC2xFlexibleLeverageIndexPolygon = {
  symbol: "BTC2x-FLI-P"
};
var _ETH2xFlexibleLeverageIndexPolygon = {
  symbol: "ETH2X-FLI-P"
};
var _GMIIndex = {
  symbol: "GMI",
  address: "0x47110d43175f7f2C2425E7d15792acC5817EB44f",
  addressPolygon: "0x7fb27ee135db455de5ab1ccec66a24cbc82e712d"
};
var _InverseBTCFlexibleLeverageIndex = {
  symbol: "iBTC-FLI-P"
};
var _InverseETHFlexibleLeverageIndex = {
  symbol: "iETH-FLI-P"
};
var _InverseMATICFlexibleLeverageIndex = {
  symbol: "iMATIC-FLI-P"
};
var _MATIC2xFlexibleLeverageIndex = {
  symbol: "MATIC2x-FLI-P"
};
var _Web3DataEconomyIndex = {
  symbol: "DATA"
}; // src/constants/swapdata.ts

var _collateralDebtSwapData = _defineProperty({}, _InterestCompoundingETHIndex.symbol, {
  exchange: 4
  /* Curve */
  ,
  path: ["0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", _ETH.address],
  fees: [],
  pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
});

var _debtCollateralSwapData = _defineProperty({}, _InterestCompoundingETHIndex.symbol, {
  exchange: 4
  /* Curve */
  ,
  path: [_ETH.address, "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"],
  fees: [],
  pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
});

var _inputSwapData = _defineProperty({}, _InterestCompoundingETHIndex.symbol, (_InterestCompoundingE = {}, _defineProperty(_InterestCompoundingE, _ETH.symbol, {
  exchange: 4
  /* Curve */
  ,
  path: [_ETH.address, _stETH.address],
  fees: [],
  pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
}), _defineProperty(_InterestCompoundingE, _stETH.symbol, {
  exchange: 4
  /* Curve */
  ,
  path: [_stETH.address],
  fees: [],
  pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
}), _InterestCompoundingE));

var _outputSwapData = _defineProperty({}, _InterestCompoundingETHIndex.symbol, _defineProperty({}, _ETH.symbol, {
  exchange: 4
  /* Curve */
  ,
  path: ["0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", _ETH.address],
  fees: [],
  pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
})); // src/utils/contracts.ts


var import_contracts = require("@ethersproject/contracts"); // src/constants/abis/ExchangeIssuanceLeveraged.json


var ExchangeIssuanceLeveraged_default = [{
  inputs: [{
    internalType: "address",
    name: "_weth",
    type: "address"
  }, {
    internalType: "address",
    name: "_quickRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "_sushiRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "_uniV3Router",
    type: "address"
  }, {
    internalType: "address",
    name: "_uniV3Quoter",
    type: "address"
  }, {
    internalType: "contract IController",
    name: "_setController",
    type: "address"
  }, {
    internalType: "contract IDebtIssuanceModule",
    name: "_debtIssuanceModule",
    type: "address"
  }, {
    internalType: "contract IAaveLeverageModule",
    name: "_aaveLeverageModule",
    type: "address"
  }, {
    internalType: "address",
    name: "_aaveAddressProvider",
    type: "address"
  }, {
    internalType: "address",
    name: "_curveAddressProvider",
    type: "address"
  }, {
    internalType: "address",
    name: "_curveCalculator",
    type: "address"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "_inputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountInputToken",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetIssued",
    type: "uint256"
  }],
  name: "ExchangeIssue",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "_outputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetRedeemed",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountOutputToken",
    type: "uint256"
  }],
  name: "ExchangeRedeem",
  type: "event"
}, {
  inputs: [],
  name: "ADDRESSES_PROVIDER",
  outputs: [{
    internalType: "contract ILendingPoolAddressesProviderV2",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "LENDING_POOL",
  outputs: [{
    internalType: "contract ILendingPoolV2",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "ROUNDING_ERROR_MARGIN",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "aaveLeverageModule",
  outputs: [{
    internalType: "contract IAaveLeverageModule",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "addresses",
  outputs: [{
    internalType: "address",
    name: "quickRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "sushiRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "uniV3Router",
    type: "address"
  }, {
    internalType: "address",
    name: "uniV3Quoter",
    type: "address"
  }, {
    internalType: "address",
    name: "curveAddressProvider",
    type: "address"
  }, {
    internalType: "address",
    name: "curveCalculator",
    type: "address"
  }, {
    internalType: "address",
    name: "weth",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }],
  name: "approveSetToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20",
    name: "_token",
    type: "address"
  }],
  name: "approveToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20[]",
    name: "_tokens",
    type: "address[]"
  }],
  name: "approveTokens",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "debtIssuanceModule",
  outputs: [{
    internalType: "contract IDebtIssuanceModule",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address[]",
    name: "assets",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }, {
    internalType: "uint256[]",
    name: "premiums",
    type: "uint256[]"
  }, {
    internalType: "address",
    name: "initiator",
    type: "address"
  }, {
    internalType: "bytes",
    name: "params",
    type: "bytes"
  }],
  name: "executeOperation",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataDebtForCollateral",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataInputToken",
    type: "tuple"
  }],
  name: "getIssueExactSet",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    internalType: "bool",
    name: "_isIssuance",
    type: "bool"
  }],
  name: "getLeveragedTokenData",
  outputs: [{
    components: [{
      internalType: "address",
      name: "collateralAToken",
      type: "address"
    }, {
      internalType: "address",
      name: "collateralToken",
      type: "address"
    }, {
      internalType: "uint256",
      name: "collateralAmount",
      type: "uint256"
    }, {
      internalType: "address",
      name: "debtToken",
      type: "address"
    }, {
      internalType: "uint256",
      name: "debtAmount",
      type: "uint256"
    }],
    internalType: "struct ExchangeIssuanceLeveraged.LeveragedTokenData",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataCollateralForDebt",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataOutputToken",
    type: "tuple"
  }],
  name: "getRedeemExactSet",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    internalType: "address",
    name: "_inputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_maxAmountInputToken",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataDebtForCollateral",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataInputToken",
    type: "tuple"
  }],
  name: "issueExactSetFromERC20",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataDebtForCollateral",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataInputToken",
    type: "tuple"
  }],
  name: "issueExactSetFromETH",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    internalType: "address",
    name: "_outputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_minAmountOutputToken",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataCollateralForDebt",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataOutputToken",
    type: "tuple"
  }],
  name: "redeemExactSetForERC20",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minAmountOutputToken",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataCollateralForDebt",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataOutputToken",
    type: "tuple"
  }],
  name: "redeemExactSetForETH",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "setController",
  outputs: [{
    internalType: "contract IController",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  stateMutability: "payable",
  type: "receive"
}]; // src/constants/abis/ExchangeIssuanceZeroEx.json

var ExchangeIssuanceZeroEx_default = [{
  inputs: [{
    internalType: "address",
    name: "_weth",
    type: "address"
  }, {
    internalType: "contract IController",
    name: "_setController",
    type: "address"
  }, {
    internalType: "address",
    name: "_swapTarget",
    type: "address"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "_inputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountInputToken",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetIssued",
    type: "uint256"
  }],
  name: "ExchangeIssue",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "_outputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetRedeemed",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountOutputToken",
    type: "uint256"
  }],
  name: "ExchangeRedeem",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  inputs: [],
  name: "ETH_ADDRESS",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "WETH",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }],
  name: "approveSetToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20",
    name: "_token",
    type: "address"
  }, {
    internalType: "address",
    name: "_spender",
    type: "address"
  }],
  name: "approveToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20[]",
    name: "_tokens",
    type: "address[]"
  }, {
    internalType: "address",
    name: "_spender",
    type: "address"
  }],
  name: "approveTokens",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }, {
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }],
  name: "getRequiredIssuanceComponents",
  outputs: [{
    internalType: "address[]",
    name: "components",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "positions",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }, {
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }],
  name: "getRequiredRedemptionComponents",
  outputs: [{
    internalType: "address[]",
    name: "components",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "positions",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "bytes[]",
    name: "_componentQuotes",
    type: "bytes[]"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }],
  name: "issueExactSetFromETH",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "_inputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_maxAmountInputToken",
    type: "uint256"
  }, {
    internalType: "bytes[]",
    name: "_componentQuotes",
    type: "bytes[]"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }],
  name: "issueExactSetFromToken",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minEthReceive",
    type: "uint256"
  }, {
    internalType: "bytes[]",
    name: "_componentQuotes",
    type: "bytes[]"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }],
  name: "redeemExactSetForETH",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "_outputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minOutputReceive",
    type: "uint256"
  }, {
    internalType: "bytes[]",
    name: "_componentQuotes",
    type: "bytes[]"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }],
  name: "redeemExactSetForToken",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "setController",
  outputs: [{
    internalType: "contract IController",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "swapTarget",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20[]",
    name: "_tokens",
    type: "address[]"
  }, {
    internalType: "address payable",
    name: "_to",
    type: "address"
  }],
  name: "withdrawTokens",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  stateMutability: "payable",
  type: "receive"
}]; // src/constants/abis/FlashMint4626.json

var FlashMint4626_default = [{
  inputs: [{
    components: [{
      internalType: "address",
      name: "quickRouter",
      type: "address"
    }, {
      internalType: "address",
      name: "sushiRouter",
      type: "address"
    }, {
      internalType: "address",
      name: "uniV3Router",
      type: "address"
    }, {
      internalType: "address",
      name: "uniV3Quoter",
      type: "address"
    }, {
      internalType: "address",
      name: "curveAddressProvider",
      type: "address"
    }, {
      internalType: "address",
      name: "curveCalculator",
      type: "address"
    }, {
      internalType: "address",
      name: "weth",
      type: "address"
    }],
    internalType: "struct DEXAdapter.Addresses",
    name: "_dexAddresses",
    type: "tuple"
  }, {
    internalType: "contract IController",
    name: "_setController",
    type: "address"
  }, {
    internalType: "contract IDebtIssuanceModule",
    name: "_issuanceModule",
    type: "address"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "_inputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountInputToken",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetIssued",
    type: "uint256"
  }],
  name: "FlashMint",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "_outputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetRedeemed",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountOutputToken",
    type: "uint256"
  }],
  name: "FlashRedeem",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }],
  name: "approveSetToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "dexAdapter",
  outputs: [{
    internalType: "address",
    name: "quickRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "sushiRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "uniV3Router",
    type: "address"
  }, {
    internalType: "address",
    name: "uniV3Quoter",
    type: "address"
  }, {
    internalType: "address",
    name: "curveAddressProvider",
    type: "address"
  }, {
    internalType: "address",
    name: "curveCalculator",
    type: "address"
  }, {
    internalType: "address",
    name: "weth",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "address",
    name: "_inputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }],
    internalType: "struct FlashMint4626.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }],
  name: "getIssueExactSet",
  outputs: [{
    internalType: "uint256",
    name: "amountInputNeeded",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "address",
    name: "_outputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }],
    internalType: "struct FlashMint4626.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }],
  name: "getRedeemExactSet",
  outputs: [{
    internalType: "uint256",
    name: "amountOutputReceived",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "issuanceModule",
  outputs: [{
    internalType: "contract IDebtIssuanceModule",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "_inputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_maxAmountInputToken",
    type: "uint256"
  }, {
    components: [{
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }],
    internalType: "struct FlashMint4626.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }],
  name: "issueExactSetFromERC20",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    components: [{
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }],
    internalType: "struct FlashMint4626.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }],
  name: "issueExactSetFromETH",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "_outputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minOutputReceive",
    type: "uint256"
  }, {
    components: [{
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }],
    internalType: "struct FlashMint4626.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }],
  name: "redeemExactSetForERC20",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minOutputReceive",
    type: "uint256"
  }, {
    components: [{
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }],
    internalType: "struct FlashMint4626.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }],
  name: "redeemExactSetForETH",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "setController",
  outputs: [{
    internalType: "contract IController",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20[]",
    name: "_tokens",
    type: "address[]"
  }, {
    internalType: "address payable",
    name: "_to",
    type: "address"
  }],
  name: "withdrawTokens",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  stateMutability: "payable",
  type: "receive"
}]; // src/constants/abis/FlashMintLeveragedForCompound.json

var FlashMintLeveragedForCompound_default = [{
  inputs: [{
    components: [{
      internalType: "address",
      name: "quickRouter",
      type: "address"
    }, {
      internalType: "address",
      name: "sushiRouter",
      type: "address"
    }, {
      internalType: "address",
      name: "uniV3Router",
      type: "address"
    }, {
      internalType: "address",
      name: "uniV3Quoter",
      type: "address"
    }, {
      internalType: "address",
      name: "curveAddressProvider",
      type: "address"
    }, {
      internalType: "address",
      name: "curveCalculator",
      type: "address"
    }, {
      internalType: "address",
      name: "weth",
      type: "address"
    }],
    internalType: "struct DEXAdapter.Addresses",
    name: "_dexAddresses",
    type: "tuple"
  }, {
    internalType: "contract IController",
    name: "_setController",
    type: "address"
  }, {
    internalType: "contract IDebtIssuanceModule",
    name: "_debtIssuanceModule",
    type: "address"
  }, {
    internalType: "contract ICompoundLeverageModule",
    name: "_compoundLeverageModule",
    type: "address"
  }, {
    internalType: "address",
    name: "_aaveAddressProvider",
    type: "address"
  }, {
    internalType: "address",
    name: "_cEther",
    type: "address"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "_inputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountInputToken",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetIssued",
    type: "uint256"
  }],
  name: "FlashMint",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "_outputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetRedeemed",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountOutputToken",
    type: "uint256"
  }],
  name: "FlashRedeem",
  type: "event"
}, {
  inputs: [],
  name: "ADDRESSES_PROVIDER",
  outputs: [{
    internalType: "contract ILendingPoolAddressesProviderV2",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "LENDING_POOL",
  outputs: [{
    internalType: "contract ILendingPoolV2",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "ROUNDING_ERROR_MARGIN",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "addresses",
  outputs: [{
    internalType: "address",
    name: "quickRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "sushiRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "uniV3Router",
    type: "address"
  }, {
    internalType: "address",
    name: "uniV3Quoter",
    type: "address"
  }, {
    internalType: "address",
    name: "curveAddressProvider",
    type: "address"
  }, {
    internalType: "address",
    name: "curveCalculator",
    type: "address"
  }, {
    internalType: "address",
    name: "weth",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }],
  name: "approveSetToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20",
    name: "_token",
    type: "address"
  }],
  name: "approveToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20[]",
    name: "_tokens",
    type: "address[]"
  }],
  name: "approveTokens",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "cEtherAddress",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "compoundLeverageModule",
  outputs: [{
    internalType: "contract ICompoundLeverageModule",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "debtIssuanceModule",
  outputs: [{
    internalType: "contract IDebtIssuanceModule",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address[]",
    name: "assets",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }, {
    internalType: "uint256[]",
    name: "premiums",
    type: "uint256[]"
  }, {
    internalType: "address",
    name: "initiator",
    type: "address"
  }, {
    internalType: "bytes",
    name: "params",
    type: "bytes"
  }],
  name: "executeOperation",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataDebtForCollateral",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataInputToken",
    type: "tuple"
  }],
  name: "getIssueExactSet",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    internalType: "bool",
    name: "_isMint",
    type: "bool"
  }],
  name: "getLeveragedTokenData",
  outputs: [{
    components: [{
      internalType: "address",
      name: "collateralCToken",
      type: "address"
    }, {
      internalType: "uint256",
      name: "cTokenAmount",
      type: "uint256"
    }, {
      internalType: "address",
      name: "collateralToken",
      type: "address"
    }, {
      internalType: "uint256",
      name: "collateralAmount",
      type: "uint256"
    }, {
      internalType: "address",
      name: "debtToken",
      type: "address"
    }, {
      internalType: "uint256",
      name: "debtAmount",
      type: "uint256"
    }],
    internalType: "struct FlashMintLeveragedForCompound.LeveragedTokenData",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataCollateralForDebt",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataOutputToken",
    type: "tuple"
  }],
  name: "getRedeemExactSet",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    internalType: "address",
    name: "_inputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_maxAmountInputToken",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataDebtForCollateral",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataInputToken",
    type: "tuple"
  }],
  name: "issueExactSetFromERC20",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataDebtForCollateral",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataInputToken",
    type: "tuple"
  }],
  name: "issueExactSetFromETH",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    internalType: "address",
    name: "_outputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_minAmountOutputToken",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataCollateralForDebt",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataOutputToken",
    type: "tuple"
  }],
  name: "redeemExactSetForERC20",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minAmountOutputToken",
    type: "uint256"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataCollateralForDebt",
    type: "tuple"
  }, {
    components: [{
      internalType: "address[]",
      name: "path",
      type: "address[]"
    }, {
      internalType: "uint24[]",
      name: "fees",
      type: "uint24[]"
    }, {
      internalType: "address",
      name: "pool",
      type: "address"
    }, {
      internalType: "enum DEXAdapter.Exchange",
      name: "exchange",
      type: "uint8"
    }],
    internalType: "struct DEXAdapter.SwapData",
    name: "_swapDataOutputToken",
    type: "tuple"
  }],
  name: "redeemExactSetForETH",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "setController",
  outputs: [{
    internalType: "contract IController",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  stateMutability: "payable",
  type: "receive"
}]; // src/constants/abis/FlashMintWrapped.json

var FlashMintWrapped_default = [{
  inputs: [{
    components: [{
      internalType: "address",
      name: "quickRouter",
      type: "address"
    }, {
      internalType: "address",
      name: "sushiRouter",
      type: "address"
    }, {
      internalType: "address",
      name: "uniV3Router",
      type: "address"
    }, {
      internalType: "address",
      name: "uniV3Quoter",
      type: "address"
    }, {
      internalType: "address",
      name: "curveAddressProvider",
      type: "address"
    }, {
      internalType: "address",
      name: "curveCalculator",
      type: "address"
    }, {
      internalType: "address",
      name: "weth",
      type: "address"
    }],
    internalType: "struct DEXAdapter.Addresses",
    name: "_dexAddresses",
    type: "tuple"
  }, {
    internalType: "contract IController",
    name: "_setController",
    type: "address"
  }, {
    internalType: "contract IDebtIssuanceModule",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "address",
    name: "_wrapModule",
    type: "address"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "_inputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountInputToken",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetIssued",
    type: "uint256"
  }],
  name: "FlashMint",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "_outputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetRedeemed",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountOutputToken",
    type: "uint256"
  }],
  name: "FlashRedeem",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }],
  name: "approveSetToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "dexAdapter",
  outputs: [{
    internalType: "address",
    name: "quickRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "sushiRouter",
    type: "address"
  }, {
    internalType: "address",
    name: "uniV3Router",
    type: "address"
  }, {
    internalType: "address",
    name: "uniV3Quoter",
    type: "address"
  }, {
    internalType: "address",
    name: "curveAddressProvider",
    type: "address"
  }, {
    internalType: "address",
    name: "curveCalculator",
    type: "address"
  }, {
    internalType: "address",
    name: "weth",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "address",
    name: "_inputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      internalType: "address",
      name: "underlyingERC20",
      type: "address"
    }, {
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "buyUnderlyingAmount",
      type: "uint256"
    }],
    internalType: "struct FlashMintWrapped.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }],
  name: "getIssueExactSet",
  outputs: [{
    internalType: "uint256",
    name: "amountInputNeeded",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "address",
    name: "_outputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_setAmount",
    type: "uint256"
  }, {
    components: [{
      internalType: "address",
      name: "underlyingERC20",
      type: "address"
    }, {
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "buyUnderlyingAmount",
      type: "uint256"
    }],
    internalType: "struct FlashMintWrapped.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }],
  name: "getRedeemExactSet",
  outputs: [{
    internalType: "uint256",
    name: "amountOutputReceived",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "issuanceModule",
  outputs: [{
    internalType: "contract IDebtIssuanceModule",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "_inputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_maxAmountInputToken",
    type: "uint256"
  }, {
    components: [{
      internalType: "address",
      name: "underlyingERC20",
      type: "address"
    }, {
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "buyUnderlyingAmount",
      type: "uint256"
    }],
    internalType: "struct FlashMintWrapped.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }, {
    components: [{
      internalType: "string",
      name: "integrationName",
      type: "string"
    }, {
      internalType: "bytes",
      name: "wrapData",
      type: "bytes"
    }],
    internalType: "struct FlashMintWrapped.ComponentWrapData[]",
    name: "_wrapData",
    type: "tuple[]"
  }],
  name: "issueExactSetFromERC20",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    components: [{
      internalType: "address",
      name: "underlyingERC20",
      type: "address"
    }, {
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "buyUnderlyingAmount",
      type: "uint256"
    }],
    internalType: "struct FlashMintWrapped.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }, {
    components: [{
      internalType: "string",
      name: "integrationName",
      type: "string"
    }, {
      internalType: "bytes",
      name: "wrapData",
      type: "bytes"
    }],
    internalType: "struct FlashMintWrapped.ComponentWrapData[]",
    name: "_wrapData",
    type: "tuple[]"
  }],
  name: "issueExactSetFromETH",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "_outputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minOutputReceive",
    type: "uint256"
  }, {
    components: [{
      internalType: "address",
      name: "underlyingERC20",
      type: "address"
    }, {
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "buyUnderlyingAmount",
      type: "uint256"
    }],
    internalType: "struct FlashMintWrapped.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }, {
    components: [{
      internalType: "string",
      name: "integrationName",
      type: "string"
    }, {
      internalType: "bytes",
      name: "wrapData",
      type: "bytes"
    }],
    internalType: "struct FlashMintWrapped.ComponentWrapData[]",
    name: "_unwrapData",
    type: "tuple[]"
  }],
  name: "redeemExactSetForERC20",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minOutputReceive",
    type: "uint256"
  }, {
    components: [{
      internalType: "address",
      name: "underlyingERC20",
      type: "address"
    }, {
      components: [{
        internalType: "address[]",
        name: "path",
        type: "address[]"
      }, {
        internalType: "uint24[]",
        name: "fees",
        type: "uint24[]"
      }, {
        internalType: "address",
        name: "pool",
        type: "address"
      }, {
        internalType: "enum DEXAdapter.Exchange",
        name: "exchange",
        type: "uint8"
      }],
      internalType: "struct DEXAdapter.SwapData",
      name: "dexData",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "buyUnderlyingAmount",
      type: "uint256"
    }],
    internalType: "struct FlashMintWrapped.ComponentSwapData[]",
    name: "_swapData",
    type: "tuple[]"
  }, {
    components: [{
      internalType: "string",
      name: "integrationName",
      type: "string"
    }, {
      internalType: "bytes",
      name: "wrapData",
      type: "bytes"
    }],
    internalType: "struct FlashMintWrapped.ComponentWrapData[]",
    name: "_unwrapData",
    type: "tuple[]"
  }],
  name: "redeemExactSetForETH",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "setController",
  outputs: [{
    internalType: "contract IController",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20[]",
    name: "_tokens",
    type: "address[]"
  }, {
    internalType: "address payable",
    name: "_to",
    type: "address"
  }],
  name: "withdrawTokens",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "wrapModule",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  stateMutability: "payable",
  type: "receive"
}]; // src/constants/abis/FlashMintZeroEx.json

var FlashMintZeroEx_default = [{
  inputs: [{
    internalType: "address",
    name: "_weth",
    type: "address"
  }, {
    internalType: "contract IController",
    name: "_setController",
    type: "address"
  }, {
    internalType: "address",
    name: "_swapTarget",
    type: "address"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "_inputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountInputToken",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetIssued",
    type: "uint256"
  }],
  name: "ExchangeIssue",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "_recipient",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "_outputToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountSetRedeemed",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "_amountOutputToken",
    type: "uint256"
  }],
  name: "ExchangeRedeem",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  inputs: [],
  name: "ETH_ADDRESS",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "WETH",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }],
  name: "approveSetToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20",
    name: "_token",
    type: "address"
  }, {
    internalType: "address",
    name: "_spender",
    type: "address"
  }],
  name: "approveToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20[]",
    name: "_tokens",
    type: "address[]"
  }, {
    internalType: "address",
    name: "_spender",
    type: "address"
  }],
  name: "approveTokens",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }, {
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }],
  name: "getRequiredIssuanceComponents",
  outputs: [{
    internalType: "address[]",
    name: "components",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "positions",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }, {
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }],
  name: "getRequiredRedemptionComponents",
  outputs: [{
    internalType: "address[]",
    name: "components",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "positions",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "bytes[]",
    name: "_componentQuotes",
    type: "bytes[]"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }],
  name: "issueExactSetFromETH",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "_inputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_maxAmountInputToken",
    type: "uint256"
  }, {
    internalType: "bytes[]",
    name: "_componentQuotes",
    type: "bytes[]"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }],
  name: "issueExactSetFromToken",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minEthReceive",
    type: "uint256"
  }, {
    internalType: "bytes[]",
    name: "_componentQuotes",
    type: "bytes[]"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }],
  name: "redeemExactSetForETH",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract ISetToken",
    name: "_setToken",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "_outputToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_amountSetToken",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_minOutputReceive",
    type: "uint256"
  }, {
    internalType: "bytes[]",
    name: "_componentQuotes",
    type: "bytes[]"
  }, {
    internalType: "address",
    name: "_issuanceModule",
    type: "address"
  }, {
    internalType: "bool",
    name: "_isDebtIssuance",
    type: "bool"
  }],
  name: "redeemExactSetForToken",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "setController",
  outputs: [{
    internalType: "contract IController",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "swapTarget",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20[]",
    name: "_tokens",
    type: "address[]"
  }, {
    internalType: "address payable",
    name: "_to",
    type: "address"
  }],
  name: "withdrawTokens",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  stateMutability: "payable",
  type: "receive"
}]; // src/utils/contracts.ts

function _getExchangeIssuanceLeveragedContractAddress()
/* Mainnet */
{
  var chainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  if (chainId === 137
  /* Polygon */
  ) return _ExchangeIssuanceLeveragedPolygonAddress;
  return _ExchangeIssuanceLeveragedMainnetAddress;
}

var _getFlashMintLeveragedContract = function _getFlashMintLeveragedContract(signerOrProvider)
/* Polygon */
{
  var chainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 137;

  var contractAddress = _getExchangeIssuanceLeveragedContractAddress(chainId);

  return new import_contracts.Contract(contractAddress, ExchangeIssuanceLeveraged_default, signerOrProvider);
};

var _getFlashMintLeveragedForCompoundContract = function _getFlashMintLeveragedForCompoundContract(signerOrProvider) {
  return new import_contracts.Contract(_FlashMintLeveragedForCompoundAddress, FlashMintLeveragedForCompound_default, signerOrProvider);
};

var _getFlashMintWrappedContract = function _getFlashMintWrappedContract(signerOrProvider) {
  return new import_contracts.Contract(_FlashMintWrappedAddress, FlashMintWrapped_default, signerOrProvider);
};

var _getFlashMint4626Contract = function _getFlashMint4626Contract(signerOrProvider) {
  return new import_contracts.Contract(_FlashMint4626Address, FlashMint4626_default, signerOrProvider);
};

var _getFlashMintLeveragedContractForToken = function _getFlashMintLeveragedContractForToken(token, signerOrProvider)
/* Polygon */
{
  var chainId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 137;

  switch (token) {
    case _BTC2xFlexibleLeverageIndex.symbol:
    case _ETH2xFlexibleLeverageIndex.symbol:
      return _getFlashMintLeveragedForCompoundContract(signerOrProvider);

    default:
      return _getFlashMintLeveragedContract(signerOrProvider, chainId);
  }
};

function _getExchangeIssuanceZeroExContractAddress()
/* Mainnet */
{
  var chainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  if (chainId === 137
  /* Polygon */
  ) return _ExchangeIssuanceZeroExPolygonAddress;
  return _ExchangeIssuanceZeroExMainnetAddress;
}

var _getFlashMintZeroExContract = function _getFlashMintZeroExContract(providerSigner)
/* Mainnet */
{
  var chainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var contractAddress = _getExchangeIssuanceZeroExContractAddress(chainId);

  return new import_contracts.Contract(contractAddress, ExchangeIssuanceZeroEx_default, providerSigner);
};

var _getFlashMintZeroExContractForToken = function _getFlashMintZeroExContractForToken(token, providerSigner)
/* Mainnet */
{
  var chainId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  switch (token) {
    case _DiversifiedStakedETHIndex.symbol:
    case _GitcoinStakedETHIndex.symbol:
    case _wsETH.symbol:
      return _getIndexFlashMintZeroExContract(providerSigner, chainId);

    default:
      return _getFlashMintZeroExContract(providerSigner, chainId);
  }
};

function _getIndexFlashMintZeroExContractAddress(chainId) {
  switch (chainId) {
    default:
      return _FlashMintZeroExMainnetAddress;
  }
}

var _getIndexFlashMintZeroExContract = function _getIndexFlashMintZeroExContract(providerSigner)
/* Mainnet */
{
  var chainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var contractAddress = _getIndexFlashMintZeroExContractAddress(chainId);

  return new import_contracts.Contract(contractAddress, FlashMintZeroEx_default, providerSigner);
}; // src/flashMint/builders/utils.ts


function isEmptyString(data) {
  return typeof data === "string" && data.trim().length == 0;
}

function isInvalidAmount(amount) {
  return amount.isZero() || amount.isNegative();
} // src/flashMint/builders/leveraged.ts


var _LeveragedTransactionBuilder =
/*#__PURE__*/
function () {
  function _LeveragedTransactionBuilder(provider) {
    _classCallCheck(this, _LeveragedTransactionBuilder);

    this.provider = provider;
  }

  _createClass(_LeveragedTransactionBuilder, [{
    key: "build",
    value: function build(request) {
      var isValidRequest, indexToken, indexTokenSymbol, indexTokenAmount, inputOutputToken, inputOutputTokenSymbol, inputOutputTokenAmount, isMinting, swapDataDebtCollateral, swapDataPaymentToken, network, chainId, inputOutputTokenIsEth, contract;
      return regeneratorRuntime.async(function build$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              isValidRequest = this.isValidRequest(request);

              if (isValidRequest) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return", null);

            case 3:
              indexToken = request.indexToken, indexTokenSymbol = request.indexTokenSymbol, indexTokenAmount = request.indexTokenAmount, inputOutputToken = request.inputOutputToken, inputOutputTokenSymbol = request.inputOutputTokenSymbol, inputOutputTokenAmount = request.inputOutputTokenAmount, isMinting = request.isMinting, swapDataDebtCollateral = request.swapDataDebtCollateral, swapDataPaymentToken = request.swapDataPaymentToken;
              _context4.next = 6;
              return regeneratorRuntime.awrap(this.provider.getNetwork());

            case 6:
              network = _context4.sent;
              chainId = network.chainId;
              inputOutputTokenIsEth = inputOutputTokenSymbol === "ETH";
              contract = _getFlashMintLeveragedContractForToken(indexTokenSymbol, this.provider, chainId);

              if (!isMinting) {
                _context4.next = 22;
                break;
              }

              if (!inputOutputTokenIsEth) {
                _context4.next = 17;
                break;
              }

              _context4.next = 14;
              return regeneratorRuntime.awrap(contract.populateTransaction.issueExactSetFromETH(indexToken, indexTokenAmount, swapDataDebtCollateral, swapDataPaymentToken, {
                value: inputOutputTokenAmount
              }));

            case 14:
              return _context4.abrupt("return", _context4.sent);

            case 17:
              _context4.next = 19;
              return regeneratorRuntime.awrap(contract.populateTransaction.issueExactSetFromERC20(indexToken, indexTokenAmount, inputOutputToken, inputOutputTokenAmount, // _maxAmountInputToken
              swapDataDebtCollateral, swapDataPaymentToken));

            case 19:
              return _context4.abrupt("return", _context4.sent);

            case 20:
              _context4.next = 31;
              break;

            case 22:
              if (!inputOutputTokenIsEth) {
                _context4.next = 28;
                break;
              }

              _context4.next = 25;
              return regeneratorRuntime.awrap(contract.populateTransaction.redeemExactSetForETH(indexToken, indexTokenAmount, inputOutputTokenAmount, // _minAmountOutputToken
              swapDataDebtCollateral, swapDataPaymentToken));

            case 25:
              return _context4.abrupt("return", _context4.sent);

            case 28:
              _context4.next = 30;
              return regeneratorRuntime.awrap(contract.populateTransaction.redeemExactSetForERC20(indexToken, indexTokenAmount, inputOutputToken, inputOutputTokenAmount, // _minAmountOutputToken
              swapDataDebtCollateral, swapDataPaymentToken));

            case 30:
              return _context4.abrupt("return", _context4.sent);

            case 31:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "isValidSwapData",
    value: function isValidSwapData(swapData) {
      if (swapData.exchange === 3
      /* UniV3 */
      && swapData.fees.length !== swapData.path.length - 1) return false;
      if (swapData.path.length === 0) return false;
      if (swapData.pool.length !== 42) return false;
      return true;
    }
  }, {
    key: "isValidRequest",
    value: function isValidRequest(request) {
      var indexToken = request.indexToken,
          indexTokenAmount = request.indexTokenAmount,
          inputOutputToken = request.inputOutputToken,
          inputOutputTokenAmount = request.inputOutputTokenAmount,
          swapDataDebtCollateral = request.swapDataDebtCollateral,
          swapDataPaymentToken = request.swapDataPaymentToken;
      if (isEmptyString(indexToken)) return false;
      if (isEmptyString(inputOutputToken)) return false;
      if (isInvalidAmount(indexTokenAmount)) return false;
      if (isInvalidAmount(inputOutputTokenAmount)) return false;
      if (!this.isValidSwapData(swapDataDebtCollateral)) return false;
      if (!this.isValidSwapData(swapDataPaymentToken)) return false;
      return true;
    }
  }]);

  return _LeveragedTransactionBuilder;
}(); // src/flashMint/builders/wrapped.ts


var _WrappedTransactionBuilder =
/*#__PURE__*/
function () {
  function _WrappedTransactionBuilder(provider) {
    _classCallCheck(this, _WrappedTransactionBuilder);

    this.provider = provider;
  }

  _createClass(_WrappedTransactionBuilder, [{
    key: "build",
    value: function build(request) {
      var isValidRequest, componentSwapData, componentWrapData, indexToken, indexTokenAmount, inputOutputToken, inputOutputTokenSymbol, inputOutputTokenAmount, isMinting, inputOutputTokenIsEth, contract, tx;
      return regeneratorRuntime.async(function build$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              isValidRequest = this.isValidRequest(request);

              if (isValidRequest) {
                _context5.next = 3;
                break;
              }

              return _context5.abrupt("return", null);

            case 3:
              componentSwapData = request.componentSwapData, componentWrapData = request.componentWrapData, indexToken = request.indexToken, indexTokenAmount = request.indexTokenAmount, inputOutputToken = request.inputOutputToken, inputOutputTokenSymbol = request.inputOutputTokenSymbol, inputOutputTokenAmount = request.inputOutputTokenAmount, isMinting = request.isMinting;
              inputOutputTokenIsEth = inputOutputTokenSymbol === "ETH";
              contract = _getFlashMintWrappedContract(this.provider);
              tx = null;

              if (!isMinting) {
                _context5.next = 19;
                break;
              }

              if (!inputOutputTokenIsEth) {
                _context5.next = 14;
                break;
              }

              _context5.next = 11;
              return regeneratorRuntime.awrap(contract.populateTransaction.issueExactSetFromETH(indexToken, indexTokenAmount, componentSwapData, componentWrapData, {
                value: inputOutputTokenAmount
              }));

            case 11:
              tx = _context5.sent;
              _context5.next = 17;
              break;

            case 14:
              _context5.next = 16;
              return regeneratorRuntime.awrap(contract.populateTransaction.issueExactSetFromERC20(indexToken, inputOutputToken, indexTokenAmount, inputOutputTokenAmount, // _maxAmountInputToken
              componentSwapData, componentWrapData));

            case 16:
              tx = _context5.sent;

            case 17:
              _context5.next = 28;
              break;

            case 19:
              if (!inputOutputTokenIsEth) {
                _context5.next = 25;
                break;
              }

              _context5.next = 22;
              return regeneratorRuntime.awrap(contract.populateTransaction.redeemExactSetForETH(indexToken, indexTokenAmount, inputOutputTokenAmount, // _minOutputReceive
              componentSwapData, componentWrapData));

            case 22:
              tx = _context5.sent;
              _context5.next = 28;
              break;

            case 25:
              _context5.next = 27;
              return regeneratorRuntime.awrap(contract.populateTransaction.redeemExactSetForERC20(indexToken, inputOutputToken, indexTokenAmount, inputOutputTokenAmount, // _minOutputReceive
              componentSwapData, componentWrapData));

            case 27:
              tx = _context5.sent;

            case 28:
              return _context5.abrupt("return", tx);

            case 29:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "isValidRequest",
    value: function isValidRequest(request) {
      var componentSwapData = request.componentSwapData,
          componentWrapData = request.componentWrapData,
          indexToken = request.indexToken,
          indexTokenAmount = request.indexTokenAmount,
          inputOutputToken = request.inputOutputToken,
          inputOutputTokenAmount = request.inputOutputTokenAmount;
      if (isEmptyString(indexToken)) return false;
      if (isEmptyString(inputOutputToken)) return false;
      if (isInvalidAmount(indexTokenAmount)) return false;
      if (isInvalidAmount(inputOutputTokenAmount)) return false;
      if (componentSwapData.length === 0) return false;
      if (componentWrapData.length === 0) return false;
      if (componentSwapData.length !== componentWrapData.length) return false;
      return true;
    }
  }]);

  return _WrappedTransactionBuilder;
}();

var _ERC4626TransactionBuilder =
/*#__PURE__*/
function () {
  function _ERC4626TransactionBuilder(provider) {
    _classCallCheck(this, _ERC4626TransactionBuilder);

    this.provider = provider;
  }

  _createClass(_ERC4626TransactionBuilder, [{
    key: "build",
    value: function build(request) {
      var isValidRequest, componentSwapData, indexToken, indexTokenAmount, inputOutputToken, inputOutputTokenSymbol, inputOutputTokenAmount, isMinting, inputOutputTokenIsEth, contract, tx;
      return regeneratorRuntime.async(function build$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              isValidRequest = this.isValidRequest(request);

              if (isValidRequest) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt("return", null);

            case 3:
              componentSwapData = request.componentSwapData, indexToken = request.indexToken, indexTokenAmount = request.indexTokenAmount, inputOutputToken = request.inputOutputToken, inputOutputTokenSymbol = request.inputOutputTokenSymbol, inputOutputTokenAmount = request.inputOutputTokenAmount, isMinting = request.isMinting;
              inputOutputTokenIsEth = inputOutputTokenSymbol === "ETH";
              contract = _getFlashMint4626Contract(this.provider);
              tx = null;

              if (!isMinting) {
                _context6.next = 19;
                break;
              }

              if (!inputOutputTokenIsEth) {
                _context6.next = 14;
                break;
              }

              _context6.next = 11;
              return regeneratorRuntime.awrap(contract.populateTransaction.issueExactSetFromETH(indexToken, indexTokenAmount, componentSwapData, {
                value: inputOutputTokenAmount
              }));

            case 11:
              tx = _context6.sent;
              _context6.next = 17;
              break;

            case 14:
              _context6.next = 16;
              return regeneratorRuntime.awrap(contract.populateTransaction.issueExactSetFromERC20(indexToken, inputOutputToken, indexTokenAmount, inputOutputTokenAmount, // _maxAmountInputToken
              componentSwapData));

            case 16:
              tx = _context6.sent;

            case 17:
              _context6.next = 28;
              break;

            case 19:
              if (!inputOutputTokenIsEth) {
                _context6.next = 25;
                break;
              }

              _context6.next = 22;
              return regeneratorRuntime.awrap(contract.populateTransaction.redeemExactSetForETH(indexToken, indexTokenAmount, inputOutputTokenAmount, // _minOutputReceive
              componentSwapData));

            case 22:
              tx = _context6.sent;
              _context6.next = 28;
              break;

            case 25:
              _context6.next = 27;
              return regeneratorRuntime.awrap(contract.populateTransaction.redeemExactSetForERC20(indexToken, inputOutputToken, indexTokenAmount, inputOutputTokenAmount, // _minOutputReceive
              componentSwapData));

            case 27:
              tx = _context6.sent;

            case 28:
              return _context6.abrupt("return", tx);

            case 29:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "isValidRequest",
    value: function isValidRequest(request) {
      var componentSwapData = request.componentSwapData,
          indexToken = request.indexToken,
          indexTokenAmount = request.indexTokenAmount,
          inputOutputToken = request.inputOutputToken,
          inputOutputTokenAmount = request.inputOutputTokenAmount;
      if (isEmptyString(indexToken)) return false;
      if (isEmptyString(inputOutputToken)) return false;
      if (isInvalidAmount(indexTokenAmount)) return false;
      if (isInvalidAmount(inputOutputTokenAmount)) return false;
      if (componentSwapData.length === 0) return false;
      return true;
    }
  }]);

  return _ERC4626TransactionBuilder;
}(); // src/utils/issuanceModules.ts


function getIndexEthIssuanceModule(tokenSymbol) {
  switch (tokenSymbol) {
    default:
      return {
        address: _IndexDebtIssuanceModuleV2Address,
        isDebtIssuance: true
      };
  }
}

function getEthIssuanceModuleAddress(tokenSymbol) {
  switch (tokenSymbol) {
    case _DiversifiedStakedETHIndex.symbol:
    case _GitcoinStakedETHIndex.symbol:
    case _MoneyMarketIndexToken.symbol:
    case _wsETH.symbol:
    case _B4BIndex.symbol:
      return getIndexEthIssuanceModule(tokenSymbol);

    case _BTC2xFlexibleLeverageIndex.symbol:
    case _ETH2xFlexibleLeverageIndex.symbol:
    case _GMIIndex.symbol:
      return {
        address: _DebtIssuanceModuleAddress,
        isDebtIssuance: true
      };

    case _InterestCompoundingETHIndex.symbol:
    case _JPGIndex.symbol:
      return {
        address: _DebtIssuanceModuleV2Address,
        isDebtIssuance: true
      };

    default:
      return {
        address: _BasicIssuanceModuleAddress,
        isDebtIssuance: false
      };
  }
}

function getPolygonIssuanceModuleAddress(tokenSymbol) {
  switch (tokenSymbol) {
    case _ETH2xFlexibleLeverageIndexPolygon.symbol:
    case _GMIIndex.symbol:
    case _InverseETHFlexibleLeverageIndex.symbol:
    case _InverseMATICFlexibleLeverageIndex.symbol:
    case _MATIC2xFlexibleLeverageIndex.symbol:
      return {
        address: _DebtIssuanceModuleV2PolygonAddress,
        isDebtIssuance: true
      };

    default:
      return {
        address: _BasicIssuanceModulePolygonAddress,
        isDebtIssuance: false
      };
  }
}

function _getIssuanceModule(tokenSymbol)
/* Mainnet */
{
  var chainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return chainId === 137
  /* Polygon */
  ? getPolygonIssuanceModuleAddress(tokenSymbol) : getEthIssuanceModuleAddress(tokenSymbol);
} // src/flashMint/builders/zeroex.ts


var _ZeroExTransactionBuilder =
/*#__PURE__*/
function () {
  function _ZeroExTransactionBuilder(provider) {
    _classCallCheck(this, _ZeroExTransactionBuilder);

    this.provider = provider;
  }

  _createClass(_ZeroExTransactionBuilder, [{
    key: "build",
    value: function build(request) {
      var isValidRequest, componentQuotes, indexToken, indexTokenSymbol, indexTokenAmount, inputOutputToken, inputOutputTokenSymbol, inputOutputTokenAmount, isMinting, network, chainId, inputOutputTokenIsEth, issuanceModule, contract;
      return regeneratorRuntime.async(function build$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              isValidRequest = this.isValidRequest(request);

              if (isValidRequest) {
                _context7.next = 3;
                break;
              }

              return _context7.abrupt("return", null);

            case 3:
              componentQuotes = request.componentQuotes, indexToken = request.indexToken, indexTokenSymbol = request.indexTokenSymbol, indexTokenAmount = request.indexTokenAmount, inputOutputToken = request.inputOutputToken, inputOutputTokenSymbol = request.inputOutputTokenSymbol, inputOutputTokenAmount = request.inputOutputTokenAmount, isMinting = request.isMinting;
              _context7.next = 6;
              return regeneratorRuntime.awrap(this.provider.getNetwork());

            case 6:
              network = _context7.sent;
              chainId = network.chainId;
              inputOutputTokenIsEth = inputOutputTokenSymbol === "ETH";
              issuanceModule = _getIssuanceModule(indexTokenSymbol, chainId);
              contract = _getFlashMintZeroExContractForToken(indexTokenSymbol, this.provider, chainId);

              if (!isMinting) {
                _context7.next = 23;
                break;
              }

              if (!inputOutputTokenIsEth) {
                _context7.next = 18;
                break;
              }

              _context7.next = 15;
              return regeneratorRuntime.awrap(contract.populateTransaction.issueExactSetFromETH(indexToken, indexTokenAmount, componentQuotes, issuanceModule.address, issuanceModule.isDebtIssuance, {
                value: inputOutputTokenAmount
              }));

            case 15:
              return _context7.abrupt("return", _context7.sent);

            case 18:
              _context7.next = 20;
              return regeneratorRuntime.awrap(contract.populateTransaction.issueExactSetFromToken(indexToken, inputOutputToken, indexTokenAmount, inputOutputTokenAmount, // _maxAmountInputToken
              componentQuotes, issuanceModule.address, issuanceModule.isDebtIssuance));

            case 20:
              return _context7.abrupt("return", _context7.sent);

            case 21:
              _context7.next = 32;
              break;

            case 23:
              if (!inputOutputTokenIsEth) {
                _context7.next = 29;
                break;
              }

              _context7.next = 26;
              return regeneratorRuntime.awrap(contract.populateTransaction.redeemExactSetForETH(indexToken, indexTokenAmount, inputOutputTokenAmount, // _minEthReceive
              componentQuotes, issuanceModule.address, issuanceModule.isDebtIssuance));

            case 26:
              return _context7.abrupt("return", _context7.sent);

            case 29:
              _context7.next = 31;
              return regeneratorRuntime.awrap(contract.populateTransaction.redeemExactSetForToken(indexToken, inputOutputToken, indexTokenAmount, inputOutputTokenAmount, // _minOutputReceive
              componentQuotes, issuanceModule.address, issuanceModule.isDebtIssuance));

            case 31:
              return _context7.abrupt("return", _context7.sent);

            case 32:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "isValidRequest",
    value: function isValidRequest(request) {
      var componentQuotes = request.componentQuotes,
          indexToken = request.indexToken,
          indexTokenAmount = request.indexTokenAmount,
          inputOutputToken = request.inputOutputToken,
          inputOutputTokenAmount = request.inputOutputTokenAmount;
      if (isEmptyString(indexToken)) return false;
      if (isEmptyString(inputOutputToken)) return false;
      if (isInvalidAmount(indexTokenAmount)) return false;
      if (isInvalidAmount(inputOutputTokenAmount)) return false;
      if (componentQuotes.length === 0) return false;
      return true;
    }
  }]);

  return _ZeroExTransactionBuilder;
}(); // src/flashMint/leveraged.ts


var _FlashMintLeveraged =
/*#__PURE__*/
function () {
  /**
   * @param contract    An instance of an FlashMintLeveraged contract
   */
  function _FlashMintLeveraged(contract) {
    var _this = this;

    _classCallCheck(this, _FlashMintLeveraged);

    /**
     * Returns the collateral / debt token addresses and amounts for a leveraged index.
     *
     * @param _setToken     Address of the Set token to be minted / redeemed
     * @param _setAmount    Amount of tokens to mint / redeem
     * @param _isIssuance   Boolean indicating if the Set token is to be issued/minted or redeemed
     *
     * @return Struct containing the collateral / debt token addresses and amounts.
     */
    this.getLeveragedTokenData = function _callee(_setToken, _setAmount, _isIssuance) {
      return regeneratorRuntime.async(function _callee$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return regeneratorRuntime.awrap(_this.contract.getLeveragedTokenData(_setToken, _setAmount, _isIssuance));

            case 3:
              return _context8.abrupt("return", _context8.sent);

            case 6:
              _context8.prev = 6;
              _context8.t0 = _context8["catch"](0);
              console.error("Error getting leveraged token data", _context8.t0);
              return _context8.abrupt("return", null);

            case 10:
            case "end":
              return _context8.stop();
          }
        }
      }, null, null, [[0, 6]]);
    };
    /**
     * Trigger minting of Set token paying with any arbitrary ERC20 token.
     *
     * @param _setToken                     Set token to mint
     * @param _setAmount                    Amount to mint
     * @param _inputToken                   Input token to pay with
     * @param _maxAmountInputToken          Maximum amount of input token to spend
     * @param _swapDataDebtForCollateral    SwapData (token addresses and fee levels) to describe the swap path from debt to collateral token
     * @param _swapDataInputToken           SwapData (token addresses and fee levels) to describe the swap path from input to collateral token
     * @param overrides                     Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */


    this.mintExactSetFromERC20 = function _callee2(_setToken, _setAmount, _inputToken, _maxAmountInputToken, _swapDataDebtForCollateral, _swapDataInputToken, overrides) {
      var issueSetTx;
      return regeneratorRuntime.async(function _callee2$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return regeneratorRuntime.awrap(_this.contract.issueExactSetFromERC20(_setToken, _setAmount, _inputToken, _maxAmountInputToken, _swapDataDebtForCollateral, _swapDataInputToken, overrides));

            case 3:
              issueSetTx = _context9.sent;
              return _context9.abrupt("return", issueSetTx);

            case 7:
              _context9.prev = 7;
              _context9.t0 = _context9["catch"](0);
              console.error("Error issuing exact set from ERC20", _context9.t0);
              return _context9.abrupt("return", null);

            case 11:
            case "end":
              return _context9.stop();
          }
        }
      }, null, null, [[0, 7]]);
    };
    /**
     * Trigger minting of set token paying with ETH.
     *
     * @param _setToken                     Set token to mint
     * @param _setAmount                    Amount to mint
     * @param _swapDataDebtForCollateral    SwapData (token addresses and fee levels) to describe the swap path from debt to collateral token
     * @param _swapDataInputToken           SwapData (token addresses and fee levels) to describe the swap path from eth to collateral token
     * @param maxInput                      Maximum amount of eth to spend
     * @param overrides                     Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */


    this.mintExactSetFromETH = function _callee3(_setToken, _setAmount, _swapDataDebtForCollateral, _swapDataInputToken, maxInput, overrides) {
      var txOverrides, issueSetTx;
      return regeneratorRuntime.async(function _callee3$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              txOverrides = overrides;
              txOverrides.value = maxInput;
              _context10.next = 5;
              return regeneratorRuntime.awrap(_this.contract.issueExactSetFromETH(_setToken, _setAmount, _swapDataDebtForCollateral, _swapDataInputToken, txOverrides));

            case 5:
              issueSetTx = _context10.sent;
              return _context10.abrupt("return", issueSetTx);

            case 9:
              _context10.prev = 9;
              _context10.t0 = _context10["catch"](0);
              console.error("Error issuing exact set from ETH", _context10.t0);
              return _context10.abrupt("return", null);

            case 13:
            case "end":
              return _context10.stop();
          }
        }
      }, null, null, [[0, 9]]);
    };
    /**
     * Trigger redemption of set token to pay the user with an arbitrary ERC20.
     *
     * @param _setToken                   Set token to redeem
     * @param _setAmount                  Amount to redeem
     * @param _outputToken                Address of the ERC20 token to send to the user
     * @param _minAmountOutputToken       Minimum amount of output token to send to the user
     * @param _swapDataCollateralForDebt  SwapData (token path and fee levels) describing the swap from collateral token to debt token
     * @param _swapDataOutputToken        SwapData (token path and fee levels) describing the swap from collateral token to output token
     * @param overrides                   Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */


    this.redeemExactSetForERC20 = function _callee4(_setToken, _setAmount, _outputToken, _minAmountOutputToken, _swapDataCollateralForDebt, _swapDataOutputToken, overrides) {
      var redeemSetTx;
      return regeneratorRuntime.async(function _callee4$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _context11.next = 3;
              return regeneratorRuntime.awrap(_this.contract.redeemExactSetForERC20(_setToken, _setAmount, _outputToken, _minAmountOutputToken, _swapDataCollateralForDebt, _swapDataOutputToken, overrides));

            case 3:
              redeemSetTx = _context11.sent;
              return _context11.abrupt("return", redeemSetTx);

            case 7:
              _context11.prev = 7;
              _context11.t0 = _context11["catch"](0);
              console.error("Error redeeming exact set for ERC20", _context11.t0);
              return _context11.abrupt("return", null);

            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, null, null, [[0, 7]]);
    };

    this.contract = contract;
  }
  /**
   * Trigger redemption of set token to pay the user with Eth.
   *
   * @param _setToken                   Set token to redeem
   * @param _setAmount                  Amount to redeem
   * @param _minAmountOutputToken       Minimum amount of ETH to send to the user
   * @param _swapDataCollateralForDebt  SwapData (token path and fee levels) describing the swap from collateral token to debt token
   * @param _swapDataOutputToken        SwapData (token path and fee levels) describing the swap from collateral token to output token
   * @param overrides                   Overrides for the transaction
   *
   * @return A TransactionResponse on success, null on error.
   */


  _createClass(_FlashMintLeveraged, [{
    key: "redeemExactSetForETH",
    value: function redeemExactSetForETH(_setToken, _setAmount, _minAmountOutputToken, _swapDataCollateralForDebt, _swapDataOutputToken, overrides) {
      var redeemSetTx;
      return regeneratorRuntime.async(function redeemExactSetForETH$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              _context12.next = 3;
              return regeneratorRuntime.awrap(this.contract.redeemExactSetForETH(_setToken, _setAmount, _minAmountOutputToken, _swapDataCollateralForDebt, _swapDataOutputToken, overrides));

            case 3:
              redeemSetTx = _context12.sent;
              return _context12.abrupt("return", redeemSetTx);

            case 7:
              _context12.prev = 7;
              _context12.t0 = _context12["catch"](0);
              console.error("Error redeeming exact set for ETH", _context12.t0);
              return _context12.abrupt("return", null);

            case 11:
            case "end":
              return _context12.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }]);

  return _FlashMintLeveraged;
}(); // src/flashMint/zeroEx.ts


var _FlashMintZeroEx =
/**
 * @param contract    An instance of an FlashMintZeroEx contract
 */
function _FlashMintZeroEx(contract) {
  var _this2 = this;

  _classCallCheck(this, _FlashMintZeroEx);

  /**
   * Returns transaction to get component & position quotes for token minting.
   *
   * @param _issuanceModule     Address of issuance module to use
   * @param _isDebtIssuance     Flag indicating wether given issuance module is a debt issuance module
   * @param _setToken           Address of the Set token to be minted
   * @param _amountSetToken     Amount of Set tokens to mint
   *
   * @return A RequiredComponentsResponse including component and position quotes (empty on error)
   */
  this.getRequiredIssuanceComponents = function _callee5(_issuanceModule, _isDebtIssuance, _setToken, _amountSetToken) {
    var issueCompTx;
    return regeneratorRuntime.async(function _callee5$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return regeneratorRuntime.awrap(_this2.contract.getRequiredIssuanceComponents(_issuanceModule, _isDebtIssuance, _setToken, _amountSetToken));

          case 3:
            issueCompTx = _context13.sent;
            return _context13.abrupt("return", issueCompTx);

          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13["catch"](0);
            console.error("Error getting required issuance components", _context13.t0);
            return _context13.abrupt("return", {
              components: [],
              positions: []
            });

          case 11:
          case "end":
            return _context13.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
  /**
   * Returns transaction to get component & position quotes for token redemption.
   *
   * @param _issuanceModule     Address of issuance Module to use
   * @param _isDebtIssuance     Flag indicating wether given issuance module is a debt issuance module
   * @param _setToken           Address of the Set token to be redeemed
   * @param _amountSetToken     Amount of Set tokens to redeem
   *
   * @return A RequiredComponentsResponse including component and position quotes (empty on error)
   */


  this.getRequiredRedemptionComponents = function _callee6(_issuanceModule, _isDebtIssuance, _setToken, _amountSetToken) {
    var redeemCompTx;
    return regeneratorRuntime.async(function _callee6$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return regeneratorRuntime.awrap(_this2.contract.getRequiredRedemptionComponents(_issuanceModule, _isDebtIssuance, _setToken, _amountSetToken));

          case 3:
            redeemCompTx = _context14.sent;
            return _context14.abrupt("return", redeemCompTx);

          case 7:
            _context14.prev = 7;
            _context14.t0 = _context14["catch"](0);
            console.error("Error getting required redemption components", _context14.t0);
            return _context14.abrupt("return", {
              components: [],
              positions: []
            });

          case 11:
          case "end":
            return _context14.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
  /**
   * Mints an exact amount of Set tokens for given amount of ETH.
   * The excess amount of tokens is returned in an equivalent amount of ether.
   *
   * @param _setToken           Address of the Set token to be minted
   * @param _amountSetToken     Amount of Set tokens to mint
   * @param _componentQuotes    The encoded 0x transactions to execute
   * @param _issuanceModule     Address of issuance Module to use
   * @param _isDebtIssuance     Flag indicating wether given issuance module is a debt issuance module
   * @param maxInput            Max eth to use as input (will be set as value for the tx)
   * @param overrides           Overrides for the transaction
   *
   * @return A TransactionResponse on success, null on error.
   */


  this.mintExactSetFromETH = function _callee7(_setToken, _amountSetToken, _componentQuotes, _issuanceModule, _isDebtIssuance, maxInput, overrides) {
    var txOverrides, issueSetTx;
    return regeneratorRuntime.async(function _callee7$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            txOverrides = overrides;
            txOverrides.value = maxInput;
            _context15.next = 5;
            return regeneratorRuntime.awrap(_this2.contract.issueExactSetFromETH(_setToken, _amountSetToken, _componentQuotes, _issuanceModule, _isDebtIssuance, txOverrides));

          case 5:
            issueSetTx = _context15.sent;
            return _context15.abrupt("return", issueSetTx);

          case 9:
            _context15.prev = 9;
            _context15.t0 = _context15["catch"](0);
            console.error("Error issuing exact set from eth", _context15.t0);
            return _context15.abrupt("return", null);

          case 13:
          case "end":
            return _context15.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
  /**
   * Mints an exact amount of Set tokens for given amount of input ERC20 tokens.
   * The excess amount of tokens is returned in an equivalent amount of ether.
   *
   * @param _setToken               Address of the Set token to be FlashMintLeveragedQuote
   * @param _inputToken             Address of the input token
   * @param _amountSetToken         Amount of Set tokens to mint
   * @param _maxAmountInputToken    Maximum amount of input tokens to be used to mint Set tokens
   * @param _componentQuotes        The encoded 0x transactions to execute
   * @param _issuanceModule         Address of issuance Module to use
   * @param _isDebtIssuance         Flag indicating wether given issuance module is a debt issuance module
   * @param overrides           Overrides for the transaction
   *
   * @return A TransactionResponse on success, null on error.
   */


  this.mintExactSetFromToken = function _callee8(_setToken, _inputToken, _amountSetToken, _maxAmountInputToken, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides) {
    var issueSetTx;
    return regeneratorRuntime.async(function _callee8$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return regeneratorRuntime.awrap(_this2.contract.issueExactSetFromToken(_setToken, _inputToken, _amountSetToken, _maxAmountInputToken, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides));

          case 3:
            issueSetTx = _context16.sent;
            return _context16.abrupt("return", issueSetTx);

          case 7:
            _context16.prev = 7;
            _context16.t0 = _context16["catch"](0);
            console.error("Error issuing exact set from token", _context16.t0);
            return _context16.abrupt("return", null);

          case 11:
          case "end":
            return _context16.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
  /**
   * Redeems an exact amount of Set tokens for ETH.
   * The Set token must be approved by the sender to this contract.
   *
   * @param _setToken              Address of the Set token be redeemed
   * @param _amountSetToken        Amount of Set token to redeem
   * @param _minEthReceive         Minimum amount of Eth to receive
   * @param _componentQuotes       The encoded 0x transactions to execute
   * @param _issuanceModule        Address of issuance module to use
   * @param _isDebtIssuance        Flag indicating wether given issuance module is a debt issuance module
   * @param overrides           Overrides for the transaction
   *
   * @return A TransactionResponse on success, null on error.
   */


  this.redeemExactSetForETH = function _callee9(_setToken, _amountSetToken, _minEthReceive, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides) {
    var redeemSetTx;
    return regeneratorRuntime.async(function _callee9$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return regeneratorRuntime.awrap(_this2.contract.redeemExactSetForETH(_setToken, _amountSetToken, _minEthReceive, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides));

          case 3:
            redeemSetTx = _context17.sent;
            return _context17.abrupt("return", redeemSetTx);

          case 7:
            _context17.prev = 7;
            _context17.t0 = _context17["catch"](0);
            console.error("Error redeeming exact set for eth", _context17.t0);
            return _context17.abrupt("return", null);

          case 11:
          case "end":
            return _context17.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
  /**
   * Redeems an exact amount of Set tokens for ERC20 tokens.
   * The excess amount of tokens is returned in an equivalent amount of ether.
   *
   * @param _setToken             Address of the Set token to be redeemed
   * @param _outputToken          Address of the output token
   * @param _amountSetToken       Amount of output token to redeem
   * @param _minOutputReceive     Minimum amount of output token to receive
   * @param _componentQuotes      The encoded 0x transactions to execute
   * @param _issuanceModule       Address of issuance module to use
   * @param _isDebtIssuance       Flag indicating wether given issuance module is a debt issuance module
   * @param overrides           Overrides for the transaction
   *
   * @return A TransactionResponse on success, null on error.
   */


  this.redeemExactSetForToken = function _callee10(_setToken, _outputToken, _amountSetToken, _minOutputReceive, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides) {
    var redeemSetTx;
    return regeneratorRuntime.async(function _callee10$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return regeneratorRuntime.awrap(_this2.contract.redeemExactSetForToken(_setToken, _outputToken, _amountSetToken, _minOutputReceive, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides));

          case 3:
            redeemSetTx = _context18.sent;
            return _context18.abrupt("return", redeemSetTx);

          case 7:
            _context18.prev = 7;
            _context18.t0 = _context18["catch"](0);
            console.error("Error redeeming exact set for token", _context18.t0);
            return _context18.abrupt("return", null);

          case 11:
          case "end":
            return _context18.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };

  this.contract = contract;
}; // src/quote/wrapped/index.ts


var import_bignumber3 = require("@ethersproject/bignumber"); // src/utils/componentSwapData.ts


var import_bignumber2 = require("@ethersproject/bignumber");

var import_contracts7 = require("@ethersproject/contracts");

var IssuanceAbi = ["function getRequiredComponentIssuanceUnits(address _setToken, uint256 _quantity) external view returns (address[] memory, uint256[] memory, uint256[] memory)", "function getRequiredComponentRedemptionUnits(address _setToken, uint256 _quantity) external view returns (address[] memory, uint256[] memory, uint256[] memory)"];
var erc4626Abi = ["constructor(address _morpho, address _morphoToken, address _lens, address _recipient)", "error ZeroAddress()", "event Accrued(address indexed user, uint256 index, uint256 unclaimed)", "event Approval(address indexed owner, address indexed spender, uint256 value)", "event Claimed(address indexed user, uint256 claimed)", "event Deposit(address indexed caller, address indexed owner, uint256 assets, uint256 shares)", "event Initialized(uint8 version)", "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)", "event RewardsTransferred(address recipient, uint256 amount)", "event Transfer(address indexed from, address indexed to, uint256 value)", "event Withdraw(address indexed caller, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)", "function allowance(address owner, address spender) view returns (uint256)", "function approve(address spender, uint256 amount) returns (bool)", "function asset() view returns (address)", "function balanceOf(address account) view returns (uint256)", "function claimRewards(address _user) returns (uint256 rewardsAmount)", "function comp() view returns (address)", "function convertToAssets(uint256 shares) view returns (uint256 assets)", "function convertToShares(uint256 assets) view returns (uint256 shares)", "function decimals() view returns (uint8)", "function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)", "function deposit(uint256 assets, address receiver) returns (uint256)", "function increaseAllowance(address spender, uint256 addedValue) returns (bool)", "function initialize(address _poolToken, string _name, string _symbol, uint256 _initialDeposit)", "function lens() view returns (address)", "function maxDeposit(address) view returns (uint256)", "function maxMint(address) view returns (uint256)", "function maxRedeem(address owner) view returns (uint256)", "function maxWithdraw(address owner) view returns (uint256)", "function mint(uint256 shares, address receiver) returns (uint256)", "function morpho() view returns (address)", "function morphoToken() view returns (address)", "function name() view returns (string)", "function owner() view returns (address)", "function poolToken() view returns (address)", "function previewDeposit(uint256 assets) view returns (uint256)", "function previewMint(uint256 shares) view returns (uint256)", "function previewRedeem(uint256 shares) view returns (uint256)", "function previewWithdraw(uint256 assets) view returns (uint256)", "function recipient() view returns (address)", "function redeem(uint256 shares, address receiver, address owner) returns (uint256)", "function renounceOwnership()", "function rewardsIndex() view returns (uint256)", "function symbol() view returns (string)", "function totalAssets() view returns (uint256)", "function totalSupply() view returns (uint256)", "function transfer(address to, uint256 amount) returns (bool)", "function transferFrom(address from, address to, uint256 amount) returns (bool)", "function transferOwnership(address newOwner)", "function transferRewards()", "function userRewards(address) view returns (uint128 index, uint128 unclaimed)", "function wEth() view returns (address)", "function withdraw(uint256 assets, address receiver, address owner) returns (uint256)"];
var dai = _DAI.address;
var usdc = _USDC.address;
var usdt = _USDT.address;
var weth = _WETH.address;
var DEFAULT_SLIPPAGE = 15e-4;

var isFCASH = function isFCASH(address) {
  return ["0x278039398A5eb29b6c2FB43789a38A84C6085266", "0xe09B1968851478f20a43959d8a212051367dF01A"].includes(address);
};

var getAmountOfAssetToObtainShares = function getAmountOfAssetToObtainShares(component, shares, provider) {
  var slippage,
      componentContract,
      defaultSlippageBN,
      slippageBigNumber,
      multiplier,
      buyUnderlyingAmount,
      _args19 = arguments;
  return regeneratorRuntime.async(function getAmountOfAssetToObtainShares$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          slippage = _args19.length > 3 && _args19[3] !== undefined ? _args19[3] : DEFAULT_SLIPPAGE;
          componentContract = new import_contracts7.Contract(component, erc4626Abi, provider);
          defaultSlippageBN = import_bignumber2.BigNumber.from(Math.round(slippage * 1e4));
          slippageBigNumber = isFCASH(component) ? defaultSlippageBN.mul(3) : defaultSlippageBN;
          multiplier = import_bignumber2.BigNumber.from(1e4).add(slippageBigNumber);
          _context19.next = 7;
          return regeneratorRuntime.awrap(componentContract.convertToAssets(shares));

        case 7:
          buyUnderlyingAmount = _context19.sent;
          return _context19.abrupt("return", buyUnderlyingAmount.mul(multiplier).div(1e4));

        case 9:
        case "end":
          return _context19.stop();
      }
    }
  });
};

function _getIssuanceComponentSwapData(indexTokenSymbol, indexToken, inputToken, indexTokenAmount, provider) {
  var issuanceModule, issuance, _ref, _ref2, issuanceComponents, issuanceUnits, underlyingERC20sPromises, buyAmountsPromises, buyAmounts, wrappedTokens, swapData;

  return regeneratorRuntime.async(function _getIssuanceComponentSwapData$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          issuanceModule = _getIssuanceModule(indexTokenSymbol);
          issuance = new import_contracts7.Contract(issuanceModule.address, IssuanceAbi, provider);
          _context20.next = 4;
          return regeneratorRuntime.awrap(issuance.getRequiredComponentIssuanceUnits(indexToken, indexTokenAmount));

        case 4:
          _ref = _context20.sent;
          _ref2 = _slicedToArray(_ref, 2);
          issuanceComponents = _ref2[0];
          issuanceUnits = _ref2[1];
          underlyingERC20sPromises = issuanceComponents.map(function (component) {
            return getUnderlyingErc20(component, provider);
          });
          buyAmountsPromises = issuanceComponents.map(function (component, index) {
            return getAmountOfAssetToObtainShares(component, issuanceUnits[index], provider);
          });
          _context20.next = 12;
          return regeneratorRuntime.awrap(Promise.all(buyAmountsPromises));

        case 12:
          buyAmounts = _context20.sent;
          _context20.next = 15;
          return regeneratorRuntime.awrap(Promise.all(underlyingERC20sPromises));

        case 15:
          wrappedTokens = _context20.sent;
          swapData = issuanceComponents.map(function (_, index) {
            var wrappedToken = wrappedTokens[index];
            var underlyingERC20 = wrappedToken.underlyingErc20;
            var buyUnderlyingAmount = buyAmounts[index];
            return {
              underlyingERC20: underlyingERC20.address,
              buyUnderlyingAmount: buyUnderlyingAmount,
              dexData: getStaticIssuanceSwapData(inputToken, underlyingERC20.address)
            };
          });
          return _context20.abrupt("return", swapData);

        case 18:
        case "end":
          return _context20.stop();
      }
    }
  });
}

function _getIssuanceERC4626SwapData(indexTokenSymbol, indexToken, inputToken, indexTokenAmount, provider) {
  var issuanceModule, issuance, _ref3, _ref4, issuanceComponents, underlyingERC20sPromises, wrappedTokens, swapData;

  return regeneratorRuntime.async(function _getIssuanceERC4626SwapData$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          issuanceModule = _getIssuanceModule(indexTokenSymbol);
          issuance = new import_contracts7.Contract(issuanceModule.address, IssuanceAbi, provider);
          _context21.next = 4;
          return regeneratorRuntime.awrap(issuance.getRequiredComponentIssuanceUnits(indexToken, indexTokenAmount));

        case 4:
          _ref3 = _context21.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          issuanceComponents = _ref4[0];
          underlyingERC20sPromises = issuanceComponents.map(function (component) {
            return getUnderlyingErc20(component, provider);
          });
          _context21.next = 10;
          return regeneratorRuntime.awrap(Promise.all(underlyingERC20sPromises));

        case 10:
          wrappedTokens = _context21.sent;
          swapData = issuanceComponents.map(function (_, index) {
            var wrappedToken = wrappedTokens[index];
            var underlyingERC20 = wrappedToken.underlyingErc20;
            return {
              dexData: getStaticIssuanceSwapData(inputToken, underlyingERC20.address)
            };
          });
          return _context21.abrupt("return", swapData);

        case 13:
        case "end":
          return _context21.stop();
      }
    }
  });
}

function _getRedemptionERC4626SwapData(indexTokenSymbol, indexToken, outputToken, indexTokenAmount, provider) {
  var issuanceModule, issuance, _ref5, _ref6, issuanceComponents, underlyingERC20sPromises, wrappedTokens, swapData;

  return regeneratorRuntime.async(function _getRedemptionERC4626SwapData$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          issuanceModule = _getIssuanceModule(indexTokenSymbol);
          issuance = new import_contracts7.Contract(issuanceModule.address, IssuanceAbi, provider);
          _context22.next = 4;
          return regeneratorRuntime.awrap(issuance.getRequiredComponentRedemptionUnits(indexToken, indexTokenAmount));

        case 4:
          _ref5 = _context22.sent;
          _ref6 = _slicedToArray(_ref5, 1);
          issuanceComponents = _ref6[0];
          underlyingERC20sPromises = issuanceComponents.map(function (component) {
            return getUnderlyingErc20(component, provider);
          });
          _context22.next = 10;
          return regeneratorRuntime.awrap(Promise.all(underlyingERC20sPromises));

        case 10:
          wrappedTokens = _context22.sent;
          swapData = issuanceComponents.map(function (_, index) {
            var wrappedToken = wrappedTokens[index];
            var underlyingERC20 = wrappedToken.underlyingErc20;
            return {
              dexData: getStaticRedemptionSwapData(underlyingERC20.address, outputToken)
            };
          });
          return _context22.abrupt("return", swapData);

        case 13:
        case "end":
          return _context22.stop();
      }
    }
  });
}

function _getRedemptionComponentSwapData(indexTokenSymbol, indexToken, outputToken, indexTokenAmount, provider) {
  var issuanceModule, issuance, _ref7, _ref8, issuanceComponents, issuanceUnits, underlyingERC20sPromises, wrappedTokens, buyAmountsPromises, buyAmounts, swapData;

  return regeneratorRuntime.async(function _getRedemptionComponentSwapData$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          issuanceModule = _getIssuanceModule(indexTokenSymbol);
          issuance = new import_contracts7.Contract(issuanceModule.address, IssuanceAbi, provider);
          _context23.next = 4;
          return regeneratorRuntime.awrap(issuance.getRequiredComponentRedemptionUnits(indexToken, indexTokenAmount));

        case 4:
          _ref7 = _context23.sent;
          _ref8 = _slicedToArray(_ref7, 2);
          issuanceComponents = _ref8[0];
          issuanceUnits = _ref8[1];
          underlyingERC20sPromises = issuanceComponents.map(function (component) {
            return getUnderlyingErc20(component, provider);
          });
          _context23.next = 11;
          return regeneratorRuntime.awrap(Promise.all(underlyingERC20sPromises));

        case 11:
          wrappedTokens = _context23.sent;
          buyAmountsPromises = issuanceComponents.map(function (component, index) {
            return getAmountOfAssetToObtainShares(component, issuanceUnits[index], provider, -DEFAULT_SLIPPAGE);
          });
          _context23.next = 15;
          return regeneratorRuntime.awrap(Promise.all(buyAmountsPromises));

        case 15:
          buyAmounts = _context23.sent;
          swapData = issuanceComponents.map(function (_, index) {
            var wrappedToken = wrappedTokens[index];
            var underlyingERC20 = wrappedToken.underlyingErc20;
            var buyUnderlyingAmount = buyAmounts[index];
            return {
              underlyingERC20: underlyingERC20.address,
              buyUnderlyingAmount: buyUnderlyingAmount,
              dexData: getStaticRedemptionSwapData(underlyingERC20.address, outputToken)
            };
          });
          return _context23.abrupt("return", swapData);

        case 18:
        case "end":
          return _context23.stop();
      }
    }
  });
}

function getStaticIssuanceSwapData(inputToken, outputToken) {
  var inputTokenIsWeth = inputToken === weth;
  return {
    exchange: 3
    /* UniV3 */
    ,
    path: inputTokenIsWeth ? [inputToken, outputToken] : [inputToken, weth, outputToken],
    fees: inputTokenIsWeth ? [3e3] : [3e3, 3e3],
    pool: "0x0000000000000000000000000000000000000000"
  };
}

function getStaticRedemptionSwapData(inputToken, outputToken) {
  var outputTokenIsWeth = outputToken === weth;
  return {
    exchange: 3
    /* UniV3 */
    ,
    path: outputTokenIsWeth ? [inputToken, outputToken] : [inputToken, weth, outputToken],
    fees: outputTokenIsWeth ? [3e3] : [3e3, 3e3],
    pool: "0x0000000000000000000000000000000000000000"
  };
}

function getUnderlyingErc20(token, provider) {
  var IERC4262_ABI, contract, underlyingERC20, decimals;
  return regeneratorRuntime.async(function getUnderlyingErc20$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          IERC4262_ABI = ["function asset() public view returns (address)", "function decimals() public view returns (uint256)"];
          contract = new import_contracts7.Contract(token, IERC4262_ABI, provider);
          _context24.next = 4;
          return regeneratorRuntime.awrap(contract.asset());

        case 4:
          underlyingERC20 = _context24.sent;
          _context24.next = 7;
          return regeneratorRuntime.awrap(contract.decimals());

        case 7:
          decimals = _context24.sent;
          _context24.t0 = underlyingERC20.toLowerCase();
          _context24.next = _context24.t0 === dai.toLowerCase() ? 11 : _context24.t0 === usdc.toLowerCase() ? 12 : _context24.t0 === usdt.toLowerCase() ? 13 : 14;
          break;

        case 11:
          return _context24.abrupt("return", {
            address: token,
            decimals: decimals,
            underlyingErc20: {
              address: dai,
              decimals: 18,
              symbol: _DAI.symbol
            }
          });

        case 12:
          return _context24.abrupt("return", {
            address: token,
            decimals: decimals,
            underlyingErc20: {
              address: usdc,
              decimals: 6,
              symbol: _USDC.symbol
            }
          });

        case 13:
          return _context24.abrupt("return", {
            address: token,
            decimals: decimals,
            underlyingErc20: {
              address: usdt,
              decimals: 6,
              symbol: _USDT.symbol
            }
          });

        case 14:
          return _context24.abrupt("return", null);

        case 15:
        case "end":
          return _context24.stop();
      }
    }
  });
} // src/utils/numbers.ts


var import_units = require("@ethersproject/units");

var _wei = function _wei(input) {
  var power = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  var value = typeof input === "number" ? input.toString() : input;
  return (0, import_units.parseUnits)(value, power);
}; // src/utils/slippage.ts


function _slippageAdjustedTokenAmount(tokenAmount, tokenDecimals, slippage, isMinting) {
  if (isMinting) {
    return tokenAmount.mul(_wei(100, tokenDecimals)).div(_wei(100 - slippage, tokenDecimals));
  }

  return tokenAmount.mul(_wei(100, tokenDecimals)).div(_wei(100 + slippage, tokenDecimals));
} // src/utils/wrapData.ts


var erc4626WrapV2AdapterName = "ERC4626WrapV2Adapter";
var ZERO_BYTES = "0x0000000000000000000000000000000000000000";

function _getWrapData(tokenSymbol) {
  if (tokenSymbol !== _MoneyMarketIndexToken.symbol) return [];
  return [{
    integrationName: erc4626WrapV2AdapterName,
    wrapData: ZERO_BYTES
  }, {
    integrationName: erc4626WrapV2AdapterName,
    wrapData: ZERO_BYTES
  }, {
    integrationName: erc4626WrapV2AdapterName,
    wrapData: ZERO_BYTES
  }, {
    integrationName: erc4626WrapV2AdapterName,
    wrapData: ZERO_BYTES
  }, {
    integrationName: erc4626WrapV2AdapterName,
    wrapData: ZERO_BYTES
  }, {
    integrationName: erc4626WrapV2AdapterName,
    wrapData: ZERO_BYTES
  }];
} // src/quote/wrapped/index.ts


var _WrappedQuoteProvider =
/*#__PURE__*/
function () {
  function _WrappedQuoteProvider(provider) {
    _classCallCheck(this, _WrappedQuoteProvider);

    this.provider = provider;
  }

  _createClass(_WrappedQuoteProvider, [{
    key: "getQuote",
    value: function getQuote(request) {
      var provider, inputToken, indexTokenAmount, isMinting, outputToken, slippage, indexToken, indexTokenSymbol, componentSwapData, componentWrapData, estimatedInputOutputAmount, contract, inputOutputTokenAmount, quote;
      return regeneratorRuntime.async(function getQuote$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              provider = this.provider;
              inputToken = request.inputToken, indexTokenAmount = request.indexTokenAmount, isMinting = request.isMinting, outputToken = request.outputToken, slippage = request.slippage;
              indexToken = isMinting ? outputToken : inputToken;
              indexTokenSymbol = indexToken.symbol;

              if (!isMinting) {
                _context25.next = 10;
                break;
              }

              _context25.next = 7;
              return regeneratorRuntime.awrap(_getIssuanceComponentSwapData(indexTokenSymbol, indexToken.address, inputToken.address, indexTokenAmount, provider));

            case 7:
              _context25.t0 = _context25.sent;
              _context25.next = 13;
              break;

            case 10:
              _context25.next = 12;
              return regeneratorRuntime.awrap(_getRedemptionComponentSwapData(indexTokenSymbol, indexToken.address, outputToken.address, indexTokenAmount, provider));

            case 12:
              _context25.t0 = _context25.sent;

            case 13:
              componentSwapData = _context25.t0;
              componentWrapData = _getWrapData(indexToken.symbol);

              if (!(componentSwapData.length !== componentSwapData.length)) {
                _context25.next = 17;
                break;
              }

              return _context25.abrupt("return", null);

            case 17:
              estimatedInputOutputAmount = import_bignumber3.BigNumber.from(0);
              contract = _getFlashMintWrappedContract(provider);

              if (!isMinting) {
                _context25.next = 25;
                break;
              }

              _context25.next = 22;
              return regeneratorRuntime.awrap(contract.callStatic.getIssueExactSet(indexToken.address, inputToken.address, indexTokenAmount, componentSwapData));

            case 22:
              estimatedInputOutputAmount = _context25.sent;
              _context25.next = 28;
              break;

            case 25:
              _context25.next = 27;
              return regeneratorRuntime.awrap(contract.callStatic.getRedeemExactSet(indexToken.address, outputToken.address, indexTokenAmount, componentSwapData));

            case 27:
              estimatedInputOutputAmount = _context25.sent;

            case 28:
              inputOutputTokenAmount = _slippageAdjustedTokenAmount(estimatedInputOutputAmount, isMinting ? inputToken.decimals : outputToken.decimals, slippage, isMinting);
              console.log(estimatedInputOutputAmount.toString(), "estimate");
              console.log(inputOutputTokenAmount.toString(), "slippage adjusted");
              quote = {
                componentSwapData: componentSwapData,
                componentWrapData: componentWrapData,
                indexTokenAmount: indexTokenAmount,
                inputOutputTokenAmount: inputOutputTokenAmount
              };
              return _context25.abrupt("return", quote);

            case 33:
            case "end":
              return _context25.stop();
          }
        }
      }, null, this);
    }
  }]);

  return _WrappedQuoteProvider;
}();

var _ERC4626QuoteProvider =
/*#__PURE__*/
function () {
  function _ERC4626QuoteProvider(provider) {
    _classCallCheck(this, _ERC4626QuoteProvider);

    this.provider = provider;
  }

  _createClass(_ERC4626QuoteProvider, [{
    key: "getQuote",
    value: function getQuote(request) {
      var provider, inputToken, indexTokenAmount, isMinting, outputToken, slippage, indexToken, indexTokenSymbol, componentSwapData, estimatedInputOutputAmount, contract, inputOutputTokenAmount, quote;
      return regeneratorRuntime.async(function getQuote$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              provider = this.provider;
              inputToken = request.inputToken, indexTokenAmount = request.indexTokenAmount, isMinting = request.isMinting, outputToken = request.outputToken, slippage = request.slippage;
              indexToken = isMinting ? outputToken : inputToken;
              indexTokenSymbol = indexToken.symbol;

              if (!isMinting) {
                _context26.next = 10;
                break;
              }

              _context26.next = 7;
              return regeneratorRuntime.awrap(_getIssuanceERC4626SwapData(indexTokenSymbol, indexToken.address, inputToken.address, indexTokenAmount, provider));

            case 7:
              _context26.t0 = _context26.sent;
              _context26.next = 13;
              break;

            case 10:
              _context26.next = 12;
              return regeneratorRuntime.awrap(_getRedemptionERC4626SwapData(indexTokenSymbol, indexToken.address, outputToken.address, indexTokenAmount, provider));

            case 12:
              _context26.t0 = _context26.sent;

            case 13:
              componentSwapData = _context26.t0;
              estimatedInputOutputAmount = import_bignumber3.BigNumber.from(0);
              contract = _getFlashMint4626Contract(provider);

              if (!isMinting) {
                _context26.next = 22;
                break;
              }

              _context26.next = 19;
              return regeneratorRuntime.awrap(contract.callStatic.getIssueExactSet(indexToken.address, inputToken.address, indexTokenAmount, componentSwapData));

            case 19:
              estimatedInputOutputAmount = _context26.sent;
              _context26.next = 25;
              break;

            case 22:
              _context26.next = 24;
              return regeneratorRuntime.awrap(contract.callStatic.getRedeemExactSet(indexToken.address, outputToken.address, indexTokenAmount, componentSwapData));

            case 24:
              estimatedInputOutputAmount = _context26.sent;

            case 25:
              inputOutputTokenAmount = _slippageAdjustedTokenAmount(estimatedInputOutputAmount, isMinting ? inputToken.decimals : outputToken.decimals, slippage, isMinting);
              console.log(estimatedInputOutputAmount.toString(), "estimate");
              console.log(inputOutputTokenAmount.toString(), "slippage adjusted");
              quote = {
                componentSwapData: componentSwapData,
                indexTokenAmount: indexTokenAmount,
                inputOutputTokenAmount: inputOutputTokenAmount
              };
              return _context26.abrupt("return", quote);

            case 30:
            case "end":
              return _context26.stop();
          }
        }
      }, null, this);
    }
  }]);

  return _ERC4626QuoteProvider;
}(); // src/quote/index.ts


var _FlashMintContractType =
/* @__PURE__ */
function (FlashMintContractType2) {
  FlashMintContractType2[FlashMintContractType2["leveraged"] = 0] = "leveraged";
  FlashMintContractType2[FlashMintContractType2["wrapped"] = 1] = "wrapped";
  FlashMintContractType2[FlashMintContractType2["erc4626"] = 2] = "erc4626";
  FlashMintContractType2[FlashMintContractType2["zeroEx"] = 3] = "zeroEx";
  return FlashMintContractType2;
}(_FlashMintContractType || {});

var _FlashMintQuoteProvider =
/*#__PURE__*/
function () {
  function _FlashMintQuoteProvider(provider) {
    _classCallCheck(this, _FlashMintQuoteProvider);

    this.provider = provider;
  }

  _createClass(_FlashMintQuoteProvider, [{
    key: "getQuote",
    value: function getQuote(request) {
      var provider, indexTokenAmount, inputToken, isMinting, outputToken, slippage, indexToken, inputOutputToken, contractType, contractAddress, network, chainId, wrappedQuoteProvider, wrappedQuote, builder, txRequest, tx, _wrappedQuoteProvider, _wrappedQuote, _builder, _txRequest, _tx;

      return regeneratorRuntime.async(function getQuote$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              provider = this.provider;
              indexTokenAmount = request.indexTokenAmount, inputToken = request.inputToken, isMinting = request.isMinting, outputToken = request.outputToken, slippage = request.slippage;
              indexToken = isMinting ? outputToken : inputToken;
              inputOutputToken = isMinting ? inputToken : outputToken;
              contractType = getContractType(indexToken.symbol);

              if (!(contractType !== 1
              /* wrapped */
              && contractType !== 2
              /* erc4626 */
              )) {
                _context27.next = 7;
                break;
              }

              throw new Error("Index token not supported");

            case 7:
              contractAddress = getContractAddress(contractType);
              _context27.next = 10;
              return regeneratorRuntime.awrap(provider.getNetwork());

            case 10:
              network = _context27.sent;
              chainId = network.chainId;
              _context27.t0 = contractType;
              _context27.next = _context27.t0 === 1
              /* wrapped */
              ? 15 : _context27.t0 === 2
              /* erc4626 */
              ? 29 : 43;
              break;

            case 15:
              wrappedQuoteProvider = new _WrappedQuoteProvider(provider);
              _context27.next = 18;
              return regeneratorRuntime.awrap(wrappedQuoteProvider.getQuote(request));

            case 18:
              wrappedQuote = _context27.sent;

              if (wrappedQuote) {
                _context27.next = 21;
                break;
              }

              return _context27.abrupt("return", null);

            case 21:
              builder = new _WrappedTransactionBuilder(provider);
              txRequest = {
                isMinting: isMinting,
                indexToken: indexToken.address,
                inputOutputToken: inputOutputToken.address,
                inputOutputTokenSymbol: inputOutputToken.symbol,
                indexTokenAmount: indexTokenAmount,
                inputOutputTokenAmount: wrappedQuote.inputOutputTokenAmount,
                componentSwapData: wrappedQuote.componentSwapData,
                componentWrapData: wrappedQuote.componentWrapData
              };
              _context27.next = 25;
              return regeneratorRuntime.awrap(builder.build(txRequest));

            case 25:
              tx = _context27.sent;

              if (tx) {
                _context27.next = 28;
                break;
              }

              return _context27.abrupt("return", null);

            case 28:
              return _context27.abrupt("return", {
                chainId: chainId,
                contractType: contractType,
                contract: contractAddress,
                isMinting: isMinting,
                inputToken: inputToken,
                outputToken: outputToken,
                indexTokenAmount: indexTokenAmount,
                inputOutputAmount: wrappedQuote.inputOutputTokenAmount,
                slippage: slippage,
                tx: tx
              });

            case 29:
              _wrappedQuoteProvider = new _ERC4626QuoteProvider(provider);
              _context27.next = 32;
              return regeneratorRuntime.awrap(_wrappedQuoteProvider.getQuote(request));

            case 32:
              _wrappedQuote = _context27.sent;

              if (_wrappedQuote) {
                _context27.next = 35;
                break;
              }

              return _context27.abrupt("return", null);

            case 35:
              _builder = new _ERC4626TransactionBuilder(provider);
              _txRequest = {
                isMinting: isMinting,
                indexToken: indexToken.address,
                inputOutputToken: inputOutputToken.address,
                inputOutputTokenSymbol: inputOutputToken.symbol,
                indexTokenAmount: indexTokenAmount,
                inputOutputTokenAmount: _wrappedQuote.inputOutputTokenAmount,
                componentSwapData: _wrappedQuote.componentSwapData
              };
              _context27.next = 39;
              return regeneratorRuntime.awrap(_builder.build(_txRequest));

            case 39:
              _tx = _context27.sent;

              if (_tx) {
                _context27.next = 42;
                break;
              }

              return _context27.abrupt("return", null);

            case 42:
              return _context27.abrupt("return", {
                chainId: chainId,
                contractType: contractType,
                contract: contractAddress,
                isMinting: isMinting,
                inputToken: inputToken,
                outputToken: outputToken,
                indexTokenAmount: indexTokenAmount,
                inputOutputAmount: _wrappedQuote.inputOutputTokenAmount,
                slippage: slippage,
                tx: _tx
              });

            case 43:
              return _context27.abrupt("return", null);

            case 44:
            case "end":
              return _context27.stop();
          }
        }
      }, null, this);
    }
  }]);

  return _FlashMintQuoteProvider;
}();

function getContractAddress(contractType) {
  switch (contractType) {
    case 1
    /* wrapped */
    :
      return _FlashMintWrappedAddress;

    case 2
    /* erc4626 */
    :
      return _FlashMint4626Address;

    default:
      return "";
  }
}

function getContractType(token) {
  if (token === _MoneyMarketIndexToken.symbol) return 2
  /* erc4626 */
  ;
  return null;
} // src/quote/leveraged/function.ts


var import_bignumber4 = require("@ethersproject/bignumber");

function get0xEchangeKey(exchange) {
  switch (exchange) {
    case 4
    /* Curve */
    :
      return "Curve";

    case 1
    /* Quickswap */
    :
      return "QuickSwap";

    case 2
    /* Sushiswap */
    :
      return "SushiSwap";

    case 3
    /* UniV3 */
    :
      return "Uniswap_V3";

    default:
      return "";
  }
}

function _getIncludedSources(isIcEth) {
  var curve = get0xEchangeKey(4
  /* Curve */
  );
  var quickswap = get0xEchangeKey(1
  /* Quickswap */
  );
  var sushi = get0xEchangeKey(2
  /* Sushiswap */
  );
  var uniswap = get0xEchangeKey(3
  /* UniV3 */
  );
  var includedSources = isIcEth ? [curve].toString() : [quickswap, sushi, uniswap].toString();
  return includedSources;
}

function getLevTokenData(setTokenAddress, setTokenAmount, setTokenSymbol, isIssuance, chainId, provider) {
  var contract, flashMint;
  return regeneratorRuntime.async(function getLevTokenData$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          contract = _getFlashMintLeveragedContractForToken(setTokenSymbol, provider, chainId);
          flashMint = new _FlashMintLeveraged(contract);
          _context28.next = 4;
          return regeneratorRuntime.awrap(flashMint.getLeveragedTokenData(setTokenAddress, setTokenAmount, isIssuance));

        case 4:
          return _context28.abrupt("return", _context28.sent);

        case 5:
        case "end":
          return _context28.stop();
      }
    }
  });
}

function _getPaymentTokenAddress(paymentTokenAddress, paymentTokenSymbol, isMinting, chainId) {
  if (paymentTokenSymbol === _ETH.symbol) {
    return "ETH";
  }

  if (paymentTokenSymbol === _InterestCompoundingETHIndex.symbol && !isMinting) {
    return _stETH.address;
  }

  if (chainId === 137
  /* Polygon */
  && paymentTokenSymbol === _MATIC.symbol) {
    var WMATIC_ADDRESS = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
    return WMATIC_ADDRESS;
  }

  return paymentTokenAddress;
}

function _getSwapDataAndPaymentTokenAmount(setTokenSymbol, collateralToken, collateralShortfall, leftoverCollateral, paymentTokenAddress, isMinting, slippage, includedSources, zeroExApi, chainId) {
  var swapDataPaymentToken, issuanceParams, redeemingParams, paymentTokenAmount, result, swapData, zeroExQuote, outputTokenSymbol;
  return regeneratorRuntime.async(function _getSwapDataAndPaymentTokenAmount$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          swapDataPaymentToken = {
            exchange: 0
            /* None */
            ,
            path: [],
            fees: [],
            pool: "0x0000000000000000000000000000000000000000"
          };
          issuanceParams = {
            buyToken: collateralToken,
            buyAmount: collateralShortfall.toString(),
            sellToken: paymentTokenAddress,
            includedSources: includedSources
          };
          redeemingParams = {
            buyToken: paymentTokenAddress,
            sellAmount: leftoverCollateral.toString(),
            sellToken: collateralToken,
            includedSources: includedSources
          };
          paymentTokenAmount = isMinting ? collateralShortfall : leftoverCollateral;

          if (!(collateralToken !== paymentTokenAddress && setTokenSymbol !== _InterestCompoundingETHIndex.symbol)) {
            _context29.next = 9;
            break;
          }

          _context29.next = 7;
          return regeneratorRuntime.awrap(_getSwapData(isMinting ? issuanceParams : redeemingParams, slippage, chainId, zeroExApi));

        case 7:
          result = _context29.sent;

          if (result) {
            swapData = result.swapData, zeroExQuote = result.zeroExQuote;
            swapDataPaymentToken = swapData;
            paymentTokenAmount = isMinting ? import_bignumber4.BigNumber.from(zeroExQuote.sellAmount) : import_bignumber4.BigNumber.from(zeroExQuote.buyAmount);
          }

        case 9:
          if (setTokenSymbol === _InterestCompoundingETHIndex.symbol) {
            outputTokenSymbol = paymentTokenAddress === _stETH.address ? _stETH.symbol : _ETH.symbol;
            swapDataPaymentToken = isMinting ? _inputSwapData[setTokenSymbol][outputTokenSymbol] : _outputSwapData[setTokenSymbol][_ETH.symbol];
          }

          return _context29.abrupt("return", {
            swapDataPaymentToken: swapDataPaymentToken,
            paymentTokenAmount: paymentTokenAmount
          });

        case 11:
        case "end":
          return _context29.stop();
      }
    }
  });
}

var _getFlashMintLeveragedQuote = function _getFlashMintLeveragedQuote(inputToken, outputToken, setTokenAmount, isMinting, slippage, zeroExApi, provider, chainId) {
  var setTokenAddress, setTokenSymbol, isIcEth, includedSources, leveragedTokenData, debtCollateralResult, collateralObtainedOrSold, swapDataDebtCollateral, collateralShortfall, leftoverCollateral, inputOutputTokenAddress, _ref9, swapDataPaymentToken, paymentTokenAmount, inputOutputTokenAmount, inputOuputTokenDecimals;

  return regeneratorRuntime.async(function _getFlashMintLeveragedQuote$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          setTokenAddress = isMinting ? outputToken.address : inputToken.address;
          setTokenSymbol = isMinting ? outputToken.symbol : inputToken.symbol;
          isIcEth = setTokenSymbol === _InterestCompoundingETHIndex.symbol;
          includedSources = _getIncludedSources(isIcEth);
          _context30.next = 6;
          return regeneratorRuntime.awrap(getLevTokenData(setTokenAddress, setTokenAmount, setTokenSymbol, isMinting, chainId, provider));

        case 6:
          leveragedTokenData = _context30.sent;

          if (!(leveragedTokenData === null)) {
            _context30.next = 9;
            break;
          }

          return _context30.abrupt("return", null);

        case 9:
          if (!isMinting) {
            _context30.next = 15;
            break;
          }

          _context30.next = 12;
          return regeneratorRuntime.awrap(_getSwapDataDebtCollateral(leveragedTokenData, includedSources, slippage, chainId, zeroExApi));

        case 12:
          _context30.t0 = _context30.sent;
          _context30.next = 18;
          break;

        case 15:
          _context30.next = 17;
          return regeneratorRuntime.awrap(_getSwapDataCollateralDebt(leveragedTokenData, includedSources, slippage, chainId, zeroExApi));

        case 17:
          _context30.t0 = _context30.sent;

        case 18:
          debtCollateralResult = _context30.t0;

          if (debtCollateralResult) {
            _context30.next = 21;
            break;
          }

          return _context30.abrupt("return", null);

        case 21:
          collateralObtainedOrSold = debtCollateralResult.collateralObtainedOrSold;
          swapDataDebtCollateral = debtCollateralResult.swapDataDebtCollateral;

          if (isIcEth) {
            swapDataDebtCollateral = isMinting ? _debtCollateralSwapData[setTokenSymbol] : _collateralDebtSwapData[setTokenSymbol];
          }

          collateralShortfall = leveragedTokenData.collateralAmount.sub(collateralObtainedOrSold);
          leftoverCollateral = leveragedTokenData.collateralAmount.sub(collateralObtainedOrSold);
          inputOutputTokenAddress = _getPaymentTokenAddress(isMinting ? inputToken.address : outputToken.address, isMinting ? inputToken.symbol : outputToken.symbol, isMinting, chainId);
          _context30.next = 29;
          return regeneratorRuntime.awrap(_getSwapDataAndPaymentTokenAmount(setTokenSymbol, leveragedTokenData.collateralToken, collateralShortfall, leftoverCollateral, inputOutputTokenAddress, isMinting, slippage, includedSources, zeroExApi, chainId));

        case 29:
          _ref9 = _context30.sent;
          swapDataPaymentToken = _ref9.swapDataPaymentToken;
          paymentTokenAmount = _ref9.paymentTokenAmount;
          inputOutputTokenAmount = paymentTokenAmount;
          inputOuputTokenDecimals = isMinting ? inputToken.decimals : outputToken.decimals;
          inputOutputTokenAmount = _slippageAdjustedTokenAmount(inputOutputTokenAmount, inputOuputTokenDecimals, slippage, isMinting);
          return _context30.abrupt("return", {
            swapDataDebtCollateral: swapDataDebtCollateral,
            swapDataPaymentToken: swapDataPaymentToken,
            inputOutputTokenAmount: inputOutputTokenAmount,
            setTokenAmount: setTokenAmount
          });

        case 36:
        case "end":
          return _context30.stop();
      }
    }
  });
}; // src/utils/tokens.ts


function _getAddressForToken(token, chainId) {
  switch (chainId) {
    case 1
    /* Mainnet */
    :
      return token.address;

    case 10
    /* Optimism */
    :
      return token.addressOptimism;

    case 137
    /* Polygon */
    :
      return token.addressPolygon;

    default:
      return void 0;
  }
} // src/quote/zeroEx/componentsQuoteProvider.ts


var import_bignumber5 = require("@ethersproject/bignumber");

var _require = require("utils/slippage"),
    selectSlippage = _require.selectSlippage;

var ComponentsQuoteProvider =
/*#__PURE__*/
function () {
  function ComponentsQuoteProvider(chainId, slippage, wethAddress, zeroExApi) {
    _classCallCheck(this, ComponentsQuoteProvider);

    this.chainId = chainId;
    this.slippage = slippage;
    this.wethAddress = wethAddress;
    this.zeroExApi = zeroExApi;
  }
  /**
   * Returns the component quotes and input/output token amount for given components
   * and positions.
   *
   * @param components      An array of components
   * @param positions       An array of positions
   * @param isMinting       Minting or redeeming
   * @param inputToken      The input token
   * @param outputToken     The output token
   *
   * @returns a ComponentQuotesResult
   */


  _createClass(ComponentsQuoteProvider, [{
    key: "getComponentQuotes",
    value: function getComponentQuotes(components, positions, isMinting, inputToken, outputToken) {
      var chainId, slippage, zeroExApi, inputTokenAddress, outputTokenAddress, slippagePercentage, quotePromises, index, component, buyAmount, sellAmount, buyToken, sellToken, amount, fakeResponse, params, quotePromise, results, componentQuotes, inputOutputTokenAmount;
      return regeneratorRuntime.async(function getComponentQuotes$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              if (!(components.length === 0 || positions.length === 0)) {
                _context31.next = 2;
                break;
              }

              return _context31.abrupt("return", null);

            case 2:
              if (!(components.length !== positions.length)) {
                _context31.next = 4;
                break;
              }

              return _context31.abrupt("return", null);

            case 4:
              chainId = this.chainId, slippage = this.slippage, zeroExApi = this.zeroExApi;
              inputTokenAddress = this.getTokenAddressOrWeth(inputToken);
              outputTokenAddress = this.getTokenAddressOrWeth(outputToken);
              slippagePercentage = slippage / 100;
              quotePromises = [];
              _context31.t0 = regeneratorRuntime.keys(components);

            case 10:
              if ((_context31.t1 = _context31.t0()).done) {
                _context31.next = 23;
                break;
              }

              comp = _context31.t1.value;
              _context31.next = 14;
              return regeneratorRuntime.awrap(new Promise(function (r) {
                return setTimeout(r, 500);
              }));

            case 14:
              index = comp[1];
              component = comp[0];
              buyAmount = positions[index];
              sellAmount = positions[index];
              buyToken = isMinting ? component : outputTokenAddress;
              sellToken = isMinting ? inputTokenAddress : component;

              if (buyToken === sellToken) {
                amount = isMinting ? buyAmount : sellAmount;
                fakeResponse = this.getFakeZeroExResponse(amount);
                quotePromises.push(fakeResponse);
              } else {
                params = isMinting ? {
                  buyToken: buyToken,
                  sellToken: sellToken,
                  buyAmount: buyAmount.toString(),
                  slippagePercentage: slippagePercentage
                } : {
                  buyToken: buyToken,
                  sellToken: sellToken,
                  sellAmount: sellAmount.toString(),
                  slippagePercentage: slippagePercentage
                };
                quotePromise = zeroExApi.getSwapQuote(params, chainId != null ? chainId : 1);
                quotePromises.push(quotePromise);
              }

              _context31.next = 10;
              break;

            case 23:
              ;
              _context31.next = 26;
              return regeneratorRuntime.awrap(Promise.all(quotePromises));

            case 26:
              results = _context31.sent;
              componentQuotes = results.map(function (result) {
                return result.data;
              });
              inputOutputTokenAmount = results.map(function (result) {
                return import_bignumber5.BigNumber.from(isMinting ? result.sellAmount : result.buyAmount);
              }).reduce(function (prevValue, currValue) {
                return currValue.add(prevValue);
              });
              return _context31.abrupt("return", {
                componentQuotes: componentQuotes,
                inputOutputTokenAmount: inputOutputTokenAmount
              });

            case 30:
            case "end":
              return _context31.stop();
          }
        }
      }, null, this);
    }
    /**
     * This is just a helper function to return a fake ZeroEx response when the
     * component and input/output token are the same.
     */

  }, {
    key: "getFakeZeroExResponse",
    value: function getFakeZeroExResponse(amount) {
      return regeneratorRuntime.async(function getFakeZeroExResponse$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              return _context32.abrupt("return", Promise.resolve({
                buyAmount: amount,
                // Needs valid formatted hash - as otherwise validation will fail
                data: "0x0000000000000000000000000000000000000000",
                sellAmount: amount
              }));

            case 1:
            case "end":
              return _context32.stop();
          }
        }
      });
    }
    /**
     * Returns the WETH address if token is ETH. Otherwise the token's address.
     * @param token A token of type QuoteToken.
     * @returns a token address as string
     */

  }, {
    key: "getTokenAddressOrWeth",
    value: function getTokenAddressOrWeth(token) {
      return token.symbol === "ETH" ? this.wethAddress : token.address;
    }
  }]);

  return ComponentsQuoteProvider;
}(); // src/quote/zeroEx/function.ts


var _getFlashMintZeroExQuote = function _getFlashMintZeroExQuote(inputToken, outputToken, setTokenAmount, isMinting, slippage, zeroExApi, provider, chainId) {
  var inputTokenAddress, outputTokenAddress, wethAddress, setTokenAddress, setTokenSymbol, _ref10, components, positions, quoteProvider, quoteResult, componentQuotes, ioTokenAmount, inputOuputTokenDecimals, inputOutputTokenAmount;

  return regeneratorRuntime.async(function _getFlashMintZeroExQuote$(_context33) {
    while (1) {
      switch (_context33.prev = _context33.next) {
        case 0:
          inputTokenAddress = inputToken.address;
          outputTokenAddress = outputToken.address;
          wethAddress = _getAddressForToken(_WETH, chainId);

          if (!(wethAddress === void 0)) {
            _context33.next = 6;
            break;
          }

          console.error("Error - WETH address not defined");
          return _context33.abrupt("return", null);

        case 6:
          setTokenAddress = isMinting ? outputTokenAddress : inputTokenAddress;
          setTokenSymbol = isMinting ? outputToken.symbol : inputToken.symbol;
          _context33.next = 10;
          return regeneratorRuntime.awrap(_getRequiredComponents(isMinting, setTokenAddress, setTokenSymbol, setTokenAmount, provider, chainId));

        case 10:
          _ref10 = _context33.sent;
          components = _ref10.components;
          positions = _ref10.positions;
          quoteProvider = new ComponentsQuoteProvider(chainId, slippage, wethAddress, zeroExApi);
          _context33.next = 16;
          return regeneratorRuntime.awrap(quoteProvider.getComponentQuotes(components, positions, isMinting, inputToken, outputToken));

        case 16:
          quoteResult = _context33.sent;

          if (quoteResult) {
            _context33.next = 19;
            break;
          }

          return _context33.abrupt("return", null);

        case 19:
          componentQuotes = quoteResult.componentQuotes, ioTokenAmount = quoteResult.inputOutputTokenAmount;
          inputOuputTokenDecimals = isMinting ? inputToken.decimals : outputToken.decimals;
          inputOutputTokenAmount = _slippageAdjustedTokenAmount(ioTokenAmount, inputOuputTokenDecimals, slippage, isMinting);
          return _context33.abrupt("return", {
            componentQuotes: componentQuotes,
            inputOutputTokenAmount: inputOutputTokenAmount,
            setTokenAmount: setTokenAmount
          });

        case 23:
        case "end":
          return _context33.stop();
      }
    }
  });
};

function _getRequiredComponents(isMinting, setToken, setTokenSymbol, setTokenAmount, provider, chainId) {
  var contract, flashMint, issuanceModule, _ref11, components, positions;

  return regeneratorRuntime.async(function _getRequiredComponents$(_context34) {
    while (1) {
      switch (_context34.prev = _context34.next) {
        case 0:
          contract = _getFlashMintZeroExContractForToken(setTokenSymbol, provider, chainId);
          flashMint = new _FlashMintZeroEx(contract);
          issuanceModule = _getIssuanceModule(setTokenSymbol, chainId);

          if (!isMinting) {
            _context34.next = 9;
            break;
          }

          _context34.next = 6;
          return regeneratorRuntime.awrap(flashMint.getRequiredIssuanceComponents(issuanceModule.address, issuanceModule.isDebtIssuance, setToken, setTokenAmount));

        case 6:
          _context34.t0 = _context34.sent;
          _context34.next = 12;
          break;

        case 9:
          _context34.next = 11;
          return regeneratorRuntime.awrap(flashMint.getRequiredRedemptionComponents(issuanceModule.address, issuanceModule.isDebtIssuance, setToken, setTokenAmount));

        case 11:
          _context34.t0 = _context34.sent;

        case 12:
          _ref11 = _context34.t0;
          components = _ref11.components;
          positions = _ref11.positions;
          return _context34.abrupt("return", {
            components: components,
            positions: positions
          });

        case 16:
        case "end":
          return _context34.stop();
      }
    }
  });
} // src/utils/0x.ts


var import_axios = __toESM(require("axios"));

var _ZeroExApi =
/*#__PURE__*/
function () {
  /**
   * @param baseUrl              The base url (default: https://api.0x.org, watch rate limits)
   * @param affiliateAddress    (Optional) Affiliate address
   * @param headersOverride      (Optional) Override for headers
   * @param swapPathOverride     (Optional) Override of the API path - in case your using a custom path format e.g. through a proxy
   */
  function _ZeroExApi() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var affiliateAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var headersOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var swapPathOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, _ZeroExApi);

    this.baseUrl = baseUrl;
    this.affiliateAddress = affiliateAddress;
    this.headersOverride = headersOverride;
    this.swapPathOverride = swapPathOverride;
  }
  /**
   * Builds the 0x API URL.
   * @param path     An API path in the form of /swap/v1/quote
   * @param query    A query constructed with URLSearchParams
   * @param chainId  ID of the network
   */


  _createClass(_ZeroExApi, [{
    key: "buildUrl",
    value: function buildUrl(path, query, chainId) {
      var baseUrl = this.getBaseUrl(chainId);
      var url = "".concat(baseUrl).concat(path, "?").concat(query);

      if (this.affiliateAddress) {
        url += "&affiliateAddress=".concat(this.affiliateAddress);
      }

      return url;
    }
    /**
     * Get a swap quote as described in:
     * https://docs.0x.org/0x-api-swap/api-references/get-swap-v1-quote
     * @param params          Parameters for the swap request
     * @param chainId         ID of the network
     */

  }, {
    key: "getSwapQuote",
    value: function getSwapQuote(params, chainId) {
      var _a, path, query, config, url, response, res;

      return regeneratorRuntime.async(function getSwapQuote$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              path = (_a = this.swapPathOverride) != null ? _a : "/swap/v1/quote";
              query = new URLSearchParams(params).toString();
              config = {};

              if (this.headersOverride) {
                config = {
                  headers: this.headersOverride
                };
              }

              url = this.buildUrl(path, query, chainId);
              _context35.prev = 5;
              _context35.next = 8;
              return regeneratorRuntime.awrap(import_axios["default"].get(url, config));

            case 8:
              response = _context35.sent;
              res = response.data;
              return _context35.abrupt("return", res);

            case 13:
              _context35.prev = 13;
              _context35.t0 = _context35["catch"](5);
              return _context35.abrupt("return", null);

            case 16:
            case "end":
              return _context35.stop();
          }
        }
      }, null, this, [[5, 13]]);
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl(chainId) {
      if (this.baseUrl === null) {
        return this.getDefaultBaseUrl(chainId);
      }

      return this.baseUrl;
    }
  }, {
    key: "getDefaultBaseUrl",
    value: function getDefaultBaseUrl(chainId) {
      switch (chainId) {
        case 137
        /* Polygon */
        :
          return "https://polygon.api.0x.org";

        case 10
        /* Optimism */
        :
          return "https://optimism.api.0x.org";

        default:
          return "https://api.0x.org";
      }
    }
  }]);

  return _ZeroExApi;
}(); // Annotate the CommonJS export names for ESM import in node:


0 && (module.exports = {
  B4BIndex: _B4BIndex,
  BTC2xFlexibleLeverageIndex: _BTC2xFlexibleLeverageIndex,
  BTC2xFlexibleLeverageIndexPolygon: _BTC2xFlexibleLeverageIndexPolygon,
  BanklessBEDIndex: _BanklessBEDIndex,
  BasicIssuanceModuleAddress: _BasicIssuanceModuleAddress,
  BasicIssuanceModulePolygonAddress: _BasicIssuanceModulePolygonAddress,
  DAI: _DAI,
  DebtIssuanceModuleAddress: _DebtIssuanceModuleAddress,
  DebtIssuanceModuleV2Address: _DebtIssuanceModuleV2Address,
  DebtIssuanceModuleV2PolygonAddress: _DebtIssuanceModuleV2PolygonAddress,
  DefiPulseIndex: _DefiPulseIndex,
  DiversifiedStakedETHIndex: _DiversifiedStakedETHIndex,
  ERC4626QuoteProvider: _ERC4626QuoteProvider,
  ERC4626TransactionBuilder: _ERC4626TransactionBuilder,
  ETH: _ETH,
  ETH2xFlexibleLeverageIndex: _ETH2xFlexibleLeverageIndex,
  ETH2xFlexibleLeverageIndexPolygon: _ETH2xFlexibleLeverageIndexPolygon,
  Exchange: _Exchange,
  ExchangeIssuanceLeveragedMainnetAddress: _ExchangeIssuanceLeveragedMainnetAddress,
  ExchangeIssuanceLeveragedPolygonAddress: _ExchangeIssuanceLeveragedPolygonAddress,
  ExchangeIssuanceZeroExMainnetAddress: _ExchangeIssuanceZeroExMainnetAddress,
  ExchangeIssuanceZeroExPolygonAddress: _ExchangeIssuanceZeroExPolygonAddress,
  FlashMint4626Address: _FlashMint4626Address,
  FlashMintContractType: _FlashMintContractType,
  FlashMintLeveraged: _FlashMintLeveraged,
  FlashMintLeveragedForCompoundAddress: _FlashMintLeveragedForCompoundAddress,
  FlashMintQuoteProvider: _FlashMintQuoteProvider,
  FlashMintWrappedAddress: _FlashMintWrappedAddress,
  FlashMintZeroEx: _FlashMintZeroEx,
  FlashMintZeroExMainnetAddress: _FlashMintZeroExMainnetAddress,
  GMIIndex: _GMIIndex,
  GitcoinStakedETHIndex: _GitcoinStakedETHIndex,
  IndexDebtIssuanceModuleV2Address: _IndexDebtIssuanceModuleV2Address,
  InterestCompoundingETHIndex: _InterestCompoundingETHIndex,
  InverseBTCFlexibleLeverageIndex: _InverseBTCFlexibleLeverageIndex,
  InverseETHFlexibleLeverageIndex: _InverseETHFlexibleLeverageIndex,
  InverseMATICFlexibleLeverageIndex: _InverseMATICFlexibleLeverageIndex,
  JPGIndex: _JPGIndex,
  LeveragedTransactionBuilder: _LeveragedTransactionBuilder,
  MATIC: _MATIC,
  MATIC2xFlexibleLeverageIndex: _MATIC2xFlexibleLeverageIndex,
  MetaverseIndex: _MetaverseIndex,
  MoneyMarketIndexToken: _MoneyMarketIndexToken,
  USDC: _USDC,
  USDT: _USDT,
  WETH: _WETH,
  Web3DataEconomyIndex: _Web3DataEconomyIndex,
  WrappedQuoteProvider: _WrappedQuoteProvider,
  WrappedTransactionBuilder: _WrappedTransactionBuilder,
  ZeroExApi: _ZeroExApi,
  ZeroExTransactionBuilder: _ZeroExTransactionBuilder,
  collateralDebtSwapData: _collateralDebtSwapData,
  debtCollateralSwapData: _debtCollateralSwapData,
  extractPoolFees: _extractPoolFees,
  getAddressForToken: _getAddressForToken,
  getEchangeFrom0xKey: _getEchangeFrom0xKey,
  getExchangeIssuanceLeveragedContractAddress: _getExchangeIssuanceLeveragedContractAddress,
  getExchangeIssuanceZeroExContractAddress: _getExchangeIssuanceZeroExContractAddress,
  getFlashMint4626Contract: _getFlashMint4626Contract,
  getFlashMintLeveragedContract: _getFlashMintLeveragedContract,
  getFlashMintLeveragedContractForToken: _getFlashMintLeveragedContractForToken,
  getFlashMintLeveragedForCompoundContract: _getFlashMintLeveragedForCompoundContract,
  getFlashMintLeveragedQuote: _getFlashMintLeveragedQuote,
  getFlashMintWrappedContract: _getFlashMintWrappedContract,
  getFlashMintZeroExContract: _getFlashMintZeroExContract,
  getFlashMintZeroExContractForToken: _getFlashMintZeroExContractForToken,
  getFlashMintZeroExQuote: _getFlashMintZeroExQuote,
  getIncludedSources: _getIncludedSources,
  getIndexFlashMintZeroExContract: _getIndexFlashMintZeroExContract,
  getIndexFlashMintZeroExContractAddress: _getIndexFlashMintZeroExContractAddress,
  getIssuanceComponentSwapData: _getIssuanceComponentSwapData,
  getIssuanceERC4626SwapData: _getIssuanceERC4626SwapData,
  getIssuanceModule: _getIssuanceModule,
  getPaymentTokenAddress: _getPaymentTokenAddress,
  getRedemptionComponentSwapData: _getRedemptionComponentSwapData,
  getRedemptionERC4626SwapData: _getRedemptionERC4626SwapData,
  getRequiredComponents: _getRequiredComponents,
  getSwapData: _getSwapData,
  getSwapDataAndPaymentTokenAmount: _getSwapDataAndPaymentTokenAmount,
  getSwapDataCollateralDebt: _getSwapDataCollateralDebt,
  getSwapDataDebtCollateral: _getSwapDataDebtCollateral,
  getWrapData: _getWrapData,
  inputSwapData: _inputSwapData,
  outputSwapData: _outputSwapData,
  sETH2: _sETH,
  slippageAdjustedTokenAmount: _slippageAdjustedTokenAmount,
  stETH: _stETH,
  swapDataFrom0xQuote: _swapDataFrom0xQuote,
  wei: _wei,
  wsETH2: _wsETH,
  wstETH: _wstETH
});