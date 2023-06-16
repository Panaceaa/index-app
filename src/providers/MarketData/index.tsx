import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  ETH,
  IndexToken,
  Token,
  B4BIndex,
} from 'constants/tokens'
import { fetchHistoricalTokenMarketData } from 'utils/api/coingeckoApi'

export interface TokenMarketDataValues {
  prices?: number[][]
  hourlyPrices?: number[][]
  marketcaps?: number[][]
  volumes?: number[][]
}

export interface TokenContext {
  dseth?: TokenMarketDataValues
  eth?: TokenMarketDataValues
  index?: TokenMarketDataValues
  dpi?: TokenMarketDataValues
  gmi?: TokenMarketDataValues
  mmi?: TokenMarketDataValues
  mvi?: TokenMarketDataValues
  bed?: TokenMarketDataValues
  ethfli?: TokenMarketDataValues
  btcfli?: TokenMarketDataValues
  iceth?: TokenMarketDataValues
  gtceth?: TokenMarketDataValues
  b4b?: TokenMarketDataValues
  getMarketDataBySymbol: (token: Token) => TokenMarketDataValues | null
  selectLatestMarketData: (...args: any) => number
  selectMarketDataByToken: (token: Token) => number[][]
}

export type TokenContextKeys = keyof TokenContext

export const MarketDataContext = createContext<TokenContext>({
  getMarketDataBySymbol: () => null,
  selectLatestMarketData: () => 0,
  selectMarketDataByToken: () => [[]],
})

export const useMarketData = () => useContext(MarketDataContext)

export const MarketDataProvider = (props: { children: any }) => {
  const [dsEthMarketData, setDsEthMarketData] = useState<any>({})
  const [gtcEthMarketData, setGtcEthMarketData] = useState<any>({})
  const [ethMarketData, setEthMarketData] = useState<any>({})
  const [indexMarketData, setIndexMarketData] = useState<any>({})
  const [dpiMarketData, setDpiMarketData] = useState<any>({})
  const [mviMarketData, setMviMarketData] = useState<any>({})
  const [bedMarketData, setBedMarketData] = useState<any>({})
  const [ethFliMarketData, setEthFliMarketData] = useState<any>({})
  const [btcFliMarketData, setBtcFliMarketData] = useState<any>({})
  const [icEthMarketData, setIcEthMarketData] = useState<any>({})
  const [mmiMarketData, setMmiMarketData] = useState<any>({})
  const [gmiMarketData, setGmiMarketData] = useState<any>({})
  const [b4bMarketData, setb4bMarketData] = useState<any>({})

  const selectLatestMarketData = (marketData?: number[][]) =>
    marketData?.[marketData.length - 1]?.[1] || 0

  const selectMarketDataByToken = (token: Token) => {
    switch (token) {
      case B4BIndex:
        return b4bMarketData
      default:
        return 0
    }
  }

  const getMarketDataBySymbol = (
    token: Token
  ): TokenMarketDataValues | null => {
    switch (token) {
      case IndexToken:
        return indexMarketData
      case B4BIndex:
        return b4bMarketData
      default:
        return null
    }
  }

  const fetchMarketData = useCallback(async () => {
    const marketData = await Promise.all([
      fetchHistoricalTokenMarketData(ETH.coingeckoId),
      fetchHistoricalTokenMarketData(IndexToken.coingeckoId),
      fetchHistoricalTokenMarketData(B4BIndex.coingeckoId),
    ])

    setEthMarketData(marketData[0])
    setIndexMarketData(marketData[1])
    setb4bMarketData(marketData[2])
  }, [])

  useEffect(() => {
    fetchMarketData()
  }, [fetchMarketData])

  return (
    <MarketDataContext.Provider
      value={{
        getMarketDataBySymbol,
        selectLatestMarketData,
        selectMarketDataByToken,
        eth: ethMarketData,
        index: indexMarketData,
        b4b: b4bMarketData,
      }}
    >
      {props.children}
    </MarketDataContext.Provider>
  )
}
