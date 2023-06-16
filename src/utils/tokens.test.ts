import {
  DAI,
  ETH,
  mainnetCurrencyTokens,
  MATIC,
  optimismCurrencyTokens,
  polygonCurrencyTokens,
  USDC,
  WETH,
  B4BIndex,
} from 'constants/tokens'

import {
  getAddressForToken,
  getCurrencyTokens,
  getCurrencyTokensForIndex,
  getNativeToken,
  isLeveragedToken,
} from './tokens'

describe('getAddressForToken()', () => {
  test('should return undefined for undefined chain', async () => {
    const address = getAddressForToken(WETH, undefined)
    expect(address).toBeUndefined()
  })

  test('should return correct token address for WETH on Ethereum', async () => {
    const address = getAddressForToken(WETH, 1)
    expect(address).toBeDefined()
    expect(address).toEqual(WETH.address)
  })

  test('should return correct token address for WETH on Optimism', async () => {
    const address = getAddressForToken(WETH, 10)
    expect(address).toBeDefined()
    expect(address).toEqual(WETH.optimismAddress)
  })

  test('should return correct token address for WETH on Polygon', async () => {
    const address = getAddressForToken(WETH, 137)
    expect(address).toBeDefined()
    expect(address).toEqual(WETH.polygonAddress)
  })
})

describe('getCurrencyTokens()', () => {
  test('returns empty array for unsupported chain', async () => {
    const currencyTokens = getCurrencyTokens(100)
    expect(currencyTokens).toEqual([])
  })

  test('returns correct currency tokens for mainnet', async () => {
    const currencyTokens = getCurrencyTokens(1)
    expect(currencyTokens).toEqual(mainnetCurrencyTokens)
  })

  test('returns correct currency tokens for optimism', async () => {
    const currencyTokens = getCurrencyTokens(10)
    expect(currencyTokens).toEqual(optimismCurrencyTokens)
  })

  test('returns correct currency tokens for polygon', async () => {
    const currencyTokens = getCurrencyTokens(137)
    expect(currencyTokens).toEqual(polygonCurrencyTokens)
  })
})

describe('getCurrencyTokensForIndex()', () => {

  test('returns default currency tokens', async () => {
    const chainId = 1
    const token = B4BIndex
    const defaultTokens = getCurrencyTokens(chainId)
    const currencyTokens = getCurrencyTokensForIndex(token, chainId, true)
    expect(currencyTokens.length).toEqual(defaultTokens.length)
    expect(currencyTokens).toEqual(defaultTokens)
  })

  test('returns default currency tokens', async () => {
    const chainId = 137
    const token = B4BIndex
    const defaultTokens = getCurrencyTokens(chainId)
    const currencyTokens = getCurrencyTokensForIndex(token, chainId, true)
    expect(currencyTokens.length).toEqual(defaultTokens.length)
    expect(currencyTokens).toEqual(defaultTokens)
  })
})

describe('getNativeToken()', () => {
  test('should return undefined for undefined chain', async () => {
    const nativeToken = getNativeToken(undefined)
    expect(nativeToken).toBeNull()
  })

  test('should return correct token address for WETH on Ethereum', async () => {
    const nativeToken = getNativeToken(1)
    expect(nativeToken).toBeDefined()
    expect(nativeToken).toEqual(ETH)
  })

  test('should return correct token address for WETH on Optimism', async () => {
    const nativeToken = getNativeToken(10)
    expect(nativeToken).toBeDefined()
    expect(nativeToken).toEqual(ETH)
  })

  test('should return correct token address for WETH on Polygon', async () => {
    const nativeToken = getNativeToken(137)
    expect(nativeToken).toBeDefined()
    expect(nativeToken).toEqual(MATIC)
  })
})

describe('isLeveragedToken()', () => {
  test('should return false for non leveraged tokens', async () => {
    const b4b = isLeveragedToken(B4BIndex)
    expect(b4b).toBe(false)
  })

})
