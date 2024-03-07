const TradingSlider = () => {
  const minValue = 46930;
  const maxValue = 49343;
  const value = 48637; // Current value

  return (
    <div className="relative w-full h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
      <div
        className="absolute left-0 top-0 bottom-0 bg-red-700 w-2 h-full rounded-full"
        style={{ marginLeft: `${(value / (maxValue - minValue)) * 100}%` }}
      >
        <div className="w-4 h-4 bg-red-700 rounded-full absolute -top-3 -ml-2 transform rotate-45"></div>
      </div>
    </div>
  );
};
const Performance = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Performance</h1>
      <div>Todays Low</div>
      <TradingSlider />
    </div>
  );
};
export default Performance;
