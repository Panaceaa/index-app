"use strict";

exports.__esModule = true;
exports.flashMintIndexesPolygonRedeem = exports.flashMintIndexesPolygon = exports.flashMintIndexesMainnetRedeem = exports.indexNamesPolygon = exports.indexNamesMainnet = exports.eligibleLeveragedExchangeIssuanceTokens = exports.optimismCurrencyTokens = exports.polygonCurrencyTokens = exports.mainnetCurrencyTokens = exports.currencies = exports.WSTETH = exports.WETH = exports.USDT = exports.USDC = exports.STETH = exports.SETH2 = exports.RETH = exports.MATIC = exports.ETH = exports.DAI = exports.WSETH2 = exports.MoneyMarketIndex = exports.icETHIndex = exports.GitcoinStakedETHIndex = exports.GmiIndex = exports.BedIndex = exports.Bitcoin2xFlexibleLeverageIndex = exports.MetaverseIndex = exports.Ethereum2xFlexibleLeverageIndex = exports.IndexToken = exports.DiversifiedStakedETHIndex = exports.B4BIndex = exports.DefiPulseIndex = exports.FIXED_USDC = exports.FIXED_DAI = exports.IndexType = exports.dpiTokenImage = void 0;

var assets_1 = require("assets");

var chains_1 = require("./chains");

exports.dpiTokenImage = 'https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg';
var IndexType;

(function (IndexType) {
  IndexType["thematic"] = "thematic";
  IndexType["leverage"] = "leverage";
  IndexType["yield"] = "yield";
})(IndexType = exports.IndexType || (exports.IndexType = {}));
/**
 * Indices
 */


exports.FIXED_DAI = {
  name: 'Fixed Rate Yield Index (DAI)',
  symbol: 'FIXED-DAI',
  image: assets_1.fixedDaiLogo,
  address: '0x015558c3aB97c9e5a9c8c437C71Bb498B2e5afB3',
  optimismAddress: undefined,
  polygonAddress: 'undefined',
  decimals: 18,
  url: '',
  coingeckoId: '',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.FIXED_USDC = {
  name: 'Fixed Rate Yield Index (USDC)',
  symbol: 'FIXED-USDC',
  image: assets_1.fixedUsdcLogo,
  address: '0xFB4D3b07aA16eE563Ea7C1f3202959448458e290',
  optimismAddress: undefined,
  polygonAddress: 'undefined',
  decimals: 18,
  url: '',
  coingeckoId: '',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.DefiPulseIndex = {
  name: 'DeFi Pulse Index',
  symbol: 'DPI',
  image: exports.dpiTokenImage,
  address: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
  polygonAddress: '0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369',
  optimismAddress: undefined,
  decimals: 18,
  url: 'dpi',
  coingeckoId: 'defipulse-index',
  tokenContextKey: 'dpi',
  fees: {
    streamingFee: '0.95%'
  },
  isDangerous: false,
  indexTypes: [IndexType.thematic],
  defaultChain: chains_1.MAINNET.chainId
};
exports.B4BIndex = {
  name: 'BLOCK4BLOCK',
  symbol: 'B4B',
  image: assets_1.b4bLogo,
  address: '0x7b76b274dea7abe248ff764fdc11cbb9ba3585fb',
  polygonAddress: '0x56a15aaa0f88338fceb5aec28aba249acc75f185',
  optimismAddress: undefined,
  decimals: 18,
  url: 'b4b',
  coingeckoId: 'defipulse-index',
  tokenContextKey: 'b4b',
  fees: {
    streamingFee: '1.5%'
  },
  isDangerous: false,
  indexTypes: [IndexType.thematic],
  defaultChain: chains_1.MAINNET.chainId
};
exports.DiversifiedStakedETHIndex = {
  name: 'Diversified Staked ETH Index',
  symbol: 'dsETH',
  image: assets_1.dsethLogo,
  address: '0x341c05c0E9b33C0E38d64de76516b2Ce970bB3BE',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: 'dseth',
  coingeckoId: 'diversified-staked-eth',
  tokenContextKey: 'dseth',
  fees: {
    streamingFee: '0.25%'
  },
  isDangerous: false,
  indexTypes: [IndexType["yield"]],
  defaultChain: chains_1.MAINNET.chainId
};
exports.IndexToken = {
  name: 'Index Token',
  symbol: 'INDEX',
  address: '0x0954906da0Bf32d5479e25f46056d22f08464cab',
  polygonAddress: '0xfBd8A3b908e764dBcD51e27992464B4432A1132b',
  optimismAddress: undefined,
  decimals: 18,
  url: 'index',
  image: assets_1.indexLogo,
  coingeckoId: 'index-cooperative',
  fees: undefined,
  isDangerous: false,
  indexTypes: [],
  defaultChain: chains_1.MAINNET.chainId
};
exports.Ethereum2xFlexibleLeverageIndex = {
  name: 'Ethereum 2x Flexible Leverage Index',
  symbol: 'ETH2x-FLI',
  address: '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: 'ethfli',
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg',
  coingeckoId: 'eth-2x-flexible-leverage-index',
  tokenContextKey: 'ethfli',
  fees: {
    streamingFee: '1.95%'
  },
  isDangerous: true,
  indexTypes: [IndexType.leverage],
  defaultChain: chains_1.MAINNET.chainId
};
exports.MetaverseIndex = {
  name: 'Metaverse Index',
  symbol: 'MVI',
  address: '0x72e364F2ABdC788b7E918bc238B21f109Cd634D7',
  polygonAddress: '0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1',
  optimismAddress: undefined,
  decimals: 18,
  url: 'mvi',
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/mvi.svg',
  coingeckoId: 'metaverse-index',
  tokenContextKey: 'mvi',
  fees: {
    streamingFee: '0.95%'
  },
  isDangerous: false,
  indexTypes: [IndexType.thematic],
  defaultChain: chains_1.MAINNET.chainId
};
exports.Bitcoin2xFlexibleLeverageIndex = {
  name: 'Bitcoin 2x Flexible Leverage Index',
  symbol: 'BTC2x-FLI',
  address: '0x0B498ff89709d3838a063f1dFA463091F9801c2b',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: 'btcfli',
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/fli_btc.svg',
  coingeckoId: 'btc-2x-flexible-leverage-index',
  tokenContextKey: 'btcfli',
  fees: {
    streamingFee: '1.95%'
  },
  isDangerous: true,
  indexTypes: [IndexType.leverage],
  defaultChain: chains_1.MAINNET.chainId
};
exports.BedIndex = {
  name: 'Bankless BED Index',
  symbol: 'BED',
  address: '0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: 'bed',
  image: assets_1.bedBorderLogo,
  coingeckoId: 'bankless-bed-index',
  tokenContextKey: 'bed',
  fees: {
    streamingFee: '0.25%'
  },
  isDangerous: false,
  indexTypes: [IndexType.thematic],
  defaultChain: chains_1.MAINNET.chainId
};
exports.GmiIndex = {
  name: 'Bankless DeFi Innovation Index',
  symbol: 'GMI',
  address: '0x47110d43175f7f2C2425E7d15792acC5817EB44f',
  polygonAddress: '0x7fb27ee135db455de5ab1ccec66a24cbc82e712d',
  optimismAddress: undefined,
  decimals: 18,
  url: 'gmi',
  image: assets_1.gmiLogo,
  coingeckoId: 'bankless-defi-innovation-index',
  tokenContextKey: 'gmi',
  fees: {
    streamingFee: '1.95%'
  },
  isDangerous: true,
  indexTypes: [IndexType.thematic],
  defaultChain: chains_1.MAINNET.chainId
};
exports.GitcoinStakedETHIndex = {
  name: 'Gitcoin Staked ETH Index',
  symbol: 'gtcETH',
  image: assets_1.gtcEthLogo,
  address: '0x36c833Eed0D376f75D1ff9dFDeE260191336065e',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: 'gtceth',
  coingeckoId: 'gitcoin-staked-eth-index',
  tokenContextKey: 'gtceth',
  fees: {
    streamingFee: '2.0%'
  },
  isDangerous: false,
  indexTypes: [IndexType["yield"]],
  defaultChain: chains_1.MAINNET.chainId
};
exports.icETHIndex = {
  name: 'Interest Compounding ETH Index',
  symbol: 'icETH',
  address: '0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: 'iceth',
  image: assets_1.icethLogo,
  coingeckoId: 'interest-compounding-eth-index',
  tokenContextKey: 'iceth',
  fees: {
    streamingFee: '0.75%',
    mintFee: '0.0%',
    redeemFee: '0.0%'
  },
  isDangerous: true,
  indexTypes: [IndexType["yield"]],
  defaultChain: chains_1.MAINNET.chainId
};
exports.MoneyMarketIndex = {
  name: 'Money Market Index Token',
  symbol: 'icSMMT',
  address: '0xc30FBa978743a43E736fc32FBeEd364b8A2039cD',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: 'icsmmt',
  image: assets_1.mmiLogo,
  coingeckoId: 'money-market-index',
  tokenContextKey: 'mmi',
  fees: {
    streamingFee: '0.15%',
    mintFee: '0.0%',
    redeemFee: '0.0%'
  },
  isDangerous: true,
  indexTypes: [IndexType["yield"]],
  defaultChain: chains_1.MAINNET.chainId
};
/**
 * Other - IndexCoop
 */

exports.WSETH2 = {
  name: 'wsETH2',
  symbol: 'wsETH2',
  image: assets_1.wseth2Logo,
  address: '0x5dA21D9e63F1EA13D34e48B7223bcc97e3ecD687',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: '',
  coingeckoId: 'wrapped-stakewise-seth2',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
/**
 * Other
 */

exports.DAI = {
  name: 'Dai',
  symbol: 'DAI',
  image: 'https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734',
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  polygonAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  optimismAddress: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  decimals: 18,
  url: '',
  coingeckoId: 'dai',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.ETH = {
  name: 'Ethereum',
  symbol: 'ETH',
  image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  polygonAddress: '',
  optimismAddress: '',
  decimals: 18,
  url: '',
  coingeckoId: 'ethereum',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.MATIC = {
  name: 'Matic',
  symbol: 'MATIC',
  image: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
  address: undefined,
  polygonAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  optimismAddress: undefined,
  decimals: 18,
  url: '',
  coingeckoId: 'matic-network',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.RETH = {
  name: 'rETH',
  symbol: 'rETH',
  image: 'https://assets.coingecko.com/coins/images/20764/large/reth.png',
  address: '0xae78736Cd615f374D3085123A210448E74Fc6393',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: '',
  coingeckoId: 'rocket-pool-eth',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.SETH2 = {
  name: 'sETH2',
  symbol: 'sETH2',
  image: 'https://assets.coingecko.com/coins/images/16569/large/emerald256.png',
  address: '0xFe2e637202056d30016725477c5da089Ab0A043A',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: '',
  coingeckoId: 'seth2',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.STETH = {
  name: 'stETH',
  symbol: 'stETH',
  image: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png',
  address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: '',
  coingeckoId: 'staked-ether',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.USDC = {
  name: 'USD Coin',
  symbol: 'USDC',
  image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  polygonAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  optimismAddress: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
  decimals: 6,
  url: '',
  coingeckoId: 'usd-coin',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.USDT = {
  name: 'Tether',
  symbol: 'USDT',
  image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663',
  address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 6,
  url: '',
  coingeckoId: 'tether',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.WETH = {
  name: 'Wrapped Ether',
  symbol: 'WETH',
  image: 'https://assets.coingecko.com/coins/images/2518/large/weth.png?1628852295',
  address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  polygonAddress: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  optimismAddress: '0x4200000000000000000000000000000000000006',
  decimals: 18,
  url: '',
  coingeckoId: 'weth',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
exports.WSTETH = {
  name: 'wstETH',
  symbol: 'wstETH',
  image: 'https://assets.coingecko.com/coins/images/18834/large/wstETH.png',
  address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: '',
  coingeckoId: 'wrapped-steth',
  fees: undefined,
  isDangerous: false,
  indexTypes: []
};
/**
 * Currencies
 */
// Add new currencies here as well to fetch all balances

exports.currencies = [exports.DAI, exports.USDC, exports.USDT, exports.RETH, exports.SETH2, exports.STETH, exports.WETH, exports.WSETH2, exports.WSTETH];
exports.mainnetCurrencyTokens = [exports.ETH, exports.DAI, exports.USDC, exports.SETH2, exports.STETH, exports.WETH];
exports.polygonCurrencyTokens = [exports.MATIC, exports.DAI, exports.USDC, exports.WETH]; // MNYe only works with USDC, will have to optimize this once there is new indices on Optimism

exports.optimismCurrencyTokens = [exports.USDC];
/**
 * Lists
 */
// Deprecated/rebalanced indicies will not work with FlashMintLeveraged any longer

exports.eligibleLeveragedExchangeIssuanceTokens = [exports.Bitcoin2xFlexibleLeverageIndex, exports.Ethereum2xFlexibleLeverageIndex, exports.icETHIndex];
var isDevEnv = process.env.REACT_APP_VERCEL_ENV === 'development' || process.env.REACT_APP_VERCEL_ENV === 'index-app-staging'; // FIXED is not supposed to be released to the public yet, so we create a
// separate list for dev/staging and production

var indexNames = isDevEnv ? [exports.DiversifiedStakedETHIndex, exports.icETHIndex, exports.GitcoinStakedETHIndex, exports.MoneyMarketIndex, exports.FIXED_DAI, exports.FIXED_USDC, exports.DefiPulseIndex, exports.MetaverseIndex, exports.Ethereum2xFlexibleLeverageIndex, exports.Bitcoin2xFlexibleLeverageIndex, exports.BedIndex, exports.IndexToken, exports.WSETH2, exports.B4BIndex] : [exports.DiversifiedStakedETHIndex, exports.icETHIndex, exports.GitcoinStakedETHIndex, exports.MoneyMarketIndex, exports.DefiPulseIndex, exports.MetaverseIndex, exports.Ethereum2xFlexibleLeverageIndex, exports.Bitcoin2xFlexibleLeverageIndex, exports.BedIndex, exports.IndexToken, exports.B4BIndex];
exports.indexNamesMainnet = indexNames.filter(function (index) {
  return index.address && index.symbol !== exports.MoneyMarketIndex.symbol;
});
exports.indexNamesPolygon = indexNames.filter(function (index) {
  return index.polygonAddress && index.symbol !== exports.GmiIndex.symbol && // temporarily removed due to liquidity concerns
  index.symbol !== exports.IndexToken.symbol;
} // not available on Polygon
); // FlashMint specific lists

exports.flashMintIndexesMainnetRedeem = indexNames.filter(function (index) {
  return index.address && index.symbol !== exports.IndexToken.symbol;
});
exports.flashMintIndexesPolygon = indexNames.filter(function (index) {
  return index.polygonAddress && index.symbol !== exports.DefiPulseIndex.symbol && index.symbol !== exports.GmiIndex.symbol && index.symbol !== exports.IndexToken.symbol && index.symbol !== exports.MetaverseIndex.symbol;
});
exports.flashMintIndexesPolygonRedeem = indexNames.filter(function (index) {
  return index.polygonAddress && index.symbol !== exports.DefiPulseIndex.symbol && index.symbol !== exports.GmiIndex.symbol && index.symbol !== exports.IndexToken.symbol && index.symbol !== exports.MetaverseIndex.symbol;
});
exports["default"] = indexNames;