import React from "react";
import AwardsShow from "./AwardsShow";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";
import AwardPdf from "../../../assets/award-template.pdf";

const Index = () => {
  async function downloadHandler(name, award) {
    const decoration = award.split(" ");
    const existingPdfBytes = await fetch(AwardPdf).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const TimesRomanBoldItalic = await pdfDoc.embedFont(
      StandardFonts.TimesRomanBoldItalic
    );

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText(name, {
      x: 70,
      y: 310,
      size: 50,
      font: TimesRomanBoldItalic,
      color: rgb(0.2, 0.84, 0.67),
    });

    firstPage.drawText(decoration[0], {
      x: 567,
      y: 329,
      size: 16,
      font: helveticaFont,
      color: rgb(0.2, 0.84, 0.67),
    });
    firstPage.drawText(decoration[1], {
      x: 567,
      y: 309,
      size: 16,
      font: helveticaFont,
      color: rgb(0.2, 0.84, 0.67),
    });

    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    saveAs(pdfDataUri, "award-certificate.pdf");
  }

  return <AwardsShow downloadHandler={downloadHandler} />;
};

export default Index;
