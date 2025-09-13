import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container home mt-5 pt-5">
        <div className="row mt-5 p-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto mt-5">
            <h3 className="aquaColor fs-1 ">Hello I am </h3>
            <h1 className="aquaColor fs-1 orangeColor  fw-bold">
              Subhash Prajapati
            </h1>
            <h2 className="whiteColor mb-3  fw-bold">FullStack Web Devloper</h2>
            <p className="whiteColor">
             I am a creative and technically skilled Full-Stack Web Designer with expertise spanning both front-end and back-end development. I specialize in building responsive, user-focused web applications using HTML, CSS, JavaScript, and modern frameworks like React for the frontend and Node.js for the backend. My approach blends clean design with functional development, ensuring seamless user experiences and scalable application architecture. I have a strong eye for UI/UX design principles and the technical knowledge to bring ideas to life from concept to deployment.
            </p>
            <div className="d-flex">
              <Link to="/">
                <i class="fa-brands fa-linkedin-in me-5 p-2 fs-4 text-dark icon"></i>
              </Link>

              <Link to="/">
                <i class="fa-regular fa-envelope  me-5 fs-4 p-2 text-dark icon"></i>
              </Link>
              <Link to="https://github.com/Rohit-Prajapati032">
                <i class="fa-brands fa-github  me-5 fs-4 p-2 text-dark icon"></i>
              </Link>
            </div>
            <button type="button" class="btn  mt-3 resumeBtn fs-5 ">
              Resume Download <i class="fa-solid fa-circle-arrow-down "></i>
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end mt-5 ">
            <img src="/subhash photo.jpg" alt="" className="homePhoto " />
          </div>
        </div>
      </div>

      {/* <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="/images1.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="/images1.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images1.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default Home;
