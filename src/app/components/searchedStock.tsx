import React from "react";

interface SearchedStockProps {
  stockName?: string;
  stockSymbol?: string;
  price: number;
  dailyHigh: number;
  dailyLow: number;
  openPrice: number;
  closePrice: number;
  previousDayClosePrice: number;
  dailyVolume: number;
}

const SearchedStock: React.FC<SearchedStockProps> = ({
  stockName,
  stockSymbol,
  price,
  dailyHigh,
  dailyLow,
  openPrice,
  closePrice,
  previousDayClosePrice,
  dailyVolume,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{stockName || "Stock Name"}</h2>
      <p className="text-gray-500 text-lg">{stockSymbol || "Stock Symbol"}</p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
        <p className="font-semibold">Price:</p>
        <p className="text-blue-600 font-bold">${price.toFixed(2)}</p>

        <p className="font-semibold">Daily High:</p>
        <p className="text-green-500">${dailyHigh.toFixed(2)}</p>

        <p className="font-semibold">Daily Low:</p>
        <p className="text-red-500">${dailyLow.toFixed(2)}</p>

        <p className="font-semibold">Open Price:</p>
        <p className="text-gray-600">${openPrice.toFixed(2)}</p>

        <p className="font-semibold">Close Price:</p>
        <p className="text-gray-600">${closePrice.toFixed(2)}</p>

        <p className="font-semibold">Prev. Close Price:</p>
        <p className="text-gray-600">${previousDayClosePrice.toFixed(2)}</p>

        <p className="font-semibold">Daily Volume:</p>
        <p className="text-gray-600">{dailyVolume.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default SearchedStock;
