import React from "react";
import Navigation from "../../components/userPanel/Navigation";
import DownloadCertificate from "../../components/userPanel/DownloadCertificate";
import Footer from "../../components/userPanel/Footer";

const DownloadCertificateComponent = () => {
  return (
    <div>
      <Navigation />
      <DownloadCertificate />
      <Footer />
    </div>
  );
};

export default DownloadCertificateComponent;
