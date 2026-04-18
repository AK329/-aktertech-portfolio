import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in EEE</h4>
                <h5>Varendra University</h5>
              </div>
              <h3>2025–29</h3>
            </div>
            <p>
              Developing strong foundations in Python, Machine Learning,
              and Mathematics including Linear Algebra and Vector Calculus.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Project</h4>
                <h5>Job Success Prediction</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a Linear Regression model to analyze how specific skills
              impact job confirmation rates. Used Pandas for data structuring
              and Scikit-Learn to train the model and generate predictions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Project</h4>
                <h5>Secure File Locker</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a desktop tool that locks and hides sensitive files
              using Python's OS and path-handling libraries. Designed logic
              to authenticate users before granting file access.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self-Learning</h4>
                <h5>ML & Python Skills</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively learning Deep Learning concepts, mastering NumPy,
              Pandas, Matplotlib, and Scikit-Learn. Building projects
              to strengthen practical ML and data science skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
