import { getStoredUser } from "../../utils/auth";

const DashboardWelcomeCard = () => {
  const user = getStoredUser();

  const roleLabel = user?.role?.replaceAll("_", " ") || "user";

  return (
    <div className="bg-gradient-to-r from-green-700 to-blue-700 text-white rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold mb-3">
        Welcome, {user?.name || "User"}
      </h2>
      <p className="text-white/90 max-w-3xl">
        Aap currently <span className="font-semibold capitalize">{roleLabel}</span>{" "}
        ke roop me logged in hain. Yahan se aap approvals, applications,
        notifications aur AI-enabled features manage kar sakte hain.
      </p>
    </div>
  );
};

export default DashboardWelcomeCard;