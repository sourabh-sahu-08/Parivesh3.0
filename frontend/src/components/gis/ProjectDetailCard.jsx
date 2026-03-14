import RiskBadge from "./RiskBadge";

const ProjectDetailCard = ({ project }) => {
  if (!project) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Project Details
        </h2>
        <p className="text-gray-600">
          Kisi project marker ya project card par click karke details dekhiye.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {project.projectName}
          </h2>
          <p className="text-gray-600 mt-1">
            {project.district}, {project.state}
          </p>
        </div>

        <RiskBadge level={project.riskLevel} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-700">
        <p>
          <span className="font-semibold">Application ID:</span> {project.id}
        </p>
        <p>
          <span className="font-semibold">Project Type:</span> {project.projectType}
        </p>
        <p>
          <span className="font-semibold">Approval Status:</span> {project.status}
        </p>
        <p>
          <span className="font-semibold">Pollution Category:</span> {project.category}
        </p>
        <p>
          <span className="font-semibold">Nearby Zone:</span> {project.nearbyZone}
        </p>
        <p>
          <span className="font-semibold">Inspection Flag:</span> {project.inspectionFlag}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Air Risk</p>
          <h3 className="text-xl font-bold text-red-700">{project.airRisk}</h3>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Water Risk</p>
          <h3 className="text-xl font-bold text-blue-700">{project.waterRisk}</h3>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Noise Risk</p>
          <h3 className="text-xl font-bold text-yellow-700">{project.noiseRisk}</h3>
        </div>
      </div>

      <div className="mt-8 border border-gray-200 rounded-2xl p-6 bg-gray-50">
        <h3 className="text-xl font-bold text-gray-800 mb-3">AI Observation</h3>
        <p className="text-gray-700">{project.aiObservation}</p>
      </div>
    </div>
  );
};

export default ProjectDetailCard;