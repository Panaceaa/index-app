"use strict";
var _a;
exports.__esModule = true;
exports.wagmiClient = exports.provider = exports.chains = void 0;
var wagmi_1 = require("wagmi");
var chains_1 = require("wagmi/chains");
var alchemy_1 = require("wagmi/providers/alchemy");
var public_1 = require("wagmi/providers/public");
var rainbowkit_1 = require("@rainbow-me/rainbowkit");
var wallets_1 = require("@rainbow-me/rainbowkit/wallets");
var server_1 = require("constants/server");
exports.chains = (_a = wagmi_1.configureChains([chains_1.mainnet, chains_1.polygon], [alchemy_1.alchemyProvider({ apiKey: server_1.AlchemyApiKey }), public_1.publicProvider()]), _a.chains), exports.provider = _a.provider;
var connectors = rainbowkit_1.connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            wallets_1.safeWallet({ chains: exports.chains }),
            wallets_1.metaMaskWallet({ chains: exports.chains }),
            wallets_1.rainbowWallet({ chains: exports.chains }),
            wallets_1.argentWallet({ chains: exports.chains }),
            wallets_1.coinbaseWallet({
                appName: 'Index Coop',
                chains: exports.chains
            }),
            wallets_1.ledgerWallet({ chains: exports.chains }),
            wallets_1.okxWallet({ chains: exports.chains }),
        ]
    },
    {
        groupName: 'Others',
        wallets: [
            wallets_1.walletConnectWallet({ chains: exports.chains }),
            wallets_1.braveWallet({ chains: exports.chains }),
            wallets_1.trustWallet({ chains: exports.chains }),
        ]
    },
]);
exports.wagmiClient = wagmi_1.createClient({
    autoConnect: true,
    connectors: connectors,
    provider: exports.provider
});
