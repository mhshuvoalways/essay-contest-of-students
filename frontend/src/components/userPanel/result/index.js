import React, { useEffect } from "react";
import Result from "./Result";
import { useSelector, useDispatch } from "react-redux";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";
import CertificatePdf from "../../../assets/certificate-template.pdf";
import { getQuarterAnnounce } from "../../../store/actions/quarterlyAnnounceAction";
import alertAction from "../../../store/actions/alertAction";

const Index = () => {
  const dispatch = useDispatch();
  const quarterlyAnnounceReducer = useSelector(
    (store) => store.quarterlyAnnounceReducer
  );

  useEffect(() => {
    dispatch(getQuarterAnnounce());
  }, [dispatch]);

  async function downloadHandler(name, grade) {
    if (quarterlyAnnounceReducer.data.isAnnounce) {
      if (name && grade) {
        const existingPdfBytes = await fetch(CertificatePdf).then((res) =>
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
          x: 270,
          y: 320,
          size: 50,
          font: TimesRomanBoldItalic,
          color: rgb(0.2, 0.84, 0.67),
        });
        firstPage.drawText(grade, {
          x: 440,
          y: 190,
          size: 18,
          font: helveticaFont,
          color: rgb(0.2, 0.84, 0.67),
        });

        const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
        saveAs(pdfDataUri, "certificate.pdf");
      }
    } else {
      dispatch(alertAction("Result didn't announce yet!"));
    }
  }

  return <Result downloadHandler={downloadHandler} />;
};

export default Index;
