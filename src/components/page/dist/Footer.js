"use strict";
exports.__esModule = true;
var colors_1 = require("styles/colors");
var react_1 = require("@chakra-ui/react");
var assets_1 = require("assets");
var Footer = function () {
    var _a = colors_1.useColorStyles(), isDarkMode = _a.isDarkMode, styles = _a.styles;
    return (React.createElement(react_1.Flex, { flexDir: 'column', alignItems: 'center', m: [
            '80px auto 64px',
            '96px auto 64px',
            '96px auto 64px',
            '96px auto 64px',
        ], w: '100vw' },
        React.createElement(react_1.Flex, { direction: 'column', p: ['32px', '32px', '32px', 0], w: ['100%', '100%', '100%', '1024px'] },
            React.createElement(Links, { textColor: styles.text2 }),
            React.createElement(react_1.Flex, { m: '40px 0' },
                React.createElement(Logo, { isDarkMode: isDarkMode })),
            React.createElement(Disclaimer, null))));
};
var Disclaimer = function () { return (React.createElement(react_1.Flex, { direction: 'column' },
    React.createElement(react_1.Text, { fontSize: '2xs' },
        "Disclaimer: This content is for informational purposes only and is not legal, tax, investment, financial, or other advice. You should not take, or refrain from taking, any action based on any information contained herein, or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, discord content, news feeds, tutorials, tweets, and videos. Before you make any financial, legal, technical, or other decisions, you should seek independent professional advice from a licensed and qualified individual in the area for which such advice would be appropriate. This information is not intended to be comprehensive or address all aspects of Index or its products. There is additional documentation on Index\u2019s website about the functioning of Index Coop, and its ecosystem and community.",
        React.createElement("br", null),
        React.createElement("br", null),
        "You shall not purchase or otherwise acquire our restricted tokens if you are: a citizen, resident (tax or otherwise), green card holder, incorporated in, owned or controlled by a person or entity in, located in, or have a registered office or principal place of business in the U.S. (a \u201CU.S. Person\u201D), or if you are a person in any jurisdiction in which such offer, sale, and/or purchase of any of our token products is unlawful, prohibited, or unauthorized (together with U.S. Person, a \u201CRestricted Person\u201D). The term \u201CRestricted Person\u201D includes, but is not limited to, any natural person residing in, or any firm, company, partnership, trust, corporation, entity, government, state or agency of a state, or any other incorporated or unincorporated body or association, association or partnership (whether or not having separate legal personality) that is established and/or lawfully existing under the laws of, a jurisdiction in which such offer, sale, and/or purchase of any of our token products is unlawful, prohibited, or unauthorized). You shall not resell or otherwise transfer our restricted tokens to any Restricted Person. The transfer or resale of our restricted tokens to any Restricted Person is not permitted. Click",
        ' ',
        React.createElement(react_1.Link, { target: '_blank', href: 'https://indexcoop.com/legal/tokens-restricted-for-restricted-persons', textDecoration: 'underline' }, "here"),
        ' ',
        "to view the list of Tokens Restricted for Restricted Persons. You shall read the",
        ' ',
        React.createElement(react_1.Link, { target: '_blank', href: 'https://indexcoop.com/legal/terms-of-service', textDecoration: 'underline' }, "Terms of Service"),
        ' ',
        "and use our Website in compliance with the Terms of Service."))); };
var Links = function (_a) {
    var textColor = _a.textColor;
    return (React.createElement(react_1.Flex, { direction: ['column', 'column', 'column', 'row'] },
        React.createElement(react_1.Flex, { direction: 'column', mr: '4' }),
        React.createElement(react_1.Flex, { direction: 'column', ml: [0, 0, 0, 20], mr: '4', mt: [8, 0, 0, 0] },
            React.createElement(react_1.Link, { color: textColor, href: 'https://github.com/IndexCoop/index-coop-smart-contracts', isExternal: true },
                React.createElement(react_1.Text, { color: textColor }, "Contracts")),
            React.createElement(react_1.Link, { color: textColor, href: 'https://github.com/IndexCoop', isExternal: true },
                React.createElement(react_1.Text, { color: textColor }, "GitHub"))),
        React.createElement(react_1.Flex, { direction: 'column', ml: [0, 0, 0, 20], mr: '4', mt: [8, 0, 0, 0] },
            React.createElement(react_1.Link, { color: textColor, href: 'https://indexcoop.com/legal/privacy-policy' },
                React.createElement(react_1.Text, { color: textColor }, "Privacy Policy")),
            React.createElement(react_1.Link, { color: textColor, href: 'https://indexcoop.com/legal/tokens-restricted-for-us-persons' },
                React.createElement(react_1.Text, { color: textColor }, "Tokens Restricted for US Persons")))));
};
var Logo = function (_a) {
    var isDarkMode = _a.isDarkMode;
    var fullLogo = isDarkMode ? assets_1.IndexLogoFullWhite : assets_1.IndexLogoFullBlack;
    return (React.createElement("img", { alt: 'Index Coop Logo', src: fullLogo, height: '30px', width: '130px' }));
};
exports["default"] = Footer;
