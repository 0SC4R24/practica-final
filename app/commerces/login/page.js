"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import Alert from "@/components/Alert";

async function getCommerces() {
    const res = await fetch("/api/adminsCommerces");
    const data = await res.json();
    return data.adminsCommerces;
}

async function checkCredentials(email, cif) {
    const commerces = await getCommerces(); // Await the result of getCommerces
    return commerces.find((commerce) => commerce.email === email && commerce.cif === cif);
}

async function getID(email, cif) {
    const commerces = await getCommerces(); // Await the result of getCommerces
    return commerces.find((commerce) => commerce.email === email && commerce.cif === cif).id;
}

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [cif, setCif] = useState("");
    const [alerts, setAlerts] = useState([]);
    const router = useRouter();

    const addAlert = (message, type) => {
        // Add a new alert to the list
        setAlerts(prevAlerts => [...prevAlerts, { message, type }]);
    };

    const handleLogin = async () => {
        try {
            const isValid = await checkCredentials(email, cif);
            
            if (isValid) {
                // Redirect to "/admin/commerces" on successful login
                const id = await getID(email, cif);
                // addAlert(`Login successful with id: ${id}`, "success");
                router.push(`/commerces/edit/${id}`);
            } else {
                // Print an error message when credentials are incorrect
                console.error("Incorrect email or password");
                addAlert("Incorrect email or password", "danger");
            }
        } catch (error) {
            // Log the error to the console for debugging
            console.error("Error during login:", error);
            addAlert("An unexpected error occurred. Please try again.", "danger");
        }
    };

    const handleKeyPress = (e) => {
        // Check if the pressed key is "Enter" (key code 13)
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <div className="container py-5 h-100 my-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div id="liveAlertPlaceholder" className="text-center">
                        {alerts.map((alert, index) => (
                            <Alert key={index} message={alert.message} type={alert.type} />
                        ))}
                    </div>
                    <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                        <div className="card-body p-5 text-center">
                            <h3 className="mb-5">Commerce Log in</h3>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="typeEmailX-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="typeEmailX-2"
                                    className="form-control form-control-lg"
                                    placeholder=""
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="typePasswordX-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="typePasswordX-2"
                                    className="form-control form-control-lg"
                                    value={cif}
                                    onChange={(e) => setCif(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                />
                            </div>

                            <button
                                className="btn btn-primary btn-lg btn-block"
                                type="button"
                                onClick={handleLogin}
                            >
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}