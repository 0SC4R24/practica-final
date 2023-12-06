import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container py-5 h-100 mb-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">

              <h3 className="mb-5">Register</h3>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder=""/>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              </div>

              <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
