import { getAccessToken } from "./getAccessToken";
import { StockData, StockDetails } from "./interfaces";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchData(endpoint: string, setState: React.Dispatch<React.SetStateAction<StockData[]>>, isPositive: boolean) {
    const accessToken = await getAccessToken();
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        });

        const data = await response.json();

        // Add ranking and isPositive flag
        const rankedData = data.map((stock: StockData, index: number) => ({
            ...stock,
            rank: index + 1,
            isPositive, // Assign true for top performers, false for worst performers 
        }));

        setState(rankedData);
        console.log(`Fetched data from ${endpoint}:`, rankedData);
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        setState(generatePlaceholderData(isPositive));
    }
}

export async function fetchStockDetails(
  stockSymbol: string,
  setStockDetails: React.Dispatch<React.SetStateAction<StockDetails | null>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) {
  const accessToken = await getAccessToken();

  try {
    const response = await fetch(`${API_BASE_URL}/api/StockDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ stockSymbol }),
    });

    if (!response.ok) {
      throw new Error("Invalid response from server");
    }

    const text = await response.text();

    if (!text) {
        setError("This stock symbol doesn't exist. Please check the spelling or try something else.");
        setStockDetails(null);
        return;
    }

    try {
        const data = JSON.parse(text);
        if (data.stockName === null) {
            setError("This stock symbol doesn't exist. Please check the spelling or try something else.");
            setStockDetails(null);
        } else {
            setStockDetails(data);
            setError(null);
            console.log("Fetched Stock Details:", data);
        }
        } catch (jsonError) {
        console.error("Failed to parse JSON:", jsonError);
        setError("Unexpected response format. Please try again later.");
        setStockDetails(null);
    }

  } catch (error) {
    console.error(`Error fetching stock details for ${stockSymbol}:`, error);
    setError("Something went wrong while fetching stock details. Please try again.");
    setStockDetails(null);
  }
}


// Function to generate placeholder data
function generatePlaceholderData(isPositive: boolean): StockData[] {
    return Array.from({ length: 10 }, (_, index) => ({
        rank: index + 1,
        ticker: "N/A",
        price: 0,
        changeAmount: 0,
        changePercentage: 0,
        volume: 0,
        isPositive,
    }));
}
