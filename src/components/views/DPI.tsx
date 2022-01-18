import Page from 'components/Page'
import ProductPage from 'components/product/ProductPage'
import { DefiPulseIndex } from 'constants/productTokens'
import { useMarketData } from 'contexts/MarketData/MarketDataProvider'
import { useSetComponents } from 'contexts/SetComponents/SetComponentsProvider'

const DPI = () => {
  const { dpi } = useMarketData()
  const { dpiComponents } = useSetComponents()
  console.log('dpiComponents', dpiComponents)
  return (
    <ProductPage
      tokenData={DefiPulseIndex}
      marketData={dpi || {}}
      components={dpiComponents || []}
    >
      <div>DPI Test Test</div>
    </ProductPage>
  )
}

export default DPI
