const SensorCards = ({ sensors }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      {sensors.map((sensor) => (
        <div
          key={sensor.name}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {sensor.name}
          </h3>

          <p className="text-3xl font-bold text-green-700">
            {sensor.value}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Threshold: {sensor.threshold}
          </p>

        </div>
      ))}

    </div>
  );
};

export default SensorCards;