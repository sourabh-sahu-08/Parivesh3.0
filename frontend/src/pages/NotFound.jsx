import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto text-center py-24 px-6">
        <h1 className="text-6xl font-bold text-green-700 mb-6">404</h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Go Back Home
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;