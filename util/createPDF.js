import PDFDocument from "pdfkit";

export const createPDF = (res) => {
  const doc = new PDFDocument();
  doc.pipe(res);

  // 📝 Mock data - Replace this with real DB data later
  const reportData = {
    title: "Board Report",
    projectInvestment: "$1,000,000",
    requiredVotes: "3/5",
    members: [
      { name: "John Smith", role: "Chairman", shares: "30%" },
      { name: "Sarah Johnson", role: "Lead Investor", shares: "20%" },
      { name: "Michael Chen", role: "Board Member", shares: "15%" },
    ],
    discussions: [
      {
        author: "Temesgen",
        time: "10:00 AM",
        message: "Welcome to the board meeting.",
      },
      {
        author: "Sarah Johnson",
        time: "10:02 AM",
        message: "Let's discuss the fund release proposal.",
      },
    ],
  };

  // 📌 Generate PDF Content
  doc.fontSize(18).text(reportData.title, { align: "center" });
  doc.moveDown();

  doc.fontSize(12).text(`Total Investment: ${reportData.projectInvestment}`);
  doc.text(`Required Votes for Approval: ${reportData.requiredVotes}`);
  doc.moveDown();

  doc.fontSize(14).text("Board Members:");
  reportData.members.forEach((member) => {
    doc
      .fontSize(12)
      .text(`- ${member.name} (${member.role}) - Shares: ${member.shares}`);
  });
  doc.moveDown();

  doc.fontSize(14).text("Discussion Summary:");
  reportData.discussions.forEach((discussion) => {
    doc
      .fontSize(12)
      .text(`${discussion.author} (${discussion.time}): ${discussion.message}`);
  });

  doc.end();
};
