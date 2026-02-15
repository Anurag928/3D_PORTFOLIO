import "./styles/Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Data Science Professional",
      issuer: "Oracle",
      year: "Oct 2025",
    },
    {
      id: 2,
      name: "Programming with Gen AI",
      issuer: "NPTEL",
      year: "Aug-Oct 2025",
    },
    {
      id: 3,
      name: "Data Science Essentials with Python",
      issuer: "Cisco",
      year: "Sep 2025",
    },
    {
      id: 4,
      name: "Spark Fundamentals",
      issuer: "Cognitive Class",
      year: "Sep 2025",
    },
    {
      id: 5,
      name: "Big Data 101",
      issuer: "Cognitive Class",
      year: "Aug 2025",
    },
    {
      id: 6,
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      year: "May 2025",
    },
    {
      id: 7,
      name: "Power BI Bootcamp",
      issuer: "LetsUpgrade",
      year: "May 2025",
    },
    {
      id: 8,
      name: "Data Analysis with Python",
      issuer: "Cognitive Class",
      year: "Dec 2024",
    },
    {
      id: 9,
      name: "SQL and Relational Databases 101",
      issuer: "IBM",
      year: "Nov 2024",
    },
    {
      id: 10,
      name: "R for Data Science",
      issuer: "IBM",
      year: "Oct 2024",
    },
    {
      id: 11,
      name: "Data Science Job Simulation",
      issuer: "British Airways",
      year: "Sep 2024",
    },
  ];

  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="certification-card" key={cert.id}>
              <div className="cert-icon">📜</div>
              <h4>{cert.name}</h4>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-year">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
