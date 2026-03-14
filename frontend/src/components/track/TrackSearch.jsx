const TrackSearch = ({ applicationId, setApplicationId, handleSearch }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Track Your Application
      </h2>

      <p className="text-gray-600 mb-6">
        Application ID enter karke apni application ka current status dekhiye.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          placeholder="Enter Application ID (Example: PV3001)"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Track Application
        </button>
      </div>
    </div>
  );
};

export default TrackSearch;