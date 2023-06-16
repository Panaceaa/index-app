import { BigNumber } from 'ethers'

import {
  DAI,
  ETH,
  IndexToken,
  USDC,
  WETH,
} from 'constants/tokens'
import { toWei } from 'utils'

import { isEligibleTradePair } from './flashMintLeveraged'
import { isEligibleTradePairZeroEx } from './flashMintZeroEx'
import { getBestQuote, getSetTokenAmount, maxPriceImpact, QuoteType } from './'

describe('getBestQuote()', () => {
  test('should return 0x as best trade option', async () => {
    const bestTradeOption = getBestQuote(1, 2, 2, 3.5)
    expect(bestTradeOption.type).toEqual(QuoteType.zeroEx)
  })

  test('should return EI as the best option', async () => {
    const bestTradeOption = getBestQuote(2, 1, 3, 1)
    expect(bestTradeOption.type).toEqual(QuoteType.exchangeIssuanceZeroEx)
  })

  test('should return Leveraged EI as the best option', async () => {
    const bestTradeOption = getBestQuote(2, 2, 1, 1)
    expect(bestTradeOption.type).toEqual(QuoteType.exchangeIssuanceLeveraged)
  })

  test('should return 0x if everything else is not defined', async () => {
    const bestTradeOption = getBestQuote(1, null, null, 1)
    expect(bestTradeOption.type).toEqual(QuoteType.zeroEx)
  })

  test('should return EI if everything else is not defined', async () => {
    const bestTradeOption = getBestQuote(null, 1, null, 1)
    expect(bestTradeOption.type).toEqual(QuoteType.exchangeIssuanceZeroEx)
  })

  test('should return Leveraged EI if everything else is not defined', async () => {
    const bestTradeOption = getBestQuote(null, null, 1, 1)
    expect(bestTradeOption.type).toEqual(QuoteType.exchangeIssuanceLeveraged)
  })

  test('should NOT return 0x if price impact is too high', async () => {
    const bestTradeOption = getBestQuote(1, 1, null, 5)
    expect(bestTradeOption.type).toEqual(QuoteType.exchangeIssuanceZeroEx)
    expect(bestTradeOption.priceImpact).toEqual(true)
    const bestTradeOption2 = getBestQuote(1, null, 1, 5)
    expect(bestTradeOption2.type).toEqual(QuoteType.exchangeIssuanceLeveraged)
    expect(bestTradeOption2.priceImpact).toEqual(true)
  })

  test('should NOT return 0x if price impact is too high (higher quotes)', async () => {
    const bestTradeOption = getBestQuote(1, 1.1, null, 5)
    expect(bestTradeOption.type).toEqual(QuoteType.exchangeIssuanceZeroEx)
    expect(bestTradeOption.priceImpact).toEqual(true)
    const bestTradeOption2 = getBestQuote(1, null, 1.1, 5)
    expect(bestTradeOption2.type).toEqual(QuoteType.exchangeIssuanceLeveraged)
    expect(bestTradeOption2.priceImpact).toEqual(true)
  })
})

describe('getSetTokenAmount()', () => {
  test('should return correct set token amount if issuing - with dex option', async () => {
    const isIssuance = true
    const sellTokenAmount = '1'
    const sellTokenDecimals = 18
    const sellTokenPrice = 0
    const buyTokenPrice = 0
    const dexSwapOption = {
      ...zeroExDataMock,
      buyAmount: '2000000000000000000',
      estimatedPriceImpact: '0.3',
    }

    const setTokenAmount = getSetTokenAmount(
      isIssuance,
      sellTokenAmount,
      sellTokenDecimals,
      sellTokenPrice,
      buyTokenPrice,
      dexSwapOption
    )

    expect(setTokenAmount.toString()).toEqual(dexSwapOption.buyAmount)
  })

  test('should return correct set token amount if issuing - with dex option - which price impact is higher than max allowed', async () => {
    const isIssuance = true
    const sellTokenAmount = '1'
    const sellTokenDecimals = 18
    const sellTokenPrice = 1.5
    const buyTokenPrice = 5
    const priceImpact = maxPriceImpact + 1
    const dexSwapOption = {
      ...zeroExDataMock,
      buyAmount: '2000000000000000000',
      estimatedPriceImpact: priceImpact.toString(),
    }

    const sellTokenTotal = parseFloat(sellTokenAmount) * sellTokenPrice
    const approxOutputAmount = Math.floor(sellTokenTotal / buyTokenPrice)
    const expectedSetTokenAmount = toWei(approxOutputAmount, sellTokenDecimals)

    const setTokenAmount = getSetTokenAmount(
      isIssuance,
      sellTokenAmount,
      sellTokenDecimals,
      sellTokenPrice,
      buyTokenPrice,
      dexSwapOption
    )

    expect(setTokenAmount.toString()).toEqual(expectedSetTokenAmount.toString())
  })

  test('should return correct set token amount if issuing - without a dex option', async () => {
    const isIssuance = true
    const sellTokenAmount = '1'
    const sellTokenDecimals = 18
    const sellTokenPrice = 1.5
    const buyTokenPrice = 5
    const dexSwapOption = null

    const sellTokenTotal = parseFloat(sellTokenAmount) * sellTokenPrice
    const approxOutputAmount = Math.floor(sellTokenTotal / buyTokenPrice)
    const expectedSetTokenAmount = toWei(approxOutputAmount, sellTokenDecimals)

    const setTokenAmount = getSetTokenAmount(
      isIssuance,
      sellTokenAmount,
      sellTokenDecimals,
      sellTokenPrice,
      buyTokenPrice,
      dexSwapOption
    )

    expect(setTokenAmount.toString()).toEqual(expectedSetTokenAmount.toString())
  })

  test('should return correct set token amount if redeeming - with dex option', async () => {
    const isIssuance = false
    const sellTokenAmount = '1'
    const sellTokenDecimals = 18
    const sellTokenPrice = 0
    const buyTokenPrice = 0
    const dexSwapOption = {
      ...zeroExDataMock,
      buyAmount: '2000000000000000000',
    }

    const expectedSetTokenAmount = toWei(sellTokenAmount, sellTokenDecimals)

    const setTokenAmount = getSetTokenAmount(
      isIssuance,
      sellTokenAmount,
      sellTokenDecimals,
      sellTokenPrice,
      buyTokenPrice,
      dexSwapOption
    )

    expect(setTokenAmount.toString()).toEqual(expectedSetTokenAmount.toString())
  })

  test('should return correct set token amount if redeeming - without a dex option', async () => {
    const isIssuance = false
    const sellTokenAmount = '1'
    const sellTokenDecimals = 18
    const sellTokenPrice = 0
    const buyTokenPrice = 0
    const dexSwapOption = null

    const expectedSetTokenAmount = toWei(sellTokenAmount, sellTokenDecimals)

    const setTokenAmount = getSetTokenAmount(
      isIssuance,
      sellTokenAmount,
      sellTokenDecimals,
      sellTokenPrice,
      buyTokenPrice,
      dexSwapOption
    )

    expect(setTokenAmount.toString()).toEqual(expectedSetTokenAmount.toString())
  })
})

const zeroExDataMock = {
  chainId: '1',
  data: '',
  estimatedPriceImpact: '',
  price: '',
  guaranteedPrice: '',
  buyTokenAddress: '',
  sellTokenAddress: '',
  buyAmount: '',
  sellAmount: '',
  to: '',
  from: '',
  sources: [],
  displayBuyAmount: 0,
  displaySellAmount: 0,
  minOutput: BigNumber.from(0),
  maxInput: BigNumber.from(0),
  gas: undefined,
  gasPrice: '',
  formattedSources: '',
  buyTokenCost: '',
  sellTokenCost: '',
  value: '',
}
