import axios from 'axios'
import querystring from 'querystring'

import { BigNumber } from '@ethersproject/bignumber'

import { MAINNET, POLYGON } from 'constants/chains'
import { Token } from 'constants/tokens'

import { fetchCoingeckoTokenPrice } from './coingeckoApi'

export type ZeroExData = {
  price: string
  guaranteedPrice: string
  buyTokenAddress: string
  sellTokenAddress: string
  buyAmount: string
  sellAmount: string
  to: string
  from: string
  sources: { name: string; proportion: string }[]
  displayBuyAmount: number
  displaySellAmount: number
  minOutput: BigNumber
  maxInput: BigNumber
  gas: string | undefined
  gasPrice: string
  formattedSources: string
  buyTokenCost: string
  sellTokenCost: string
}

export const getZeroExTradeData = async (
  isExactInput: boolean,
  sellToken: Token,
  buyToken: Token,
  amount: string,
  chainId: number
): Promise<ZeroExData> => {
  const params = getApiParams(
    isExactInput,
    sellToken,
    buyToken,
    amount,
    chainId
  )
  let resp
  if (chainId === MAINNET.chainId)
    resp = await axios.get(
      `https://api.0x.org/swap/v1/quote?${querystring.stringify(params)}`
    )
  else
    resp = await axios.get(
      `https://polygon.api.0x.org/swap/v1/quote?${querystring.stringify(
        params
      )}`
    )

  const zeroExData: ZeroExData = resp.data
  return await processApiResult(
    zeroExData,
    isExactInput,
    sellToken,
    buyToken,
    amount,
    chainId
  )
}

const getChainTokenAddress = (token: Token, chainId: number) => {
  if (chainId === POLYGON.chainId) return token.polygonAddress
  return token.address
}

const getApiParams = (
  isExactInput: boolean,
  sellToken: Token,
  buyToken: Token,
  buySellAmount: string,
  chainId: number
): any => {
  let params: any
  params = {
    sellToken: getChainTokenAddress(sellToken, chainId),
    buyToken: getChainTokenAddress(buyToken, chainId),
  }
  if (isExactInput) {
    params.sellAmount = getDecimalAdjustedAmount(
      buySellAmount,
      sellToken.decimals
    )
  } else {
    params.buyAmount = getDecimalAdjustedAmount(
      buySellAmount,
      buyToken.decimals
    )
  }

  return params
}

// Adds some additional information to the ZeroExData return object. This extra information is only used for display purposes, and
// will have no effect on the outcome of the transaction
const processApiResult = async (
  zeroExData: ZeroExData,
  isExactInput: boolean,
  sellToken: Token,
  buyToken: Token,
  amount: string,
  chainId: number
): Promise<ZeroExData> => {
  zeroExData.displaySellAmount = getDisplayAdjustedAmount(
    zeroExData.sellAmount,
    sellToken.decimals
  )
  zeroExData.displayBuyAmount = getDisplayAdjustedAmount(
    zeroExData.buyAmount,
    buyToken.decimals
  )

  const guaranteedPrice = BigNumber.from(zeroExData.guaranteedPrice)
  zeroExData.minOutput = isExactInput
    ? guaranteedPrice
        .mul(BigNumber.from(zeroExData.sellAmount))
        .div(BigNumber.from('1e' + sellToken.decimals))
    : BigNumber.from(amount)
  zeroExData.maxInput = isExactInput
    ? BigNumber.from(amount)
    : guaranteedPrice
        .mul(BigNumber.from(zeroExData.buyAmount))
        .div(BigNumber.from('1e' + buyToken.decimals))

  zeroExData.formattedSources = formatSources(zeroExData.sources)

  const buyTokenPrice = await fetchCoingeckoTokenPrice(
    zeroExData.buyTokenAddress,
    chainId
  )
  zeroExData.buyTokenCost = (
    buyTokenPrice * zeroExData.displayBuyAmount
  ).toFixed(2)

  const sellTokenPrice: number = await fetchCoingeckoTokenPrice(
    zeroExData.sellTokenAddress,
    chainId
  )
  zeroExData.sellTokenCost = (
    sellTokenPrice * zeroExData.displaySellAmount
  ).toFixed(2)

  return zeroExData
}

export const getDisplayAdjustedAmount = (
  amount: string,
  decimals: number
): number => {
  return BigNumber.from(amount)
    .div(BigNumber.from('1e' + decimals))
    .toNumber()
}

const formatSources = (
  sources: { name: string; proportion: string }[]
): string => {
  const activeSources: any[] = []

  sources.forEach((source: any) => {
    if (source.proportion !== '0') activeSources.push(source)
  })
  const sourceNames: string[] = activeSources.map((source) =>
    source.name.replaceAll('_', ' ')
  )

  return sourceNames.length === 1
    ? sourceNames[0]
    : sourceNames.slice(0, -1).join(', ') + ' and ' + sourceNames.slice(-1)
}

const getDecimalAdjustedAmount = (amount: string, decimals: number): string => {
  return BigNumber.from(amount)
    .mul(BigNumber.from('1e' + decimals))
    .toString()
}