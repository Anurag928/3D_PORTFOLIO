import "./styles/Work.css";
import WorkImage from "./WorkImage";
interface Project {
  id: number;
  name: string;
  category: string;
  tools: string;
  image: string;
  description: React.ReactNode | string;
  url: string;
  demoUrl?: string;
  dashboardUrl?: string;
  demoNotes?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "HireReady AI",
    category: "AI & Web App",
    tools: "Python • Flask • Generative AI • MongoDB • Firebase • HTML • CSS • JavaScript",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEAbwVBhL3yV1uUma2Ssq0sukpjPaWNn1Wio-xshN9A&s=10",
    description: "HireReady AI is an AI-powered career development platform designed to help students and professionals plan and achieve their career goals through personalized guidance. It leverages Generative AI to create customized career roadmaps, analyze resumes, identify skill gaps, and recommend relevant learning paths. The platform provides an interactive dashboard for tracking progress, managing career plans, and exporting personalized reports. With integrated authentication, database management, and AI-driven recommendations, HireReady AI simplifies career planning and skill development.",
    url: "https://hire-ready-orcin.vercel.app/",
    demoUrl: "https://hire-ready-orcin.vercel.app/",
  },
  {
    id: 2,
    name: "Bank Customer Churn Prediction System",
    category: "ML & Web App",
    tools: "Python • Flask • JavaScript • MongoDB • Power BI • TensorFlow • XGBoost • Pandas • HTML • CSS • SMTP",
    image: "https://miro.medium.com/v2/resize:fit:800/1*3xEPKteLmsRwSUK6bfbpFQ.jpeg",
    description: "Built a SaaS-style Bank Customer Churn Prediction platform that helps banks identify customers at risk of leaving using Machine Learning and real-time analytics. Developed role-based workflows for Employees, Analysts, and Admins with secure authentication and data management. Integrated Power BI dashboards to visualize churn trends, customer behavior, product usage, and business insights. Built using Python, Flask, MongoDB, JavaScript, XGBoost, TensorFlow, Pandas, HTML, CSS, and SMTP services for churn prediction.",
    url: "https://bank-customer-churn-4.onrender.com/",
    demoUrl: "https://bank-customer-churn-4.onrender.com/",
    dashboardUrl: "https://drive.google.com/file/d/1jhd4aUZPXrUiM7d7WCrwR1OC0aKlY_zE/view?usp=sharing",
    demoNotes: [
      "Initial load may take a few seconds due to Render free-tier server startup.",
      "If an Internal Server Error appears after signup/login, please wait a few minutes and try logging in again using your credentials, as the free-tier server may temporarily sleep due to memory limitations."
    ]
  },
  {
    id: 3,
    name: "Deepfake Detection Web Application",
    category: "Deep Learning",
    tools: "Python, TensorFlow, Flask, HTML, CSS",
    image: "https://tse3.mm.bing.net/th/id/OIP.dmmvDjjMGdevztV9zIWEnAHaEL?pid=Api&P=0&h=180",
    description: "Built a deep learning-based system to detect manipulated images and videos by analyzing facial inconsistencies and synthetic patterns. Developed a secure authentication system with user-specific data storage. Integrated a Flask backend with a modern, responsive UI supporting light and dark modes. Designed the system for scalability and real-time prediction output.",
    url: "https://github.com/Ashutosh3678/Deepfake-Detection",
  },
  {
    id: 4,
    name: "Indian Election Data Analysis Dashboard",
    category: "Data Visualization",
    tools: "Power BI, DAX, Power Query",
    image: "https://tse1.mm.bing.net/th/id/OIP.03tDl5spLF1kYZWvfMTWnwHaD7?pid=Api&P=0&h=180",
    description: "Conducted a comprehensive analysis of Indian election data to study voting trends, party performance, and constituency-level insights. Cleaned and processed datasets using Python and performed exploratory data analysis (EDA). Created interactive Power BI dashboards to visualize vote share, seat distribution, and regional patterns. Delivered data-driven insights to understand historical election behavior.",
    url: "https://app.powerbi.com/groups/me/reports/6c7c534e-791b-4761-8c3b-0b3b8d840974/ReportSection4a1312041e35e08232de?experience=power-bi",
  },
  {
    id: 5,
    name: "E-Commerce Sales Dashboard",
    category: "Business Analytics",
    tools: "Power BI, Excel, DAX",
    image: "https://tse1.mm.bing.net/th/id/OIP.7oNh0zo532Env4uqAP44swHaES?pid=Api&P=0&h=180",
    description: "Designed an interactive dashboard to analyze revenue, profit, customer trends, and product performance. Performed data transformation and cleaning using Excel/Python before visualization in Power BI. Implemented filters and dynamic visuals for region-wise and time-based analysis. Enabled better business decision-making through clear and actionable insights.",
    url: "https://app.powerbi.com/reportEmbed?reportId=60c909d6-7c34-4495-8c0a-41458f9d47d4&autoAuth=true&ctid=d27bd8bc-15b3-4ea8-936e-8724ac9363a7",
  },
  {
    id: 6,
    name: "College Webpage",
    category: "Web Development",
    tools: "HTML, CSS, Responsive Design",
    image: "https://tse2.mm.bing.net/th/id/OIP.zqW51c-DhMyvw-Pto3ZFcwHaEK?pid=Api&P=0&h=180",
    description: "Developed a responsive static college website using HTML and CSS to showcase courses, departments, and campus information. Designed a structured layout with intuitive navigation for better user experience. Ensured mobile responsiveness and clean UI design principles.",
    url: "https://anurag928.github.io/Collegewebsite/",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <h4>Description</h4>
                <div style={{ marginTop: "3px" }}>
                  {typeof project.description === "string" ? <p>{project.description}</p> : project.description}
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.demoUrl || project.url}
                linkLabel={project.demoUrl ? "Live Preview ↗" : undefined}
                dashboardUrl={project.dashboardUrl}
                notes={project.demoNotes}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
