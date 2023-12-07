import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container py-5 h-80">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-4 text-center">

              <h3 className="mb-3">Register</h3>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typeNameX-2">Name</label>
                <input type="text" id="typeNameX-2" className="form-control" placeholder=""/>
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                <input type="email" id="typeEmailX-2" className="form-control" placeholder=""/>
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                <input type="password" id="typePasswordX-2" className="form-control" />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typeAgeX-2">Age</label>
                <input type="number" id="typeAgeX-2" className="form-control" />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typeCityX-2">City</label>
                <input type="text" id="typeCityX-2" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeInterestsX-2">Interests</label>
                <select className="form-select form-control" id="typeInterestsX-2" aria-label="Default select example">
                  <option value="Food" selected>Food</option>
                  <option value="Technology">Technology</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>

              <div className="form-outline mb-2">
                <input type="checkbox" className="form-check-input mr-1" id="typeOffersX-2" />
                <label className="form-label" htmlFor="typeOffersX-2">Want to receive offers?</label>
              </div>

              <button className="btn btn-primary btn-lg btn-block mt-4" type="submit">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
