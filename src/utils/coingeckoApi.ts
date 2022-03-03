import { POLYGON } from 'constants/chains'
import { ETH } from 'constants/tokens'

const baseURL = 'https://api.coingecko.com/api/v3'

export const fetchHistoricalTokenMarketData = async (
  id: string,
  baseCurrency = 'usd'
) => {
  const coingeckoMaxTokenDataUrl =
    baseURL +
    `/coins/${id}/market_chart?vs_currency=${baseCurrency}&days=max&interval=daily`
  const coingeckoHourlyTokenDataUrl =
    baseURL + `/coins/${id}/market_chart?vs_currency=${baseCurrency}&days=90`

  return Promise.all([
    fetch(coingeckoMaxTokenDataUrl),
    fetch(coingeckoHourlyTokenDataUrl),
  ])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((data) => {
      const prices = data[0].prices,
        hourlyPrices = data[1].prices,
        marketcaps = data[0].market_caps,
        volumes = data[0].total_volumes

      return { prices, hourlyPrices, marketcaps, volumes }
    })
    .catch((error) => {
      console.log(error)
      return { prices: [], hourly: [], marketcaps: [], volumes: [] }
    })
}

export const fetchHistoricalTokenMarketDataOnPolygon = (
  polygonTokenAddress?: string
) => {
  // const coingeckoTokenIdentifier = `${POLYGON.coingeckoId}/contract/${polygonTokenAddress}`
  const coingeckoTokenIdentifier = `${polygonTokenAddress}`
  return fetchHistoricalTokenMarketData(coingeckoTokenIdentifier)
}

const getAssetPlatform = (chainId: number) => {
  if (chainId === POLYGON.chainId) return 'polygon-pos'
  return 'ethereum'
}

export const fetchCoingeckoTokenPrice = async (
  address: string,
  chainId: number,
  baseCurrency = 'usd'
): Promise<number> => {
  if (address === ETH.address) {
    const getPriceUrl =
      baseURL + `/simple/price/?ids=ethereum&vs_currencies=${baseCurrency}`

    const resp = await fetch(getPriceUrl)

    const data = await resp.json().catch((err) => {
      return 0
    })

    if (data === 0 || !data['ethereum']) return 0

    return data['ethereum'][baseCurrency]
  }

  const getPriceUrl =
    baseURL +
    `/simple/token_price/${getAssetPlatform(
      chainId
    )}/?contract_addresses=${address}&vs_currencies=${baseCurrency}`

  const resp = await fetch(getPriceUrl)

  const data = await resp.json().catch((err) => {
    return 0
  })

  if (data === 0 || !data[address.toLowerCase()]) return 0

  return data[address.toLowerCase()][baseCurrency]
}
