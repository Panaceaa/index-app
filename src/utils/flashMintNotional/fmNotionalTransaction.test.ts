import { SwapData } from 'flash-mint-sdk'

import { DAI } from 'constants/tokens'
import { toWei } from 'utils'
import { LocalhostProvider, SignerAccount0 } from 'utils/test-utils'

import { getFlashMintNotionalContract } from './fmNotionalContract'
import { getFlashMintNotionalTransaction } from './fmNotionalTransaction'

const provider = LocalhostProvider
const signer = SignerAccount0

describe('getFlashMintNotionalTransaction()', () => {
  beforeEach((): void => {
    jest.setTimeout(1000000)
  })
  
})
