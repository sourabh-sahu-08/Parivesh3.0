const PermissionAdvisorPreview = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          AI Permission Advisor
        </h2>

        <p className="text-gray-600 mb-6">
          Apna project idea likhiye aur system aapko batayega ki kaunsi
          permissions aur documents required ho sakte hain.
        </p>

        <textarea
          rows="5"
          placeholder="Example: Mujhe Bilaspur me ek small brick manufacturing unit lagani hai..."
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
        />

        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Check Required Permissions
        </button>
      </div>
    </section>
  );
};

export default PermissionAdvisorPreview;