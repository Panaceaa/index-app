"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var colors_1 = require("styles/colors");
var react_2 = require("@chakra-ui/react");
var useNetwork_1 = require("hooks/useNetwork");
var Slippage_1 = require("providers/Slippage");
var tokens_1 = require("utils/tokens");
var QuickTradeSettingsPopover_1 = require("./_shared/QuickTradeSettingsPopover");
var flashmint_1 = require("./flashmint");
var swap_1 = require("./swap");
var TradeType;
(function (TradeType) {
    TradeType[TradeType["flashMint"] = 0] = "flashMint";
    TradeType[TradeType["swap"] = 1] = "swap";
})(TradeType || (TradeType = {}));
var QuickTradeContainer = function (props) {
    var isMMIT = props.singleToken;
    var chainId = useNetwork_1.useNetwork().chainId;
    var styles = colors_1.useColorStyles().styles;
    var _a = react_1.useState(isMMIT ? TradeType.flashMint : TradeType.swap), selectedType = _a[0], setSelectedType = _a[1];
    var paddingX = props.isNarrowVersion ? '16px' : '40px';
    var shouldShowSwap = isMMIT ? false : true;
    var shouldShowFlashMintOption = props.singleToken
        ? tokens_1.isTokenAvailableForFlashMint(props.singleToken, chainId)
        : // Currently no FlashMintable tokens on Polygon
            chainId === 137
                ? true
                : true;
    shouldShowFlashMintOption = isMMIT ? true : shouldShowFlashMintOption;
    var onSelectType = function (type) {
        if (type !== selectedType) {
            setSelectedType(type);
        }
    };
    var onSwitchTabs = function () {
        setSelectedType(TradeType.flashMint);
    };
    return (React.createElement(Slippage_1.SlippageProvider, null,
        React.createElement(react_2.Flex, { bgGradient: styles.backgroundGradient, border: '1px solid', borderColor: styles.border, borderRadius: '16px', boxShadow: 'sm', direction: 'column', py: '20px', px: ['16px', paddingX], height: '100%' },
            React.createElement(Navigation, { onSelect: onSelectType, selectedType: selectedType, shouldShowFlashMintOption: shouldShowFlashMintOption, shouldShowSwap: shouldShowSwap }),
            selectedType === TradeType.flashMint && React.createElement(flashmint_1["default"], __assign({}, props)),
            selectedType === TradeType.swap && (React.createElement(swap_1["default"], __assign({}, props, { switchTabs: onSwitchTabs }))))));
};
var NavigationButton = function (props) {
    var isDarkMode = colors_1.useICColorMode().isDarkMode;
    return (React.createElement(react_2.Text, { borderBottom: props.isSelected ? '2px solid' : '0', borderColor: isDarkMode ? colors_1.colors.white : colors_1.colors.black, color: props.isSelected ? 'inherit' : colors_1.colors.icGray3, cursor: 'pointer', fontSize: '20px', fontWeight: '700', mr: '16px', onClick: props.onClick }, props.title));
};
var Navigation = function (props) {
    var isDarkMode = colors_1.useICColorMode().isDarkMode;
    var _a = Slippage_1.useSlippage(), autoSlippage = _a.auto, isAutoSlippage = _a.isAuto, setSlippage = _a.set, slippage = _a.slippage;
    var onSelect = props.onSelect, selectedType = props.selectedType;
    var flashMintIsSelected = selectedType === TradeType.flashMint;
    var swapIsSelected = selectedType === TradeType.swap;
    return (React.createElement(react_2.Flex, { align: 'center', justify: 'space-between' },
        React.createElement(react_2.Flex, null,
            props.shouldShowSwap && (React.createElement(NavigationButton, { isSelected: swapIsSelected, onClick: function () { return onSelect(TradeType.swap); }, title: 'Swap' })),
            props.shouldShowFlashMintOption && (React.createElement(NavigationButton, { isSelected: flashMintIsSelected, onClick: function () { return onSelect(TradeType.flashMint); }, title: 'Flash Mint' }))),
        React.createElement(QuickTradeSettingsPopover_1.QuickTradeSettingsPopover, { isAuto: isAutoSlippage, isDarkMode: isDarkMode, onChangeSlippage: setSlippage, onClickAuto: autoSlippage, slippage: slippage })));
};
exports["default"] = QuickTradeContainer;
