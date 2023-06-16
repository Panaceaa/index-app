import { getSlippageOverrideOrNull, selectSlippage } from './slippage'

describe('getSlippageOverrideOrNull()', () => {
  it('returns null for unaltered slippage', () => {
    const symbol = 'MVI'
    const slippageOverride = getSlippageOverrideOrNull(symbol, '')
    expect(slippageOverride).toBe(null)
  })
})

describe('selectSlippage()', () => {
  it('returns given slippage for undefined token', () => {
    const symbol = 'MVI'
    const slippageModified = getSlippageOverrideOrNull(symbol, '')
    const result = selectSlippage(1, symbol, '')
    expect(slippageModified).toBeNull()
    expect(result).toBe(1)
  })
})
