import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AIChatbotPanel from "../components/advanced/AIChatbotPanel";
import HeatmapLegend from "../components/advanced/HeatmapLegend";
import HeatmapPanel from "../components/advanced/HeatmapPanel";
import EnvironmentalInsightCards from "../components/advanced/EnvironmentalInsightCards";
import EnvironmentalInsightsPanel from "../components/advanced/EnvironmentalInsightsPanel";
import OCRScanPanel from "../components/advanced/OCRScanPanel";
import { getHeatmapData } from "../services/gisService";

const AdvancedIntelligence = () => {
  const [mapMode, setMapMode] = useState("standard");
  const [heatmap, setHeatmap] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeatmap = async () => {
      try {
        const data = await getHeatmapData();
        setHeatmap(data.heatmap || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeatmap();
  }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            AI + GIS Advanced Intelligence
          </h1>
          <p className="text-gray-600 max-w-4xl">
            Yahan AI advisory, pollution heatmap, advanced GIS preview, OCR simulation
            aur smart environmental insights ek saath available hain.
          </p>
        </div>

        <EnvironmentalInsightCards />

        <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-8">
          <div className="space-y-8">
            <HeatmapLegend />
            <EnvironmentalInsightsPanel />
          </div>

          <div className="space-y-8">
            {loading ? (
              <div className="bg-white rounded-2xl shadow-md p-6 text-gray-600">
                Loading heatmap data...
              </div>
            ) : (
              <HeatmapPanel
                mapMode={mapMode}
                setMapMode={setMapMode}
                heatmap={heatmap}
              />
            )}

            <AIChatbotPanel />
            <OCRScanPanel />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AdvancedIntelligence;