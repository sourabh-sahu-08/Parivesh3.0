import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GISFilters from "../components/gis/GISFilters";
import MapLegend from "../components/gis/MapLegend";
import InteractiveMap from "../components/gis/InteractiveMap";
import ProjectList from "../components/gis/ProjectList";
import ProjectDetailCard from "../components/gis/ProjectDetailCard";

const mockProjects = [
  {
    id: "PV3001",
    projectName: "Brick Manufacturing Unit",
    district: "Bilaspur",
    state: "Chhattisgarh",
    projectType: "Industrial",
    status: "Under Review",
    category: "Red",
    riskLevel: "Medium",
    nearbyZone: "Rural Settlement",
    inspectionFlag: "Pending Inspection",
    airRisk: "Medium",
    waterRisk: "Low",
    noiseRisk: "Medium",
    coordinates: [22.0797, 82.1391],
    aiObservation:
      "Dust mitigation plan acceptable hai, lekin site inspection ke baad final risk confirm hoga.",
  },
  {
    id: "PV3002",
    projectName: "Stone Crusher Plant",
    district: "Raipur",
    state: "Chhattisgarh",
    projectType: "Industrial",
    status: "Approved",
    category: "Red",
    riskLevel: "High",
    nearbyZone: "Near Habitation",
    inspectionFlag: "High Monitoring",
    airRisk: "High",
    waterRisk: "Medium",
    noiseRisk: "High",
    coordinates: [21.2514, 81.6296],
    aiObservation:
      "Dust aur noise impact zyada hai. Continuous monitoring aur suppression systems required hain.",
  },
  {
    id: "PV3003",
    projectName: "Rice Mill Expansion",
    district: "Durg",
    state: "Chhattisgarh",
    projectType: "Agriculture",
    status: "Pending Documents",
    category: "Orange",
    riskLevel: "Low",
    nearbyZone: "Industrial Area",
    inspectionFlag: "Routine Review",
    airRisk: "Low",
    waterRisk: "Low",
    noiseRisk: "Low",
    coordinates: [21.1904, 81.2849],
    aiObservation:
      "Environmental impact comparatively low hai. Water usage and waste handling details pending hain.",
  },
  {
    id: "PV3004",
    projectName: "Chemical Storage Unit",
    district: "Korba",
    state: "Chhattisgarh",
    projectType: "Hazardous",
    status: "Under Review",
    category: "Red",
    riskLevel: "High",
    nearbyZone: "Near Water Body",
    inspectionFlag: "Critical Review",
    airRisk: "Medium",
    waterRisk: "High",
    noiseRisk: "Low",
    coordinates: [22.3595, 82.7501],
    aiObservation:
      "Leakage prevention, emergency response plan aur water-body protection measures strict honi chahiye.",
  },
  {
    id: "PV3005",
    projectName: "Warehouse Project",
    district: "Bilaspur",
    state: "Chhattisgarh",
    projectType: "Commercial",
    status: "Submitted",
    category: "Green",
    riskLevel: "Low",
    nearbyZone: "Urban Area",
    inspectionFlag: "Standard Review",
    airRisk: "Low",
    waterRisk: "Low",
    noiseRisk: "Low",
    coordinates: [22.0904, 82.1599],
    aiObservation:
      "Low-impact project hai. Building and land use approvals primary focus rahenge.",
  },
  {
    id: "PV3006",
    projectName: "Construction Project",
    district: "Raigarh",
    state: "Chhattisgarh",
    projectType: "Infrastructure",
    status: "Inspection Scheduled",
    category: "Orange",
    riskLevel: "Medium",
    nearbyZone: "Near Forest Zone",
    inspectionFlag: "Sensitive Location",
    airRisk: "Medium",
    waterRisk: "Medium",
    noiseRisk: "Medium",
    coordinates: [21.8974, 83.3956],
    aiObservation:
      "Construction debris, dust control aur nearby sensitive zone ke liye additional compliance checks required hain.",
  },
];

const RiskMap = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [selectedRisk, setSelectedRisk] = useState("All");
  const [selectedProject, setSelectedProject] = useState(mockProjects[0]);

  const districts = [...new Set(mockProjects.map((item) => item.district))];

  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const districtMatch =
        selectedDistrict === "All" || project.district === selectedDistrict;
      const riskMatch =
        selectedRisk === "All" || project.riskLevel === selectedRisk;

      return districtMatch && riskMatch;
    });
  }, [selectedDistrict, selectedRisk]);

  useEffect(() => {
    if (!filteredProjects.length) {
      setSelectedProject(null);
      return;
    }

    const stillExists = filteredProjects.find(
      (project) => project.id === selectedProject?.id
    );

    if (!stillExists) {
      setSelectedProject(filteredProjects[0]);
    }
  }, [filteredProjects, selectedProject]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            GIS Risk Map
          </h1>
          <p className="text-gray-600 max-w-4xl">
            Yahan projects ko district aur risk level ke basis par interactive map
            par visualize kiya gaya hai. Marker par click karke project ki details
            aur AI observation dekhi ja sakti hai.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-8">
          <div className="space-y-8">
            <GISFilters
              selectedDistrict={selectedDistrict}
              setSelectedDistrict={setSelectedDistrict}
              selectedRisk={selectedRisk}
              setSelectedRisk={setSelectedRisk}
              districts={districts}
            />
            <MapLegend />
            <ProjectList
              projects={filteredProjects}
              onSelectProject={handleSelectProject}
              selectedProject={selectedProject}
            />
          </div>

          <div className="space-y-8">
            <InteractiveMap
              projects={filteredProjects}
              onSelectProject={handleSelectProject}
              selectedProject={selectedProject}
            />
            <ProjectDetailCard project={selectedProject} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RiskMap;