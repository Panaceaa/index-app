"use strict";
exports.__esModule = true;
var colors_1 = require("styles/colors");
var react_1 = require("@chakra-ui/react");
var assets_1 = require("assets");
var Navigation_1 = require("./Navigation");
var Header = function () {
    var isDarkMode = colors_1.useICColorMode().isDarkMode;
    var backgroundColor = isDarkMode
        ? 'rgba(15, 23, 23, 0.6)'
        : 'rgba(252, 255, 255, 0.82)';
    return (React.createElement(react_1.Flex, { as: 'header', backgroundColor: backgroundColor, backdropFilter: 'saturate(180%) blur(5px)', p: [
            '16px 16px 16px 24px',
            null,
            '32px 60px 32px 60px',
            '32px 80px 32px 80px',
        ], position: 'fixed', top: '0px', w: '100vw', zIndex: '2' },
        React.createElement(react_1.Flex, { align: 'center', justifyContent: 'space-between', w: '100%' },
            React.createElement(react_1.Link, { href: 'https://block4block.pro/', _hover: {
                    textDecoration: 'none'
                }, flexGrow: 1 },
                React.createElement(react_1.Flex, { marginRight: ['', '', '', '20px'] },
                    React.createElement(Logo, null))),
            React.createElement(Navigation_1["default"], null))));
};
var Logo = function () {
    var isDarkMode = colors_1.useICColorMode().isDarkMode;
    if (window.innerWidth > 1350) {
        var logo_1 = isDarkMode ? assets_1.IndexLogoFullWhite : assets_1.IndexLogoFullBlack;
        return React.createElement("img", { alt: 'Block4block logo', src: logo_1, height: '30px', width: '130px' });
    }
    var logo = isDarkMode ? assets_1.IndexLogoWhite : assets_1.IndexLogoBlack;
    return React.createElement("img", { alt: 'Block4block logo', src: logo, height: '30px', width: '30px' });
};
exports["default"] = Header;
