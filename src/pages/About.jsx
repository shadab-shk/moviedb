import React from "react";

const About = () => {
  return (
    <>
      <header class="bg-primary text-center py-3 mb-3">
        <div class="container my-2">
          <h1 class="fw-light text-white">About</h1>
        </div>
      </header>
      <div className="container" style={{ textAlign: "center" }}>
        {/* <div class="row"> */}
        <div class="col-xl-3 col-md-3 mb-4">
          <h2>
            This website is made for educational purpose <br /> website designed
            & developed
            <br /> by
            <a
              href="https://shadab-shk.github.io/"
              style={{ textDecoration: "none" }}
            >
              <br />
              Shadab Shaikh
            </a>
          </h2>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
