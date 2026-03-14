const PredictorForm = ({ formData, handleChange, handlePredict }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Pollution Risk Predictor
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-medium mb-1">
            Industry Type
          </label>

          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select</option>
            <option>Brick Manufacturing</option>
            <option>Stone Crusher</option>
            <option>Rice Mill</option>
            <option>Chemical Storage</option>
            <option>Warehouse</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Production Capacity
          </label>

          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter capacity"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Distance from City (km)
          </label>

          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Pollution Control Installed
          </label>

          <select
            name="control"
            value={formData.control}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

      </div>

      <button
        onClick={handlePredict}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Predict Pollution Risk
      </button>

    </div>
  );
};

export default PredictorForm;