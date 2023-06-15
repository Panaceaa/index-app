import { ZeroExApi } from 'flash-mint-sdk'

import {
  getIndexApiHeaders,
  IndexApiBaseUrl,
  ZeroExAffiliateAddress,
} from 'constants/server'

export function getConfiguredZeroExApi(swapPathOverride: string): ZeroExApi {
  const headers = getIndexApiHeaders()

  const swapSTR= 'swap'
  const netSTR= 'mainnet/'
  let baseurl = 'https://api.indexcoop.com/0x';

  if (swapPathOverride.includes(swapSTR) && swapPathOverride.includes(netSTR)) {
      baseurl = 'https://api.0x.org';
      swapPathOverride = swapPathOverride.replace(netSTR, '');
    }
  
  else if (swapPathOverride.includes(swapSTR) && swapPathOverride.includes('polygon/')) {
    baseurl = 'https://polygon.api.0x.org';
    swapPathOverride = swapPathOverride.replace('polygon/', '');
  }

  return new ZeroExApi(
    `${baseurl}`,
    ZeroExAffiliateAddress,
    headers,
    swapPathOverride
  )
}

