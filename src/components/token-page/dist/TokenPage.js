"use strict";
exports.__esModule = true;
var colors_1 = require("styles/colors");
var react_1 = require("@chakra-ui/react");
var Page_1 = require("components/page/Page");
var PriceChartData_1 = require("components/token-page/charts/PriceChartData");
var trade_1 = require("components/trade");
var tokens_1 = require("constants/tokens");
var useNetwork_1 = require("hooks/useNetwork");
var useTokenComponents_1 = require("hooks/useTokenComponents");
var useTokenSupply_1 = require("hooks/useTokenSupply");
var MarketData_1 = require("providers/MarketData");
var utils_1 = require("utils");
var priceChange_1 = require("utils/priceChange");
var tokens_2 = require("utils/tokens");
var MarketChart_1 = require("./MarketChart");
var TokenComponentsTable_1 = require("./TokenComponentsTable");
var TokenPageHeader_1 = require("./TokenPageHeader");
var TokenPageSectionHeader_1 = require("./TokenPageSectionHeader");
var TokenStats_1 = require("./TokenStats");
function getStatsForToken(token, marketData, currentSupply, nav) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var dailyPriceRange = MarketChart_1.PriceChartRangeOption.DAILY_PRICE_RANGE;
    var hourlyDataInterval = 24;
    var formatter = Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
        notation: 'compact'
    });
    var supplyFormatter = Intl.NumberFormat('en', { maximumFractionDigits: 2 });
    var marketCap = (_d = (_c = (_b = (_a = marketData.marketcaps) === null || _a === void 0 ? void 0 : _a.slice(-dailyPriceRange * hourlyDataInterval)) === null || _b === void 0 ? void 0 : _b.slice(-1)[0]) === null || _c === void 0 ? void 0 : _c.slice(-1)[0]) !== null && _d !== void 0 ? _d : 0;
    var marketCapFormatted = formatter.format(marketCap);
    var supplyFormatted = supplyFormatter.format(currentSupply);
    var volume = (_h = (_g = (_f = (_e = marketData.volumes) === null || _e === void 0 ? void 0 : _e.slice(-dailyPriceRange * hourlyDataInterval)) === null || _f === void 0 ? void 0 : _f.slice(-1)[0]) === null || _g === void 0 ? void 0 : _g.slice(-1)[0]) !== null && _h !== void 0 ? _h : 0;
    var volumeFormatted = formatter.format(volume);
    var stats = [
        { title: 'Market Cap', value: marketCapFormatted },
        { title: 'Volume (24h)', value: volumeFormatted },
        { title: 'Current Supply', value: supplyFormatted },
    ];
    if (token.symbol !== tokens_1.IndexToken.symbol) {
        stats.push({ title: 'Streaming Fee', value: (_k = (_j = token.fees) === null || _j === void 0 ? void 0 : _j.streamingFee) !== null && _k !== void 0 ? _k : 'n/a' }, { title: 'Mint Fee', value: (_m = (_l = token.fees) === null || _l === void 0 ? void 0 : _l.mintFee) !== null && _m !== void 0 ? _m : 'n/a' }, { title: 'Redeem Fee', value: (_p = (_o = token.fees) === null || _o === void 0 ? void 0 : _o.redeemFee) !== null && _p !== void 0 ? _p : 'n/a' }, { title: 'NAV', value: formatter.format(nav) });
    }
    return stats;
}
var TokenPage = function (props) {
    var _a, _b, _c, _d, _e;
    var _f = colors_1.useColorStyles(), isDarkMode = _f.isDarkMode, styles = _f.styles;
    var isMobile = react_1.useBreakpointValue({ base: true, lg: false });
    var token = props.token;
    var networkChainId = useNetwork_1.useNetwork().chainId;
    var chainId = (_a = token.defaultChain) !== null && _a !== void 0 ? _a : networkChainId;
    var _g = MarketData_1.useMarketData(), getMarketDataBySymbol = _g.getMarketDataBySymbol, selectLatestMarketData = _g.selectLatestMarketData;
    var marketData = (_b = getMarketDataBySymbol(token)) !== null && _b !== void 0 ? _b : {};
    var isLevToken = tokens_2.isLeveragedToken(token);
    var tokenAddress = (_c = tokens_2.getAddressForToken(token, chainId)) !== null && _c !== void 0 ? _c : '';
    var tokenSupply = useTokenSupply_1.useTokenSupply(tokenAddress, chainId !== null && chainId !== void 0 ? chainId : 1);
    var currentSupplyFormatted = parseFloat((_d = utils_1.displayFromWei(tokenSupply)) !== null && _d !== void 0 ? _d : '0');
    var priceChartData = PriceChartData_1.getPriceChartData([marketData]);
    var price = selectLatestMarketData(marketData.hourlyPrices).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    var priceFormatted = "$" + price;
    var priceChanges = priceChange_1.getPricesChanges((_e = marketData.hourlyPrices) !== null && _e !== void 0 ? _e : []);
    var priceChangesFormatted = priceChange_1.getFormattedChartPriceChanges(priceChanges);
    var chartWidth = window.outerWidth < 400 ? window.outerWidth : 648;
    var chartHeight = window.outerWidth < 400 ? 300 : 400;
    var _h = useTokenComponents_1.useTokenComponents(props.token, tokens_2.isPerpToken(props.token)), components = _h.components, vAssets = _h.vAssets, nav = _h.nav;
    var backgroundColor = isDarkMode ? colors_1.colors.icGray3 : colors_1.colors.icGray1;
    var isMMI = false;
    var stats = getStatsForToken(token, marketData, currentSupplyFormatted, nav);
    return (React.createElement(Page_1["default"], null,
        React.createElement(react_1.Flex, { direction: 'column', w: ['100%', '80vw'], m: '0 auto' },
            React.createElement(react_1.Box, { mb: ['16px', '48px'] },
                React.createElement(TokenPageHeader_1["default"], { isMobile: isMobile !== null && isMobile !== void 0 ? isMobile : false, token: props.token }),
                isMMI && (React.createElement(react_1.Flex, { bgColor: backgroundColor, borderRadius: '8px', mt: '24px' },
                    React.createElement(react_1.Text, { color: styles.text, fontSize: '13px', p: '16px' }, "The Index Coop Money Market Index (icSMMT) is designed for large purchasers. We suggest a minimum purchase of $500,000.")))),
            React.createElement(react_1.Flex, { direction: 'column', position: 'relative', zIndex: '1' },
                React.createElement(react_1.Flex, { direction: ['column', 'column', 'column', 'row'] },
                    React.createElement(MarketChart_1["default"], { marketData: priceChartData, prices: [priceFormatted], priceChanges: priceChangesFormatted, options: {
                            width: chartWidth,
                            height: chartHeight,
                            hideYAxis: false
                        }, apy: props.apy }),
                    React.createElement(react_1.Flex, { mt: ['48px', '48px', '48px', '0'], ml: ['0', '0', '0', '36px'], justifyContent: ['center', 'center', 'center', 'flex-start'] },
                        React.createElement(trade_1["default"], { isNarrowVersion: true, singleToken: token }))),
                React.createElement(TokenPageSectionHeader_1["default"], { title: 'Stats', topMargin: '120px' }),
                React.createElement(TokenStats_1["default"], { stats: stats }),
                props.token.symbol !== tokens_1.IndexToken.symbol && (React.createElement(React.Fragment, null,
                    React.createElement(TokenPageSectionHeader_1["default"], { title: 'Allocations' }),
                    React.createElement(TokenComponentsTable_1["default"], { components: components, token: props.token, isLeveragedToken: isLevToken, vAssets: vAssets })))))));
};
exports["default"] = TokenPage;
