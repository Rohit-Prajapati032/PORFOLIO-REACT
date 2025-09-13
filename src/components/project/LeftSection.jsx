import { Link } from "react-router-dom";
const LeftSection = ({
  projectName,
  projectImg,
  projectLiveLink,
  projectCodeLink,
  projectTackStack,
  devloperRole,
  projectDescription,
  projectKeyHighlight
}) => {
  return (
    <div className="container pt-5">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12 d-flex flex-column mb-3">
          <img src={projectImg} alt="projectImg" style={{ width: "18rem" }} />
          <span className="mt-3">
            <button type="button" class="btn  mt-3 projectBtn ms-4">
              <Link to={projectLiveLink} className="projectsLink">
                Live Demo
              </Link>
            </button>
            <button type="button" class="btn  mt-3 projectBtn ms-4">
              <Link to={projectCodeLink} className="projectsLink">
                Project Code
              </Link>
            </button>
          </span>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
          <h1 className="orangeColor headdingHover">{projectName}</h1>
          <span>
            <p>
              <b>Tech Stack:</b>
              {projectTackStack}
            </p>
            {/* <p>
              <b>Role:</b>
              {devloperRole}
            </p> */}
            <p>
              <b>Description:</b>
              {projectDescription} <br /> <br />
              <b>Key Highlights</b>
              <p>{ projectKeyHighlight}</p>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
