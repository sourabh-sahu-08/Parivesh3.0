export const getHeatmapData = async (req, res, next) => {
  try {
    const heatmap = [
      {
        id: "HZ001",
        zoneName: "Industrial Cluster A",
        district: "Raipur",
        intensity: "Very High",
        lat: 21.2514,
        lng: 81.6296,
        riskScore: 91,
      },
      {
        id: "HZ002",
        zoneName: "Mining Belt",
        district: "Korba",
        intensity: "High",
        lat: 22.3595,
        lng: 82.7501,
        riskScore: 82,
      },
      {
        id: "HZ003",
        zoneName: "Agriculture Buffer",
        district: "Bilaspur",
        intensity: "Moderate",
        lat: 22.0797,
        lng: 82.1391,
        riskScore: 58,
      },
      {
        id: "HZ004",
        zoneName: "Green Safe Zone",
        district: "Durg",
        intensity: "Low",
        lat: 21.1904,
        lng: 81.2849,
        riskScore: 26,
      },
    ];

    res.status(200).json({
      success: true,
      count: heatmap.length,
      heatmap,
    });
  } catch (error) {
    next(error);
  }
};