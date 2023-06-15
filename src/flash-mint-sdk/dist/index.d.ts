import { BigNumber } from '@ethersproject/bignumber';
import { TransactionResponse, TransactionRequest, Provider } from '@ethersproject/abstract-provider';
import { Contract } from '@ethersproject/contracts';
import { AxiosRequestHeaders } from 'axios';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';

declare enum ChainId {
    Mainnet = 1,
    Optimism = 10,
    Polygon = 137
}

declare type ZeroExApiSwapRequest = {
    buyAmount?: string;
    buyToken: string;
    sellAmount?: string;
    sellToken: string;
    slippagePercentage?: number;
};
declare type ZeroExApiSwapResponse = {
    buyAmount: string;
    buyTokenAddress: string;
    sellAmount: string;
    sellTokenAddress: string;
};
declare class ZeroExApi {
    private readonly baseUrl;
    private readonly affiliateAddress;
    private readonly headersOverride;
    private readonly swapPathOverride;
    /**
     * @param baseUrl              The base url (default: https://api.0x.org, watch rate limits)
     * @param affiliateAddress    (Optional) Affiliate address
     * @param headersOverride      (Optional) Override for headers
     * @param swapPathOverride     (Optional) Override of the API path - in case your using a custom path format e.g. through a proxy
     */
    constructor(baseUrl?: string | null, affiliateAddress?: string | null, headersOverride?: AxiosRequestHeaders | null, swapPathOverride?: string | null);
    /**
     * Builds the 0x API URL.
     * @param path     An API path in the form of /swap/v1/quote
     * @param query    A query constructed with URLSearchParams
     * @param chainId  ID of the network
     */
    buildUrl(path: string, query: string, chainId: number): string;
    /**
     * Get a swap quote as described in:
     * https://docs.0x.org/0x-api-swap/api-references/get-swap-v1-quote
     * @param params          Parameters for the swap request
     * @param chainId         ID of the network
     */
    getSwapQuote(params: any, chainId: number): Promise<any | null>;
    private getBaseUrl;
    private getDefaultBaseUrl;
}

interface QuoteToken {
    address: string;
    decimals: number;
    symbol: string;
}

declare type ComponentQuotesResult = {
    componentQuotes: string[];
    inputOutputTokenAmount: BigNumber;
};

interface TransactionBuilder<R, T> {
    build(request: R): Promise<T | null>;
}

interface TransactionOverrides {
    gasLimit?: BigNumber;
    gasPrice?: BigNumber;
    maxFeePerGas?: BigNumber;
    maxPriorityFeePerGas?: BigNumber;
    nonce?: number;
    value?: BigNumber;
}

declare const FlashMint4626Address = "0xF5cF956018c111BE7d5CE4240960C1164179aCA9";
declare const FlashMintLeveragedForCompoundAddress = "0xeA716Ed94964Ed0126Fb2fA3b546eD7F209cC2b8";
declare const FlashMintWrappedAddress = "0x5C0D0a9a0c3A0a5B591496fF894686893b69FaA2";
declare const FlashMintZeroExMainnetAddress = "0x9d648E5564B794B918d99C84B0fbf4b0bf36ce45";
declare const IndexDebtIssuanceModuleV2Address = "0xa0a98EB7Af028BE00d04e46e1316808A62a8fd59";
declare const BasicIssuanceModuleAddress = "0xd8EF3cACe8b4907117a45B0b125c68560532F94D";
declare const BasicIssuanceModulePolygonAddress = "0x38E5462BBE6A72F79606c1A0007468aA4334A92b";
declare const DebtIssuanceModuleAddress = "0x39F024d621367C044BacE2bf0Fb15Fb3612eCB92";
declare const DebtIssuanceModuleV2Address = "0x69a592D2129415a4A1d1b1E309C17051B7F28d57";
declare const DebtIssuanceModuleV2PolygonAddress = "0xf2dC2f456b98Af9A6bEEa072AF152a7b0EaA40C9";
declare const ExchangeIssuanceLeveragedMainnetAddress = "0x981b21A2912A427f491f1e5b9Bf9cCa16FA794e1";
declare const ExchangeIssuanceLeveragedPolygonAddress = "0xE86636f23B502B8746A72A1Ed87d65F096E419Db";
declare const ExchangeIssuanceZeroExMainnetAddress = "0xf42eCDC112365fF79a745B4cf7D4C266bd6E4b25";
declare const ExchangeIssuanceZeroExPolygonAddress = "0x0F5C21d4929f6F17119f43b0c51E665f12367A19";

interface LeveragedTokenData {
    collateralAToken: string;
    collateralToken: string;
    debtToken: string;
    collateralAmount: BigNumber;
    debtAmount: BigNumber;
}
declare class FlashMintLeveraged {
    contract: Contract;
    /**
     * @param contract    An instance of an FlashMintLeveraged contract
     */
    constructor(contract: Contract);
    /**
     * Returns the collateral / debt token addresses and amounts for a leveraged index.
     *
     * @param _setToken     Address of the Set token to be minted / redeemed
     * @param _setAmount    Amount of tokens to mint / redeem
     * @param _isIssuance   Boolean indicating if the Set token is to be issued/minted or redeemed
     *
     * @return Struct containing the collateral / debt token addresses and amounts.
     */
    getLeveragedTokenData: (_setToken: string, _setAmount: BigNumber, _isIssuance: boolean) => Promise<LeveragedTokenData | null>;
    /**
     * Trigger minting of Set token paying with any arbitrary ERC20 token.
     *
     * @param _setToken                     Set token to mint
     * @param _setAmount                    Amount to mint
     * @param _inputToken                   Input token to pay with
     * @param _maxAmountInputToken          Maximum amount of input token to spend
     * @param _swapDataDebtForCollateral    SwapData (token addresses and fee levels) to describe the swap path from debt to collateral token
     * @param _swapDataInputToken           SwapData (token addresses and fee levels) to describe the swap path from input to collateral token
     * @param overrides                     Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */
    mintExactSetFromERC20: (_setToken: string, _setAmount: BigNumber, _inputToken: string, _maxAmountInputToken: BigNumber, _swapDataDebtForCollateral: SwapData, _swapDataInputToken: SwapData, overrides: TransactionOverrides) => Promise<TransactionResponse | null>;
    /**
     * Trigger minting of set token paying with ETH.
     *
     * @param _setToken                     Set token to mint
     * @param _setAmount                    Amount to mint
     * @param _swapDataDebtForCollateral    SwapData (token addresses and fee levels) to describe the swap path from debt to collateral token
     * @param _swapDataInputToken           SwapData (token addresses and fee levels) to describe the swap path from eth to collateral token
     * @param maxInput                      Maximum amount of eth to spend
     * @param overrides                     Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */
    mintExactSetFromETH: (_setToken: string, _setAmount: BigNumber, _swapDataDebtForCollateral: SwapData, _swapDataInputToken: SwapData, maxInput: BigNumber, overrides: TransactionOverrides) => Promise<TransactionResponse | null>;
    /**
     * Trigger redemption of set token to pay the user with an arbitrary ERC20.
     *
     * @param _setToken                   Set token to redeem
     * @param _setAmount                  Amount to redeem
     * @param _outputToken                Address of the ERC20 token to send to the user
     * @param _minAmountOutputToken       Minimum amount of output token to send to the user
     * @param _swapDataCollateralForDebt  SwapData (token path and fee levels) describing the swap from collateral token to debt token
     * @param _swapDataOutputToken        SwapData (token path and fee levels) describing the swap from collateral token to output token
     * @param overrides                   Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */
    redeemExactSetForERC20: (_setToken: string, _setAmount: BigNumber, _outputToken: string, _minAmountOutputToken: BigNumber, _swapDataCollateralForDebt: SwapData, _swapDataOutputToken: SwapData, overrides: TransactionOverrides) => Promise<TransactionResponse | null>;
    /**
     * Trigger redemption of set token to pay the user with Eth.
     *
     * @param _setToken                   Set token to redeem
     * @param _setAmount                  Amount to redeem
     * @param _minAmountOutputToken       Minimum amount of ETH to send to the user
     * @param _swapDataCollateralForDebt  SwapData (token path and fee levels) describing the swap from collateral token to debt token
     * @param _swapDataOutputToken        SwapData (token path and fee levels) describing the swap from collateral token to output token
     * @param overrides                   Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */
    redeemExactSetForETH(_setToken: string, _setAmount: BigNumber, _minAmountOutputToken: BigNumber, _swapDataCollateralForDebt: SwapData, _swapDataOutputToken: SwapData, overrides: TransactionOverrides): Promise<TransactionResponse | null>;
}

declare enum Exchange {
    None = 0,
    Quickswap = 1,
    Sushiswap = 2,
    UniV3 = 3,
    Curve = 4
}
interface SwapData {
    exchange: Exchange;
    path: string[];
    fees: number[];
    pool: string;
}
declare const getSwapDataCollateralDebt: (leveragedTokenData: LeveragedTokenData, includedSources: string, slippage: number, chainId: number, zeroExApi: ZeroExApi) => Promise<{
    swapDataDebtCollateral: SwapData;
    collateralObtainedOrSold: BigNumber;
} | null>;
declare const getSwapDataDebtCollateral: (leveragedTokenData: LeveragedTokenData, includedSources: string, slippage: number, chainId: number, zeroExApi: ZeroExApi) => Promise<{
    swapDataDebtCollateral: SwapData;
    collateralObtainedOrSold: BigNumber;
} | null>;
declare const getSwapData: (params: any, slippage: number, chainId: number, zeroExApi: ZeroExApi) => Promise<{
    swapData: SwapData;
    zeroExQuote: any;
} | null>;
declare function getEchangeFrom0xKey(key: string | undefined): Exchange | null;
declare function swapDataFrom0xQuote(zeroExQuote: any): SwapData | null;

declare const collateralDebtSwapData: {
    [x: string]: {
        exchange: Exchange;
        path: string[];
        fees: never[];
        pool: string;
    };
};
declare const debtCollateralSwapData: {
    [x: string]: {
        exchange: Exchange;
        path: string[];
        fees: never[];
        pool: string;
    };
};
declare const inputSwapData: {
    [x: string]: {
        [x: string]: {
            exchange: Exchange;
            path: string[];
            fees: never[];
            pool: string;
        };
    };
};
declare const outputSwapData: {
    [x: string]: {
        [x: string]: {
            exchange: Exchange;
            path: string[];
            fees: never[];
            pool: string;
        };
    };
};

interface Token {
    symbol: string;
    address?: string;
    addressOptimism?: string;
    addressPolygon?: string;
}
declare const B4BIndex: Token;
declare const BanklessBEDIndex: Token;
declare const BTC2xFlexibleLeverageIndex: Token;
declare const DefiPulseIndex: Token;
declare const DiversifiedStakedETHIndex: Token;
declare const ETH2xFlexibleLeverageIndex: Token;
declare const GitcoinStakedETHIndex: Token;
declare const InterestCompoundingETHIndex: Token;
declare const JPGIndex: Token;
declare const MetaverseIndex: Token;
declare const MoneyMarketIndexToken: Token;
declare const DAI: Token;
declare const ETH: Token;
declare const MATIC: Token;
declare const sETH2: Token;
declare const stETH: Token;
declare const USDC: Token;
declare const USDT: Token;
declare const WETH: Token;
declare const wsETH2: Token;
declare const wstETH: Token;
declare const BTC2xFlexibleLeverageIndexPolygon: Token;
declare const ETH2xFlexibleLeverageIndexPolygon: Token;
declare const GMIIndex: Token;
declare const InverseBTCFlexibleLeverageIndex: Token;
declare const InverseETHFlexibleLeverageIndex: Token;
declare const InverseMATICFlexibleLeverageIndex: Token;
declare const MATIC2xFlexibleLeverageIndex: Token;
declare const Web3DataEconomyIndex: Token;

interface FlashMintLeveragedBuildRequest {
    isMinting: boolean;
    indexToken: string;
    indexTokenSymbol: string;
    inputOutputToken: string;
    inputOutputTokenSymbol: string;
    indexTokenAmount: BigNumber;
    inputOutputTokenAmount: BigNumber;
    swapDataDebtCollateral: SwapData;
    swapDataPaymentToken: SwapData;
}
declare class LeveragedTransactionBuilder implements TransactionBuilder<FlashMintLeveragedBuildRequest, TransactionRequest> {
    private readonly provider;
    constructor(provider: JsonRpcProvider);
    build(request: FlashMintLeveragedBuildRequest): Promise<TransactionRequest | null>;
    private isValidSwapData;
    private isValidRequest;
}

declare type erc4626SwapData = {
    dexData: SwapData;
};
interface ComponentSwapData {
    underlyingERC20: string;
    dexData: SwapData;
    buyUnderlyingAmount: BigNumber;
}
declare function getIssuanceComponentSwapData(indexTokenSymbol: string, indexToken: string, inputToken: string, indexTokenAmount: BigNumber, provider: JsonRpcProvider): Promise<ComponentSwapData[]>;
declare function getIssuanceERC4626SwapData(indexTokenSymbol: string, indexToken: string, inputToken: string, indexTokenAmount: BigNumber, provider: JsonRpcProvider): Promise<ComponentSwapData[]>;
declare function getRedemptionERC4626SwapData(indexTokenSymbol: string, indexToken: string, outputToken: string, indexTokenAmount: BigNumber, provider: JsonRpcProvider): Promise<ComponentSwapData[]>;
declare function getRedemptionComponentSwapData(indexTokenSymbol: string, indexToken: string, outputToken: string, indexTokenAmount: BigNumber, provider: JsonRpcProvider): Promise<ComponentSwapData[]>;

interface ComponentWrapData {
    integrationName: string;
    wrapData: string;
}
declare function getWrapData(tokenSymbol: string): ComponentWrapData[];

interface FlashMintWrappedBuildRequest {
    isMinting: boolean;
    indexToken: string;
    inputOutputToken: string;
    inputOutputTokenSymbol: string;
    indexTokenAmount: BigNumber;
    inputOutputTokenAmount: BigNumber;
    componentSwapData: ComponentSwapData[];
    componentWrapData: ComponentWrapData[];
}
interface FlashMintERC4626BuildRequest {
    isMinting: boolean;
    indexToken: string;
    inputOutputToken: string;
    inputOutputTokenSymbol: string;
    indexTokenAmount: BigNumber;
    inputOutputTokenAmount: BigNumber;
    componentSwapData: erc4626SwapData[];
}
declare class WrappedTransactionBuilder implements TransactionBuilder<FlashMintWrappedBuildRequest, TransactionRequest> {
    private readonly provider;
    constructor(provider: JsonRpcProvider);
    build(request: FlashMintWrappedBuildRequest): Promise<TransactionRequest | null>;
    private isValidRequest;
}
declare class ERC4626TransactionBuilder implements TransactionBuilder<FlashMintERC4626BuildRequest, TransactionRequest> {
    private readonly provider;
    constructor(provider: JsonRpcProvider);
    build(request: FlashMintERC4626BuildRequest): Promise<TransactionRequest | null>;
    private isValidRequest;
}

interface FlashMintZeroExBuildRequest {
    isMinting: boolean;
    indexToken: string;
    indexTokenSymbol: string;
    inputOutputToken: string;
    inputOutputTokenSymbol: string;
    indexTokenAmount: BigNumber;
    inputOutputTokenAmount: BigNumber;
    componentQuotes: string[];
}
declare class ZeroExTransactionBuilder implements TransactionBuilder<FlashMintZeroExBuildRequest, TransactionRequest> {
    private readonly provider;
    constructor(provider: JsonRpcProvider);
    build(request: FlashMintZeroExBuildRequest): Promise<TransactionRequest | null>;
    private isValidRequest;
}

interface RequiredComponentsResponse {
    components: string[];
    positions: BigNumber[];
}
declare class FlashMintZeroEx {
    contract: Contract;
    /**
     * @param contract    An instance of an FlashMintZeroEx contract
     */
    constructor(contract: Contract);
    /**
     * Returns transaction to get component & position quotes for token minting.
     *
     * @param _issuanceModule     Address of issuance module to use
     * @param _isDebtIssuance     Flag indicating wether given issuance module is a debt issuance module
     * @param _setToken           Address of the Set token to be minted
     * @param _amountSetToken     Amount of Set tokens to mint
     *
     * @return A RequiredComponentsResponse including component and position quotes (empty on error)
     */
    getRequiredIssuanceComponents: (_issuanceModule: string, _isDebtIssuance: boolean, _setToken: string, _amountSetToken: BigNumber) => Promise<RequiredComponentsResponse>;
    /**
     * Returns transaction to get component & position quotes for token redemption.
     *
     * @param _issuanceModule     Address of issuance Module to use
     * @param _isDebtIssuance     Flag indicating wether given issuance module is a debt issuance module
     * @param _setToken           Address of the Set token to be redeemed
     * @param _amountSetToken     Amount of Set tokens to redeem
     *
     * @return A RequiredComponentsResponse including component and position quotes (empty on error)
     */
    getRequiredRedemptionComponents: (_issuanceModule: string, _isDebtIssuance: boolean, _setToken: string, _amountSetToken: BigNumber) => Promise<RequiredComponentsResponse>;
    /**
     * Mints an exact amount of Set tokens for given amount of ETH.
     * The excess amount of tokens is returned in an equivalent amount of ether.
     *
     * @param _setToken           Address of the Set token to be minted
     * @param _amountSetToken     Amount of Set tokens to mint
     * @param _componentQuotes    The encoded 0x transactions to execute
     * @param _issuanceModule     Address of issuance Module to use
     * @param _isDebtIssuance     Flag indicating wether given issuance module is a debt issuance module
     * @param maxInput            Max eth to use as input (will be set as value for the tx)
     * @param overrides           Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */
    mintExactSetFromETH: (_setToken: string, _amountSetToken: BigNumber, _componentQuotes: string[], _issuanceModule: string, _isDebtIssuance: boolean, maxInput: BigNumber, overrides: TransactionOverrides) => Promise<TransactionResponse | null>;
    /**
     * Mints an exact amount of Set tokens for given amount of input ERC20 tokens.
     * The excess amount of tokens is returned in an equivalent amount of ether.
     *
     * @param _setToken               Address of the Set token to be FlashMintLeveragedQuote
     * @param _inputToken             Address of the input token
     * @param _amountSetToken         Amount of Set tokens to mint
     * @param _maxAmountInputToken    Maximum amount of input tokens to be used to mint Set tokens
     * @param _componentQuotes        The encoded 0x transactions to execute
     * @param _issuanceModule         Address of issuance Module to use
     * @param _isDebtIssuance         Flag indicating wether given issuance module is a debt issuance module
     * @param overrides           Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */
    mintExactSetFromToken: (_setToken: string, _inputToken: string, _amountSetToken: BigNumber, _maxAmountInputToken: BigNumber, _componentQuotes: string[], _issuanceModule: string, _isDebtIssuance: boolean, overrides: TransactionOverrides) => Promise<TransactionResponse | null>;
    /**
     * Redeems an exact amount of Set tokens for ETH.
     * The Set token must be approved by the sender to this contract.
     *
     * @param _setToken              Address of the Set token be redeemed
     * @param _amountSetToken        Amount of Set token to redeem
     * @param _minEthReceive         Minimum amount of Eth to receive
     * @param _componentQuotes       The encoded 0x transactions to execute
     * @param _issuanceModule        Address of issuance module to use
     * @param _isDebtIssuance        Flag indicating wether given issuance module is a debt issuance module
     * @param overrides           Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */
    redeemExactSetForETH: (_setToken: string, _amountSetToken: BigNumber, _minEthReceive: BigNumber, _componentQuotes: string[], _issuanceModule: string, _isDebtIssuance: boolean, overrides: TransactionOverrides) => Promise<TransactionResponse | null>;
    /**
     * Redeems an exact amount of Set tokens for ERC20 tokens.
     * The excess amount of tokens is returned in an equivalent amount of ether.
     *
     * @param _setToken             Address of the Set token to be redeemed
     * @param _outputToken          Address of the output token
     * @param _amountSetToken       Amount of output token to redeem
     * @param _minOutputReceive     Minimum amount of output token to receive
     * @param _componentQuotes      The encoded 0x transactions to execute
     * @param _issuanceModule       Address of issuance module to use
     * @param _isDebtIssuance       Flag indicating wether given issuance module is a debt issuance module
     * @param overrides           Overrides for the transaction
     *
     * @return A TransactionResponse on success, null on error.
     */
    redeemExactSetForToken: (_setToken: string, _outputToken: string, _amountSetToken: BigNumber, _minOutputReceive: BigNumber, _componentQuotes: string[], _issuanceModule: string, _isDebtIssuance: boolean, overrides: TransactionOverrides) => Promise<TransactionResponse | null>;
}

interface QuoteProvider<R, Q> {
    getQuote(request: R): Promise<Q | null>;
}

declare enum FlashMintContractType {
    leveraged = 0,
    wrapped = 1,
    erc4626 = 2,
    zeroEx = 3
}
interface FlashMintQuoteRequest {
    isMinting: boolean;
    inputToken: QuoteToken;
    outputToken: QuoteToken;
    indexTokenAmount: BigNumber;
    slippage: number;
}
interface FlashMintQuote {
    chainId: number;
    contractType: FlashMintContractType;
    contract: string;
    isMinting: boolean;
    inputToken: QuoteToken;
    outputToken: QuoteToken;
    indexTokenAmount: BigNumber;
    inputOutputAmount: BigNumber;
    slippage: number;
    tx: TransactionRequest;
}
declare class FlashMintQuoteProvider implements QuoteProvider<FlashMintQuoteRequest, FlashMintQuote> {
    private readonly provider;
    constructor(provider: JsonRpcProvider);
    getQuote(request: FlashMintQuoteRequest): Promise<FlashMintQuote | null>;
}

interface FlashMintWrappedQuoteRequest {
    isMinting: boolean;
    inputToken: QuoteToken;
    outputToken: QuoteToken;
    indexTokenAmount: BigNumber;
    slippage: number;
}
interface FlashMintWrappedQuote {
    componentSwapData: ComponentSwapData[];
    componentWrapData: ComponentWrapData[];
    indexTokenAmount: BigNumber;
    inputOutputTokenAmount: BigNumber;
}
interface ERC4626WrappedQuote {
    componentSwapData: erc4626SwapData[];
    indexTokenAmount: BigNumber;
    inputOutputTokenAmount: BigNumber;
}
declare class WrappedQuoteProvider implements QuoteProvider<FlashMintWrappedQuoteRequest, FlashMintWrappedQuote> {
    private readonly provider;
    constructor(provider: JsonRpcProvider);
    getQuote(request: FlashMintWrappedQuoteRequest): Promise<FlashMintWrappedQuote | null>;
}
declare class ERC4626QuoteProvider implements QuoteProvider<FlashMintWrappedQuoteRequest, ERC4626WrappedQuote> {
    private readonly provider;
    constructor(provider: JsonRpcProvider);
    getQuote(request: FlashMintWrappedQuoteRequest): Promise<ERC4626WrappedQuote | null>;
}

interface FlashMintLeveragedQuote {
    swapDataDebtCollateral: SwapData;
    swapDataPaymentToken: SwapData;
    inputOutputTokenAmount: BigNumber;
    setTokenAmount: BigNumber;
}
declare function getIncludedSources(isIcEth: boolean): string;
declare function getPaymentTokenAddress(paymentTokenAddress: string, paymentTokenSymbol: string, isMinting: boolean, chainId: number): string;
declare function getSwapDataAndPaymentTokenAmount(setTokenSymbol: string, collateralToken: string, collateralShortfall: BigNumber, leftoverCollateral: BigNumber, paymentTokenAddress: string, isMinting: boolean, slippage: number, includedSources: string, zeroExApi: ZeroExApi, chainId: number): Promise<{
    swapDataPaymentToken: SwapData;
    paymentTokenAmount: BigNumber;
}>;
/**
 *  Returns a Flash Mint Leveraged quote (incl. 0x trade data) or null.
 *
 * @param inputToken          The input token (token you sell)
 * @param outputToken         The output token (token you receive)
 * @param setTokenAmount      The amount of set token that should be received/sold
 * @param isMinting           Whether minting or redeeming
 * @param slippage            The slippage to use
 * @param zeroExApi           A ZeroExApi instance
 * @param provider            A JsonRpcProvider instance
 * @param chainId             ID for current chain
 *
 * @return A FlashMintLeveragedQuote.
 */
declare const getFlashMintLeveragedQuote: (inputToken: QuoteToken, outputToken: QuoteToken, setTokenAmount: BigNumber, isMinting: boolean, slippage: number, zeroExApi: ZeroExApi, provider: JsonRpcProvider, chainId: number) => Promise<FlashMintLeveragedQuote | null>;

interface FlashMintZeroExQuote {
    componentQuotes: string[];
    inputOutputTokenAmount: BigNumber;
    setTokenAmount: BigNumber;
}
/**
 * Returns a Flash Mint ZeroEx quote (incl. 0x trade data) or null.
 *
 * @param inputToken          The input token (token you sell)
 * @param outputToken         The output token (token you receive)
 * @param setTokenAmount      The amount of set token that should be received/sold
 * @param isMinting           Whether minting or redeeming
 * @param slippage            The slippage to use
 * @param zeroExApi           A ZeroExApi instance
 * @param provider            A JsonRpcProvider instance
 * @param chainId             ID for current chain
 *
 * @return An FlashMintZeroExQuote.
 */
declare const getFlashMintZeroExQuote: (inputToken: QuoteToken, outputToken: QuoteToken, setTokenAmount: BigNumber, isMinting: boolean, slippage: number, zeroExApi: ZeroExApi, provider: JsonRpcProvider, chainId: number) => Promise<FlashMintZeroExQuote | null>;
/**
 * Returns the required component and position quotes depending on minting/redeeming.
 * @param isMinting       Whether minting or redeeming
 * @param setToken        Address of the Set token
 * @param setTokenSymbol  Symbol of the Set token
 * @param setTokenAmount  Amount of the Set token
 * @param provider        An instance of JsonRpcProvider
 * @param chainId         ID of the network
 */
declare function getRequiredComponents(isMinting: boolean, setToken: string, setTokenSymbol: string, setTokenAmount: BigNumber, provider: JsonRpcProvider, chainId: number): Promise<{
    components: string[];
    positions: BigNumber[];
}>;

declare function getExchangeIssuanceLeveragedContractAddress(chainId?: number): string;
/**
 * Returns an instance of a FlashMintLeveraged contract based on the chain.
 *
 * @param signerOrProvider  a signer or provider
 * @param chainId           chainId for contract (default Polygon since this where
 *                          the contract is mostly used)
 *
 * @returns an instance of a FlashMintLeveraged contract
 */
declare const getFlashMintLeveragedContract: (signerOrProvider: Signer | Provider | undefined, chainId?: number) => Contract;
/**
 * Returns an instance of a FlashMintLeveragedForCompound contract (mainnet only).
 * @param signerOrProvider  A signer or provider.
 * @returns An instance of a FlashMintLeveragedForCompound contract.
 */
declare const getFlashMintLeveragedForCompoundContract: (signerOrProvider: Signer | Provider | undefined) => Contract;
/**
 * Returns an instance of a FlasthMintWrapped contract (mainnet only).
 * @param signerOrProvider  A signer or provider.
 * @returns An instance of a FlasthMintWrapped contract.
 */
declare const getFlashMintWrappedContract: (signerOrProvider: Signer | Provider | undefined) => Contract;
/**
 * Returns an instance of a FlasthMintWrapped contract (mainnet only).
 * @param signerOrProvider  A signer or provider.
 * @returns An instance of a FlasthMintWrapped contract.
 */
declare const getFlashMint4626Contract: (signerOrProvider: Signer | Provider | undefined) => Contract;
/**
 * Returns an instance of a FlashMintLeveraged contract based on the token. This
 * could be new contract on Index Protocol or old contracts on Set Protocol.
 *
 * @param token             a token to mint/redeem
 * @param signerOrProvider  a signer or provider
 * @param chainId           chainId for contract (default Polygon since this where
 *                          the contract is mostly used)
 *
 * @returns an instance of a FlashMintLeveraged contract
 */
declare const getFlashMintLeveragedContractForToken: (token: string, signerOrProvider: Signer | Provider | undefined, chainId?: number) => Contract;
declare function getExchangeIssuanceZeroExContractAddress(chainId?: number): string;
/**
 * Returns an instance of a FlashMintZeroEx contract for Set Protocol (based on
 * the chain).
 *
 * @param providerSigner  provider or signer
 * @param chainId         chain ID for the network (default Mainnet)
 *
 * @returns an instance of a FlashMintZeroEx contract
 */
declare const getFlashMintZeroExContract: (providerSigner: Signer | Provider | undefined, chainId?: number) => Contract;
/**
 * Returns the correct instance of a FlashMintZeroEx contract - depending on the
 * token. It will be either Index Protocol (new) or (Set Protocol)
 *
 * @param token           the token to be minted/redeemed
 * @param providerSigner  provider or signer
 * @param chainId         chain ID for the network (default Mainnet)
 *
 * @returns an instance of a FlashMintZeroEx contract
 */
declare const getFlashMintZeroExContractForToken: (token: string, providerSigner: Signer | Provider | undefined, chainId?: number) => Contract;
declare function getIndexFlashMintZeroExContractAddress(chainId: number): string;
/**
 * Returns an instance of an FlashMintZeroEx contract for Index Protocol (based
 * on the chain).
 *
 * @param providerSigner  A provider or signer
 * @param chainId         The chain ID for the network (default Mainnet)
 *
 * @returns An instance of a FlashMintZeroEx contract
 */
declare const getIndexFlashMintZeroExContract: (providerSigner: Signer | Provider | undefined, chainId?: number) => Contract;

interface IssuanceModule {
    address: string;
    isDebtIssuance: boolean;
}
declare function getIssuanceModule(tokenSymbol: string, chainId?: number): IssuanceModule;

declare const wei: (input: number | string, power?: number) => BigNumber;

/**
 * Returns slippage adjusted token amount based on minting/redeeming.
 * @param tokenAmount     The token amount to be adjusted
 * @param tokenDecimals   The token's decimals
 * @param slippage        The slippage in percent: 0.1 - 100
 * @param isMinting       Whether minting or redeeming
 */
declare function slippageAdjustedTokenAmount(tokenAmount: BigNumber, tokenDecimals: number, slippage: number, isMinting: boolean): BigNumber;

declare function getAddressForToken(token: Token, chainId: number | undefined): string | undefined;

/**
 * Returns fees for pool (converts hex to decimal)
 *
 * @param path expects a path of 0x's `uniswapPath` which encodes pools and fees,
 * see an example below:
 * 0x2791bca1f2de4661ed88a30c99a7a9449aa841740001f47ceb23fd6bc0add59e62ac25578270cff1b9f619
 *
 * @returns an array of fees as numbers e.g. [500, 500]
 */
declare function extractPoolFees(path: string): number[];

export { B4BIndex, BTC2xFlexibleLeverageIndex, BTC2xFlexibleLeverageIndexPolygon, BanklessBEDIndex, BasicIssuanceModuleAddress, BasicIssuanceModulePolygonAddress, ChainId, ComponentQuotesResult, ComponentSwapData, ComponentWrapData, DAI, DebtIssuanceModuleAddress, DebtIssuanceModuleV2Address, DebtIssuanceModuleV2PolygonAddress, DefiPulseIndex, DiversifiedStakedETHIndex, ERC4626QuoteProvider, ERC4626TransactionBuilder, ERC4626WrappedQuote, ETH, ETH2xFlexibleLeverageIndex, ETH2xFlexibleLeverageIndexPolygon, Exchange, ExchangeIssuanceLeveragedMainnetAddress, ExchangeIssuanceLeveragedPolygonAddress, ExchangeIssuanceZeroExMainnetAddress, ExchangeIssuanceZeroExPolygonAddress, FlashMint4626Address, FlashMintContractType, FlashMintERC4626BuildRequest, FlashMintLeveraged, FlashMintLeveragedBuildRequest, FlashMintLeveragedForCompoundAddress, FlashMintLeveragedQuote, FlashMintQuote, FlashMintQuoteProvider, FlashMintQuoteRequest, FlashMintWrappedAddress, FlashMintWrappedBuildRequest, FlashMintWrappedQuote, FlashMintWrappedQuoteRequest, FlashMintZeroEx, FlashMintZeroExBuildRequest, FlashMintZeroExMainnetAddress, FlashMintZeroExQuote, GMIIndex, GitcoinStakedETHIndex, IndexDebtIssuanceModuleV2Address, InterestCompoundingETHIndex, InverseBTCFlexibleLeverageIndex, InverseETHFlexibleLeverageIndex, InverseMATICFlexibleLeverageIndex, IssuanceModule, JPGIndex, LeveragedTokenData, LeveragedTransactionBuilder, MATIC, MATIC2xFlexibleLeverageIndex, MetaverseIndex, MoneyMarketIndexToken, QuoteToken, SwapData, Token, TransactionBuilder, TransactionOverrides, USDC, USDT, WETH, Web3DataEconomyIndex, WrappedQuoteProvider, WrappedTransactionBuilder, ZeroExApi, ZeroExApiSwapRequest, ZeroExApiSwapResponse, ZeroExTransactionBuilder, collateralDebtSwapData, debtCollateralSwapData, erc4626SwapData, extractPoolFees, getAddressForToken, getEchangeFrom0xKey, getExchangeIssuanceLeveragedContractAddress, getExchangeIssuanceZeroExContractAddress, getFlashMint4626Contract, getFlashMintLeveragedContract, getFlashMintLeveragedContractForToken, getFlashMintLeveragedForCompoundContract, getFlashMintLeveragedQuote, getFlashMintWrappedContract, getFlashMintZeroExContract, getFlashMintZeroExContractForToken, getFlashMintZeroExQuote, getIncludedSources, getIndexFlashMintZeroExContract, getIndexFlashMintZeroExContractAddress, getIssuanceComponentSwapData, getIssuanceERC4626SwapData, getIssuanceModule, getPaymentTokenAddress, getRedemptionComponentSwapData, getRedemptionERC4626SwapData, getRequiredComponents, getSwapData, getSwapDataAndPaymentTokenAmount, getSwapDataCollateralDebt, getSwapDataDebtCollateral, getWrapData, inputSwapData, outputSwapData, sETH2, slippageAdjustedTokenAmount, stETH, swapDataFrom0xQuote, wei, wsETH2, wstETH };
