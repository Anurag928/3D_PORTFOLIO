import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: 1,
    name: "Bank Customer Churn Prediction",
    category: "ML & Web App",
    tools: "Python, Flask, Power BI, SQLite, XGBoost",
    image: "https://miro.medium.com/v2/resize:fit:800/1*3xEPKteLmsRwSUK6bfbpFQ.jpeg",
    description: "Developed a machine learning-based web application to predict customer churn using the XGBoost algorithm. Performed data preprocessing and feature engineering using Python (pandas, NumPy) to improve model accuracy. Built a Flask backend with a responsive frontend and integrated SQLite for storing user and prediction data. Designed an interactive Power BI dashboard to visualize churn trends and key influencing factors.",
    url: "https://github.com/Anurag928/Bank-Customer-Churn",
  },
  {
    id: 2,
    name: "Deepfake Detection Web Application",
    category: "Deep Learning",
    tools: "Python, TensorFlow, Flask, HTML, CSS",
    image: "https://tse3.mm.bing.net/th/id/OIP.dmmvDjjMGdevztV9zIWEnAHaEL?pid=Api&P=0&h=180",
    description: "Built a deep learning-based system to detect manipulated images and videos by analyzing facial inconsistencies and synthetic patterns. Developed a secure authentication system with user-specific data storage. Integrated a Flask backend with a modern, responsive UI supporting light and dark modes. Designed the system for scalability and real-time prediction output.",
    url: "https://github.com/Ashutosh3678/Deepfake-Detection",
  },
  {
    id: 3,
    name: "Indian Election Data Analysis Dashboard",
    category: "Data Visualization",
    tools: "Power BI, DAX, Power Query",
    image: "https://tse1.mm.bing.net/th/id/OIP.03tDl5spLF1kYZWvfMTWnwHaD7?pid=Api&P=0&h=180",
    description: "Conducted a comprehensive analysis of Indian election data to study voting trends, party performance, and constituency-level insights. Cleaned and processed datasets using Python and performed exploratory data analysis (EDA). Created interactive Power BI dashboards to visualize vote share, seat distribution, and regional patterns. Delivered data-driven insights to understand historical election behavior.",
    url: "https://app.powerbi.com/groups/me/reports/6c7c534e-791b-4761-8c3b-0b3b8d840974/ReportSection4a1312041e35e08232de?experience=power-bi",
  },
  {
    id: 4,
    name: "E-Commerce Sales Dashboard",
    category: "Business Analytics",
    tools: "Power BI, Excel, DAX",
    image: "https://tse1.mm.bing.net/th/id/OIP.7oNh0zo532Env4uqAP44swHaES?pid=Api&P=0&h=180",
    description: "Designed an interactive dashboard to analyze revenue, profit, customer trends, and product performance. Performed data transformation and cleaning using Excel/Python before visualization in Power BI. Implemented filters and dynamic visuals for region-wise and time-based analysis. Enabled better business decision-making through clear and actionable insights.",
    url: "https://app.powerbi.com/reportEmbed?reportId=60c909d6-7c34-4495-8c0a-41458f9d47d4&autoAuth=true&ctid=d27bd8bc-15b3-4ea8-936e-8724ac9363a7",
  },
  {
    id: 5,
    name: "College Webpage",
    category: "Web Development",
    tools: "HTML, CSS, Responsive Design",
    image: "https://tse2.mm.bing.net/th/id/OIP.zqW51c-DhMyvw-Pto3ZFcwHaEK?pid=Api&P=0&h=180",
    description: "Developed a responsive static college website using HTML and CSS to showcase courses, departments, and campus information. Designed a structured layout with intuitive navigation for better user experience. Ensured mobile responsiveness and clean UI design principles.",
    url: "https://anurag928.github.io/Collegewebsite/",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
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
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
