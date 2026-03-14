import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { forgotPassword } from "../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponseData(null);

    try {
      setLoading(true);
      const data = await forgotPassword(email);
      setResponseData(data);
    } catch (err) {
      setError(err.response?.data?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Forgot Password
          </h1>

          {error && (
            <div className="mb-4 rounded-xl bg-red-100 border border-red-200 text-red-700 px-4 py-3">
              {error}
            </div>
          )}

          {responseData && (
            <div className="mb-4 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 px-4 py-3">
              <p className="font-semibold">{responseData.message}</p>
              <p className="mt-2 break-all">
                Reset Token: {responseData.resetToken}
              </p>
              <p className="mt-1 text-sm">
                Is token ko reset password page me use karo.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition disabled:opacity-60"
            >
              {loading ? "Generating..." : "Generate Reset Token"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ForgotPassword;