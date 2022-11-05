const NotAvailable = () => {
  return (
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">Not Available</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> MetaMask not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The MetaMask wallet does not exist.
          </p>

          <a
            rel="noreferrer"
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
            className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
            target="_blank"
          >Please Install MetaMask</a>
        </div >
      </div >
  )
}

export default NotAvailable;