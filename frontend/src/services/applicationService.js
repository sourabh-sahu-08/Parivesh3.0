import API from "./api";

export const createApplication = async (applicationData) => {
  const response = await API.post("/applications", applicationData);
  return response.data;
};

export const getMyApplications = async () => {
  const response = await API.get("/applications/my");
  return response.data;
};

export const getSingleApplication = async (id) => {
  const response = await API.get(`/applications/${id}`);
  return response.data;
};

export const updateApplication = async (id, applicationData) => {
  const response = await API.put(`/applications/${id}`, applicationData);
  return response.data;
};

export const getAllApplications = async () => {
  const response = await API.get("/applications");
  return response.data;
};

export const updateApplicationStatus = async (id, statusData) => {
  const response = await API.patch(`/applications/${id}/status`, statusData);
  return response.data;
};