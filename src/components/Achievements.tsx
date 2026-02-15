import "./styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Selected for Infosys Springboard Virtual Internship 6.0",
      year: "Oct 2025",
    },
    {
      id: 2,
      title: "1st Prize - Zignyasa Hackathon",
      year: "2024",
    },
  ];

  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements
        </h2>
        <div className="achievements-list">
          {achievements.map((achievement) => (
            <div className="achievement-item" key={achievement.id}>
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>{achievement.title}</h4>
                <p className="achievement-year">{achievement.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
