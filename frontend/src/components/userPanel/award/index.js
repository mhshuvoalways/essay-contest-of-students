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

    const textWidth = helveticaFont.widthOfTextAtSize(name, 50);
    const textHeight = helveticaFont.heightAtSize(50);
    firstPage.drawText(name, {
      x: 250 - textWidth / 2,
      y: 340 - textHeight / 2,
      size: 50,
      font: TimesRomanBoldItalic,
      color: rgb(0.2, 0.84, 0.67),
    });

    const textWidthFirst = helveticaFont.widthOfTextAtSize(decoration[0], 16);
    const textHeightFirst = helveticaFont.heightAtSize(50);
    firstPage.drawText(decoration[0], {
      x: 590 - textWidthFirst / 2,
      y: 345 - textHeightFirst / 2,
      size: 16,
      font: helveticaFont,
      color: rgb(0.2, 0.84, 0.67),
    });

    const textWidthSecond = helveticaFont.widthOfTextAtSize(decoration[1], 16);
    const textHeightSecond = helveticaFont.heightAtSize(50);
    firstPage.drawText(decoration[1], {
      x: 590 - textWidthSecond / 2,
      y: 325 - textHeightSecond / 2,
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
