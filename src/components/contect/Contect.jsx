import "./contect.css";
const Contect = () => {
  return (
    <section className="contect pt-5 " data-aos="fade-down-right">
      <div className="container py-5">
        <div className="text-center">
          <h1>
            Contect-<span style={{ color: "orange" }}>Us</span>
          </h1>
          <hr className="w-25 m-auto" />
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-12 col-lg-6">
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="inputName" />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div class="col-12">
                <label for="inputAddress" className="form-label">
                  Massege
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="massege"
                />
              </div>
              <div class="col-md-12">
                <label for="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" class="btn projectBtn">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 col-12 col-lg-6 m-auto text-end">
            <div className="cont-img">
              <img
                src="/subhash photo.jpg"
                alt=""
                className=" img-fluid p-3 "
              />
              <p className="text-end me-4 email-contect">
                <i class="fa-regular fa-envelope colorOrange"></i>{" "}
                subhashprajapati032@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;
