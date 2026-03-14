import { Link } from "react-router-dom";

const services = [
  {
    title: "Apply for Clearance",
    desc: "Submit a new environmental application.",
    link: "/apply",
  },
  {
    title: "Track Application",
    desc: "Check your approval progress easily.",
    link: "/track",
  },
  {
    title: "AI Permission Advisor",
    desc: "Know what permissions your project needs.",
    link: "/advisor",
  },
  {
    title: "Citizen Dashboard",
    desc: "Manage your applications and updates.",
    link: "/dashboard",
  },
];

const QuickServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Quick Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 mb-6">{service.desc}</p>

            <Link
              to={service.link}
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Open
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickServices;