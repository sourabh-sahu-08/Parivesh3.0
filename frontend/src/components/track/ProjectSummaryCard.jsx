const ProjectSummaryCard = ({ application }) => {
  if (!application) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Project Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        <p>
          <span className="font-semibold">Application ID:</span>{" "}
          {application.id}
        </p>
        <p>
          <span className="font-semibold">Project Name:</span>{" "}
          {application.projectName}
        </p>
        <p>
          <span className="font-semibold">Project Type:</span>{" "}
          {application.projectType}
        </p>
        <p>
          <span className="font-semibold">Category:</span>{" "}
          {application.category}
        </p>
        <p>
          <span className="font-semibold">Applicant Name:</span>{" "}
          {application.applicantName}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {application.location}
        </p>
        <p>
          <span className="font-semibold">Submitted On:</span>{" "}
          {application.submittedOn}
        </p>
        <p>
          <span className="font-semibold">Current Status:</span>{" "}
          <span className="text-green-700 font-bold">
            {application.currentStatus}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProjectSummaryCard;