"use client"
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [user, setUser] = useState({ name: "", email: "", password: "", age: 0, city: "", interest: "", offer: false });
  const router = useRouter();

  const handleAddUser = async () => {
    // Call the API to add the new user
    fetch("/api/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))

    // Reset the form
    setUser({ name: "", email: "", password: "", age: 0, city: "", interest: "", offer: false });
    router.push("/");
  };

  return (
    <div className="container py-5 h-80">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-4 text-center">

              <h3 className="mb-3">Register</h3>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typeNameX-2">Name</label>
                <input 
                  type="text" 
                  id="typeNameX-2" 
                  className="form-control" 
                  placeholder=""
                  value={user.name}
                  onChange={(e) =>
                    setUser({ ...user, name: e.target.value })
                  }
                />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                <input 
                  type="email" 
                  id="typeEmailX-2" 
                  className="form-control" 
                  placeholder=""
                  value={user.email}
                  onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                  }
                />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                <input 
                  type="password" 
                  id="typePasswordX-2" 
                  className="form-control"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  } 
                />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typeAgeX-2">Age</label>
                <input 
                  type="number" 
                  id="typeAgeX-2" 
                  className="form-control"
                  value={user.age}
                  onChange={(e) =>
                    setUser({ ...user, age: e.target.value })
                  }
                />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="typeCityX-2">City</label>
                <input 
                  type="text" 
                  id="typeCityX-2" 
                  className="form-control"
                  value={user.city}
                  onChange={(e) =>
                    setUser({ ...user, city: e.target.value })
                  }
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeInterestsX-2">Interests</label>
                <select className="form-select form-control" id="typeInterestsX-2" aria-label="Default select example" value={user.interest} onChange={(e) => setUser({ ...user, interest: e.target.value })}>
                  <option value="Food">Food</option>
                  <option value="Technology">Technology</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>

              <div className="form-outline mb-2">
                <input 
                  type="checkbox" 
                  className="form-check-input mr-1" 
                  id="typeOffersX-2"
                  value={user.offer}
                  onChange={(e) =>
                    setUser({ ...user, offer: e.target.value })
                  }
                />
                <label className="form-label" htmlFor="typeOffersX-2">Want to receive offers?</label>
              </div>

              <button className="btn btn-primary btn-lg btn-block mt-4" type="submit" onClick={handleAddUser}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
