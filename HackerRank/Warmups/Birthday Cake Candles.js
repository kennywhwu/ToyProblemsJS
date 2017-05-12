// https://www.hackerrank.com/challenges/birthday-cake-candles

// Colleen is turning x years old! She has n candles of various heights on her cake, and candle  has height . 
// Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles.
// Given the  for each individual candle, find and print the number of candles she can successfully blow out.

// o(2n)
const blowout = candles => {
    let tallest = candles[0],
        blown = 0;
    
    for (let candle of candles) {
        tallest = Math.max(tallest, candle);
    }
    
    for (let candle of candles) {
        if (candle >= tallest) blown++;
    }
    
    return blown;
}