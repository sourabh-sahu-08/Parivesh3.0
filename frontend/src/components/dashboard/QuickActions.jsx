import { Link } from "react-router-dom";

const actions = [
  {
    title: "Submit New Application",
    desc: "Start a fresh environmental clearance application.",
    link: "/apply",
    button: "Apply Now",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Track Existing Application",
    desc: "Check current progress and approval status.",
    link: "/track",
    button: "Track Now",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Use AI Permission Advisor",
    desc: "Know required permissions for your project idea.",
    link: "/advisor",
    button: "Check Now",
    color: "bg-purple-600 hover:bg-purple-700",
  },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {actions.map((action) => (
        <div key={action.title} className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{action.title}</h3>
          <p className="text-gray-600 mb-6">{action.desc}</p>

          <Link
            to={action.link}
            className={`inline-block text-white px-5 py-3 rounded-xl transition ${action.color}`}
          >
            {action.button}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;