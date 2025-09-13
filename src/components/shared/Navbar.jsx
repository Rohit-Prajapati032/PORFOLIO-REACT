import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white px-3 border-bottom fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1 className="orangeColor fw-bold ">Subhash</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // style={{backgroundColor:"red", color:"black"}}
          >
            <span className="navbar-toggler-icon" > <i className="fa-solid fa-bars" style={{color:"orange"}}></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bolder  text-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                 <span className="navLink"> Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  <span className="navLink">Projects</span>
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/skills">
                  <span className="navLink">Skills</span>
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/about">
             <span className="navLink">About-us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contect">
                   <span className="navLink">Contect-us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
