const TrackerPreview = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Application Tracker
        </h2>

        <p className="text-gray-600 mb-6">
          Application ID enter karke apna approval status turant dekhiye.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Application ID"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
            Track Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackerPreview;