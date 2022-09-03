import { CHAIN_IDS } from 'utils/wagmi'
import Swap from '../views/Swap'
import SwapLayout from '../components/MyComponent/Layouts/SwapLayout'

const SwapPage = () => {
  return <Swap />
}

SwapPage.chains = CHAIN_IDS
SwapPage.Layout = SwapLayout;

export default SwapPage
