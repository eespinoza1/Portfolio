import React from "react";
import CVEng from "../../assets/EFSETCertificate.pdf";
import CVSpa from "../../assets/CV Ericks Espinoza.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CVEng} download className="btn">
        EF Cert Test (English)
      </a>
      <a href={CVSpa} download className="btn">
        Download CV (Spanish)
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
