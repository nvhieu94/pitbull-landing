import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    56: '0xBFF96267C5A60aa61763dD7159DA14d6DF6Da371',
    97: '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    const expected = address[56]
    expect(getAddress(address, 56)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    const expected = address[97]
    expect(getAddress(address, 97)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    const expected = address[56]
    expect(getAddress(address, 31337)).toEqual(expected)
  })
})
