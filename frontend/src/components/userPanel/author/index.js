import React from "react";
import AuthorShow from "./AuthorShow";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";
import AuthorPdf from "../../../assets/author-template.pdf";

const Index = () => {
  async function downloadHandler(name, book) {
    const existingPdfBytes = await fetch(AuthorPdf).then((res) =>
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
      x: 200,
      y: 320,
      size: 60,
      font: TimesRomanBoldItalic,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(book, {
      x: 100,
      y: 254,
      size: 18,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    saveAs(pdfDataUri, "author-certificate.pdf");
  }

  return <AuthorShow downloadHandler={downloadHandler} />;
};

export default Index;
