import "./styles/TechStack.css";
import { FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaShopify, FaGithub, FaFileExcel } from "react-icons/fa";
import { SiR, SiPandas, SiNumpy, SiPowerbi, SiMongodb, SiSqlite, SiTensorflow, SiFlask } from "react-icons/si";
import { MdOutlineAutoFixHigh, MdOutlineSettingsSuggest, MdSpaceDashboard } from "react-icons/md";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "R", icon: <SiR /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Power BI", icon: <SiPowerbi /> },
  { name: "Excel", icon: <FaFileExcel /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Shopify", icon: <FaShopify /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Data Cleaning", icon: <MdOutlineAutoFixHigh /> },
  { name: "Data Preprocessing", icon: <MdOutlineSettingsSuggest /> },
  { name: "Dashboard Development", icon: <MdSpaceDashboard /> },
];

const TechStack = () => {
  return (
    <div className="tech-stack-section" id="skills">
      <div className="skills-container section-container">
        <h2>
          My <span>Tech Stack</span>
        </h2>
        <div className="skills-wrapper">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
