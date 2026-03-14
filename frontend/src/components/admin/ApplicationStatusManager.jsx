import { useState } from "react";

const ApplicationStatusManager = ({
  application,
  onStatusUpdated,
  updateStatusApi,
  currentUser,
}) => {
  const [status, setStatus] = useState(application?.currentStatus || "Submitted");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!application) return null;

  const handleQuickAction = async (newStatus, defaultMessage) => {
    try {
      setLoading(true);

      const res = await updateStatusApi(application._id, {
        currentStatus: newStatus,
        officer: currentUser?.name || "Officer",
        message: defaultMessage,
      });

      onStatusUpdated(res.application);
      setStatus(newStatus);
      setMessage("");
      alert("Application status updated successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Status update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleManualUpdate = async () => {
    try {
      setLoading(true);

      const res = await updateStatusApi(application._id, {
        currentStatus: status,
        officer: currentUser?.name || "Officer",
        message,
      });

      onStatusUpdated(res.application);
      setMessage("");
      alert("Application updated successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Status update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Status Management
      </h2>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Update Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Submitted">Submitted</option>
            <option value="Under Review">Under Review</option>
            <option value="Pending Documents">Pending Documents</option>
            <option value="Inspection Scheduled">Inspection Scheduled</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Officer Remark
          </label>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write officer remark here..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          onClick={handleManualUpdate}
          disabled={loading}
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update Status"}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <button
            onClick={() =>
              handleQuickAction(
                "Under Review",
                "Initial review started by officer."
              )
            }
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-60"
          >
            Mark Under Review
          </button>

          <button
            onClick={() =>
              handleQuickAction(
                "Approved",
                "Application approved after successful review."
              )
            }
            disabled={loading}
            className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition disabled:opacity-60"
          >
            Approve
          </button>

          <button
            onClick={() =>
              handleQuickAction(
                "Rejected",
                "Application rejected. Please check remarks and resubmit if eligible."
              )
            }
            disabled={loading}
            className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition disabled:opacity-60"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatusManager;