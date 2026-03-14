import API from "./api";

export const getHeatmapData = async () => {
  const response = await API.get("/gis/heatmap");
  return response.data;
};