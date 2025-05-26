import React from 'react'

const performersTableHeader = () => {
  return (
    <div className="flex justify-end w-full border-b-2 border-gray-300 px-4 py-2 font-bold text-gray-700">
        <div className="w-1/5">Ticker</div>
        <div className="w-1/5">Price</div>
        <div className="w-1/4">Price Change (% Change)</div>
        <div className="w-1/5">Volume</div>
    </div>
  )
}

export default performersTableHeader