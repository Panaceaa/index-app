import {
  collateralDebtSwapData,
  inputSwapData,
  SwapData,
} from 'flash-mint-sdk'

import { ETH } from 'constants/tokens'
import { toWei } from 'utils'
import { LocalhostProvider, SignerAccount0 } from 'utils/test-utils'

import { getFlashMintLeveragedTransaction } from './flashMintLeveragedTransaction'

const provider = LocalhostProvider
const signer = SignerAccount0

describe('getFlashMintZeroExTransaction()', () => {
  beforeEach((): void => {
    jest.setTimeout(1000000)
  })
})
