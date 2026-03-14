import API from "./api";

export const runOCRScan = async (applicationId) => {
  const response = await API.post("/ocr/scan", { applicationId });
  return response.data;
};