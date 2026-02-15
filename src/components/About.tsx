import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Education</h3>
        <div className="education-list">
          <div className="education-item">
            <h4 className="degree">B.Tech in CSE (Data Science)</h4>
            <p className="institution">MLR Institute of Technology, 2024 - 2027 (Expected)</p>
            <p className="gpa">GPA: 9.00</p>
          </div>
          <div className="education-item">
            <h4 className="degree">Diploma in Electrical and Electronics Engineering</h4>
            <p className="institution">Singareni Collieries Polytechnic, 2021 - 2024</p>
            <p className="gpa">CGPA: 9.48</p>
          </div>
          <div className="education-item">
            <h4 className="degree">SSC (10th Standard)</h4>
            <p className="institution">Mims Play and High School, 2021</p>
            <p className="gpa">CGPA: 10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
