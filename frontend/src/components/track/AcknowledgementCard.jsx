const AcknowledgementCard = ({ application }) => {
  if (!application) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Acknowledgement
      </h2>

      <p className="text-gray-600 mb-6">
        Aap acknowledgement receipt download kar sakte hain ya print ke liye
        ready copy dekh sakte hain.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          onClick={() =>
            alert(`Acknowledgement डाउनलोड feature for ${application.id} next step me add hoga.`)
          }
        >
          Download Receipt
        </button>

        <button
          className="bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          onClick={() =>
            window.print()
          }
        >
          Print Page
        </button>
      </div>
    </div>
  );
};

export default AcknowledgementCard;