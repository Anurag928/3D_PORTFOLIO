import "./styles/Leadership.css";

const Leadership = () => {
  return (
    <div className="leadership-section" id="leadership">
      <div className="leadership-container section-container">
        <h2>
          Organizations & <span>Leadership</span>
        </h2>
        <div className="leadership-grid">
          {/* Card 1 */}
          <div className="leadership-card">
            <div className="leadership-logo">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQEr0uC0qA6ZyQ/company-logo_200_200/company-logo_200_200/0/1636466487944?e=2147483647&v=beta&t=XKWD5QiOMrsafyaNQMldAPlKqKi-DZW_m5IOYi4NBBc"
                alt="Service to Mankind Logo"
              />
            </div>
            <div className="leadership-content">
              <h3>Technical Lead</h3>
              <div className="leadership-org-row">
                <h4>Service to Mankind</h4>
                <span className="leadership-date">May 2025 – <strong>Present</strong></span>
              </div>
              <ul>
                <li>Led and coordinated technical activities</li>
                <li>Supported event management and technical operations</li>
                <li>Collaborated with team members on organizational initiatives</li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="leadership-card">
            <div className="leadership-logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5nxpZnZM0zW7IX-4dm3D-FzoZhjloJ5acQ&s"
                alt="Student Tribe Logo"
              />
            </div>
            <div className="leadership-content">
              <h3>Campus Ambassador</h3>
              <div className="leadership-org-row">
                <h4>Student Tribe</h4>
                <span className="leadership-date">Dec 2024 – <strong>Present</strong></span>
              </div>
              <ul>
                <li>Represented Student Tribe at campus level</li>
                <li>Promoted student opportunities and events</li>
                <li>Increased student engagement and participation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
