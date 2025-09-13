import { Link } from "react-router-dom";
import "./about.css";
const About = () => {
  return (
    <>
      <section className="about mt-5 pt-5">
        <div className="container  my-5">
          <div className="text-center">
            <h1>
              About <span style={{ color: "orange" }}>me</span>{" "}
            </h1>
            <hr className="w-25 m-auto" />
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-12 p-2">
              <p className="pt-2">
                I am a passionate and self-motivated Full-Stack Web Developer
                with a strong foundation in both front-end and back-end
                technologies. Proficient in HTML, CSS, JavaScript, along with
                frameworks like React.js and Node.js. I enjoy building
                responsive, user-friendly websites and web applications. With a
                problem-solving mindset and a keen eye for design and
                performance, I’m eager to contribute to innovative development
                teams and grow my skills in real-world projects.
              </p>

              <div className="accordion mt-5" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      My hobbies
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Bodybuilding, Cricket, Exploring New Skills & Technologies
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      My Qualifictions
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <b>Mern Stack Web Devlopment</b> <br />
                        Brain Maintors <br />
                         Year of Passing: [2025]
                        <br />
                        <b>Bachelor of Computer Applications (BCA)</b> <br />
                        Chaudhary Charan Singh University (CCSU) <br />
                         Year of Passing: [2026]
                        <br />
                        <b>12th Grade (Mathematics Stream)</b>
                        <br />
                       Janta Inter College <br />
                        Year of Passing: [2020]
                     
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      My Dreams
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                     My dream is to work in a company where I can apply and grow my skills as a Full-Stack Developer. I want to keep learning new technologies, work on real projects, and build a successful career in web development.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end">
              <img
                src="./subhash photo.jpg"
                alt=""
                className="img-fluid img-thumbnail "
              />
            </div>
          </div>
        </div>
      </section>

      {/* our team  */}

      <section className="ourTeam pt-5">
        <div className="container">
          <div className="text-center">
            <h1>
              Our <span className="orangeColor">Team</span>
            </h1>
            <hr className="w-25 m-auto" />
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
              <div className="card mb-2">
                <div className="card-body text-center">
                  <img
                    src="/subhash photo.jpg"
                    alt=""
                    className=" img-fluid rounded-circle border border-primary p-2 "
                  />
                  <h5 className="card-title">subhash Prajapati</h5>
                  <p className="card-text">Mern Stack Developer</p>
                  <Link to="/" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
              <div className="card mb-2">
                <div className="card-body text-center">
                  <img
                    src="/subhash photo.jpg"
                    alt=""
                    className=" img-fluid rounded-circle border border-primary p-2 "
                  />
                  <h5 className="card-title">Web Devlopment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="/" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
              <div className="card mb-2">
                <div className="card-body text-center">
                  <img
                    src="/subhash photo.jpg"
                    alt=""
                    className=" img-fluid rounded-circle border border-primary p-2 "
                  />
                  <h5 className="card-title">subhash Prajapati</h5>
                  <p className="card-text">Mern Stack Developer</p>
                  <Link to="/" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
              <div className="card mb-2">
                <div className="card-body text-center">
                  <img
                    src="/subhash photo.jpg"
                    alt=""
                    className=" img-fluid rounded-circle border border-primary p-2 "
                  />
                  <h5 className="card-title">subhash Prajapati</h5>
                  <p className="card-text">Mern Stack Developer</p>
                  <Link to="/" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
