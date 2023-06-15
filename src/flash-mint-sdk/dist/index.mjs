// src/constants/contracts.ts
var FlashMint4626Address = "0xF5cF956018c111BE7d5CE4240960C1164179aCA9";
var FlashMintLeveragedForCompoundAddress = "0xeA716Ed94964Ed0126Fb2fA3b546eD7F209cC2b8";
var FlashMintWrappedAddress = "0x5C0D0a9a0c3A0a5B591496fF894686893b69FaA2";
var FlashMintZeroExMainnetAddress = "0x9d648E5564B794B918d99C84B0fbf4b0bf36ce45";
var IndexDebtIssuanceModuleV2Address = "0xa0a98EB7Af028BE00d04e46e1316808A62a8fd59";
var BasicIssuanceModuleAddress = "0xd8EF3cACe8b4907117a45B0b125c68560532F94D";
var BasicIssuanceModulePolygonAddress = "0x38E5462BBE6A72F79606c1A0007468aA4334A92b";
var DebtIssuanceModuleAddress = "0x39F024d621367C044BacE2bf0Fb15Fb3612eCB92";
var DebtIssuanceModuleV2Address = "0x69a592D2129415a4A1d1b1E309C17051B7F28d57";
var DebtIssuanceModuleV2PolygonAddress = "0xf2dC2f456b98Af9A6bEEa072AF152a7b0EaA40C9";
var ExchangeIssuanceLeveragedMainnetAddress = "0x981b21A2912A427f491f1e5b9Bf9cCa16FA794e1";
var ExchangeIssuanceLeveragedPolygonAddress = "0xE86636f23B502B8746A72A1Ed87d65F096E419Db";
var ExchangeIssuanceZeroExMainnetAddress = "0xf42eCDC112365fF79a745B4cf7D4C266bd6E4b25";
var ExchangeIssuanceZeroExPolygonAddress = "0x1c0c05a2aA31692e5dc9511b04F651db9E4d8320";

// src/utils/swapData.ts
import { BigNumber } from "@ethersproject/bignumber";

// src/utils/UniswapPath.ts
var ADDR_SIZE = 40;
var FEE_SIZE = 6;
var hexToDecimal = (hex) => parseInt(hex, 16);
function extractPoolFees(path) {
  const fees = [];
  let rangeStart = ADDR_SIZE + 2;
  let rangeEnd = rangeStart + FEE_SIZE;
  while (path.length > rangeEnd) {
    const feeAsHex = path.slice(rangeStart, rangeEnd);
    const fee = hexToDecimal(feeAsHex);
    fees.push(fee);
    rangeStart = rangeEnd + ADDR_SIZE;
    rangeEnd = rangeStart + FEE_SIZE;
  }
  return fees;
}

// src/utils/swapData.ts
var Exchange = /* @__PURE__ */ ((Exchange2) => {
  Exchange2[Exchange2["None"] = 0] = "None";
  Exchange2[Exchange2["Quickswap"] = 1] = "Quickswap";
  Exchange2[Exchange2["Sushiswap"] = 2] = "Sushiswap";
  Exchange2[Exchange2["UniV3"] = 3] = "UniV3";
  Exchange2[Exchange2["Curve"] = 4] = "Curve";
  return Exchange2;
})(Exchange || {});
var getSwapDataCollateralDebt = async (leveragedTokenData, includedSources, slippage, chainId, zeroExApi) => {
  const result = await getSwapData(
    {
      buyToken: leveragedTokenData.debtToken,
      buyAmount: leveragedTokenData.debtAmount.toString(),
      sellToken: leveragedTokenData.collateralToken,
      includedSources
    },
    slippage,
    chainId,
    zeroExApi
  );
  if (!result)
    return null;
  const { swapData: swapDataDebtCollateral, zeroExQuote } = result;
  const collateralSold = BigNumber.from(zeroExQuote.sellAmount);
  return { swapDataDebtCollateral, collateralObtainedOrSold: collateralSold };
};
var getSwapDataDebtCollateral = async (leveragedTokenData, includedSources, slippage, chainId, zeroExApi) => {
  const result = await getSwapData(
    {
      buyToken: leveragedTokenData.collateralToken,
      sellAmount: leveragedTokenData.debtAmount.toString(),
      sellToken: leveragedTokenData.debtToken,
      includedSources
    },
    slippage,
    chainId,
    zeroExApi
  );
  if (!result)
    return null;
  const { swapData: swapDataDebtCollateral, zeroExQuote } = result;
  const collateralObtained = BigNumber.from(zeroExQuote.buyAmount);
  return {
    swapDataDebtCollateral,
    collateralObtainedOrSold: collateralObtained
  };
};
var getSwapData = async (params, slippage, chainId, zeroExApi) => {
  const zeroExQuote = await zeroExApi.getSwapQuote(
    {
      ...params,
      slippagePercentage: slippage / 100
    },
    chainId
  );
  const swapData = swapDataFrom0xQuote(zeroExQuote);
  if (swapData)
    return { swapData, zeroExQuote };
  return null;
};
function getEchangeFrom0xKey(key) {
  switch (key) {
    case "Curve":
      return 4 /* Curve */;
    case "QuickSwap":
      return 1 /* Quickswap */;
    case "SushiSwap":
      return 2 /* Sushiswap */;
    case "Uniswap_V3":
      return 3 /* UniV3 */;
    default:
      return null;
  }
}
function swapDataFrom0xQuote(zeroExQuote) {
  if (zeroExQuote === void 0 || zeroExQuote === null || zeroExQuote.orders === void 0 || zeroExQuote.orders.length < 1)
    return null;
  const order = zeroExQuote.orders[0];
  const fillData = order.fillData;
  const exchange = getEchangeFrom0xKey(order.source);
  if (!fillData || !exchange)
    return null;
  if (exchange === 4 /* Curve */) {
    return swapDataFromCurve(order);
  }
  let fees = [];
  if (exchange === 3 /* UniV3 */) {
    fees = fillData.path ? extractPoolFees(fillData.path) : [500];
  }
  return {
    exchange,
    path: fillData.tokenAddressPath,
    fees,
    pool: "0x0000000000000000000000000000000000000000"
  };
}
function swapDataFromCurve(order) {
  const fillData = order.fillData;
  if (!fillData)
    return null;
  return {
    exchange: 4 /* Curve */,
    path: fillData.pool.tokens,
    fees: [],
    pool: fillData.pool.poolAddress
  };
}

// src/constants/tokens.ts
var B4BIndex = {
  symbol: "B4B",
  address: "0x7b76b274dea7abe248ff764fdc11cbb9ba3585fb",
  addressPolygon: "0x56a15aaa0f88338fceb5aec28aba249acc75f185"
};
var MoneyMarketIndexToken = {
  address: "0xc30FBa978743a43E736fc32FBeEd364b8A2039cD",
  symbol: "icSMMT"
};
var DAI = {
  symbol: "DAI",
  address: "0x6b175474e89094c44da98b954eedeac495271d0f"
};
var ETH = {
  symbol: "ETH",
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
};
var MATIC = {
  symbol: "MATIC",
  addressPolygon: "0x0000000000000000000000000000000000001010"
};
var WMATIC = {
  symbol: "WMATIC",
  addressPolygon: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
};
var USDC = {
  symbol: "USDC",
  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  addressPolygon: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"
};
var USDT = {
  symbol: "USDT",
  address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
};
var WETH = {
  symbol: "WETH",
  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  addressOptimism: "0x4200000000000000000000000000000000000006",
  addressPolygon: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
};

// src/constants/swapdata.ts
var collateralDebtSwapData = {
  [InterestCompoundingETHIndex.symbol]: {
    exchange: 4 /* Curve */,
    path: ["0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", ETH.address],
    fees: [],
    pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
  }
};
var debtCollateralSwapData = {
  [InterestCompoundingETHIndex.symbol]: {
    exchange: 4 /* Curve */,
    path: [ETH.address, "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"],
    fees: [],
    pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
  }
};
var inputSwapData = {
  [InterestCompoundingETHIndex.symbol]: {
    // icETH only supports ETH as the input token
    [ETH.symbol]: {
      exchange: 4 /* Curve */,
      path: [ETH.address, stETH.address],
      fees: [],
      pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
    },
    [stETH.symbol]: {
      exchange: 4 /* Curve */,
      path: [stETH.address],
      fees: [],
      pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
    }
  }
};
var outputSwapData = {
  [InterestCompoundingETHIndex.symbol]: {
    // icETH only supports ETH as the output token
    [ETH.symbol]: {
      exchange: 4 /* Curve */,
      path: ["0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", ETH.address],
      fees: [],
      pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"
    }
  }
};

// src/utils/contracts.ts
import { Contract } from "@ethersproject/contracts";

// src/constants/abis/ExchangeIssuanceLeveraged.json
var ExchangeIssuanceLeveraged_default = [{ inputs: [{ internalType: "address", name: "_weth", type: "address" }, { internalType: "address", name: "_quickRouter", type: "address" }, { internalType: "address", name: "_sushiRouter", type: "address" }, { internalType: "address", name: "_uniV3Router", type: "address" }, { internalType: "address", name: "_uniV3Quoter", type: "address" }, { internalType: "contract IController", name: "_setController", type: "address" }, { internalType: "contract IDebtIssuanceModule", name: "_debtIssuanceModule", type: "address" }, { internalType: "contract IAaveLeverageModule", name: "_aaveLeverageModule", type: "address" }, { internalType: "address", name: "_aaveAddressProvider", type: "address" }, { internalType: "address", name: "_curveAddressProvider", type: "address" }, { internalType: "address", name: "_curveCalculator", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "address", name: "_inputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountInputToken", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountSetIssued", type: "uint256" }], name: "ExchangeIssue", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "address", name: "_outputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountSetRedeemed", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountOutputToken", type: "uint256" }], name: "ExchangeRedeem", type: "event" }, { inputs: [], name: "ADDRESSES_PROVIDER", outputs: [{ internalType: "contract ILendingPoolAddressesProviderV2", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "LENDING_POOL", outputs: [{ internalType: "contract ILendingPoolV2", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "ROUNDING_ERROR_MARGIN", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "aaveLeverageModule", outputs: [{ internalType: "contract IAaveLeverageModule", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "addresses", outputs: [{ internalType: "address", name: "quickRouter", type: "address" }, { internalType: "address", name: "sushiRouter", type: "address" }, { internalType: "address", name: "uniV3Router", type: "address" }, { internalType: "address", name: "uniV3Quoter", type: "address" }, { internalType: "address", name: "curveAddressProvider", type: "address" }, { internalType: "address", name: "curveCalculator", type: "address" }, { internalType: "address", name: "weth", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }], name: "approveSetToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20", name: "_token", type: "address" }], name: "approveToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20[]", name: "_tokens", type: "address[]" }], name: "approveTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "debtIssuanceModule", outputs: [{ internalType: "contract IDebtIssuanceModule", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "assets", type: "address[]" }, { internalType: "uint256[]", name: "amounts", type: "uint256[]" }, { internalType: "uint256[]", name: "premiums", type: "uint256[]" }, { internalType: "address", name: "initiator", type: "address" }, { internalType: "bytes", name: "params", type: "bytes" }], name: "executeOperation", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataDebtForCollateral", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataInputToken", type: "tuple" }], name: "getIssueExactSet", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { internalType: "bool", name: "_isIssuance", type: "bool" }], name: "getLeveragedTokenData", outputs: [{ components: [{ internalType: "address", name: "collateralAToken", type: "address" }, { internalType: "address", name: "collateralToken", type: "address" }, { internalType: "uint256", name: "collateralAmount", type: "uint256" }, { internalType: "address", name: "debtToken", type: "address" }, { internalType: "uint256", name: "debtAmount", type: "uint256" }], internalType: "struct ExchangeIssuanceLeveraged.LeveragedTokenData", name: "", type: "tuple" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataCollateralForDebt", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataOutputToken", type: "tuple" }], name: "getRedeemExactSet", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { internalType: "address", name: "_inputToken", type: "address" }, { internalType: "uint256", name: "_maxAmountInputToken", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataDebtForCollateral", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataInputToken", type: "tuple" }], name: "issueExactSetFromERC20", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataDebtForCollateral", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataInputToken", type: "tuple" }], name: "issueExactSetFromETH", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { internalType: "address", name: "_outputToken", type: "address" }, { internalType: "uint256", name: "_minAmountOutputToken", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataCollateralForDebt", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataOutputToken", type: "tuple" }], name: "redeemExactSetForERC20", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { internalType: "uint256", name: "_minAmountOutputToken", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataCollateralForDebt", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataOutputToken", type: "tuple" }], name: "redeemExactSetForETH", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "setController", outputs: [{ internalType: "contract IController", name: "", type: "address" }], stateMutability: "view", type: "function" }, { stateMutability: "payable", type: "receive" }];

// src/constants/abis/ExchangeIssuanceZeroEx.json
var ExchangeIssuanceZeroEx_default = [{ inputs: [{ internalType: "address", name: "_weth", type: "address" }, { internalType: "contract IController", name: "_setController", type: "address" }, { internalType: "address", name: "_swapTarget", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "contract IERC20", name: "_inputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountInputToken", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountSetIssued", type: "uint256" }], name: "ExchangeIssue", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "contract IERC20", name: "_outputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountSetRedeemed", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountOutputToken", type: "uint256" }], name: "ExchangeRedeem", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { inputs: [], name: "ETH_ADDRESS", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "address", name: "_issuanceModule", type: "address" }], name: "approveSetToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20", name: "_token", type: "address" }, { internalType: "address", name: "_spender", type: "address" }], name: "approveToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20[]", name: "_tokens", type: "address[]" }, { internalType: "address", name: "_spender", type: "address" }], name: "approveTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }, { internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }], name: "getRequiredIssuanceComponents", outputs: [{ internalType: "address[]", name: "components", type: "address[]" }, { internalType: "uint256[]", name: "positions", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }, { internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }], name: "getRequiredRedemptionComponents", outputs: [{ internalType: "address[]", name: "components", type: "address[]" }, { internalType: "uint256[]", name: "positions", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "bytes[]", name: "_componentQuotes", type: "bytes[]" }, { internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }], name: "issueExactSetFromETH", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "contract IERC20", name: "_inputToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_maxAmountInputToken", type: "uint256" }, { internalType: "bytes[]", name: "_componentQuotes", type: "bytes[]" }, { internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }], name: "issueExactSetFromToken", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_minEthReceive", type: "uint256" }, { internalType: "bytes[]", name: "_componentQuotes", type: "bytes[]" }, { internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }], name: "redeemExactSetForETH", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "contract IERC20", name: "_outputToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_minOutputReceive", type: "uint256" }, { internalType: "bytes[]", name: "_componentQuotes", type: "bytes[]" }, { internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }], name: "redeemExactSetForToken", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "setController", outputs: [{ internalType: "contract IController", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "swapTarget", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20[]", name: "_tokens", type: "address[]" }, { internalType: "address payable", name: "_to", type: "address" }], name: "withdrawTokens", outputs: [], stateMutability: "payable", type: "function" }, { stateMutability: "payable", type: "receive" }];

// src/constants/abis/FlashMint4626.json
var FlashMint4626_default = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "quickRouter",
            type: "address"
          },
          {
            internalType: "address",
            name: "sushiRouter",
            type: "address"
          },
          {
            internalType: "address",
            name: "uniV3Router",
            type: "address"
          },
          {
            internalType: "address",
            name: "uniV3Quoter",
            type: "address"
          },
          {
            internalType: "address",
            name: "curveAddressProvider",
            type: "address"
          },
          {
            internalType: "address",
            name: "curveCalculator",
            type: "address"
          },
          {
            internalType: "address",
            name: "weth",
            type: "address"
          }
        ],
        internalType: "struct DEXAdapter.Addresses",
        name: "_dexAddresses",
        type: "tuple"
      },
      {
        internalType: "contract IController",
        name: "_setController",
        type: "address"
      },
      {
        internalType: "contract IDebtIssuanceModule",
        name: "_issuanceModule",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "_inputToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountInputToken",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountSetIssued",
        type: "uint256"
      }
    ],
    name: "FlashMint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "_outputToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountSetRedeemed",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountOutputToken",
        type: "uint256"
      }
    ],
    name: "FlashRedeem",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      }
    ],
    name: "approveSetToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "dexAdapter",
    outputs: [
      {
        internalType: "address",
        name: "quickRouter",
        type: "address"
      },
      {
        internalType: "address",
        name: "sushiRouter",
        type: "address"
      },
      {
        internalType: "address",
        name: "uniV3Router",
        type: "address"
      },
      {
        internalType: "address",
        name: "uniV3Quoter",
        type: "address"
      },
      {
        internalType: "address",
        name: "curveAddressProvider",
        type: "address"
      },
      {
        internalType: "address",
        name: "curveCalculator",
        type: "address"
      },
      {
        internalType: "address",
        name: "weth",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_inputToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_setAmount",
        type: "uint256"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address[]",
                name: "path",
                type: "address[]"
              },
              {
                internalType: "uint24[]",
                name: "fees",
                type: "uint24[]"
              },
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "enum DEXAdapter.Exchange",
                name: "exchange",
                type: "uint8"
              }
            ],
            internalType: "struct DEXAdapter.SwapData",
            name: "dexData",
            type: "tuple"
          }
        ],
        internalType: "struct FlashMint4626.ComponentSwapData[]",
        name: "_swapData",
        type: "tuple[]"
      }
    ],
    name: "getIssueExactSet",
    outputs: [
      {
        internalType: "uint256",
        name: "amountInputNeeded",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_outputToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_setAmount",
        type: "uint256"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address[]",
                name: "path",
                type: "address[]"
              },
              {
                internalType: "uint24[]",
                name: "fees",
                type: "uint24[]"
              },
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "enum DEXAdapter.Exchange",
                name: "exchange",
                type: "uint8"
              }
            ],
            internalType: "struct DEXAdapter.SwapData",
            name: "dexData",
            type: "tuple"
          }
        ],
        internalType: "struct FlashMint4626.ComponentSwapData[]",
        name: "_swapData",
        type: "tuple[]"
      }
    ],
    name: "getRedeemExactSet",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOutputReceived",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "issuanceModule",
    outputs: [
      {
        internalType: "contract IDebtIssuanceModule",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "_inputToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountSetToken",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxAmountInputToken",
        type: "uint256"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address[]",
                name: "path",
                type: "address[]"
              },
              {
                internalType: "uint24[]",
                name: "fees",
                type: "uint24[]"
              },
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "enum DEXAdapter.Exchange",
                name: "exchange",
                type: "uint8"
              }
            ],
            internalType: "struct DEXAdapter.SwapData",
            name: "dexData",
            type: "tuple"
          }
        ],
        internalType: "struct FlashMint4626.ComponentSwapData[]",
        name: "_swapData",
        type: "tuple[]"
      }
    ],
    name: "issueExactSetFromERC20",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountSetToken",
        type: "uint256"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address[]",
                name: "path",
                type: "address[]"
              },
              {
                internalType: "uint24[]",
                name: "fees",
                type: "uint24[]"
              },
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "enum DEXAdapter.Exchange",
                name: "exchange",
                type: "uint8"
              }
            ],
            internalType: "struct DEXAdapter.SwapData",
            name: "dexData",
            type: "tuple"
          }
        ],
        internalType: "struct FlashMint4626.ComponentSwapData[]",
        name: "_swapData",
        type: "tuple[]"
      }
    ],
    name: "issueExactSetFromETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "_outputToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountSetToken",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minOutputReceive",
        type: "uint256"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address[]",
                name: "path",
                type: "address[]"
              },
              {
                internalType: "uint24[]",
                name: "fees",
                type: "uint24[]"
              },
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "enum DEXAdapter.Exchange",
                name: "exchange",
                type: "uint8"
              }
            ],
            internalType: "struct DEXAdapter.SwapData",
            name: "dexData",
            type: "tuple"
          }
        ],
        internalType: "struct FlashMint4626.ComponentSwapData[]",
        name: "_swapData",
        type: "tuple[]"
      }
    ],
    name: "redeemExactSetForERC20",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amountSetToken",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minOutputReceive",
        type: "uint256"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address[]",
                name: "path",
                type: "address[]"
              },
              {
                internalType: "uint24[]",
                name: "fees",
                type: "uint24[]"
              },
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "enum DEXAdapter.Exchange",
                name: "exchange",
                type: "uint8"
              }
            ],
            internalType: "struct DEXAdapter.SwapData",
            name: "dexData",
            type: "tuple"
          }
        ],
        internalType: "struct FlashMint4626.ComponentSwapData[]",
        name: "_swapData",
        type: "tuple[]"
      }
    ],
    name: "redeemExactSetForETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "setController",
    outputs: [
      {
        internalType: "contract IController",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]"
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address"
      }
    ],
    name: "withdrawTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];

// src/constants/abis/FlashMintLeveragedForCompound.json
var FlashMintLeveragedForCompound_default = [{ inputs: [{ components: [{ internalType: "address", name: "quickRouter", type: "address" }, { internalType: "address", name: "sushiRouter", type: "address" }, { internalType: "address", name: "uniV3Router", type: "address" }, { internalType: "address", name: "uniV3Quoter", type: "address" }, { internalType: "address", name: "curveAddressProvider", type: "address" }, { internalType: "address", name: "curveCalculator", type: "address" }, { internalType: "address", name: "weth", type: "address" }], internalType: "struct DEXAdapter.Addresses", name: "_dexAddresses", type: "tuple" }, { internalType: "contract IController", name: "_setController", type: "address" }, { internalType: "contract IDebtIssuanceModule", name: "_debtIssuanceModule", type: "address" }, { internalType: "contract ICompoundLeverageModule", name: "_compoundLeverageModule", type: "address" }, { internalType: "address", name: "_aaveAddressProvider", type: "address" }, { internalType: "address", name: "_cEther", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "address", name: "_inputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountInputToken", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountSetIssued", type: "uint256" }], name: "FlashMint", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "address", name: "_outputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountSetRedeemed", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountOutputToken", type: "uint256" }], name: "FlashRedeem", type: "event" }, { inputs: [], name: "ADDRESSES_PROVIDER", outputs: [{ internalType: "contract ILendingPoolAddressesProviderV2", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "LENDING_POOL", outputs: [{ internalType: "contract ILendingPoolV2", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "ROUNDING_ERROR_MARGIN", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "addresses", outputs: [{ internalType: "address", name: "quickRouter", type: "address" }, { internalType: "address", name: "sushiRouter", type: "address" }, { internalType: "address", name: "uniV3Router", type: "address" }, { internalType: "address", name: "uniV3Quoter", type: "address" }, { internalType: "address", name: "curveAddressProvider", type: "address" }, { internalType: "address", name: "curveCalculator", type: "address" }, { internalType: "address", name: "weth", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }], name: "approveSetToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20", name: "_token", type: "address" }], name: "approveToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20[]", name: "_tokens", type: "address[]" }], name: "approveTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "cEtherAddress", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "compoundLeverageModule", outputs: [{ internalType: "contract ICompoundLeverageModule", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "debtIssuanceModule", outputs: [{ internalType: "contract IDebtIssuanceModule", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "assets", type: "address[]" }, { internalType: "uint256[]", name: "amounts", type: "uint256[]" }, { internalType: "uint256[]", name: "premiums", type: "uint256[]" }, { internalType: "address", name: "initiator", type: "address" }, { internalType: "bytes", name: "params", type: "bytes" }], name: "executeOperation", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataDebtForCollateral", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataInputToken", type: "tuple" }], name: "getIssueExactSet", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { internalType: "bool", name: "_isMint", type: "bool" }], name: "getLeveragedTokenData", outputs: [{ components: [{ internalType: "address", name: "collateralCToken", type: "address" }, { internalType: "uint256", name: "cTokenAmount", type: "uint256" }, { internalType: "address", name: "collateralToken", type: "address" }, { internalType: "uint256", name: "collateralAmount", type: "uint256" }, { internalType: "address", name: "debtToken", type: "address" }, { internalType: "uint256", name: "debtAmount", type: "uint256" }], internalType: "struct FlashMintLeveragedForCompound.LeveragedTokenData", name: "", type: "tuple" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataCollateralForDebt", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataOutputToken", type: "tuple" }], name: "getRedeemExactSet", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { internalType: "address", name: "_inputToken", type: "address" }, { internalType: "uint256", name: "_maxAmountInputToken", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataDebtForCollateral", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataInputToken", type: "tuple" }], name: "issueExactSetFromERC20", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataDebtForCollateral", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataInputToken", type: "tuple" }], name: "issueExactSetFromETH", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { internalType: "address", name: "_outputToken", type: "address" }, { internalType: "uint256", name: "_minAmountOutputToken", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataCollateralForDebt", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataOutputToken", type: "tuple" }], name: "redeemExactSetForERC20", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { internalType: "uint256", name: "_minAmountOutputToken", type: "uint256" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataCollateralForDebt", type: "tuple" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "_swapDataOutputToken", type: "tuple" }], name: "redeemExactSetForETH", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "setController", outputs: [{ internalType: "contract IController", name: "", type: "address" }], stateMutability: "view", type: "function" }, { stateMutability: "payable", type: "receive" }];

// src/constants/abis/FlashMintWrapped.json
var FlashMintWrapped_default = [{ inputs: [{ components: [{ internalType: "address", name: "quickRouter", type: "address" }, { internalType: "address", name: "sushiRouter", type: "address" }, { internalType: "address", name: "uniV3Router", type: "address" }, { internalType: "address", name: "uniV3Quoter", type: "address" }, { internalType: "address", name: "curveAddressProvider", type: "address" }, { internalType: "address", name: "curveCalculator", type: "address" }, { internalType: "address", name: "weth", type: "address" }], internalType: "struct DEXAdapter.Addresses", name: "_dexAddresses", type: "tuple" }, { internalType: "contract IController", name: "_setController", type: "address" }, { internalType: "contract IDebtIssuanceModule", name: "_issuanceModule", type: "address" }, { internalType: "address", name: "_wrapModule", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "contract IERC20", name: "_inputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountInputToken", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountSetIssued", type: "uint256" }], name: "FlashMint", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "contract IERC20", name: "_outputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountSetRedeemed", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountOutputToken", type: "uint256" }], name: "FlashRedeem", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }], name: "approveSetToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "dexAdapter", outputs: [{ internalType: "address", name: "quickRouter", type: "address" }, { internalType: "address", name: "sushiRouter", type: "address" }, { internalType: "address", name: "uniV3Router", type: "address" }, { internalType: "address", name: "uniV3Quoter", type: "address" }, { internalType: "address", name: "curveAddressProvider", type: "address" }, { internalType: "address", name: "curveCalculator", type: "address" }, { internalType: "address", name: "weth", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "address", name: "_inputToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { components: [{ internalType: "address", name: "underlyingERC20", type: "address" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "dexData", type: "tuple" }, { internalType: "uint256", name: "buyUnderlyingAmount", type: "uint256" }], internalType: "struct FlashMintWrapped.ComponentSwapData[]", name: "_swapData", type: "tuple[]" }], name: "getIssueExactSet", outputs: [{ internalType: "uint256", name: "amountInputNeeded", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "address", name: "_outputToken", type: "address" }, { internalType: "uint256", name: "_setAmount", type: "uint256" }, { components: [{ internalType: "address", name: "underlyingERC20", type: "address" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "dexData", type: "tuple" }, { internalType: "uint256", name: "buyUnderlyingAmount", type: "uint256" }], internalType: "struct FlashMintWrapped.ComponentSwapData[]", name: "_swapData", type: "tuple[]" }], name: "getRedeemExactSet", outputs: [{ internalType: "uint256", name: "amountOutputReceived", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "issuanceModule", outputs: [{ internalType: "contract IDebtIssuanceModule", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "contract IERC20", name: "_inputToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_maxAmountInputToken", type: "uint256" }, { components: [{ internalType: "address", name: "underlyingERC20", type: "address" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "dexData", type: "tuple" }, { internalType: "uint256", name: "buyUnderlyingAmount", type: "uint256" }], internalType: "struct FlashMintWrapped.ComponentSwapData[]", name: "_swapData", type: "tuple[]" }, { components: [{ internalType: "string", name: "integrationName", type: "string" }, { internalType: "bytes", name: "wrapData", type: "bytes" }], internalType: "struct FlashMintWrapped.ComponentWrapData[]", name: "_wrapData", type: "tuple[]" }], name: "issueExactSetFromERC20", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { components: [{ internalType: "address", name: "underlyingERC20", type: "address" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "dexData", type: "tuple" }, { internalType: "uint256", name: "buyUnderlyingAmount", type: "uint256" }], internalType: "struct FlashMintWrapped.ComponentSwapData[]", name: "_swapData", type: "tuple[]" }, { components: [{ internalType: "string", name: "integrationName", type: "string" }, { internalType: "bytes", name: "wrapData", type: "bytes" }], internalType: "struct FlashMintWrapped.ComponentWrapData[]", name: "_wrapData", type: "tuple[]" }], name: "issueExactSetFromETH", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "payable", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "contract IERC20", name: "_outputToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_minOutputReceive", type: "uint256" }, { components: [{ internalType: "address", name: "underlyingERC20", type: "address" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "dexData", type: "tuple" }, { internalType: "uint256", name: "buyUnderlyingAmount", type: "uint256" }], internalType: "struct FlashMintWrapped.ComponentSwapData[]", name: "_swapData", type: "tuple[]" }, { components: [{ internalType: "string", name: "integrationName", type: "string" }, { internalType: "bytes", name: "wrapData", type: "bytes" }], internalType: "struct FlashMintWrapped.ComponentWrapData[]", name: "_unwrapData", type: "tuple[]" }], name: "redeemExactSetForERC20", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_minOutputReceive", type: "uint256" }, { components: [{ internalType: "address", name: "underlyingERC20", type: "address" }, { components: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint24[]", name: "fees", type: "uint24[]" }, { internalType: "address", name: "pool", type: "address" }, { internalType: "enum DEXAdapter.Exchange", name: "exchange", type: "uint8" }], internalType: "struct DEXAdapter.SwapData", name: "dexData", type: "tuple" }, { internalType: "uint256", name: "buyUnderlyingAmount", type: "uint256" }], internalType: "struct FlashMintWrapped.ComponentSwapData[]", name: "_swapData", type: "tuple[]" }, { components: [{ internalType: "string", name: "integrationName", type: "string" }, { internalType: "bytes", name: "wrapData", type: "bytes" }], internalType: "struct FlashMintWrapped.ComponentWrapData[]", name: "_unwrapData", type: "tuple[]" }], name: "redeemExactSetForETH", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "setController", outputs: [{ internalType: "contract IController", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20[]", name: "_tokens", type: "address[]" }, { internalType: "address payable", name: "_to", type: "address" }], name: "withdrawTokens", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [], name: "wrapModule", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { stateMutability: "payable", type: "receive" }];

// src/constants/abis/FlashMintZeroEx.json
var FlashMintZeroEx_default = [{ inputs: [{ internalType: "address", name: "_weth", type: "address" }, { internalType: "contract IController", name: "_setController", type: "address" }, { internalType: "address", name: "_swapTarget", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "contract IERC20", name: "_inputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountInputToken", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountSetIssued", type: "uint256" }], name: "ExchangeIssue", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "_recipient", type: "address" }, { indexed: true, internalType: "contract ISetToken", name: "_setToken", type: "address" }, { indexed: true, internalType: "contract IERC20", name: "_outputToken", type: "address" }, { indexed: false, internalType: "uint256", name: "_amountSetRedeemed", type: "uint256" }, { indexed: false, internalType: "uint256", name: "_amountOutputToken", type: "uint256" }], name: "ExchangeRedeem", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { inputs: [], name: "ETH_ADDRESS", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "address", name: "_issuanceModule", type: "address" }], name: "approveSetToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20", name: "_token", type: "address" }, { internalType: "address", name: "_spender", type: "address" }], name: "approveToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20[]", name: "_tokens", type: "address[]" }, { internalType: "address", name: "_spender", type: "address" }], name: "approveTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }, { internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }], name: "getRequiredIssuanceComponents", outputs: [{ internalType: "address[]", name: "components", type: "address[]" }, { internalType: "uint256[]", name: "positions", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }, { internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }], name: "getRequiredRedemptionComponents", outputs: [{ internalType: "address[]", name: "components", type: "address[]" }, { internalType: "uint256[]", name: "positions", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "bytes[]", name: "_componentQuotes", type: "bytes[]" }, { internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }], name: "issueExactSetFromETH", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "contract IERC20", name: "_inputToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_maxAmountInputToken", type: "uint256" }, { internalType: "bytes[]", name: "_componentQuotes", type: "bytes[]" }, { internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }], name: "issueExactSetFromToken", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_minEthReceive", type: "uint256" }, { internalType: "bytes[]", name: "_componentQuotes", type: "bytes[]" }, { internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }], name: "redeemExactSetForETH", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract ISetToken", name: "_setToken", type: "address" }, { internalType: "contract IERC20", name: "_outputToken", type: "address" }, { internalType: "uint256", name: "_amountSetToken", type: "uint256" }, { internalType: "uint256", name: "_minOutputReceive", type: "uint256" }, { internalType: "bytes[]", name: "_componentQuotes", type: "bytes[]" }, { internalType: "address", name: "_issuanceModule", type: "address" }, { internalType: "bool", name: "_isDebtIssuance", type: "bool" }], name: "redeemExactSetForToken", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "setController", outputs: [{ internalType: "contract IController", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "swapTarget", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC20[]", name: "_tokens", type: "address[]" }, { internalType: "address payable", name: "_to", type: "address" }], name: "withdrawTokens", outputs: [], stateMutability: "payable", type: "function" }, { stateMutability: "payable", type: "receive" }];

// src/utils/contracts.ts
function getExchangeIssuanceLeveragedContractAddress(chainId = 1 /* Mainnet */) {
  if (chainId === 137 /* Polygon */)
    return ExchangeIssuanceLeveragedPolygonAddress;
  return ExchangeIssuanceLeveragedMainnetAddress;
}
var getFlashMintLeveragedContract = (signerOrProvider, chainId = 137 /* Polygon */) => {
  const contractAddress = getExchangeIssuanceLeveragedContractAddress(chainId);
  return new Contract(
    contractAddress,
    ExchangeIssuanceLeveraged_default,
    signerOrProvider
  );
};
var getFlashMintLeveragedForCompoundContract = (signerOrProvider) => {
  return new Contract(
    FlashMintLeveragedForCompoundAddress,
    FlashMintLeveragedForCompound_default,
    signerOrProvider
  );
};
var getFlashMintWrappedContract = (signerOrProvider) => {
  return new Contract(
    FlashMintWrappedAddress,
    FlashMintWrapped_default,
    signerOrProvider
  );
};
var getFlashMint4626Contract = (signerOrProvider) => {
  return new Contract(
    FlashMint4626Address,
    FlashMint4626_default,
    signerOrProvider
  );
};
var getFlashMintLeveragedContractForToken = (token, signerOrProvider, chainId = 137 /* Polygon */) => {
  switch (token) {
    case BTC2xFlexibleLeverageIndex.symbol:
    case ETH2xFlexibleLeverageIndex.symbol:
      return getFlashMintLeveragedForCompoundContract(signerOrProvider);
    default:
      return getFlashMintLeveragedContract(signerOrProvider, chainId);
  }
};
function getExchangeIssuanceZeroExContractAddress(chainId = 1 /* Mainnet */) {
  if (chainId === 137 /* Polygon */)
    return ExchangeIssuanceZeroExPolygonAddress;
  return ExchangeIssuanceZeroExMainnetAddress;
}
var getFlashMintZeroExContract = (providerSigner, chainId = 1 /* Mainnet */) => {
  const contractAddress = getExchangeIssuanceZeroExContractAddress(chainId);
  return new Contract(
    contractAddress,
    ExchangeIssuanceZeroEx_default,
    providerSigner
  );
};
var getFlashMintZeroExContractForToken = (token, providerSigner, chainId = 1 /* Mainnet */) => {
  switch (token) {
    case DiversifiedStakedETHIndex.symbol:
    case GitcoinStakedETHIndex.symbol:
    case wsETH2.symbol:
      return getIndexFlashMintZeroExContract(providerSigner, chainId);
    default:
      return getFlashMintZeroExContract(providerSigner, chainId);
  }
};
function getIndexFlashMintZeroExContractAddress(chainId) {
  switch (chainId) {
    default:
      return FlashMintZeroExMainnetAddress;
  }
}
var getIndexFlashMintZeroExContract = (providerSigner, chainId = 1 /* Mainnet */) => {
  const contractAddress = getIndexFlashMintZeroExContractAddress(chainId);
  return new Contract(contractAddress, FlashMintZeroEx_default, providerSigner);
};

// src/flashMint/builders/utils.ts
function isEmptyString(data) {
  return typeof data === "string" && data.trim().length == 0;
}
function isInvalidAmount(amount) {
  return amount.isZero() || amount.isNegative();
}

// src/flashMint/builders/leveraged.ts
var LeveragedTransactionBuilder = class {
  constructor(provider) {
    this.provider = provider;
  }
  async build(request) {
    const isValidRequest = this.isValidRequest(request);
    if (!isValidRequest)
      return null;
    const {
      indexToken,
      indexTokenSymbol,
      indexTokenAmount,
      inputOutputToken,
      inputOutputTokenSymbol,
      inputOutputTokenAmount,
      isMinting,
      swapDataDebtCollateral,
      swapDataPaymentToken
    } = request;
    const network = await this.provider.getNetwork();
    const chainId = network.chainId;
    const inputOutputTokenIsEth = inputOutputTokenSymbol === "ETH";
    const contract = getFlashMintLeveragedContractForToken(
      indexTokenSymbol,
      this.provider,
      chainId
    );
    if (isMinting) {
      if (inputOutputTokenIsEth) {
        return await contract.populateTransaction.issueExactSetFromETH(
          indexToken,
          indexTokenAmount,
          swapDataDebtCollateral,
          swapDataPaymentToken,
          { value: inputOutputTokenAmount }
        );
      } else {
        return await contract.populateTransaction.issueExactSetFromERC20(
          indexToken,
          indexTokenAmount,
          inputOutputToken,
          inputOutputTokenAmount,
          // _maxAmountInputToken
          swapDataDebtCollateral,
          swapDataPaymentToken
        );
      }
    } else {
      if (inputOutputTokenIsEth) {
        return await contract.populateTransaction.redeemExactSetForETH(
          indexToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _minAmountOutputToken
          swapDataDebtCollateral,
          swapDataPaymentToken
        );
      } else {
        return await contract.populateTransaction.redeemExactSetForERC20(
          indexToken,
          indexTokenAmount,
          inputOutputToken,
          inputOutputTokenAmount,
          // _minAmountOutputToken
          swapDataDebtCollateral,
          swapDataPaymentToken
        );
      }
    }
  }
  isValidSwapData(swapData) {
    if (swapData.exchange === 3 /* UniV3 */ && swapData.fees.length !== swapData.path.length - 1)
      return false;
    if (swapData.path.length === 0)
      return false;
    if (swapData.pool.length !== 42)
      return false;
    return true;
  }
  isValidRequest(request) {
    const {
      indexToken,
      indexTokenAmount,
      inputOutputToken,
      inputOutputTokenAmount,
      swapDataDebtCollateral,
      swapDataPaymentToken
    } = request;
    if (isEmptyString(indexToken))
      return false;
    if (isEmptyString(inputOutputToken))
      return false;
    if (isInvalidAmount(indexTokenAmount))
      return false;
    if (isInvalidAmount(inputOutputTokenAmount))
      return false;
    if (!this.isValidSwapData(swapDataDebtCollateral))
      return false;
    if (!this.isValidSwapData(swapDataPaymentToken))
      return false;
    return true;
  }
};

// src/flashMint/builders/wrapped.ts
var WrappedTransactionBuilder = class {
  constructor(provider) {
    this.provider = provider;
  }
  async build(request) {
    const isValidRequest = this.isValidRequest(request);
    if (!isValidRequest)
      return null;
    const {
      componentSwapData,
      componentWrapData,
      indexToken,
      indexTokenAmount,
      inputOutputToken,
      inputOutputTokenSymbol,
      inputOutputTokenAmount,
      isMinting
    } = request;
    const inputOutputTokenIsEth = inputOutputTokenSymbol === "ETH";
    const contract = getFlashMintWrappedContract(this.provider);
    let tx = null;
    if (isMinting) {
      if (inputOutputTokenIsEth) {
        tx = await contract.populateTransaction.issueExactSetFromETH(
          indexToken,
          indexTokenAmount,
          componentSwapData,
          componentWrapData,
          { value: inputOutputTokenAmount }
        );
      } else {
        tx = await contract.populateTransaction.issueExactSetFromERC20(
          indexToken,
          inputOutputToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _maxAmountInputToken
          componentSwapData,
          componentWrapData
        );
      }
    } else {
      if (inputOutputTokenIsEth) {
        tx = await contract.populateTransaction.redeemExactSetForETH(
          indexToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _minOutputReceive
          componentSwapData,
          componentWrapData
        );
      } else {
        tx = await contract.populateTransaction.redeemExactSetForERC20(
          indexToken,
          inputOutputToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _minOutputReceive
          componentSwapData,
          componentWrapData
        );
      }
    }
    return tx;
  }
  isValidRequest(request) {
    const {
      componentSwapData,
      componentWrapData,
      indexToken,
      indexTokenAmount,
      inputOutputToken,
      inputOutputTokenAmount
    } = request;
    if (isEmptyString(indexToken))
      return false;
    if (isEmptyString(inputOutputToken))
      return false;
    if (isInvalidAmount(indexTokenAmount))
      return false;
    if (isInvalidAmount(inputOutputTokenAmount))
      return false;
    if (componentSwapData.length === 0)
      return false;
    if (componentWrapData.length === 0)
      return false;
    if (componentSwapData.length !== componentWrapData.length)
      return false;
    return true;
  }
};
var ERC4626TransactionBuilder = class {
  constructor(provider) {
    this.provider = provider;
  }
  async build(request) {
    const isValidRequest = this.isValidRequest(request);
    if (!isValidRequest)
      return null;
    const {
      componentSwapData,
      indexToken,
      indexTokenAmount,
      inputOutputToken,
      inputOutputTokenSymbol,
      inputOutputTokenAmount,
      isMinting
    } = request;
    const inputOutputTokenIsEth = inputOutputTokenSymbol === "ETH";
    const contract = getFlashMint4626Contract(this.provider);
    let tx = null;
    if (isMinting) {
      if (inputOutputTokenIsEth) {
        tx = await contract.populateTransaction.issueExactSetFromETH(
          indexToken,
          indexTokenAmount,
          componentSwapData,
          { value: inputOutputTokenAmount }
        );
      } else {
        tx = await contract.populateTransaction.issueExactSetFromERC20(
          indexToken,
          inputOutputToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _maxAmountInputToken
          componentSwapData
        );
      }
    } else {
      if (inputOutputTokenIsEth) {
        tx = await contract.populateTransaction.redeemExactSetForETH(
          indexToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _minOutputReceive
          componentSwapData
        );
      } else {
        tx = await contract.populateTransaction.redeemExactSetForERC20(
          indexToken,
          inputOutputToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _minOutputReceive
          componentSwapData
        );
      }
    }
    return tx;
  }
  isValidRequest(request) {
    const {
      componentSwapData,
      indexToken,
      indexTokenAmount,
      inputOutputToken,
      inputOutputTokenAmount
    } = request;
    if (isEmptyString(indexToken))
      return false;
    if (isEmptyString(inputOutputToken))
      return false;
    if (isInvalidAmount(indexTokenAmount))
      return false;
    if (isInvalidAmount(inputOutputTokenAmount))
      return false;
    if (componentSwapData.length === 0)
      return false;
    return true;
  }
};

// src/utils/issuanceModules.ts
function getIndexEthIssuanceModule(tokenSymbol) {
  switch (tokenSymbol) {
    default:
      return { address: IndexDebtIssuanceModuleV2Address, isDebtIssuance: true };
  }
}
function getEthIssuanceModuleAddress(tokenSymbol) {
  switch (tokenSymbol) {
    case DiversifiedStakedETHIndex.symbol:
    case GitcoinStakedETHIndex.symbol:
    case MoneyMarketIndexToken.symbol:
    case wsETH2.symbol:
      return getIndexEthIssuanceModule(tokenSymbol);
    case BTC2xFlexibleLeverageIndex.symbol:
    case ETH2xFlexibleLeverageIndex.symbol:
    case GMIIndex.symbol:
      return { address: DebtIssuanceModuleAddress, isDebtIssuance: true };
    case InterestCompoundingETHIndex.symbol:
    case JPGIndex.symbol:
    case B4BIndex.symbol:
      return { address: DebtIssuanceModuleV2Address, isDebtIssuance: true };
    default:
      return { address: BasicIssuanceModuleAddress, isDebtIssuance: false };
  }
}
function getPolygonIssuanceModuleAddress(tokenSymbol) {
  switch (tokenSymbol) {
    case ETH2xFlexibleLeverageIndexPolygon.symbol:
    case GMIIndex.symbol:
    case InverseETHFlexibleLeverageIndex.symbol:
    case InverseMATICFlexibleLeverageIndex.symbol:
    case MATIC2xFlexibleLeverageIndex.symbol:
    case B4BIndex.symbol:
      return {
        address: DebtIssuanceModuleV2PolygonAddress,
        isDebtIssuance: true
      };
    default:
      return {
        address: BasicIssuanceModulePolygonAddress,
        isDebtIssuance: false
      };
  }
}
function getIssuanceModule(tokenSymbol, chainId = 1 /* Mainnet */) {
  return chainId === 137 /* Polygon */ ? getPolygonIssuanceModuleAddress(tokenSymbol) : getEthIssuanceModuleAddress(tokenSymbol);
}

// src/flashMint/builders/zeroex.ts
var ZeroExTransactionBuilder = class {
  constructor(provider) {
    this.provider = provider;
  }
  async build(request) {
    const isValidRequest = this.isValidRequest(request);
    if (!isValidRequest)
      return null;
    const {
      componentQuotes,
      indexToken,
      indexTokenSymbol,
      indexTokenAmount,
      inputOutputToken,
      inputOutputTokenSymbol,
      inputOutputTokenAmount,
      isMinting
    } = request;
    const network = await this.provider.getNetwork();
    const chainId = network.chainId;
    const inputOutputTokenIsEth = inputOutputTokenSymbol === "ETH";
    const issuanceModule = getIssuanceModule(indexTokenSymbol, chainId);
    const contract = getFlashMintZeroExContractForToken(
      indexTokenSymbol,
      this.provider,
      chainId
    );
    if (isMinting) {
      if (inputOutputTokenIsEth) {
        return await contract.populateTransaction.issueExactSetFromETH(
          indexToken,
          indexTokenAmount,
          componentQuotes,
          issuanceModule.address,
          issuanceModule.isDebtIssuance,
          { value: inputOutputTokenAmount }
        );
      } else {
        return await contract.populateTransaction.issueExactSetFromToken(
          indexToken,
          inputOutputToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _maxAmountInputToken
          componentQuotes,
          issuanceModule.address,
          issuanceModule.isDebtIssuance
        );
      }
    } else {
      if (inputOutputTokenIsEth) {
        return await contract.populateTransaction.redeemExactSetForETH(
          indexToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _minEthReceive
          componentQuotes,
          issuanceModule.address,
          issuanceModule.isDebtIssuance
        );
      } else {
        return await contract.populateTransaction.redeemExactSetForToken(
          indexToken,
          inputOutputToken,
          indexTokenAmount,
          inputOutputTokenAmount,
          // _minOutputReceive
          componentQuotes,
          issuanceModule.address,
          issuanceModule.isDebtIssuance
        );
      }
    }
  }
  isValidRequest(request) {
    const {
      componentQuotes,
      indexToken,
      indexTokenAmount,
      inputOutputToken,
      inputOutputTokenAmount
    } = request;
    if (isEmptyString(indexToken))
      return false;
    if (isEmptyString(inputOutputToken))
      return false;
    if (isInvalidAmount(indexTokenAmount))
      return false;
    if (isInvalidAmount(inputOutputTokenAmount))
      return false;
    if (componentQuotes.length === 0)
      return false;
    return true;
  }
};

// src/flashMint/leveraged.ts
var FlashMintLeveraged = class {
  /**
   * @param contract    An instance of an FlashMintLeveraged contract
   */
  constructor(contract) {
    /**
     * Returns the collateral / debt token addresses and amounts for a leveraged index.
     *
     * @param _setToken     Address of the Set token to be minted / redeemed
     * @param _setAmount    Amount of tokens to mint / redeem
     * @param _isIssuance   Boolean indicating if the Set token is to be issued/minted or redeemed
     *
     * @return Struct containing the collateral / debt token addresses and amounts.
     */
    this.getLeveragedTokenData = async (_setToken, _setAmount, _isIssuance) => {
      console.log(_setToken, _setAmount, _isIssuance);
      try {
        return await this.contract.getLeveragedTokenData(
          _setToken,
          _setAmount,
          _isIssuance
        );
      } catch (error) {
        console.error("Error getting leveraged token data", error);
        return null;
      }
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
    this.mintExactSetFromERC20 = async (_setToken, _setAmount, _inputToken, _maxAmountInputToken, _swapDataDebtForCollateral, _swapDataInputToken, overrides) => {
      try {
        const issueSetTx = await this.contract.issueExactSetFromERC20(
          _setToken,
          _setAmount,
          _inputToken,
          _maxAmountInputToken,
          _swapDataDebtForCollateral,
          _swapDataInputToken,
          overrides
        );
        return issueSetTx;
      } catch (error) {
        console.error("Error issuing exact set from ERC20", error);
        return null;
      }
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
    this.mintExactSetFromETH = async (_setToken, _setAmount, _swapDataDebtForCollateral, _swapDataInputToken, maxInput, overrides) => {
      try {
        const txOverrides = overrides;
        txOverrides.value = maxInput;
        const issueSetTx = await this.contract.issueExactSetFromETH(
          _setToken,
          _setAmount,
          _swapDataDebtForCollateral,
          _swapDataInputToken,
          txOverrides
        );
        return issueSetTx;
      } catch (error) {
        console.error("Error issuing exact set from ETH", error);
        return null;
      }
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
    this.redeemExactSetForERC20 = async (_setToken, _setAmount, _outputToken, _minAmountOutputToken, _swapDataCollateralForDebt, _swapDataOutputToken, overrides) => {
      try {
        const redeemSetTx = await this.contract.redeemExactSetForERC20(
          _setToken,
          _setAmount,
          _outputToken,
          _minAmountOutputToken,
          _swapDataCollateralForDebt,
          _swapDataOutputToken,
          overrides
        );
        return redeemSetTx;
      } catch (error) {
        console.error("Error redeeming exact set for ERC20", error);
        return null;
      }
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
  async redeemExactSetForETH(_setToken, _setAmount, _minAmountOutputToken, _swapDataCollateralForDebt, _swapDataOutputToken, overrides) {
    try {
      const redeemSetTx = await this.contract.redeemExactSetForETH(
        _setToken,
        _setAmount,
        _minAmountOutputToken,
        _swapDataCollateralForDebt,
        _swapDataOutputToken,
        overrides
      );
      return redeemSetTx;
    } catch (error) {
      console.error("Error redeeming exact set for ETH", error);
      return null;
    }
  }
};

// src/flashMint/zeroEx.ts
var FlashMintZeroEx = class {
  /**
   * @param contract    An instance of an FlashMintZeroEx contract
   */
  constructor(contract) {
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
    this.getRequiredIssuanceComponents = async (_issuanceModule, _isDebtIssuance, _setToken, _amountSetToken) => {
      try {
        const issueCompTx = await this.contract.getRequiredIssuanceComponents(
          _issuanceModule,
          _isDebtIssuance,
          _setToken,
          _amountSetToken
        );
        return issueCompTx;
      } catch (err) {
        console.error("Error getting required issuance components", err);
        return { components: [], positions: [] };
      }
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
    this.getRequiredRedemptionComponents = async (_issuanceModule, _isDebtIssuance, _setToken, _amountSetToken) => {
      try {
        const redeemCompTx = await this.contract.getRequiredRedemptionComponents(
          _issuanceModule,
          _isDebtIssuance,
          _setToken,
          _amountSetToken
        );
        return redeemCompTx;
      } catch (err) {
        console.error("Error getting required redemption components", err);
        return { components: [], positions: [] };
      }
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
    this.mintExactSetFromETH = async (_setToken, _amountSetToken, _componentQuotes, _issuanceModule, _isDebtIssuance, maxInput, overrides) => {
      try {
        const txOverrides = overrides;
        txOverrides.value = maxInput;
        const issueSetTx = await this.contract.issueExactSetFromETH(
          _setToken,
          _amountSetToken,
          _componentQuotes,
          _issuanceModule,
          _isDebtIssuance,
          txOverrides
        );
        return issueSetTx;
      } catch (err) {
        console.error("Error issuing exact set from eth", err);
        return null;
      }
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
    this.mintExactSetFromToken = async (_setToken, _inputToken, _amountSetToken, _maxAmountInputToken, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides) => {
      try {
        const issueSetTx = await this.contract.issueExactSetFromToken(
          _setToken,
          _inputToken,
          _amountSetToken,
          _maxAmountInputToken,
          _componentQuotes,
          _issuanceModule,
          _isDebtIssuance,
          overrides
        );
        return issueSetTx;
      } catch (err) {
        console.error("Error issuing exact set from token", err);
        return null;
      }
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
    this.redeemExactSetForETH = async (_setToken, _amountSetToken, _minEthReceive, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides) => {
      try {
        const redeemSetTx = await this.contract.redeemExactSetForETH(
          _setToken,
          _amountSetToken,
          _minEthReceive,
          _componentQuotes,
          _issuanceModule,
          _isDebtIssuance,
          overrides
        );
        return redeemSetTx;
      } catch (err) {
        console.error("Error redeeming exact set for eth", err);
        return null;
      }
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
    this.redeemExactSetForToken = async (_setToken, _outputToken, _amountSetToken, _minOutputReceive, _componentQuotes, _issuanceModule, _isDebtIssuance, overrides) => {
      try {
        const redeemSetTx = await this.contract.redeemExactSetForToken(
          _setToken,
          _outputToken,
          _amountSetToken,
          _minOutputReceive,
          _componentQuotes,
          _issuanceModule,
          _isDebtIssuance,
          overrides
        );
        return redeemSetTx;
      } catch (err) {
        console.error("Error redeeming exact set for token", err);
        return null;
      }
    };
    this.contract = contract;
  }
};

// src/quote/wrapped/index.ts
import { BigNumber as BigNumber3 } from "@ethersproject/bignumber";

// src/utils/componentSwapData.ts
import { BigNumber as BigNumber2 } from "@ethersproject/bignumber";
import { Contract as Contract2 } from "@ethersproject/contracts";
var IssuanceAbi = [
  "function getRequiredComponentIssuanceUnits(address _setToken, uint256 _quantity) external view returns (address[] memory, uint256[] memory, uint256[] memory)",
  "function getRequiredComponentRedemptionUnits(address _setToken, uint256 _quantity) external view returns (address[] memory, uint256[] memory, uint256[] memory)"
];
var erc4626Abi = [
  "constructor(address _morpho, address _morphoToken, address _lens, address _recipient)",
  "error ZeroAddress()",
  "event Accrued(address indexed user, uint256 index, uint256 unclaimed)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)",
  "event Claimed(address indexed user, uint256 claimed)",
  "event Deposit(address indexed caller, address indexed owner, uint256 assets, uint256 shares)",
  "event Initialized(uint8 version)",
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
  "event RewardsTransferred(address recipient, uint256 amount)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Withdraw(address indexed caller, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function asset() view returns (address)",
  "function balanceOf(address account) view returns (uint256)",
  "function claimRewards(address _user) returns (uint256 rewardsAmount)",
  "function comp() view returns (address)",
  "function convertToAssets(uint256 shares) view returns (uint256 assets)",
  "function convertToShares(uint256 assets) view returns (uint256 shares)",
  "function decimals() view returns (uint8)",
  "function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)",
  "function deposit(uint256 assets, address receiver) returns (uint256)",
  "function increaseAllowance(address spender, uint256 addedValue) returns (bool)",
  "function initialize(address _poolToken, string _name, string _symbol, uint256 _initialDeposit)",
  "function lens() view returns (address)",
  "function maxDeposit(address) view returns (uint256)",
  "function maxMint(address) view returns (uint256)",
  "function maxRedeem(address owner) view returns (uint256)",
  "function maxWithdraw(address owner) view returns (uint256)",
  "function mint(uint256 shares, address receiver) returns (uint256)",
  "function morpho() view returns (address)",
  "function morphoToken() view returns (address)",
  "function name() view returns (string)",
  "function owner() view returns (address)",
  "function poolToken() view returns (address)",
  "function previewDeposit(uint256 assets) view returns (uint256)",
  "function previewMint(uint256 shares) view returns (uint256)",
  "function previewRedeem(uint256 shares) view returns (uint256)",
  "function previewWithdraw(uint256 assets) view returns (uint256)",
  "function recipient() view returns (address)",
  "function redeem(uint256 shares, address receiver, address owner) returns (uint256)",
  "function renounceOwnership()",
  "function rewardsIndex() view returns (uint256)",
  "function symbol() view returns (string)",
  "function totalAssets() view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function transferOwnership(address newOwner)",
  "function transferRewards()",
  "function userRewards(address) view returns (uint128 index, uint128 unclaimed)",
  "function wEth() view returns (address)",
  "function withdraw(uint256 assets, address receiver, address owner) returns (uint256)"
];
var dai = DAI.address;
var usdc = USDC.address;
var usdt = USDT.address;
var weth = WETH.address;
var DEFAULT_SLIPPAGE = 15e-4;
var isFCASH = (address) => [
  "0x278039398A5eb29b6c2FB43789a38A84C6085266",
  "0xe09B1968851478f20a43959d8a212051367dF01A"
].includes(address);
var getAmountOfAssetToObtainShares = async (component, shares, provider, slippage = DEFAULT_SLIPPAGE) => {
  const componentContract = new Contract2(component, erc4626Abi, provider);
  const defaultSlippageBN = BigNumber2.from(Math.round(slippage * 1e4));
  const slippageBigNumber = isFCASH(component) ? defaultSlippageBN.mul(3) : defaultSlippageBN;
  const multiplier = BigNumber2.from(1e4).add(slippageBigNumber);
  const buyUnderlyingAmount = await componentContract.convertToAssets(shares);
  return buyUnderlyingAmount.mul(multiplier).div(1e4);
};
async function getIssuanceComponentSwapData(indexTokenSymbol, indexToken, inputToken, indexTokenAmount, provider) {
  const issuanceModule = getIssuanceModule(indexTokenSymbol);
  const issuance = new Contract2(issuanceModule.address, IssuanceAbi, provider);
  const [issuanceComponents, issuanceUnits] = await issuance.getRequiredComponentIssuanceUnits(
    indexToken,
    indexTokenAmount
  );
  const underlyingERC20sPromises = issuanceComponents.map(
    (component) => getUnderlyingErc20(component, provider)
  );
  const buyAmountsPromises = issuanceComponents.map(
    (component, index) => getAmountOfAssetToObtainShares(component, issuanceUnits[index], provider)
  );
  const buyAmounts = await Promise.all(buyAmountsPromises);
  const wrappedTokens = await Promise.all(underlyingERC20sPromises);
  const swapData = issuanceComponents.map((_, index) => {
    const wrappedToken = wrappedTokens[index];
    const underlyingERC20 = wrappedToken.underlyingErc20;
    const buyUnderlyingAmount = buyAmounts[index];
    return {
      underlyingERC20: underlyingERC20.address,
      buyUnderlyingAmount,
      dexData: getStaticIssuanceSwapData(inputToken, underlyingERC20.address)
    };
  });
  return swapData;
}
async function getIssuanceERC4626SwapData(indexTokenSymbol, indexToken, inputToken, indexTokenAmount, provider) {
  const issuanceModule = getIssuanceModule(indexTokenSymbol);
  const issuance = new Contract2(issuanceModule.address, IssuanceAbi, provider);
  const [issuanceComponents] = await issuance.getRequiredComponentIssuanceUnits(
    indexToken,
    indexTokenAmount
  );
  const underlyingERC20sPromises = issuanceComponents.map(
    (component) => getUnderlyingErc20(component, provider)
  );
  const wrappedTokens = await Promise.all(underlyingERC20sPromises);
  const swapData = issuanceComponents.map((_, index) => {
    const wrappedToken = wrappedTokens[index];
    const underlyingERC20 = wrappedToken.underlyingErc20;
    return {
      dexData: getStaticIssuanceSwapData(inputToken, underlyingERC20.address)
    };
  });
  return swapData;
}
async function getRedemptionERC4626SwapData(indexTokenSymbol, indexToken, outputToken, indexTokenAmount, provider) {
  const issuanceModule = getIssuanceModule(indexTokenSymbol);
  const issuance = new Contract2(issuanceModule.address, IssuanceAbi, provider);
  const [issuanceComponents] = await issuance.getRequiredComponentRedemptionUnits(
    indexToken,
    indexTokenAmount
  );
  const underlyingERC20sPromises = issuanceComponents.map(
    (component) => getUnderlyingErc20(component, provider)
  );
  const wrappedTokens = await Promise.all(underlyingERC20sPromises);
  const swapData = issuanceComponents.map((_, index) => {
    const wrappedToken = wrappedTokens[index];
    const underlyingERC20 = wrappedToken.underlyingErc20;
    return {
      dexData: getStaticRedemptionSwapData(
        underlyingERC20.address,
        outputToken
      )
    };
  });
  return swapData;
}
async function getRedemptionComponentSwapData(indexTokenSymbol, indexToken, outputToken, indexTokenAmount, provider) {
  const issuanceModule = getIssuanceModule(indexTokenSymbol);
  const issuance = new Contract2(issuanceModule.address, IssuanceAbi, provider);
  const [issuanceComponents, issuanceUnits] = await issuance.getRequiredComponentRedemptionUnits(
    indexToken,
    indexTokenAmount
  );
  const underlyingERC20sPromises = issuanceComponents.map(
    (component) => getUnderlyingErc20(component, provider)
  );
  const wrappedTokens = await Promise.all(underlyingERC20sPromises);
  const buyAmountsPromises = issuanceComponents.map(
    (component, index) => getAmountOfAssetToObtainShares(
      component,
      issuanceUnits[index],
      provider,
      -DEFAULT_SLIPPAGE
    )
  );
  const buyAmounts = await Promise.all(buyAmountsPromises);
  const swapData = issuanceComponents.map((_, index) => {
    const wrappedToken = wrappedTokens[index];
    const underlyingERC20 = wrappedToken.underlyingErc20;
    const buyUnderlyingAmount = buyAmounts[index];
    return {
      underlyingERC20: underlyingERC20.address,
      buyUnderlyingAmount,
      dexData: getStaticRedemptionSwapData(
        underlyingERC20.address,
        outputToken
      )
    };
  });
  return swapData;
}
function getStaticIssuanceSwapData(inputToken, outputToken) {
  const inputTokenIsWeth = inputToken === weth;
  return {
    exchange: 3 /* UniV3 */,
    path: inputTokenIsWeth ? [inputToken, outputToken] : [inputToken, weth, outputToken],
    fees: inputTokenIsWeth ? [3e3] : [3e3, 3e3],
    pool: "0x0000000000000000000000000000000000000000"
  };
}
function getStaticRedemptionSwapData(inputToken, outputToken) {
  const outputTokenIsWeth = outputToken === weth;
  return {
    exchange: 3 /* UniV3 */,
    path: outputTokenIsWeth ? [inputToken, outputToken] : [inputToken, weth, outputToken],
    fees: outputTokenIsWeth ? [3e3] : [3e3, 3e3],
    pool: "0x0000000000000000000000000000000000000000"
  };
}
async function getUnderlyingErc20(token, provider) {
  const IERC4262_ABI = [
    "function asset() public view returns (address)",
    "function decimals() public view returns (uint256)"
  ];
  const contract = new Contract2(token, IERC4262_ABI, provider);
  const underlyingERC20 = await contract.asset();
  const decimals = await contract.decimals();
  switch (underlyingERC20.toLowerCase()) {
    case dai.toLowerCase():
      return {
        address: token,
        decimals,
        underlyingErc20: {
          address: dai,
          decimals: 18,
          symbol: DAI.symbol
        }
      };
    case usdc.toLowerCase():
      return {
        address: token,
        decimals,
        underlyingErc20: {
          address: usdc,
          decimals: 6,
          symbol: USDC.symbol
        }
      };
    case usdt.toLowerCase():
      return {
        address: token,
        decimals,
        underlyingErc20: {
          address: usdt,
          decimals: 6,
          symbol: USDT.symbol
        }
      };
    default:
      return null;
  }
}

// src/utils/numbers.ts
import { parseUnits } from "@ethersproject/units";
var wei = (input, power = 18) => {
  const value = typeof input === "number" ? input.toString() : input;
  return parseUnits(value, power);
};

// src/utils/slippage.ts
function slippageAdjustedTokenAmount(tokenAmount, tokenDecimals, slippage, isMinting) {
  if (isMinting) {
    return tokenAmount.mul(wei(100, tokenDecimals)).div(wei(100 - slippage, tokenDecimals));
  }
  return tokenAmount.mul(wei(100, tokenDecimals)).div(wei(100 + slippage, tokenDecimals));
}

// src/utils/wrapData.ts
var erc4626WrapV2AdapterName = "ERC4626WrapV2Adapter";
var ZERO_BYTES = "0x0000000000000000000000000000000000000000";
function getWrapData(tokenSymbol) {
  if (tokenSymbol !== MoneyMarketIndexToken.symbol)
    return [];
  return [
    {
      integrationName: erc4626WrapV2AdapterName,
      wrapData: ZERO_BYTES
    },
    {
      integrationName: erc4626WrapV2AdapterName,
      wrapData: ZERO_BYTES
    },
    {
      integrationName: erc4626WrapV2AdapterName,
      wrapData: ZERO_BYTES
    },
    {
      integrationName: erc4626WrapV2AdapterName,
      wrapData: ZERO_BYTES
    },
    {
      integrationName: erc4626WrapV2AdapterName,
      wrapData: ZERO_BYTES
    },
    {
      integrationName: erc4626WrapV2AdapterName,
      wrapData: ZERO_BYTES
    }
  ];
}

// src/quote/wrapped/index.ts
var WrappedQuoteProvider = class {
  constructor(provider) {
    this.provider = provider;
  }
  async getQuote(request) {
    const { provider } = this;
    const { inputToken, indexTokenAmount, isMinting, outputToken, slippage } = request;
    const indexToken = isMinting ? outputToken : inputToken;
    const indexTokenSymbol = indexToken.symbol;
    const componentSwapData = isMinting ? await getIssuanceComponentSwapData(
      indexTokenSymbol,
      indexToken.address,
      inputToken.address,
      indexTokenAmount,
      provider
    ) : await getRedemptionComponentSwapData(
      indexTokenSymbol,
      indexToken.address,
      outputToken.address,
      indexTokenAmount,
      provider
    );
    const componentWrapData = getWrapData(indexToken.symbol);
    if (componentSwapData.length !== componentSwapData.length)
      return null;
    let estimatedInputOutputAmount = BigNumber3.from(0);
    const contract = getFlashMintWrappedContract(provider);
    if (isMinting) {
      estimatedInputOutputAmount = await contract.callStatic.getIssueExactSet(
        indexToken.address,
        inputToken.address,
        indexTokenAmount,
        componentSwapData
      );
    } else {
      estimatedInputOutputAmount = await contract.callStatic.getRedeemExactSet(
        indexToken.address,
        outputToken.address,
        indexTokenAmount,
        componentSwapData
      );
    }
    const inputOutputTokenAmount = slippageAdjustedTokenAmount(
      estimatedInputOutputAmount,
      isMinting ? inputToken.decimals : outputToken.decimals,
      slippage,
      isMinting
    );
    console.log(estimatedInputOutputAmount.toString(), "estimate");
    console.log(inputOutputTokenAmount.toString(), "slippage adjusted");
    const quote = {
      componentSwapData,
      componentWrapData,
      indexTokenAmount,
      inputOutputTokenAmount
    };
    return quote;
  }
};
var ERC4626QuoteProvider = class {
  constructor(provider) {
    this.provider = provider;
  }
  async getQuote(request) {
    const { provider } = this;
    const { inputToken, indexTokenAmount, isMinting, outputToken, slippage } = request;
    const indexToken = isMinting ? outputToken : inputToken;
    const indexTokenSymbol = indexToken.symbol;
    const componentSwapData = isMinting ? await getIssuanceERC4626SwapData(
      indexTokenSymbol,
      indexToken.address,
      inputToken.address,
      indexTokenAmount,
      provider
    ) : await getRedemptionERC4626SwapData(
      indexTokenSymbol,
      indexToken.address,
      outputToken.address,
      indexTokenAmount,
      provider
    );
    let estimatedInputOutputAmount = BigNumber3.from(0);
    const contract = getFlashMint4626Contract(provider);
    if (isMinting) {
      estimatedInputOutputAmount = await contract.callStatic.getIssueExactSet(
        indexToken.address,
        inputToken.address,
        indexTokenAmount,
        componentSwapData
      );
    } else {
      estimatedInputOutputAmount = await contract.callStatic.getRedeemExactSet(
        indexToken.address,
        outputToken.address,
        indexTokenAmount,
        componentSwapData
      );
    }
    const inputOutputTokenAmount = slippageAdjustedTokenAmount(
      estimatedInputOutputAmount,
      isMinting ? inputToken.decimals : outputToken.decimals,
      slippage,
      isMinting
    );
    console.log(estimatedInputOutputAmount.toString(), "estimate");
    console.log(inputOutputTokenAmount.toString(), "slippage adjusted");
    const quote = {
      componentSwapData,
      indexTokenAmount,
      inputOutputTokenAmount
    };
    return quote;
  }
};

// src/quote/index.ts
var FlashMintContractType = /* @__PURE__ */ ((FlashMintContractType2) => {
  FlashMintContractType2[FlashMintContractType2["leveraged"] = 0] = "leveraged";
  FlashMintContractType2[FlashMintContractType2["wrapped"] = 1] = "wrapped";
  FlashMintContractType2[FlashMintContractType2["erc4626"] = 2] = "erc4626";
  FlashMintContractType2[FlashMintContractType2["zeroEx"] = 3] = "zeroEx";
  return FlashMintContractType2;
})(FlashMintContractType || {});
var FlashMintQuoteProvider = class {
  constructor(provider) {
    this.provider = provider;
  }
  async getQuote(request) {
    const { provider } = this;
    const { indexTokenAmount, inputToken, isMinting, outputToken, slippage } = request;
    const indexToken = isMinting ? outputToken : inputToken;
    const inputOutputToken = isMinting ? inputToken : outputToken;
    const contractType = getContractType(indexToken.symbol);
    if (contractType !== 1 /* wrapped */ && contractType !== 2 /* erc4626 */) {
      throw new Error("Index token not supported");
    }
    const contractAddress = getContractAddress(contractType);
    const network = await provider.getNetwork();
    const chainId = network.chainId;
    switch (contractType) {
      case 1 /* wrapped */: {
        const wrappedQuoteProvider = new WrappedQuoteProvider(provider);
        const wrappedQuote = await wrappedQuoteProvider.getQuote(request);
        if (!wrappedQuote)
          return null;
        const builder = new WrappedTransactionBuilder(provider);
        const txRequest = {
          isMinting,
          indexToken: indexToken.address,
          inputOutputToken: inputOutputToken.address,
          inputOutputTokenSymbol: inputOutputToken.symbol,
          indexTokenAmount,
          inputOutputTokenAmount: wrappedQuote.inputOutputTokenAmount,
          componentSwapData: wrappedQuote.componentSwapData,
          componentWrapData: wrappedQuote.componentWrapData
        };
        const tx = await builder.build(txRequest);
        if (!tx)
          return null;
        return {
          chainId,
          contractType,
          contract: contractAddress,
          isMinting,
          inputToken,
          outputToken,
          indexTokenAmount,
          inputOutputAmount: wrappedQuote.inputOutputTokenAmount,
          slippage,
          tx
        };
      }
      case 2 /* erc4626 */: {
        const wrappedQuoteProvider = new ERC4626QuoteProvider(provider);
        const wrappedQuote = await wrappedQuoteProvider.getQuote(request);
        if (!wrappedQuote)
          return null;
        const builder = new ERC4626TransactionBuilder(provider);
        const txRequest = {
          isMinting,
          indexToken: indexToken.address,
          inputOutputToken: inputOutputToken.address,
          inputOutputTokenSymbol: inputOutputToken.symbol,
          indexTokenAmount,
          inputOutputTokenAmount: wrappedQuote.inputOutputTokenAmount,
          componentSwapData: wrappedQuote.componentSwapData
        };
        const tx = await builder.build(txRequest);
        if (!tx)
          return null;
        return {
          chainId,
          contractType,
          contract: contractAddress,
          isMinting,
          inputToken,
          outputToken,
          indexTokenAmount,
          inputOutputAmount: wrappedQuote.inputOutputTokenAmount,
          slippage,
          tx
        };
      }
      default:
        return null;
    }
  }
};
function getContractAddress(contractType) {
  switch (contractType) {
    case 1 /* wrapped */:
      return FlashMintWrappedAddress;
    case 2 /* erc4626 */:
      return FlashMint4626Address;
    default:
      return "";
  }
}
function getContractType(token) {
  if (token === MoneyMarketIndexToken.symbol)
    return 2 /* erc4626 */;
  return null;
}

// src/quote/leveraged/function.ts
import { BigNumber as BigNumber4 } from "@ethersproject/bignumber";
function get0xEchangeKey(exchange) {
  switch (exchange) {
    case 4 /* Curve */:
      return "Curve";
    case 1 /* Quickswap */:
      return "QuickSwap";
    case 2 /* Sushiswap */:
      return "SushiSwap";
    case 3 /* UniV3 */:
      return "Uniswap_V3";
    default:
      return "";
  }
}
function getIncludedSources(isIcEth) {
  const curve = get0xEchangeKey(4 /* Curve */);
  const quickswap = get0xEchangeKey(1 /* Quickswap */);
  const sushi = get0xEchangeKey(2 /* Sushiswap */);
  const uniswap = get0xEchangeKey(3 /* UniV3 */);
  const includedSources = isIcEth ? [curve].toString() : [quickswap, sushi, uniswap].toString();
  return includedSources;
}
async function getLevTokenData(setTokenAddress, setTokenAmount, setTokenSymbol, isIssuance, chainId, provider) {
  const contract = getFlashMintLeveragedContractForToken(
    setTokenSymbol,
    provider,
    chainId
  );
  const flashMint = new FlashMintLeveraged(contract);
  return await flashMint.getLeveragedTokenData(
    setTokenAddress,
    setTokenAmount,
    isIssuance
  );
}
function getPaymentTokenAddress(paymentTokenAddress, paymentTokenSymbol, isMinting, chainId) {
  if (paymentTokenSymbol === ETH.symbol) {
    return "ETH";
  }
  if (paymentTokenSymbol === InterestCompoundingETHIndex.symbol && !isMinting) {
    return stETH.address;
  }
  if (chainId === 137 /* Polygon */ && paymentTokenSymbol === MATIC.symbol) {
    const WMATIC_ADDRESS = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
    return WMATIC_ADDRESS;
  }
  return paymentTokenAddress;
}
async function getSwapDataAndPaymentTokenAmount(setTokenSymbol, collateralToken, collateralShortfall, leftoverCollateral, paymentTokenAddress, isMinting, slippage, includedSources, zeroExApi, chainId) {
  let swapDataPaymentToken = {
    exchange: 0 /* None */,
    path: [],
    fees: [],
    pool: "0x0000000000000000000000000000000000000000"
  };
  const issuanceParams = {
    buyToken: collateralToken,
    buyAmount: collateralShortfall.toString(),
    sellToken: paymentTokenAddress,
    includedSources
  };
  const redeemingParams = {
    buyToken: paymentTokenAddress,
    sellAmount: leftoverCollateral.toString(),
    sellToken: collateralToken,
    includedSources
  };
  let paymentTokenAmount = isMinting ? collateralShortfall : leftoverCollateral;
  if (collateralToken !== paymentTokenAddress && setTokenSymbol !== InterestCompoundingETHIndex.symbol) {
    const result = await getSwapData(
      isMinting ? issuanceParams : redeemingParams,
      slippage,
      chainId,
      zeroExApi
    );
    if (result) {
      const { swapData, zeroExQuote } = result;
      swapDataPaymentToken = swapData;
      paymentTokenAmount = isMinting ? BigNumber4.from(zeroExQuote.sellAmount) : BigNumber4.from(zeroExQuote.buyAmount);
    }
  }
  if (setTokenSymbol === InterestCompoundingETHIndex.symbol) {
    const outputTokenSymbol = paymentTokenAddress === stETH.address ? stETH.symbol : ETH.symbol;
    swapDataPaymentToken = isMinting ? inputSwapData[setTokenSymbol][outputTokenSymbol] : outputSwapData[setTokenSymbol][ETH.symbol];
  }
  return { swapDataPaymentToken, paymentTokenAmount };
}
var getFlashMintLeveragedQuote = async (inputToken, outputToken, setTokenAmount, isMinting, slippage, zeroExApi, provider, chainId) => {
  const setTokenAddress = isMinting ? outputToken.address : inputToken.address;
  const setTokenSymbol = isMinting ? outputToken.symbol : inputToken.symbol;
  const isIcEth = setTokenSymbol === InterestCompoundingETHIndex.symbol;
  const includedSources = getIncludedSources(isIcEth);
  const leveragedTokenData = await getLevTokenData(
    setTokenAddress,
    setTokenAmount,
    setTokenSymbol,
    isMinting,
    chainId,
    provider
  );
  if (leveragedTokenData === null)
    return null;
  const debtCollateralResult = isMinting ? await getSwapDataDebtCollateral(
    leveragedTokenData,
    includedSources,
    slippage,
    chainId,
    zeroExApi
  ) : await getSwapDataCollateralDebt(
    leveragedTokenData,
    includedSources,
    slippage,
    chainId,
    zeroExApi
  );
  if (!debtCollateralResult)
    return null;
  const { collateralObtainedOrSold } = debtCollateralResult;
  let { swapDataDebtCollateral } = debtCollateralResult;
  if (isIcEth) {
    swapDataDebtCollateral = isMinting ? debtCollateralSwapData[setTokenSymbol] : collateralDebtSwapData[setTokenSymbol];
  }
  const collateralShortfall = leveragedTokenData.collateralAmount.sub(
    collateralObtainedOrSold
  );
  const leftoverCollateral = leveragedTokenData.collateralAmount.sub(
    collateralObtainedOrSold
  );
  const inputOutputTokenAddress = getPaymentTokenAddress(
    isMinting ? inputToken.address : outputToken.address,
    isMinting ? inputToken.symbol : outputToken.symbol,
    isMinting,
    chainId
  );
  const { swapDataPaymentToken, paymentTokenAmount } = await getSwapDataAndPaymentTokenAmount(
    setTokenSymbol,
    leveragedTokenData.collateralToken,
    collateralShortfall,
    leftoverCollateral,
    inputOutputTokenAddress,
    isMinting,
    slippage,
    includedSources,
    zeroExApi,
    chainId
  );
  let inputOutputTokenAmount = paymentTokenAmount;
  const inputOuputTokenDecimals = isMinting ? inputToken.decimals : outputToken.decimals;
  inputOutputTokenAmount = slippageAdjustedTokenAmount(
    inputOutputTokenAmount,
    inputOuputTokenDecimals,
    slippage,
    isMinting
  );
  return {
    swapDataDebtCollateral,
    swapDataPaymentToken,
    inputOutputTokenAmount,
    setTokenAmount
  };
};

// src/utils/tokens.ts
function getAddressForToken(token, chainId) {
  switch (chainId) {
    case 1 /* Mainnet */:
      return token.address;
    case 10 /* Optimism */:
      return token.addressOptimism;
    case 137 /* Polygon */:
      return token.addressPolygon;
    default:
      return void 0;
  }
}

// src/quote/zeroEx/componentsQuoteProvider.ts
import { BigNumber as BigNumber5 } from "@ethersproject/bignumber";
var ComponentsQuoteProvider = class {
  constructor(chainId, slippage, wethAddress, zeroExApi) {
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

  async getComponentQuotes(components, positions, isMinting, inputToken, outputToken) {
    if (components.length === 0 || positions.length === 0)
      return null;
    if (components.length !== positions.length)
      return null;
    const { chainId, slippage, zeroExApi } = this;
    const inputTokenAddress = this.getTokenAddressOrWeth(inputToken, chainId);
    const outputTokenAddress = this.getTokenAddressOrWeth(outputToken, chainId);
    const slippagePercentage = slippage / 100;
    const quotePromises = [];
    for (const { index, component } of components.map((component, index) => ({ index, component }))) {
      const buyAmount = positions[index];
      const sellAmount = positions[index];
      const buyToken = isMinting ? component : outputTokenAddress;
      const sellToken = isMinting ? inputTokenAddress : component;
      if (buyToken === sellToken) {
        const amount = isMinting ? buyAmount : sellAmount;
        const fakeResponse = this.getFakeZeroExResponse(amount);
        quotePromises.push(fakeResponse);
      } else {
        const params = isMinting ? {
          buyToken,
          sellToken,
          buyAmount: buyAmount.toString(),
          slippagePercentage
        } : {
          buyToken,
          sellToken,
          sellAmount: sellAmount.toString(),
          slippagePercentage
        };
        const quotePromise = zeroExApi.getSwapQuote(params, chainId != null ? chainId : 1);
        quotePromises.push(quotePromise);
        await new Promise(r => setTimeout(r, 1500));
      }
    }

    const results = await Promise.all(quotePromises);
    const componentQuotes = results.map((result) => result.data);
    const inputOutputTokenAmount = results.map(
      (result) => BigNumber5.from(isMinting ? result.sellAmount : result.buyAmount)
    ).reduce((prevValue, currValue) => {
      return currValue.add(prevValue);
    });
    return {
      componentQuotes,
      inputOutputTokenAmount
    };
  }
  /**
   * This is just a helper function to return a fake ZeroEx response when the
   * component and input/output token are the same.
   */
  async getFakeZeroExResponse(amount) {
    return Promise.resolve({
      buyAmount: amount,
      // Needs valid formatted hash - as otherwise validation will fail
      data: "0x0000000000000000000000000000000000000000",
      sellAmount: amount
    });
  }
  /**
   * Returns the WETH address if token is ETH. Otherwise the token's address.
   * @param token A token of type QuoteToken.
   * @returns a token address as string
   */
  getTokenAddressOrWeth(token, chainId) {
    if (token.symbol === "MATIC") return '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    return token.symbol === "ETH" ? this.wethAddress : token.address;
  }
};

// src/quote/zeroEx/function.ts
var getFlashMintZeroExQuote = async (inputToken, outputToken, setTokenAmount, isMinting, slippage, zeroExApi, provider, chainId) => {
  const inputTokenAddress = inputToken.address;
  const outputTokenAddress = outputToken.address;
  const wethAddress = getAddressForToken(WETH, chainId);
  if (wethAddress === void 0) {
    console.error("Error - WETH address not defined");
    return null;
  }
  const setTokenAddress = isMinting ? outputTokenAddress : inputTokenAddress;
  const setTokenSymbol = isMinting ? outputToken.symbol : inputToken.symbol;
  const { components, positions } = await getRequiredComponents(
    isMinting,
    setTokenAddress,
    setTokenSymbol,
    setTokenAmount,
    provider,
    chainId
  );
  const quoteProvider = new ComponentsQuoteProvider(
    chainId,
    slippage,
    wethAddress,
    zeroExApi
  );
  const quoteResult = await quoteProvider.getComponentQuotes(
    components,
    positions,
    isMinting,
    inputToken,
    outputToken
  );
  if (!quoteResult)
    return null;
  const { componentQuotes, inputOutputTokenAmount: ioTokenAmount } = quoteResult;
  const inputOuputTokenDecimals = isMinting ? inputToken.decimals : outputToken.decimals;
  const inputOutputTokenAmount = slippageAdjustedTokenAmount(
    ioTokenAmount,
    inputOuputTokenDecimals,
    slippage,
    isMinting
  );
  return {
    componentQuotes,
    inputOutputTokenAmount,
    setTokenAmount
  };
};
async function getRequiredComponents(isMinting, setToken, setTokenSymbol, setTokenAmount, provider, chainId) {
  const contract = getFlashMintZeroExContractForToken(
    setTokenSymbol,
    provider,
    chainId
  );
  const flashMint = new FlashMintZeroEx(contract);
  const issuanceModule = getIssuanceModule(setTokenSymbol, chainId);
  const { components, positions } = isMinting ? await flashMint.getRequiredIssuanceComponents(
    issuanceModule.address,
    issuanceModule.isDebtIssuance,
    setToken,
    setTokenAmount
  ) : await flashMint.getRequiredRedemptionComponents(
    issuanceModule.address,
    issuanceModule.isDebtIssuance,
    setToken,
    setTokenAmount
  );
  return { components, positions };
}

// src/utils/0x.ts
import axios from "axios";

var ZeroExApi = class {
  /**
   * @param baseUrl              The base url (default: https://api.0x.org, watch rate limits)
   * @param affiliateAddress     (Optional) Affiliate address
   * @param headersOverride      (Optional) Override for headers
   * @param swapPathOverride     (Optional) Override of the API path - in case your using a custom path format e.g. through a proxy
   */
  constructor(baseUrl = null, affiliateAddress = null, headersOverride = null, swapPathOverride = null) {
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
  buildUrl(path, query, chainId) {
    const baseUrl = this.getBaseUrl(chainId);
    let url = `${baseUrl}${path}?${query}`;
    if (this.affiliateAddress) {
      url += `&affiliateAddress=${this.affiliateAddress}`;
    }
    return url;
  }
  /**
   * Get a swap quote as described in:
   * https://docs.0x.org/0x-api-swap/api-references/get-swap-v1-quote
   * @param params          Parameters for the swap request
   * @param chainId         ID of the network
   */
  
  async getSwapQuote(params, chainId) {
    var _a;
    const path = (_a = this.swapPathOverride) != null ? _a : "/swap/v1/quote";
    const query = new URLSearchParams(params).toString();
    let config = {};    
    if (this.headersOverride) {
      config = {
        headers: this.headersOverride
      };
    }
    const url = this.buildUrl(path, query, chainId);

    try {
      const response = await axios.get(url, config);
      const res = response.data;
      return res;
    } catch (err) {
      return null;
    }
  }
  getBaseUrl(chainId) {
    if (this.baseUrl === null) {
      return this.getDefaultBaseUrl(chainId);
    }
    return this.baseUrl;
  }
  getDefaultBaseUrl(chainId) {
    switch (chainId) {
      case 137 /* Polygon */:
        return "https://polygon.api.0x.org";
      case 10 /* Optimism */:
        return "https://optimism.api.0x.org";
      default:
        return "https://api.0x.org";
    }
  }
};
export {
  B4BIndex,
  BTC2xFlexibleLeverageIndex,
  BTC2xFlexibleLeverageIndexPolygon,
  BanklessBEDIndex,
  BasicIssuanceModuleAddress,
  BasicIssuanceModulePolygonAddress,
  DAI,
  DebtIssuanceModuleAddress,
  DebtIssuanceModuleV2Address,
  DebtIssuanceModuleV2PolygonAddress,
  DefiPulseIndex,
  DiversifiedStakedETHIndex,
  ERC4626QuoteProvider,
  ERC4626TransactionBuilder,
  ETH,
  ETH2xFlexibleLeverageIndex,
  ETH2xFlexibleLeverageIndexPolygon,
  Exchange,
  ExchangeIssuanceLeveragedMainnetAddress,
  ExchangeIssuanceLeveragedPolygonAddress,
  ExchangeIssuanceZeroExMainnetAddress,
  ExchangeIssuanceZeroExPolygonAddress,
  FlashMint4626Address,
  FlashMintContractType,
  FlashMintLeveraged,
  FlashMintLeveragedForCompoundAddress,
  FlashMintQuoteProvider,
  FlashMintWrappedAddress,
  FlashMintZeroEx,
  FlashMintZeroExMainnetAddress,
  GMIIndex,
  GitcoinStakedETHIndex,
  IndexDebtIssuanceModuleV2Address,
  InterestCompoundingETHIndex,
  InverseBTCFlexibleLeverageIndex,
  InverseETHFlexibleLeverageIndex,
  InverseMATICFlexibleLeverageIndex,
  JPGIndex,
  LeveragedTransactionBuilder,
  MATIC,
  WMATIC,
  MATIC2xFlexibleLeverageIndex,
  MetaverseIndex,
  MoneyMarketIndexToken,
  USDC,
  USDT,
  WETH,
  Web3DataEconomyIndex,
  WrappedQuoteProvider,
  WrappedTransactionBuilder,
  ZeroExApi,
  ZeroExTransactionBuilder,
  collateralDebtSwapData,
  debtCollateralSwapData,
  extractPoolFees,
  getAddressForToken,
  getEchangeFrom0xKey,
  getExchangeIssuanceLeveragedContractAddress,
  getExchangeIssuanceZeroExContractAddress,
  getFlashMint4626Contract,
  getFlashMintLeveragedContract,
  getFlashMintLeveragedContractForToken,
  getFlashMintLeveragedForCompoundContract,
  getFlashMintLeveragedQuote,
  getFlashMintWrappedContract,
  getFlashMintZeroExContract,
  getFlashMintZeroExContractForToken,
  getFlashMintZeroExQuote,
  getIncludedSources,
  getIndexFlashMintZeroExContract,
  getIndexFlashMintZeroExContractAddress,
  getIssuanceComponentSwapData,
  getIssuanceERC4626SwapData,
  getIssuanceModule,
  getPaymentTokenAddress,
  getRedemptionComponentSwapData,
  getRedemptionERC4626SwapData,
  getRequiredComponents,
  getSwapData,
  getSwapDataAndPaymentTokenAmount,
  getSwapDataCollateralDebt,
  getSwapDataDebtCollateral,
  getWrapData,
  inputSwapData,
  outputSwapData,
  sETH2,
  slippageAdjustedTokenAmount,
  stETH,
  swapDataFrom0xQuote,
  wei,
  wsETH2,
  wstETH
};
