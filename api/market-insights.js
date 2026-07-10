export default async function handler(req, res) {
  // 1. In a real scenario, you'd fetch live data here or from a DB
  const mockData = {
    globalPriceAvg: 1.85, // USD per kg
    sumbaraPrice: 1.60,
    currency: "USD",
    trend: "up"
  };

  // 2. Integration with Gemini API
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  
  if (!GEMINI_API_KEY) {
    // Fallback to static AI-like response if no key is found
    // This is useful for local development before adding the key
    return res.status(200).json({
      insight: "AI Analysis: Global supply of Eucheuma Cottonii is experiencing a 4% deficit due to weather disruptions. However, Indonesian reserves remain stable. Purchasing directly from Sumbara now secures optimal Q3 margins.",
      advantage: "-13.5% vs Global Average",
      raw_data: mockData
    });
  }

  try {
    // If we have an API key, call Gemini!
    const prompt = `You are an expert commodity market AI analyst for "Sumbara" (PT. Kayuwangi Jagadhita Inovasi), an Indonesian seaweed export hub. 
    Analyze this mock data:
    - Global Average Price: $${mockData.globalPriceAvg}/kg
    - Sumbara Direct Price: $${mockData.sumbaraPrice}/kg
    - Trend: ${mockData.trend}
    
    Write a 2-sentence professional insight for B2B buyers. Mention the price advantage of buying from Sumbara. Sound highly analytical, trustworthy, and data-driven. Do not use asterisks or markdown, just plain text.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    const aiData = await response.json();
    const insightText = aiData.candidates[0].content.parts[0].text;

    // Calculate percentage difference
    const diff = ((mockData.sumbaraPrice - mockData.globalPriceAvg) / mockData.globalPriceAvg * 100).toFixed(1);

    res.status(200).json({
      insight: `AI Analysis: ${insightText.trim()}`,
      advantage: `${diff}% vs Global Average`,
      raw_data: mockData
    });

  } catch (error) {
    console.error("AI Generation Error:", error);
    res.status(500).json({ error: "Failed to generate market insights" });
  }
}
