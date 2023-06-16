import { BigNumber, PopulatedTransaction } from 'ethers'

import { JsonRpcProvider } from '@ethersproject/providers'

import { useNetwork } from '@/lib/hooks/useNetwork'
import { useWallet } from '@/lib/hooks/useWallet'
import { getFlashMintLeveragedTransaction } from '@/lib/utils/flashMint/flashMintLeveragedTransaction'
import { getFlashMintZeroExTransaction } from '@/lib/utils/flashMint/flashMintZeroExTransaction'
import { getFlashMintNotionalTransaction } from '@/lib/utils/flashMintNotional/fmNotionalTransaction'
import { TxSimulator } from '@/lib/utils/simulator'

import { FlashMintQuoteResult } from './useFlashMintQuote'

export const useSimulateQuote = (quoteResult: FlashMintQuoteResult) => {
  const { chainId } = useNetwork()
  const { provider, signer } = useWallet()

  async function simulateTrade(): Promise<boolean> {
    if (!chainId) return false
    const builder = new TransactionRequestBuilder(provider, signer, chainId)
    const request = await builder.makeTransactionRequest(quoteResult)
    if (!request) return false
    const accessKey = process.env.NEXT_PUBLIC_TENDERLY_ACCESS_KEY ?? ''
    const project = process.env.NEXT_PUBLIC_TENDERLY_PROJECT ?? ''
    const user = process.env.NEXT_PUBLIC_TENDERLY_USER ?? ''
    let success = false
    try {
      const simulator = new TxSimulator(accessKey, user, project)
      success = await simulator.simulate(request)
    } catch {
      // fallback: make a gas estimate
      let gasEstimate: BigNumber = await provider.estimateGas(request)
      success = gasEstimate.gt(0)
    }
    return success
  }

  return { simulateTrade }
}

class TransactionRequestBuilder {
  constructor(
    readonly provider: JsonRpcProvider,
    readonly signer: any,
    readonly chainId: number
  ) {}

  async makeTransactionRequest(
    quoteResult: FlashMintQuoteResult
  ): Promise<PopulatedTransaction | null> {
    const { chainId, provider, signer } = this
    const { quotes, slippage } = quoteResult
    const {
      flashMint,
      flashMintLeveraged: quoteLeveraged,
      flashMintNotional: quoteNotional,
      flashMintZeroEx: quoteZeroEx,
    } = quotes

    if (flashMint) {
      return flashMint.tx
    }

    if (quoteLeveraged) {
      return await getFlashMintLeveragedTransaction(
        quoteLeveraged.isMinting,
        quoteLeveraged.inputToken,
        quoteLeveraged.outputToken,
        quoteLeveraged.indexTokenAmount,
        quoteLeveraged.inputOutputTokenAmount,
        quoteLeveraged.swapDataDebtCollateral,
        quoteLeveraged.swapDataPaymentToken,
        provider,
        signer,
        chainId
      )
    }

    if (quoteNotional) {
      return await getFlashMintNotionalTransaction(
        quoteNotional.isMinting,
        quoteNotional.inputToken,
        quoteNotional.outputToken,
        quoteNotional.indexTokenAmount,
        quoteNotional.inputOutputTokenAmount,
        quoteNotional.swapData,
        slippage,
        provider,
        signer,
        chainId
      )
    }

    if (quoteZeroEx) {
      return await getFlashMintZeroExTransaction(
        quoteZeroEx.isMinting,
        quoteZeroEx.inputToken,
        quoteZeroEx.outputToken,
        quoteZeroEx.indexTokenAmount,
        quoteZeroEx.inputOutputTokenAmount,
        quoteZeroEx.componentQuotes,
        provider,
        signer,
        chainId
      )
    }

    return null
  }
}