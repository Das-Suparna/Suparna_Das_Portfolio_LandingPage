import React from 'react';

function About() {
  return (
    <div className="container"><br />
      <h4 className="text-center text-primary">ABOUT ME</h4><br />
      <div className="row ">
        <div className="col-md-6 card">
          <img
            style={{ height: '550px' }}
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg?t=st=1745562363~exp=1745565963~hmac=1c35d177dd8a347b3203d11934b5d31e9d1ab5258d656a9d816f854ef9578b18&w=826"
            className="img-fluid rounded"
            alt="About Suparna"
          />
        </div>

        <div className="col-md-6">
          <div className="card p-4">
            <h4 className="text-center mb-3">Hi, I'm Suparna Das 👋</h4>
            <p style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
              <strong>Hello! I'm Suparna Das</strong>, a passionate developer with a knack for both front-end and back-end technologies. I love creating user-friendly and efficient applications that deliver seamless experiences.
              <br /><br />
              Over the course of my internships, I have gained valuable experience that has helped me grow both professionally and personally. These experiences allowed me to strengthen my communication, technical, and teamwork skills in various ways:
              <ul>
                <li><strong>Writing Intern at Marpu Foundation (Jul 2023):</strong> Sharpened communication skills, content creation, and collaborative writing.</li>
                <li><strong>Web Development Intern at The Sparks Foundation (May - Jun 2023):</strong> Gained hands-on experience with web development, coding, and problem-solving.</li>
                <li><strong>HR Intern at Unschool (May - Jun 2023):</strong> Improved interpersonal, recruitment, and data management skills.</li>
                <li><strong>Marketing Intern at Unschool (May 2023):</strong> Enhanced creative communication, content design, and social media campaign management.</li>
              </ul>
              These experiences helped me strengthen my communication, technical, and teamwork skills. </p>

          </div>
        </div>
        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  );
}

export default About;
