"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("App");
var fonts_1 = require("styles/fonts");
var theme_1 = require("styles/theme");
var wagmi_1 = require("wagmi");
var react_2 = require("@chakra-ui/react");
var react_gtm_hook_1 = require("@elgorditosalsero/react-gtm-hook");
var rainbowkit_1 = require("@rainbow-me/rainbowkit");
var Balances_1 = require("providers/Balances");
var MarketData_1 = require("providers/MarketData");
var Protection_1 = require("providers/Protection");
var sentry_1 = require("utils/api/sentry");
var wagmi_2 = require("utils/wagmi");
var Homepage_1 = require("views/Homepage");
var B4B_1 = require("views/productpages/B4B");
var INDEX_1 = require("views/productpages/INDEX");
var Products_1 = require("views/Products");
require("@rainbow-me/rainbowkit/styles.css");
window.Buffer = window.Buffer || require('buffer').Buffer;
var Providers = function (props) {
    var _a;
    var gtmParams = {
        id: (_a = process.env.REACT_APP_GOOGLE_TAG_MANAGER_CONTAINER_ID) !== null && _a !== void 0 ? _a : ''
    };
    return (react_1["default"].createElement(react_2.ChakraProvider, { theme: theme_1["default"] },
        react_1["default"].createElement(wagmi_1.WagmiConfig, { client: wagmi_2.wagmiClient },
            react_1["default"].createElement(rainbowkit_1.RainbowKitProvider, { chains: wagmi_2.chains, theme: theme_1.rainbowkitTheme, appInfo: {
                    appName: 'Index Coop',
                    learnMoreUrl: 'https://indexcoop.com'
                } },
                react_1["default"].createElement(MarketData_1.MarketDataProvider, null,
                    react_1["default"].createElement(Balances_1.BalanceProvider, null,
                        react_1["default"].createElement(Protection_1.ProtectionProvider, null,
                            react_1["default"].createElement(react_gtm_hook_1.GTMProvider, { state: gtmParams }, props.children))))))));
};
sentry_1.initSentryEventTracking();
var container = document.getElementById('root');
var root = client_1.createRoot(container);
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(Providers, null,
            react_1["default"].createElement(fonts_1.GlobalFonts, null),
            react_1["default"].createElement(react_2.ColorModeScript, { initialColorMode: theme_1["default"].config.initialColorMode }),
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/', element: react_1["default"].createElement(App_1["default"], null) },
                    react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(Homepage_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: 'products', element: react_1["default"].createElement(Products_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: 'b4b', element: react_1["default"].createElement(B4B_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: 'index', element: react_1["default"].createElement(INDEX_1["default"], null) })))))));
