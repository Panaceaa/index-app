import { useEffect, useState } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { BigNumber } from '@ethersproject/bignumber'
import { useEthers } from '@usedapp/core'

import Page from 'components/Page'
import { getPriceChartData } from 'components/product/PriceChartData'
import { ProductToken } from 'constants/productTokens'
import {
  TokenMarketDataValues,
  useMarketData,
} from 'providers/MarketData/MarketDataProvider'
import { SetComponent } from 'providers/SetComponents/SetComponentsProvider'
import { getPricesChanges } from 'utils/priceChange'
import { getTokenSupply } from 'utils/setjsApi'

import MarketChart from './MarketChart'
import ProductComponentsTable from './ProductComponentsTable'
import ProductHeader from './ProductHeader'
import ProductPageSectionHeader from './ProductPageSectionHeader'
import ProductStats, { ProductStat } from './ProductStats'

function getStatsForToken(
  tokenData: ProductToken,
  marketData: TokenMarketDataValues,
  currentSupply: string
): ProductStat[] {
  return [
    { title: 'Market Cap', value: '' },
    { title: 'Volume', value: '' },
    { title: 'Current Supply', value: currentSupply },
    { title: 'Streaming Fee', value: tokenData.fees?.streamingFee ?? 'n/a' },
  ]
}

const ProductPage = (props: {
  tokenData: ProductToken
  marketData: TokenMarketDataValues
  components: SetComponent[]
}) => {
  const { marketData, tokenData } = props

  const { chainId, library } = useEthers()
  const { selectLatestMarketData } = useMarketData()

  const [currentTokenSupply, setCurrentTokenSupply] = useState('...')

  useEffect(() => {
    const tokenAddress = tokenData.address

    if (
      tokenAddress === undefined ||
      library === undefined ||
      chainId === undefined
    ) {
      setCurrentTokenSupply('n/a')
      return
    }

    const fetchSupply = async () => {
      const setDetails = await getTokenSupply(library, [tokenAddress], chainId)
      const e18 = BigNumber.from('1000000000000000000')
      const supply = setDetails[0].totalSupply.div(e18).toLocaleString()
      setCurrentTokenSupply(supply)
    }

    fetchSupply()
  }, [tokenData])

  const priceChartData = getPriceChartData([marketData])

  const price = `$${selectLatestMarketData(marketData.hourlyPrices).toFixed(2)}`

  const priceChanges = getPricesChanges(marketData.hourlyPrices ?? [])
  // ['+10.53 ( +5.89% )', '+6.53 ( +2.89% )', ...]
  const priceChangesFormatted = priceChanges.map((change) => {
    const plusOrMinus = change.isPositive ? '+' : '-'
    return `${plusOrMinus}$${change.abs.toFixed(
      2
    )} ( ${plusOrMinus} ${change.rel.toFixed(2)}% )`
  })

  const stats = getStatsForToken(tokenData, marketData, currentTokenSupply)

  // TODO: find a way to dynamically capture the page's width so it can be passed
  // to the chart (which does not take dynamic values) - same on dashboard

  return (
    <Page>
      <Flex direction='column' w='80vw' m='0 auto'>
        <Box my='48px'>
          <ProductHeader tokenData={props.tokenData} />
        </Box>
        <Flex direction='column'>
          <MarketChart
            marketData={priceChartData}
            prices={[price]}
            priceChanges={priceChangesFormatted}
            options={{ width: 1048, hideYAxis: false }}
          />
          <ProductPageSectionHeader title='Stats' topMargin='120px' />
          <ProductStats stats={stats} />
          <ProductPageSectionHeader title='Allocations' />
          <ProductComponentsTable components={props.components} />
        </Flex>
      </Flex>
    </Page>
  )
}

export default ProductPage
