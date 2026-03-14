const EnvironmentalDetailsStep = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Environmental Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Land Area (in acres)
          </label>
          <input
            type="text"
            name="landArea"
            value={formData.landArea}
            onChange={handleChange}
            placeholder="Enter land area"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Water Usage
          </label>
          <input
            type="text"
            name="waterUsage"
            value={formData.waterUsage}
            onChange={handleChange}
            placeholder="Enter water usage details"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Expected Air Pollution
          </label>
          <select
            name="airPollution"
            value={formData.airPollution}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Expected Water Pollution
          </label>
          <select
            name="waterPollution"
            value={formData.waterPollution}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Noise Level
          </label>
          <select
            name="noiseLevel"
            value={formData.noiseLevel}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Waste Type
          </label>
          <input
            type="text"
            name="wasteType"
            value={formData.wasteType}
            onChange={handleChange}
            placeholder="Enter waste type"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalDetailsStep;