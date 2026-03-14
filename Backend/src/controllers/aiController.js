export const chatWithEnvironmentalAI = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      res.status(400);
      throw new Error("Message is required");
    }

    const text = message.toLowerCase();

    let reply =
      "Project approvals, pollution risk, GIS sensitivity, aur compliance ke liye additional context dena helpful hoga.";

    let suggestions = [
      "Project type batayiye",
      "Location batayiye",
      "Pollution category batayiye",
    ];

    if (text.includes("permission") || text.includes("approval")) {
      reply =
        "Aapke project ke liye Environmental Clearance, Pollution Control Board Consent, local land-use permission, aur case ke hisaab se groundwater ya building approval lag sakta hai.";
      suggestions = [
        "Project type select kijiye",
        "Land type confirm kijiye",
        "Required documents upload kijiye",
      ];
    } else if (text.includes("pollution")) {
      reply =
        "Pollution assessment me air, water, noise aur waste generation factors important hote hain. High-emission industries ke liye stricter review aur monitoring hoti hai.";
      suggestions = [
        "Pollution control plan banaiye",
        "Expected emissions estimate kijiye",
        "IoT monitoring enable kijiye",
      ];
    } else if (text.includes("risk") || text.includes("danger")) {
      reply =
        "GIS aur environmental indicators ke basis par sensitive zones, nearby habitation, water bodies aur forest proximity risk level ko increase kar sakte hain.";
      suggestions = [
        "Risk map check kijiye",
        "Sensitive zone distance verify kijiye",
        "Mitigation plan prepare kijiye",
      ];
    } else if (text.includes("document") || text.includes("ocr")) {
      reply =
        "System uploaded documents ko OCR-style verification aur checklist matching se scan kar sakta hai. Missing, blurry ya invalid files flag ki ja sakti hain.";
      suggestions = [
        "PDF upload kijiye",
        "Required document list compare kijiye",
        "AI verification run kijiye",
      ];
    }

    res.status(200).json({
      success: true,
      reply,
      suggestions,
      source: "environmental-ai-simulation",
    });
  } catch (error) {
    next(error);
  }
};