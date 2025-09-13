import { Link } from "react-router-dom"

const Notfound = () => {
  return (
     <div className="container p-5 mb-5">
      <div className="row text-center">
        {/* <img src="public/media/images/HomeHero.png" alt="HeroImage" className="mb-5"/> */}
        <h1 className="mt-5 fs-2 mb-5">404 Page Not Found </h1>
        <p className="mb-5">We couldn’t find the page you were looking for. <Link to="/">Visit Subhash Portfolio home page.</Link></p>
       <Link to="/" >
        <button style={{width:"20%", margin:"0 auto"}} className="btn btn-primary p-2 fs-5">Go Home</button>
       </Link>
      </div>
    </div>
  )
}

export default Notfound