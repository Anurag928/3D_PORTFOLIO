import { useEffect, useRef } from "react";
import "./styles/TechStack.css";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "R", icon: "📊" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
  { name: "SQL", icon: "🗄️" },
  { name: "Power BI", icon: "📈" },
  { name: "Excel", icon: "📑" },
  { name: "MongoDB", icon: "🍃" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Java", icon: "☕" },
  { name: "React", icon: "⚛️" },
  { name: "Shopify", icon: "🛒" },
  { name: "GitHub", icon: "⚙️" },
  { name: "TensorFlow", icon: "🤖" },
  { name: "Flask", icon: "🔥" },
  { name: "n8n", icon: "🔗" },
  { name: "Model Development", icon: "🧠" },
];

const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 2;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="tech-stack-section" id="skills">
      <div className="skills-container section-container">
        <h2>
          My <span>Tech Stack</span>
        </h2>
        <div className="skills-wrapper">
          <div className="skills-flex" ref={scrollRef}>
            {[...skills, ...skills].map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon-emoji">{skill.icon}</div>
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
