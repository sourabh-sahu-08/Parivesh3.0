import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getStoredUser } from "../utils/auth";
import { updateProfile } from "../services/authService";

const Profile = () => {
  const storedUser = getStoredUser();

  const [formData, setFormData] = useState({
    name: storedUser?.name || "",
    email: storedUser?.email || "",
    phone: storedUser?.phone || "",
    role: storedUser?.role || "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      setLoading(true);

      const data = await updateProfile({
        name: formData.name,
        phone: formData.phone,
      });

      localStorage.setItem("parivesh_user", JSON.stringify(data.user));

      setFormData((prev) => ({
        ...prev,
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
        role: data.user.role,
      }));

      setMessage("Profile updated successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-700 mb-6">Profile</h1>

          {message && (
            <div className="mb-4 rounded-xl bg-green-100 border border-green-200 text-green-700 px-4 py-3">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-xl bg-red-100 border border-red-200 text-red-700 px-4 py-3">
              {error}
            </div>
          )}

          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
                <label className="block text-sm text-gray-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
                <label className="block text-sm text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100"
                />
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
                <label className="block text-sm text-gray-500 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
                <label className="block text-sm text-gray-500 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role?.replaceAll("_", " ")}
                  disabled
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 capitalize"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Profile;