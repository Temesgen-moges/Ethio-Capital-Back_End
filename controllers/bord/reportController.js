import { createPDF } from "../../util/createPDF.js";
export const generateReport = (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=report.pdf");

  createPDF(res);
};
