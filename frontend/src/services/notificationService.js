import API from "./api";

export const getMyNotifications = async () => {
  const response = await API.get("/notifications");
  return response.data;
};

export const markNotificationAsRead = async (id) => {
  const response = await API.patch(`/notifications/${id}/read`);
  return response.data;
};

export const getUnreadNotificationCount = async () => {
  const response = await API.get("/notifications");
  const notifications = response.data.notifications || [];
  const unreadCount = notifications.filter((item) => !item.isRead).length;

  return {
    unreadCount,
    notifications,
  };
};