// Define a function 'maxProfit' that takes an array of prices as an argument.
const maxProfit = (prices) => {
  // Initialize 'minProfit' to the price on the first day.
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy.
  // Initialize 'maxProfit' to 0, as no profit has been calculated yet.
  let maxProfit = 0;

  // Iterate through the prices starting from the second day.
  for (let i = 1; i < prices.length; i++) {
    // Get the price on the current day.
    const currentPrice = prices[i];
    // console.log(currentPrice);

    // Update 'minPrice' to be the minimum of the current 'minPrice' and 'currentPrice'.
    // This step finds the lowest price seen so far.
    minPrice = Math.min(minPrice, currentPrice);
    // console.log(minPrice);

    // Calculate the potential profit if we were to sell on the current day.
    const potentialProfit = currentPrice - minPrice;
    // console.log(potentialProfit);

    // Update 'maxProfit' to be the maximum of the current 'maxProfit' and 'potentialProfit'.
    // This step tracks the highest profit that can be achieved.
    maxProfit = Math.max(maxProfit, potentialProfit);
    // console.log(maxProfit);
  }
  // Return the maximum profit found. 
  return maxProfit;
};
// Test the 'maxProfit' function with an example array of prices.
const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
// Log the result to the console.
console.log("Maximum profit:", profit);
