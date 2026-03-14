import API from "./api";

export const runVerification = async (applicationId) => {
  const response = await API.post(`/verification/${applicationId}/run`);
  return response.data;
};

export const getVerificationSummary = async (applicationId) => {
  const response = await API.get(`/verification/${applicationId}`);
  return response.data;
};