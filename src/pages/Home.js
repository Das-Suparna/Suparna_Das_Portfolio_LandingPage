import React from 'react';

function Home() {
  return (
    <div id="home" className="container my-3">
      <div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <div className=" ">
              <h1 className="text-primary" style={{ fontSize: "48px" }}><b>Suparna Das</b></h1>
              <h3>Full-Stack Developer | Designer | Technophile</h3>
              <p className="mt-4 " style={{ fontSize: "18px", textAlign: "justify" }}>
              I’m passionate about creating meaningful digital experiences by combining clean, efficient code with visually appealing design. My goal is to build user-friendly, interactive solutions that not only meet technical requirements but also resonate with users. Whether it's through front-end development or back-end integration, I aim to deliver seamless, responsive designs that provide lasting value. Let's connect and collaborate to bring innovative ideas to life and build something extraordinary together! </p>
              <div className="d-flex mt-4">
                <a href="https://www.linkedin.com/in/suparna-das-032912235/" target="_blank" >
                  <img
                    src="https://img.freepik.com/free-icon/linkedin_318-187585.jpg"
                    width="40px"
                    height="40px"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://github.com/Das-Suparna" target="_blank" >
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="40px"
                    height="40px"
                    alt="GitHub"
                  />
                </a>
                <a href="https://www.hackerrank.com/profile/rumidas2114" target="_blank" >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/hackerrank-3628464-3029920.png"
                    width="40px"
                    height="40px"
                    alt="HackerRank"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="">
              <img
                id="profileImage"
                src="https://img.freepik.com/free-vector/personal-portfolio-concept-illustration_114360-1543.jpg?size=626&ext=jpg&ga=GA1.2.1023083493.1682422864&semt=sph"
                className="img-fluid rounded"
                alt="Portfolio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
