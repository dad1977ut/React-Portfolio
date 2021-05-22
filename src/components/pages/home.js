import React from "react";
import Dameon from "../assets/012.jpg";
function Home() {
  return (
    <div className="container mt-5 mx-0 p-0">
      <div className="row"></div>
      <div className="row mx-0">
        <div className="card mx-sm-5" style={{ maxWidth: "1000px" }}>
          <h1 className="card-head">About Me</h1>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <img src={Dameon} className="img-fluid" alt="Dameon Davis" />
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="card-body">
                <p className="card-text-left">
                  I lived in Salt Lake City all my life. I graduated from West
                  High in 1996. After high school, I went to Salt Lake Community
                  College, and earn an Associate of Science in general studies.
                  I then went to University of Utah, and earn a Bachelor of
                  Science in economics.
                </p>
                <p>Phone number: (801)657-8696</p>
                <a href="https://github.com/dad1977ut?tab=repositories">
                  GitHub profile
                </a>
                <br />
                <a href="https://www.linkedin.com/in/dameon-davis-b9b28b122">
                  LinkedIn profile
                </a>
                <br />
                <a href="assets/Dameon-Davis.pdf">Download my resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
