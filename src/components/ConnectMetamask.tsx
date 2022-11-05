type ConnectMetaMaskProps = {
  handleClick: () => {};
}

const ConnectMetaMask = ({ handleClick }: ConnectMetaMaskProps) => {
  return (
    <button
      className="px-10 py-6 text-2xl font-bold text-center text-gray-100 rounded bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" onClick={handleClick}>
      Connect to a wallet
    </button>
  )
}

export default ConnectMetaMask;