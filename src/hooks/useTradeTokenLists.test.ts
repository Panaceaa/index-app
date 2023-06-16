import {
  flashMintIndexesMainnetRedeem,
  flashMintIndexesPolygonRedeem,
  indexNamesMainnet,
  indexNamesPolygon,
} from 'constants/tokens'

import { getTokenListByChain } from './useTradeTokenLists'

describe('getTokenListByChain()', () => {
  test('returns regular list for swap on mainnet', async () => {
    const chainId = 1
    const isFlashMint = false
    const singleToken = undefined
    const list = getTokenListByChain(chainId, isFlashMint, singleToken)
    expect(list).toEqual(indexNamesMainnet)
  })

  test('returns redeem list for flash mint on mainnet', async () => {
    const chainId = 1
    const isFlashMint = true
    const singleToken = undefined
    const list = getTokenListByChain(chainId, isFlashMint, singleToken)
    expect(list).toEqual(flashMintIndexesMainnetRedeem)
  })

  test('returns regular list for swap on polygon', async () => {
    const chainId = 137
    const isFlashMint = false
    const singleToken = undefined
    const list = getTokenListByChain(chainId, isFlashMint, singleToken)
    expect(list).toEqual(indexNamesPolygon)
  })

  test('returns specific list for flash mint on polygon', async () => {
    const chainId = 137
    const isFlashMint = true
    const singleToken = undefined
    const list = getTokenListByChain(chainId, isFlashMint, singleToken)
    expect(list).toEqual(flashMintIndexesPolygonRedeem)
  })

  test('returns MMI only for FlashMint (not Swap)', async () => {
    const chainId = 1
    const singleToken = undefined
    const flashMintList = getTokenListByChain(chainId, true, singleToken)
    const swapList = getTokenListByChain(chainId, false, singleToken)
  })
})
