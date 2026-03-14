import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-5xl font-bold mb-6">PARIVESH 3.0</h1>

        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Simplified environmental clearance portal with AI assistance, GIS
          monitoring, smart tracking and citizen-friendly interface.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/apply"
            className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Apply for Approval
          </Link>

          <Link
            to="/track"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Track Application
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;