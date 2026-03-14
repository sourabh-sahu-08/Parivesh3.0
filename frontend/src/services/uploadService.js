import API from "./api";

export const uploadSingleDocument = async ({
  applicationId,
  documentType,
  file,
}) => {
  const formData = new FormData();
  formData.append("applicationId", applicationId);
  formData.append("documentType", documentType);
  formData.append("document", file);

  const response = await API.post("/uploads/single", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const uploadMultipleDocuments = async ({
  applicationId,
  documents,
}) => {
  const formData = new FormData();
  formData.append("applicationId", applicationId);

  Object.entries(documents).forEach(([key, file]) => {
    if (file) {
      formData.append(key, file);
    }
  });

  const response = await API.post("/uploads/multiple", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};