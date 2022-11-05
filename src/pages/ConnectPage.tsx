import { useConnectedMetaMask, useMetaMask } from 'metamask-react';
import NotAvailable from '../components/NotAvailable';
import ConnectMetamask from '../components/ConnectMetamask';
import Connecting from '../components/Connecting';

const networks = {
  mainnet: "0x1", // 1
  // Test nets
  goerli: "0x5", // 5
  ropsten: "0x3", // 3
  rinkeby: "0x4", // 4
  kovan: "0x2a", // 42
  mumbai: "0x13881", // 80001
  // Layers 2
  arbitrum: "0xa4b1", // 42161
  optimism: "0xa", // 10
  // Side chains
  polygon: "0x89", // 137
  gnosisChain: "0x64", // 100
  // Alt layer 1
  binanceSmartChain: "0x38", // 56
  avalanche: "0xa86a", // 43114
  cronos: "0x19", // 25
  fantom: "0xfa" // 250
}

const ConnectedApp = () => {
  const { account, chainId } = useConnectedMetaMask();

  return (

    <div className="flex items-center gap-5 pl-5 bg-gray-500 rounded-3xl">
      <div className="text-2xl font-bold text-center text-white md:text-3xl uppercase">{Object.keys(networks)[Object.values(networks).indexOf(chainId)]}</div>
      <div className="px-4 py-4 bg-gray-900 rounded-3xl">
        <div className="text-2xl font-bold text-center text-white md:text-3xl">{account}</div>
      </div>
    </div>
  )
}

function ConnectPage() {
  const { status, connect } = useMetaMask();

  switch (status) {
    case "initializing":
      return <div>Synchronisation with MetaMask ongoing...</div>
    case "unavailable":
      return <NotAvailable />
    case "notConnected":
      return <ConnectMetamask handleClick={connect} />
    case "connecting":
      return <Connecting />
    default:
      return <ConnectedApp />
  }
}

export default ConnectPage;