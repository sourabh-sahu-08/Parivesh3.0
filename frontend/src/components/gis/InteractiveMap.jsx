import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const getRiskColor = (riskLevel) => {
  switch (riskLevel) {
    case "High":
      return "#dc2626";
    case "Medium":
      return "#eab308";
    case "Low":
      return "#16a34a";
    default:
      return "#6b7280";
  }
};

const InteractiveMap = ({ projects, onSelectProject, selectedProject }) => {
  const defaultCenter = [21.2514, 81.6296];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Interactive GIS Map
        </h2>
        <span className="text-sm text-gray-500">
          Live project marker preview
        </span>
      </div>

      <div className="h-[500px] rounded-2xl overflow-hidden border border-gray-200">
        <MapContainer
          center={defaultCenter}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {projects.map((project) => (
            <CircleMarker
              key={project.id}
              center={project.coordinates}
              radius={12}
              pathOptions={{
                color: "#ffffff",
                weight: 2,
                fillColor: getRiskColor(project.riskLevel),
                fillOpacity: 0.9,
              }}
              eventHandlers={{
                click: () => onSelectProject(project),
              }}
            >
              <Popup>
                <div className="min-w-[220px]">
                  <h3 className="text-base font-bold text-gray-800 mb-2">
                    {project.projectName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">ID:</span> {project.id}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">District:</span>{" "}
                    {project.district}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Type:</span>{" "}
                    {project.projectType}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Risk:</span>{" "}
                    {project.riskLevel}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Status:</span>{" "}
                    {project.status}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {selectedProject && (
        <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-800">
            Selected Project:{" "}
            <span className="font-semibold">{selectedProject.projectName}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;