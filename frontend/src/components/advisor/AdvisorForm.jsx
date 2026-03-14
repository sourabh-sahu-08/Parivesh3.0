const AdvisorForm = ({
  formData,
  handleChange,
  handleAnalyze,
  isAnalyzing,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        AI Permission Advisor
      </h2>

      <p className="text-gray-600 mb-6">
        Apne project ke baare me basic details dijiye. System aapko batayega ki
        kaun kaun si permissions aur documents required ho sakte hain.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">
            Describe Your Project Idea
          </label>
          <textarea
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            rows="5"
            placeholder="Example: Mujhe Bilaspur me ek small brick manufacturing unit lagani hai..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project Type
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select project type</option>
            <option value="Brick Manufacturing Unit">Brick Manufacturing Unit</option>
            <option value="Stone Crusher Plant">Stone Crusher Plant</option>
            <option value="Chemical Storage Unit">Chemical Storage Unit</option>
            <option value="Rice Mill">Rice Mill</option>
            <option value="Warehouse">Warehouse</option>
            <option value="Construction Project">Construction Project</option>
            <option value="Small Factory">Small Factory</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter district / city"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Scale of Project
          </label>
          <select
            name="scale"
            value={formData.scale}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select scale</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Land Type
          </label>
          <select
            name="landType"
            value={formData.landType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select land type</option>
            <option value="Industrial Area">Industrial Area</option>
            <option value="Rural Area">Rural Area</option>
            <option value="Urban Area">Urban Area</option>
            <option value="Near Forest Zone">Near Forest Zone</option>
            <option value="Near Water Body">Near Water Body</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleAnalyze}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        {isAnalyzing ? "Analyzing..." : "Check Required Permissions"}
      </button>
    </div>
  );
};

export default AdvisorForm;