import React from 'react'

interface StockCardProps {
    rank: number;
    ticker: string;
    price: number;
    changeAmount: number;
    changePercentage: number;
    volume: number;
    isPositive: boolean;
}

const StockCard: React.FC<StockCardProps> = ({ rank, ticker, price, changeAmount, changePercentage, volume, isPositive}) => {
  return (
    <div className="flex justify-start items-center  gap-5 bg-white p-4 w-full rounded-lg shadow-md hover:scale-105 transition-transform">
      <p className="w-24 text-gray-500">{rank}</p>
      <p className="w-32 font-semibold">{ticker}</p>
      <p className="w-24 text-blue-500 font-bold">${price}</p>
      <p className={`w-42 font-bold ${isPositive ? "text-green-500" : "text-red-500"}`}>{changeAmount} ({changePercentage}%)</p>
      <p className="w-32 text-gray-400">{volume}</p>
    </div>
  )
}

export default StockCard