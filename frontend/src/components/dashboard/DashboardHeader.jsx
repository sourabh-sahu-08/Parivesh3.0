const DashboardHeader = () => {
  return (
    <div className="bg-gradient-to-r from-green-700 to-blue-700 text-white rounded-2xl shadow-md p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        Welcome to PARIVESH 3.0 Dashboard
      </h1>
      <p className="text-white/90 max-w-3xl">
        Yahan se aap apni applications manage kar sakte hain, status track kar
        sakte hain, documents upload kar sakte hain aur AI-based permission
        advisor ka use kar sakte hain.
      </p>
    </div>
  );
};

export default DashboardHeader;