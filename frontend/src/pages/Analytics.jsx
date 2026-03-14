import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PollutionTrendChart from "../components/analytics/PollutionTrendChart";
import DistrictPollutionChart from "../components/analytics/DistrictPollutionChart";
import ComplianceCards from "../components/analytics/ComplianceCards";
import BeforeAfterComparison from "../components/analytics/BeforeAfterComparison";

const trendData = [
  { month: "Jan", pollution: 70 },
  { month: "Feb", pollution: 65 },
  { month: "Mar", pollution: 60 },
  { month: "Apr", pollution: 58 },
  { month: "May", pollution: 50 },
  { month: "Jun", pollution: 42 }
];

const districtData = [
  { district: "Bilaspur", pollution: 60 },
  { district: "Raipur", pollution: 80 },
  { district: "Korba", pollution: 75 },
  { district: "Durg", pollution: 55 },
  { district: "Raigarh", pollution: 68 }
];

const Analytics = () => {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">

        <h1 className="text-4xl font-bold text-green-700">
          Pollution Analytics Dashboard
        </h1>

        <ComplianceCards />

        <div className="grid lg:grid-cols-2 gap-8">
          <PollutionTrendChart data={trendData} />
          <DistrictPollutionChart data={districtData} />
        </div>

        <BeforeAfterComparison />

      </main>

      <Footer />
    </>
  );
};

export default Analytics;