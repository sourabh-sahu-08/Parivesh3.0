import RiskBadge from "./RiskBadge";

const ProjectList = ({ projects, onSelectProject, selectedProject }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <span className="text-sm text-gray-500">{projects.length} records</span>
      </div>

      <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelectProject(project)}
            className={`w-full text-left border rounded-2xl p-5 transition ${
              selectedProject?.id === project.id
                ? "border-blue-300 bg-blue-50"
                : "border-gray-200 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {project.projectName}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.district} • {project.projectType}
                  </p>
                </div>

                <RiskBadge level={project.riskLevel} />
              </div>

              <p className="text-sm text-gray-600">
                Status: <span className="font-semibold">{project.status}</span>
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;