import DocumentStatusBadge from "./DocumentStatusBadge";

const DocumentsTable = ({ documents }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Uploaded Documents
      </h2>

      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3 px-2">Document</th>
            <th className="py-3 px-2">File Name</th>
            <th className="py-3 px-2">Status</th>
            <th className="py-3 px-2">AI Notes</th>
            <th className="py-3 px-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-4 px-2 font-medium text-gray-700">
                {doc.name}
              </td>

              <td className="py-4 px-2 text-gray-600">
                {doc.file || "Not Uploaded"}
              </td>

              <td className="py-4 px-2">
                <DocumentStatusBadge status={doc.status} />
              </td>

              <td className="py-4 px-2 text-gray-600">
                {doc.note}
              </td>

              <td className="py-4 px-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Re-upload
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;