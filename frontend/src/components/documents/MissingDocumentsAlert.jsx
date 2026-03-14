const MissingDocumentsAlert = ({ missingDocs }) => {
  if (missingDocs.length === 0) return null;

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-yellow-800 mb-4">
        Missing Documents
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-yellow-700">
        {missingDocs.map((doc, index) => (
          <li key={index}>{doc}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissingDocumentsAlert;