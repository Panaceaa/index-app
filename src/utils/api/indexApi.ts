import { getIndexApiHeaders } from 'constants/server'

export class IndexApi {
  /**
   * Fetches path and returns a json.
   * @returns JSON on success or throws error.
   */
  async get(path: string) {
    try {
      const headers = getIndexApiHeaders()
      const IndexApiBaseUrl = 'https://api.indexcoop.com'
      const swapSTR= 'swap'
      const currencySTR= 'currenc'

      if (path.includes(swapSTR)) {
        const resp = await fetch(`${path}`, {
          headers,
        })
        return resp.json();}
      
      else if (path.includes(currencySTR)) {
        const resp = await fetch(`${path}`, {
          headers,
        })
        return resp.json();
      }
      
      else {
        const resp = await fetch(`${IndexApiBaseUrl}${path}`, {
          headers,
        })
        return resp.json();}

    } catch (error) {
      console.log('Error fetching Index API for path', path)
      console.log(error)
      throw error
    }
  }
}
