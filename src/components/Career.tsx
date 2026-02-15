import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Visualization Intern</h4>
                <h5>Infosys Springboard</h5>
              </div>
              <h3>12/2025 - 01/2026</h3>
            </div>
            <p>
              Built an Election Data Visualization Dashboard using Power BI (1977-2015). Cleaned and transformed data with Power Query, designed a star schema model, and wrote DAX measures. Delivered insights on turnout trends, party performance, margins, gender participation, and constituency types.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science & Analytics Intern</h4>
                <h5>Tamizhan Skills (RISE Program)</h5>
              </div>
              <h3>06/2024 - 07/2024</h3>
            </div>
            <p>
              Analyzed datasets using Python in Google Colab. Performed data cleaning, preprocessing, and visualization with Pandas and NumPy. Built small ML projects to learn model building and prediction.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Brainovision Solutions</h5>
              </div>
              <h3>02/2024 - 05/2024</h3>
            </div>
            <p>
              Developed a Shopify ecommerce site with UI and catalog setup. Improved navigation and usability through layout customization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee</h4>
                <h5>Singareni Collieries Company Limited (SCCL)</h5>
              </div>
              <h3>06/2023 - 11/2023</h3>
            </div>
            <p>
              Learned AutoCAD for transmission tower and transformer drawings. Practiced electrical layout drafting and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
