import { PopulatedTransaction } from 'ethers'

export class TxSimulator {
  /**
   * @param accessKey A Tenderly access key.
   */
  constructor(private readonly accessKey: string) {
    if (!accessKey) {
      throw Error(
        'You must provide a Tenderly access key for simulations to work.'
      )
    }
  }

  /**
   * Simulates a given transaction request on Tenderly.
   * @param tx A PopulatedTransaction to be simulated on the specified chain.
   * @returns A boolean whether the simulation was successful.
   */
  async simulate(tx: PopulatedTransaction): Promise<boolean> {
    console.log('yo', tx.chainId)
    const apiUrl = `https://api.tenderly.co/api/v1/account/jann/project/project/simulate`
    const body = {
      network_id: tx.chainId ?? 1,
      from: tx.from,
      to: tx.to,
      input: tx.data,
      gas: tx.gasLimit?.toNumber() ?? 0,
      gas_price: 0,
      value: tx.value?.toString() ?? '0',
      access_list: [],
      // simulation config (tenderly specific)
      save_if_fails: true,
      save: false,
      // simulation_type: 'quick',
    }

    console.log(tx)
    console.log(body)

    const headers = {
      'Content-Type': 'application/json',
      'X-Access-Key': this.accessKey,
    }

    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    }

    const res = await fetch(apiUrl, requestOptions)
    const data = await res.json()

    console.log(res)
    console.log('///')
    console.log(data)
    console.log(data.simulation)
    // if (data.simulation.status === false) {
    //   throw new Error('Transaction is going to fail')
    // }
    return data.simulation.status === true
  }
}