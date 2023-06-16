import { slippageDefault } from 'constants/slippage'
import {
  DAI,
  USDC,
  USDT,
} from 'constants/tokens'

export function getSlippageOverrideOrNull(
  tokenSymbol: string,
  inputOutputTokenSymbol: string
): number | null {
  if (
    inputOutputTokenSymbol === USDC.symbol
  ) {
    return 0.1
  }
  if (
    (inputOutputTokenSymbol === DAI.symbol ||
      inputOutputTokenSymbol === USDC.symbol ||
      inputOutputTokenSymbol === USDT.symbol)
  ) {
    return 0.001
  }
  return 0.1
}

export function selectSlippage(
  slippage: number,
  indexSymbol: string,
  inputOutputTokenSymbol: string
): number {
  if (slippage !== slippageDefault) return slippage
  const slippageOverrride = getSlippageOverrideOrNull(
    indexSymbol,
    inputOutputTokenSymbol
  )
  return slippageOverrride ?? slippage
}
