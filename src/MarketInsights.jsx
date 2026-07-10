import { useState, useEffect } from "react";
import { TrendingUp, Bot, AlertCircle } from "lucide-react";
import "./MarketInsights.css";

export default function MarketInsights() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from our Vercel Serverless Function
    fetch('/api/market-insights')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch market insights", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="insights section" id="insights">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Commodity Intelligence</h2>
          <p className="section__subtitle">
            Data-driven insights to secure your supply chain and optimize margins.
          </p>
        </div>

        <div className="insights__grid">
          {/* Chart Area */}
          <div className="insights__chart-card">
            <div className="insights__card-header">
              <h3>Eucheuma Cottonii Price Trend</h3>
              <span className="insights__badge">Live Data Simulation</span>
            </div>
            
            <div className="insights__chart-visual">
              <svg viewBox="0 0 500 200" className="insights__svg-chart" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Global Average Line */}
                <polyline 
                  points="0,120 100,125 200,110 300,130 400,115 500,120" 
                  fill="none" 
                  stroke="#999" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                {/* Sumbara Direct Line */}
                <polyline 
                  points="0,160 100,165 200,150 300,160 400,140 500,145" 
                  fill="none" 
                  stroke="#2AA5A0" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                {/* Data points for Sumbara */}
                <circle cx="100" cy="165" r="4" fill="#2AA5A0" />
                <circle cx="200" cy="150" r="4" fill="#2AA5A0" />
                <circle cx="300" cy="160" r="4" fill="#2AA5A0" />
                <circle cx="400" cy="140" r="4" fill="#2AA5A0" />
                <circle cx="500" cy="145" r="4" fill="#2AA5A0" />
              </svg>
              
              <div className="insights__chart-x-axis">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>

            <div className="insights__legend">
              <div className="insights__legend-item">
                <span className="insights__dot global-dot"></span>
                <span>Global Market Average</span>
              </div>
              <div className="insights__legend-item">
                <span className="insights__dot sumbara-dot"></span>
                <span>Sumbara Direct Origin</span>
              </div>
            </div>
          </div>

          {/* AI Insight Area */}
          <div className="insights__ai-card">
            <div className="insights__ai-header">
              <div className="insights__ai-title">
                <Bot size={24} color="#2AA5A0" />
                <h3>Sumbara AI Analyst</h3>
              </div>
              <span className="insights__ai-status">Online</span>
            </div>

            <div className="insights__ai-content">
              {loading ? (
                <div className="insights__ai-loading">
                  <div className="insights__spinner"></div>
                  <p>AI is analyzing global trends...</p>
                </div>
              ) : data ? (
                <div className="insights__ai-message">
                  <p>{data.insight}</p>
                  
                  <div className="insights__ai-metrics">
                    <div className="insights__ai-metric">
                      <TrendingUp size={16} />
                      <span>Sumbara Price Advantage: {data.advantage}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="insights__ai-error">
                  <AlertCircle size={20} />
                  <p>Market data temporarily unavailable. Please try again later.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
