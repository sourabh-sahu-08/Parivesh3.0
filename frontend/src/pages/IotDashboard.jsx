import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SensorCards from "../components/iot/SensorCards";
import SensorChart from "../components/iot/SensorChart";
import AlertPanel from "../components/iot/AlertPanel";

const IotDashboard = () => {

  const [sensors, setSensors] = useState([
    { name: "Air Pollution (PM2.5)", value: 40, threshold: 60 },
    { name: "Water Pollution", value: 30, threshold: 50 },
    { name: "Noise Level", value: 45, threshold: 70 }
  ]);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      const newSensors = sensors.map((s) => ({
        ...s,
        value: Math.floor(Math.random() * 100)
      }));

      setSensors(newSensors);

      const time = new Date().toLocaleTimeString();

      setChartData((prev) => [
        ...prev.slice(-9),
        {
          time,
          air: newSensors[0].value,
          water: newSensors[1].value,
          noise: newSensors[2].value
        }
      ]);

    }, 3000);

    return () => clearInterval(interval);

  }, [sensors]);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">

        <h1 className="text-4xl font-bold text-green-700">
          IoT Pollution Monitoring
        </h1>

        <AlertPanel sensors={sensors} />

        <SensorCards sensors={sensors} />

        <SensorChart data={chartData} />

      </main>

      <Footer />
    </>
  );
};

export default IotDashboard;