"use strict";
exports.__esModule = true;
var colors_1 = require("styles/colors");
var react_1 = require("@chakra-ui/react");
var ColorThemeIcon_1 = require("components/page/header/ColorThemeIcon");
var NavLink = function (props) {
    return (React.createElement(react_1.Box, { mr: ['0', '0', '0', '24px'], mt: ['30px', '30px', '30px', '0'] },
        React.createElement(react_1.Link, { display: 'block', position: 'relative', href: props.href, _after: {
                content: '""',
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: ' 100%',
                height: '0.1em',
                backgroundColor: props.textColor,
                opacity: 0,
                transition: 'opacity 300ms, transform 300ms'
            }, _focus: {
                _after: {
                    opacity: 1,
                    transform: 'translate3d(0, 0.2em, 0)'
                }
            }, _hover: {
                _after: {
                    opacity: 1,
                    transform: 'translate3d(0, 0.2em, 0)'
                }
            } },
            React.createElement(react_1.Text, { fontSize: 'xl', fontWeight: '900' }, props.linkText))));
};
//<NavLink href='/products' linkText='Products' textColor={textColor} />
var NavContent = function () {
    var _a = react_1.useColorMode(), colorMode = _a.colorMode, toggleColorMode = _a.toggleColorMode;
    var textColor = colorMode === 'light' ? colors_1.colors.black : colors_1.colors.icWhite;
    return (React.createElement(react_1.Flex, { align: 'center', flexDirection: ['column', 'column', 'column', 'row'] },
        React.createElement(NavLink, { href: '/', linkText: 'Trade', textColor: textColor }),
        React.createElement(NavLink, { href: '/b4b', linkText: 'B4B', textColor: textColor }),
        React.createElement(react_1.IconButton, { "aria-label": 'Color Theme Switch', onClick: toggleColorMode, border: '0', background: 'transparent', mt: ['30px', '30px', '30px', '0'], mr: ['0', '0', '0', '24px'], icon: React.createElement(ColorThemeIcon_1["default"], { color: textColor }), size: 'xs' })));
};
exports["default"] = NavContent;
