"use strict";
exports.__esModule = true;
var react_1 = require("react");
var numeral_1 = require("numeral");
var colors_1 = require("styles/colors");
var react_2 = require("@chakra-ui/react");
var Charts_1 = require("./charts/Charts");
var TokenComponentsTable = function (props) {
    var _a, _b;
    var isIcSmmt = false;
    var _c = react_1.useState(5), amountToDisplay = _c[0], setAmountToDisplay = _c[1];
    var showAllComponents = function () { var _a; return setAmountToDisplay(((_a = props.components) === null || _a === void 0 ? void 0 : _a.length) || amountToDisplay); };
    var showDefaultComponents = function () { return setAmountToDisplay(5); };
    var priceToNumber = function (price) {
        var priceNumber = numeral_1["default"](price).value();
        return priceNumber || 0;
    };
    var mapSetComponentToPosition = function (component, index) {
        var _a;
        var isDsEth = component.symbol.toLowerCase() === 'reth' ||
            component.symbol.toLowerCase() === 'seth2' ||
            component.symbol.toLowerCase() === 'wsteth';
        var sliceColor = isDsEth ? colors_1.dsEthColors[index] : colors_1.pieChartColors[index];
        var position = {
            title: component.symbol,
            value: props.isLeveragedToken
                ? priceToNumber(component.totalPriceUsd)
                : +component.percentOfSet,
            percent: (_a = component.percentOfSetNumber.toFixed(1) + "%") !== null && _a !== void 0 ? _a : '',
            color: sliceColor,
            backgroundColor: sliceColor
        };
        return position;
    };
    var renderTableDisplayControls = function () {
        if (props.components &&
            props.components.length > 5 &&
            !props.isLeveragedToken)
            return (React.createElement(react_2.Box, { my: '20px' }, amountToDisplay < props.components.length ? (React.createElement(react_2.Text, { cursor: 'pointer', onClick: showAllComponents }, "Show Complete List")) : (React.createElement(react_2.Text, { cursor: 'pointer', onClick: showDefaultComponents }, "Show Less"))));
        return null;
    };
    if (props.components === undefined || props.components.length === 0) {
        return (React.createElement(react_2.Flex, { w: '100%', justifyContent: 'center' },
            React.createElement(react_2.Spinner, null)));
    }
    return (React.createElement(react_2.Flex, { direction: ['column', 'column', 'row'], alignItems: 'start' },
        React.createElement(react_2.Box, { margin: ['0 auto', '0 auto', '0 64px 0 0'] },
            React.createElement(Charts_1["default"], { data: props.components.map(mapSetComponentToPosition), vAssets: (_a = props.vAssets) === null || _a === void 0 ? void 0 : _a.map(mapSetComponentToPosition), isLeveragedToken: props.isLeveragedToken })),
        React.createElement(react_2.Flex, { direction: 'column', alignItems: 'center', mt: ['32px', '32px', '0'] },
            React.createElement(react_2.Table, { variant: 'simple' },
                React.createElement(react_2.Thead, null,
                    React.createElement(react_2.Tr, { borderBottom: '1px' },
                        React.createElement(react_2.Th, { p: ['8px 8px', '8px 8px', '12px 24px'] }, "Token"),
                        React.createElement(react_2.Th, { isNumeric: true, p: ['8px 8px', '8px 8px', '12px 24px'] }, "Value Per Token"),
                        React.createElement(react_2.Th, { isNumeric: true, p: ['8px 8px', '8px 8px', '12px 24px'] }, "24hr Change"))),
                React.createElement(react_2.Tbody, null, (_b = props.components) === null || _b === void 0 ? void 0 :
                    _b.slice(0, amountToDisplay).map(function (data) { return (React.createElement(ComponentRow, { key: data.name, component: data, isIcSmmt: isIcSmmt })); }),
                    props.vAssets && (React.createElement(VirutalAssets, { amountToDisplay: amountToDisplay, vAssets: props.vAssets })))),
            renderTableDisplayControls())));
};
/**
 *
 * @param component a SetComponent object to display
 * @returns a component row JSX element
 */
var ComponentRow = function (props) {
    var component = props.component, disablePercentage = props.disablePercentage;
    var image = component.image, name = component.name;
    var formattedPriceUSD = numeral_1["default"](component.totalPriceUsd).format('$0,0.00');
    var percentChange = parseFloat(component.dailyPercentChange);
    var absPercentChange = numeral_1["default"](Math.abs(percentChange)).format('0.00') + '%';
    var percentChangeIsPositive = percentChange >= 0;
    var percentChangeTextColor = percentChangeIsPositive
        ? colors_1.colors.icMalachite
        : colors_1.colors.icRed;
    var percentChangeSign = percentChangeIsPositive ? '+' : '-';
    return (React.createElement(react_2.Tr, { borderBottom: '1px' },
        React.createElement(react_2.Td, { p: ['16px 8px', '16px 8px', '16px 24px'] },
            React.createElement(react_2.Flex, { alignItems: 'center' },
                image.length > 0 && !props.isIcSmmt && (React.createElement(react_2.Image, { borderRadius: 'full', boxSize: '30px', src: image, alt: name, marginRight: '10px' })),
                React.createElement(react_2.Text, { fontWeight: '500' }, name))),
        React.createElement(react_2.Td, { isNumeric: true, p: ['16px 8px', '16px 8px', '16px 24px'] }, formattedPriceUSD),
        React.createElement(react_2.Td, { isNumeric: true, color: percentChangeTextColor, p: ['16px 8px', '16px 8px', '16px 24px'] },
            !disablePercentage && percentChangeSign,
            !disablePercentage && absPercentChange)));
};
var VirutalAssets = function (_a) {
    var amountToDisplay = _a.amountToDisplay, vAssets = _a.vAssets;
    if (!vAssets || vAssets.length < 1)
        return React.createElement(React.Fragment, null);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_2.Tr, null,
            React.createElement(react_2.Th, { colSpan: 3, fontSize: '13px', color: 'gray.500', mt: '8px' }, "Virtual Tokens on Perpetual Protocol")),
        vAssets.slice(0, amountToDisplay).map(function (data) { return (React.createElement(ComponentRow, { key: data.name, component: data, disablePercentage: true })); })));
};
exports["default"] = TokenComponentsTable;
