const MockMapPanel = ({ projects, onSelectProject, selectedProject }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">GIS Risk Map</h2>
        <span className="text-sm text-gray-500">
          Mock preview of district risk zones
        </span>
      </div>

      <div className="relative h-[420px] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-green-100 via-blue-50 to-yellow-50">
        <div className="absolute top-8 left-8 w-36 h-24 bg-red-200/70 rounded-2xl border border-red-300 flex items-center justify-center text-red-700 font-bold">
          High Risk
        </div>

        <div className="absolute top-24 right-12 w-40 h-24 bg-yellow-200/70 rounded-2xl border border-yellow-300 flex items-center justify-center text-yellow-700 font-bold">
          Medium Risk
        </div>

        <div className="absolute bottom-10 left-16 w-44 h-24 bg-green-200/70 rounded-2xl border border-green-300 flex items-center justify-center text-green-700 font-bold">
          Low Risk
        </div>

        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelectProject(project)}
            className={`absolute w-5 h-5 rounded-full border-2 border-white shadow-md transition hover:scale-110 ${
              project.riskLevel === "High"
                ? "bg-red-600"
                : project.riskLevel === "Medium"
                ? "bg-yellow-500"
                : "bg-green-600"
            } ${
              selectedProject?.id === project.id ? "ring-4 ring-blue-300" : ""
            }`}
            style={{
              top: `${18 + (index * 13) % 65}%`,
              left: `${15 + (index * 17) % 70}%`,
            }}
            title={project.projectName}
          />
        ))}

        <div className="absolute bottom-4 right-4 bg-white/90 rounded-xl px-4 py-2 text-sm text-gray-700 shadow">
          Project markers shown on mock GIS layout
        </div>
      </div>
    </div>
  );
};

export default MockMapPanel;