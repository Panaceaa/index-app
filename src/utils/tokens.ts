import { MAINNET, OPTIMISM, POLYGON } from 'constants/chains'
import {
  B4BIndex,
  DAI,
  ETH,
  flashMintIndexesMainnetRedeem,
  flashMintIndexesPolygonRedeem,
  indexNamesMainnet,
  indexNamesPolygon,
  IndexToken,
  mainnetCurrencyTokens,
  MATIC,
  optimismCurrencyTokens,
  polygonCurrencyTokens,
  Token,
  USDC,
  USDT,
  WETH,
} from 'constants/tokens'

export function getAddressForToken(
  token: Token,
  chainId: number | undefined
): string | undefined {
  if (token.symbol === IndexToken.symbol) return token.address
  switch (chainId) {
    case MAINNET.chainId:
      return token.address
    case OPTIMISM.chainId:
      return token.optimismAddress
    case POLYGON.chainId:
      return token.polygonAddress
    default:
      return undefined
  }
}

/**
 * Gets the list of currency tokens for the selected chain.
 * @returns Token[] list of tokens
 */
export function getCurrencyTokens(chainId: number | undefined): Token[] {
  switch (chainId) {
    case MAINNET.chainId:
      return mainnetCurrencyTokens
    case OPTIMISM.chainId:
      return optimismCurrencyTokens
    case POLYGON.chainId:
      return polygonCurrencyTokens
    default:
      return []
  }
}

/**
 * Gets the supported currency tokens for the given index.
 * @returns Token[] list of supported currency tokens
 */
export function getCurrencyTokensForIndex(
  index: Token,
  chainId: number,
  isMinting: boolean
): Token[] {
  const currencyTokens = getCurrencyTokens(chainId)
  return currencyTokens
}

export function getNativeToken(chainId: number | undefined): Token | null {
  switch (chainId) {
    case MAINNET.chainId:
      return ETH
    case OPTIMISM.chainId:
      return ETH
    case POLYGON.chainId:
      return MATIC
    default:
      return null
  }
}

export function isLeveragedToken(token: Token): boolean {
  return false
}

export const isNativeCurrency = (token: Token, chainId: number): boolean => {
  const nativeCurrency = getNativeToken(chainId)
  if (!nativeCurrency) return false
  return token.symbol === nativeCurrency.symbol
}

export const isNotTradableToken = (
  token: Token | undefined,
  chainId: number | undefined
) => {
  if (!token || !chainId) return false
  switch (chainId) {
    case MAINNET.chainId:
      return (
        indexNamesMainnet.filter((t) => t.symbol === token.symbol).length === 0
      )
    case POLYGON.chainId:
      return (
        indexNamesPolygon.filter((t) => t.symbol === token.symbol).length === 0
      )
    default:
      return false
  }
}

export function isPerpToken(token: Token): boolean {
  return token.isPerp ? true : false
}

export function isTokenAvailableForFlashMint(
  token: Token,
  chainId: number | undefined
): boolean {
  if (!chainId) return false
  switch (chainId) {
    case MAINNET.chainId:
      return (
        flashMintIndexesMainnetRedeem.filter((t) => t.symbol === token.symbol)
          .length > 0
      )
    case POLYGON.chainId:
      return (
        flashMintIndexesPolygonRedeem.filter((t) => t.symbol === token.symbol)
          .length > 0
      )
    default:
      return false
  }
}
