import React from "react";

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      {/* PDF Viewer */}
      <embed
        src={process.env.PUBLIC_URL + "/resume/YanlinChen_resume.pdf"}
        type="application/pdf"
        width="100%"
        height="600px"
      />
      {/* Download Button */}
      <a
        href={process.env.PUBLIC_URL + "/resume/YanlinChen_resume.pdf"}
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
