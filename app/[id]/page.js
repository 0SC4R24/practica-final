"use client"
import { useState, useEffect } from 'react';

async function loadUser(id) {
    const res = await fetch('/api/users');
    const data = await res.json();
    const user = data.users.find((user) => user.id === id);
    return user;
}

export default function Page({ params }) {
    const [user, setUser] = useState({});
    const [modalData, setModalData] = useState({ show: false, field: '', value: '' });

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadUser(params.id);
            setUser(data);
        }

        fetchData();
        console.log(user);
    }, []);

    if (user === undefined) {
        return (
            <div className="container-fluid h-100 my-auto">
                <h1 className="text-center mt-5 display-2">User not found</h1>
            </div>
        )
    }

    const handleEditClick = (field, value) => {
        setModalData({ show: true, field, value });
    };

    const updateUserDetails = async (updatedUser) => {
        try {
            // Update users
            await fetch("/api/users", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: updatedUser.id, 
                    name: updatedUser.name, 
                    email: updatedUser.email, 
                    age: updatedUser.age, 
                    city: updatedUser.city,
                    interest: updatedUser.interest,
                    offer: (updatedUser.offer === 'true') 
                })
            });

            // Update localStorage
            localStorage.setItem('user', JSON.stringify(updatedUser));
            window.location.reload();
            console.log("User updated successfully");
        } catch (error) {
            console.error("Error updating commerce:", error);
        }
    };

    const handleModalSave = (field, updatedValue) => {
        setUser(currentUser => {
            const updatedUser = { ...currentUser, [field]: updatedValue };
            handleModalClose();
            updateUserDetails(updatedUser);
            return updatedUser;
        });
    };

    const handleModalClose = () => {
        setModalData({ show: false, field: '', value: '' });
    };

    const handleDeleteUser = async () => {
        try {
            // Prepare the request body
            const requestBody = JSON.stringify({ id: user.id });
    
            // Headers for the request
            const headers = { 'Content-Type': 'application/json' };

            await fetch('/api/users', {
                method: 'DELETE',
                headers: headers,
                body: requestBody
            });

            localStorage.removeItem('user');
            localStorage.removeItem('isLogged');
    
            console.log("User deleted successfully");
            // Redirect or update UI as needed
            window.location.href = "/";
        } catch (error) {
            console.error("Error deleting commerce:", error);
        }
    };

    return (
        <div className="container-fluid mt-5">
            <h1 className="display-5 text-center">Welcome, {user.name}!</h1>
            <div className="container w-50 mt-5 border rounded">
                <div className="row p-2 align-items-center">
                    <div className="col-10">
                        <p className="m-0 fs-3">Name: {user.name}</p>
                    </div>
                    <div className="col-2 align-items-center justify-content-center text-center">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditClick('name', user.name)}>Edit</button>
                    </div>
                </div>
                <div className="row p-2 align-items-center">
                    <div className="col-10">
                        <p className="m-0 fs-3">E-mail: {user.email}</p>
                    </div>
                    <div className="col-2 align-items-center justify-content-center text-center">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditClick('email', user.email)}>Edit</button>
                    </div>
                </div>
                <div className="row p-2 align-items-center">
                    <div className="col-10">
                        <p className="m-0 fs-3">Age: {user.age}</p>
                    </div>
                    <div className="col-2 align-items-center justify-content-center text-center">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditClick('age', user.age)}>Edit</button>
                    </div>
                </div>
                <div className="row p-2 align-items-center">
                    <div className="col-10">
                        <p className="m-0 fs-3">City: {user.city}</p>
                    </div>
                    <div className="col-2 align-items-center justify-content-center text-center">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditClick('city', user.city)}>Edit</button>
                    </div>
                </div>
                <div className="row p-2 align-items-center">
                    <div className="col-10">
                        <p className="m-0 fs-3">Interest: {user.interest}</p>
                    </div>
                    <div className="col-2 align-items-center justify-content-center text-center">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditClick('interest', user.interest)}>Edit</button>
                    </div>
                </div>
                <div className="row p-2 align-items-center">
                    <div className="col-10">
                        <p className="m-0 fs-3">Receive offers? {`${user.offer}`}</p>
                    </div>
                    <div className="col-2 align-items-center justify-content-center text-center">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditClick('offer', user.offer)}>Edit</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 mx-0 text-center">
                <button className="btn btn-danger" onClick={handleDeleteUser}>Delete Account</button>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-2">
                        <h4 className="text-center mt-1">Edit {modalData.field}</h4>
                        <input
                            className="form-control my-3"
                            type="text"
                            defaultValue={modalData.value}
                            onChange={(e) => setModalData({ ...modalData, value: e.target.value })}
                        />
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-danger m-1" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}>Close</button>
                            <button className="btn btn-primary m-1" onClick={() => handleModalSave(modalData.field, modalData.value)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}