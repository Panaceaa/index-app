import { OPTIMISM, POLYGON } from 'constants/chains'
import { ETH } from 'constants/tokens'
import { IndexApi } from 'utils/api/indexApi'

const baseURL = '/coingecko'
const indexApi = new IndexApi()

export const fetchHistoricalTokenMarketData = async (
  id: string,
  baseCurrency = 'usd'

) => {
  const coingeckoMaxTokenDataUrl =
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${baseCurrency}&days=max&interval=daily`
  const coingeckoHourlyTokenDataUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${baseCurrency}&days=90`
  return Promise.all([
    indexApi.get(coingeckoMaxTokenDataUrl),
    indexApi.get(coingeckoHourlyTokenDataUrl),
  ])
    .then((data) => {
      const hourlyPrices = data[1].prices,
        marketcaps = data[0].market_caps,
        volumes = data[0].total_volumes

      return { hourlyPrices, marketcaps, volumes }
    })
    .catch((error) => {
      console.error('Error fetching historical token market data', error)
      return { hourly: [], marketcaps: [], volumes: [] }
    })
}

const getAssetPlatform = (chainId: number) => {
  if (chainId === POLYGON.chainId) return 'polygon-pos'
  if (chainId === OPTIMISM.chainId) return 'optimistic-ethereum'
  return 'ethereum'
}

export const fetchCoingeckoTokenPrice = async (
  address: string,
  chainId: number,
  baseCurrency = 'usd'
): Promise<number> => {
  if (address === ETH.address) {
    const priceUrl =
      `https://api.coingecko.com/api/v3/simple/price/?ids=ethereum&vs_currencies=${baseCurrency}`

    const data = await indexApi.get(priceUrl).catch((_) => {
      return 0
    })

    if (data === 0 || !data['ethereum']) return 0

    return data['ethereum'][baseCurrency]
  }

  const getPriceUrl =
     `https://api.coingecko.com/api/v3/simple/token_price/${getAssetPlatform(
      chainId
    )}/?contract_addresses=${address}&vs_currencies=${baseCurrency}`

  const data = await indexApi.get(getPriceUrl).catch((_) => {
    return 0
  })

  if (data === 0 || !data[address.toLowerCase()]) return 0

  return data[address.toLowerCase()][baseCurrency]
}
