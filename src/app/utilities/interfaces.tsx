export interface StockData {
    rank: number;
    ticker: string;
    price: number;
    changeAmount: number;
    changePercentage: number;
    volume: number;
    isPositive: boolean; 
}

export interface StockDetails {
    stockName: string;
    stockSymbol: string;
    price: number;
    dailyHigh: number;
    dailyLow: number;
    openPrice: number;
    closePrice: number;
    previousDayClosePrice: number;
    dailyVolume: number;
}
