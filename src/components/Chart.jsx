import React, { useEffect, useRef, memo } from "react";

function Chart() {
  const container = useRef();

  useEffect(() => {
    const scriptExists = container.current.querySelector("script");
    if (!scriptExists) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
          {
            "symbols": [
              [
                "BITSTAMP:BTCUSD|1D"
              ]
            ],
            "chartOnly": false,
            "width": "100%",
            "height": "600",
            "locale": "en",
            "colorTheme": "light",
            "autosize": true,
            "showVolume": false,
            "showMA": false,
            "hideDateRanges": false,
            "hideMarketStatus": false,
            "hideSymbolLogo": false,
            "scalePosition": "left",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "area",
            "maLineColor": "#2962FF",
            "maLineWidth": 1,
            "maLength": 9,
            "lineWidth": 2,
            "lineType": 0,
            "dateRanges": [
              "1d|1",
              "1w|15",
              "1m|30",
              "3m|60",
              "12m|1D",
              "60m|1W",
              "all|1M"
            ],
            "timeHoursFormat": "24-hours"
          }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container rounded-md" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default Chart;
