"use strict";
exports.__esModule = true;
exports.flashMintIndexesPolygonRedeem = exports.flashMintIndexesPolygon = exports.flashMintIndexesMainnetRedeem = exports.indexNamesPolygon = exports.indexNamesMainnet = exports.optimismCurrencyTokens = exports.polygonCurrencyTokens = exports.mainnetCurrencyTokens = exports.currencies = exports.WETH = exports.USDT = exports.USDC = exports.WMATIC = exports.MATIC = exports.ETH = exports.DAI = exports.IndexToken = exports.B4BIndex = exports.IndexType = exports.dpiTokenImage = void 0;
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
    polygonAddress: '0x0000000000000000000000000000000000001010',
    optimismAddress: undefined,
    decimals: 18,
    url: '',
    coingeckoId: 'matic-network',
    fees: undefined,
    isDangerous: false,
    indexTypes: []
};
exports.WMATIC = {
    name: 'WMatic',
    symbol: 'WMATIC',
    image: 'https://assets.coingecko.com/coins/images/14073/small/matic.png?1628852392',
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
/**
 * Currencies
 */
// Add new currencies here as well to fetch all balances
exports.currencies = [
    exports.DAI,
    exports.USDC,
    exports.USDT,
    exports.WETH,
];
exports.mainnetCurrencyTokens = [exports.ETH, exports.DAI, exports.USDC, exports.WETH];
exports.polygonCurrencyTokens = [exports.MATIC, exports.DAI, exports.USDC, exports.WETH];
// MNYe only works with USDC, will have to optimize this once there is new indices on Optimism
exports.optimismCurrencyTokens = [exports.USDC];
/**
 * Lists
 */
var isDevEnv = process.env.REACT_APP_VERCEL_ENV === 'development' ||
    process.env.REACT_APP_VERCEL_ENV === 'index-app-staging';
// FIXED is not supposed to be released to the public yet, so we create a
// separate list for dev/staging and production
var indexNames = isDevEnv
    ? [
        exports.IndexToken,
        exports.B4BIndex,
    ]
    : [
        exports.IndexToken,
        exports.B4BIndex,
    ];
exports.indexNamesMainnet = indexNames.filter(function (index) { return index.address && index.symbol; });
exports.indexNamesPolygon = indexNames.filter(function (index) {
    return index.polygonAddress &&
        index.symbol !== exports.IndexToken.symbol;
} // not available on Polygon
);
// FlashMint specific lists
exports.flashMintIndexesMainnetRedeem = indexNames.filter(function (index) { return index.address && index.symbol !== exports.IndexToken.symbol; });
exports.flashMintIndexesPolygon = indexNames.filter(function (index) {
    return index.polygonAddress &&
        index.symbol !== exports.IndexToken.symbol;
});
exports.flashMintIndexesPolygonRedeem = indexNames.filter(function (index) {
    return index.polygonAddress &&
        index.symbol !== exports.IndexToken.symbol;
});
exports["default"] = indexNames;
