import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  getMyNotifications,
  markNotificationAsRead,
} from "../services/notificationService";

const getTypeClass = (type) => {
  switch (type) {
    case "success":
      return "bg-green-50 border-green-200 text-green-700";
    case "warning":
      return "bg-yellow-50 border-yellow-200 text-yellow-700";
    case "danger":
      return "bg-red-50 border-red-200 text-red-700";
    default:
      return "bg-blue-50 border-blue-200 text-blue-700";
  }
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getMyNotifications();
        setNotifications(data.notifications || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.isRead).length,
    [notifications]
  );

  const handleMarkRead = async (id) => {
    try {
      await markNotificationAsRead(id);
      setNotifications((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, isRead: true } : item
        )
      );
    } catch (error) {
      alert(error.response?.data?.message || "Failed to mark as read");
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-green-700">
                Notifications
              </h1>
              <p className="text-gray-600 mt-2">
                Aapki application aur approval related latest updates.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold">
                Total: {notifications.length}
              </div>
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded-xl font-semibold">
                Unread: {unreadCount}
              </div>
            </div>
          </div>

          {loading ? (
            <p className="text-gray-600">Loading notifications...</p>
          ) : notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((item) => (
                <div
                  key={item._id}
                  className={`border rounded-2xl p-5 ${getTypeClass(item.type)} ${
                    item.isRead ? "opacity-70" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold">{item.title}</h2>
                        {!item.isRead && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            New
                          </span>
                        )}
                      </div>

                      <p>{item.message}</p>

                      {item.relatedApplication && (
                        <p className="mt-2 text-sm font-medium">
                          Related: {item.relatedApplication.projectName} (
                          {item.relatedApplication.currentStatus})
                        </p>
                      )}

                      <p className="mt-2 text-sm opacity-80">
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    </div>

                    {!item.isRead && (
                      <button
                        onClick={() => handleMarkRead(item._id)}
                        className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                      >
                        Mark as Read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No notifications found</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Notifications;