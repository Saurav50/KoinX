function CircularRingGraph({ radius, strokeWidth, percentage }) {
  const innerRadius = radius - strokeWidth / 2;
  const outerRadius = radius + strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;
  const strokeDasharray = `${
    (circumference * percentage) / 100
  } ${circumference}`;

  return (
    <svg
      viewBox={`0 0 ${2 * outerRadius} ${2 * outerRadius}`}
      width={2 * outerRadius}
      height={2 * outerRadius}
    >
      <circle
        cx={outerRadius}
        cy={outerRadius}
        r={innerRadius}
        fill="transparent"
        stroke="orange"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={outerRadius}
        cy={outerRadius}
        r={innerRadius}
        fill="transparent"
        stroke="#2469ea"
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        transform={`rotate(-90 ${outerRadius} ${outerRadius})`}
      />
    </svg>
  );
}

const Tokenomics = () => {
  return (
    <div className="bg-white p-8 mt-14 pb-12 gap-4 rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Tokenomics</h1>
      <h2 className="text-lg font-medium mb-1">Initial Distribution</h2>
      <div className="flex mb-4">
        <CircularRingGraph radius={70} strokeWidth={30} percentage={80} />
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#2469ea" />
              <circle cx="50" cy="50" r="10" fill="#2469ea" />
            </svg>
            <p>Crowdsale investors: 80%</p>
          </div>
          <div className="flex items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="orange" />
              <circle cx="50" cy="50" r="10" fill="orange" />
            </svg>
            <p>Foundation: 20%</p>
          </div>
        </div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      perspiciatis voluptate impedit dicta neque, at esse qui incidunt minima
      dolor tempora vero quidem nisi nam? Incidunt, veritatis. Facilis, sequi
      hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      quae nobis aspernatur repellendus eos consectetur ducimus provident ipsa
      minus accusantium culpa sunt, excepturi sed harum doloribus dolor velit,
      odio rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloremque debitis velit cum ea distinctio iusto optio a, obcaecati vel
      possimus facere perferendis dolorem doloribus totam eos unde beatae dolor
      saepe!
    </div>
  );
};

export default Tokenomics;
