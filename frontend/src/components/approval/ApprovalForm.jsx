const ApprovalForm = ({ formData, handleChange, handlePredict }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        AI Approval Prediction
      </h2>

      <p className="text-gray-600 mb-6">
        Project details ke basis par system probable approval outcome aur risk
        estimate karega.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Project Type
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select project type</option>
            <option value="Brick Manufacturing">Brick Manufacturing</option>
            <option value="Stone Crusher">Stone Crusher</option>
            <option value="Rice Mill">Rice Mill</option>
            <option value="Chemical Storage">Chemical Storage</option>
            <option value="Warehouse">Warehouse</option>
            <option value="Construction Project">Construction Project</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Pollution Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select category</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
            <option value="White">White</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Document Completeness (%)
          </label>
          <input
            type="number"
            name="documentScore"
            value={formData.documentScore}
            onChange={handleChange}
            placeholder="Example: 85"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Site Sensitivity
          </label>
          <select
            name="siteSensitivity"
            value={formData.siteSensitivity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select sensitivity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Pollution Control Plan
          </label>
          <select
            name="controlPlan"
            value={formData.controlPlan}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select option</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Officer Workload
          </label>
          <select
            name="workload"
            value={formData.workload}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select workload</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>

      <button
        onClick={handlePredict}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
      >
        Predict Approval Outcome
      </button>
    </div>
  );
};

export default ApprovalForm;