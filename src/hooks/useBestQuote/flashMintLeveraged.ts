import { BigNumber } from '@ethersproject/bignumber'
import { JsonRpcProvider } from '@ethersproject/providers'
import { ZeroExApi,
} from 'flash-mint-sdk'

import { DefaultGasLimitFlashMintLeveraged } from 'constants/gas'
import {
  Token,
} from 'constants/tokens'
import { getFullCostsInUsd, getGasCostsInUsd } from 'utils/costs'
import { getFlashMintLeveragedTransaction } from 'utils/flashMint/flashMintLeveragedTransaction'
import { GasEstimatooor } from 'utils/gasEstimatooor'
import { TxSimulator } from 'utils/simulator'
import { getCurrencyTokensForIndex } from 'utils/tokens'

import { ExchangeIssuanceLeveragedQuote, QuoteType } from './'

/* Determines if the token pair is eligible for Leveraged Exchange Issuance */
export const isEligibleTradePair = (
  inputToken: Token,
  outputToken: Token,
  chainId: number,
  isIssuance: boolean
) => {
  const indexToken = isIssuance ? outputToken : inputToken
  const inputOutputToken = isIssuance ? inputToken : outputToken
  const indexIsEligibleLeveragedToken = false
  const supportedTokens = getCurrencyTokensForIndex(
    indexToken,
    chainId,
    isIssuance
  )
  const inputOutputTokenIsSupported =
    supportedTokens.filter((token) => token.symbol === inputOutputToken.symbol)
      .length > 0
  return indexIsEligibleLeveragedToken && inputOutputTokenIsSupported
}

export async function getEnhancedFlashMintLeveragedQuote(
  isMinting: boolean,
  inputTokenAddress: string,
  outputTokenAddress: string,
  inputTokenBalance: BigNumber,
  sellToken: Token,
  buyToken: Token,
  indexTokenAmount: BigNumber,
  sellTokenPrice: number,
  nativeTokenPrice: number,
  gasPrice: BigNumber,
  slippage: number,
  chainId: number,
  provider: JsonRpcProvider,
  zeroExApi: ZeroExApi,
  signer: any
): Promise<ExchangeIssuanceLeveragedQuote | null> {
  const tokenEligibleForLeveragedEI = isEligibleTradePair(
    sellToken,
    buyToken,
    chainId,
    isMinting
  )
  if (!tokenEligibleForLeveragedEI) return null

  const inputToken = {
    symbol: sellToken.symbol,
    decimals: sellToken.decimals,
    address: inputTokenAddress,
  }
  const outputToken = {
    symbol: buyToken.symbol,
    decimals: buyToken.decimals,
    address: outputTokenAddress,
  }

  return null
}
