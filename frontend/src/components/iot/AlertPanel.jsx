const AlertPanel = ({ sensors }) => {

  const alerts = sensors.filter(
    (s) => s.value > s.threshold
  );

  if (alerts.length === 0) {
    return (
      <div className="bg-green-100 text-green-700 p-4 rounded-lg">
        All pollution levels are within limits.
      </div>
    );
  }

  return (
    <div className="bg-red-100 text-red-700 p-4 rounded-lg">

      <h3 className="font-bold mb-2">
        Pollution Alert
      </h3>

      <ul className="list-disc pl-5">
        {alerts.map((a) => (
          <li key={a.name}>
            {a.name} exceeded safe limit
          </li>
        ))}
      </ul>

    </div>
  );
};

export default AlertPanel;