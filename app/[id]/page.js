"use client"
import { useState, useEffect } from 'react';

async function loadUser(id) {
    const res = await fetch('http://localhost:3000/api/users');
    const data = await res.json();
    const user = data.users.find((user) => user.id === id);
    return user;
}

export default function Page({ params }) {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await loadUser(params.id);
            setUser(data);
        }

        fetchData();
        console.log(user);
    }, []);

    return (
        <>
            {(user === undefined) ?
                <div className="container-fluid h-100 my-auto">
                    <h1 className="text-center mt-5 display-2">User not found</h1>
                </div>
            :
                <div className="container-fluid mt-5">
                    <h1 className="display-5 text-center">Welcome, {user.name}!</h1>
                    <div className="container w-50 mt-5 border rounded">
                        <p className="mt-1 fs-3">Name: {user.name}</p>
                        <p className="mt-1 fs-3">E-mail: {user.email}</p>
                        <p className="mt-1 fs-3">Age: {user.age}</p>
                        <p className="mt-1 fs-3">City: {user.city}</p>
                        <p className="mt-1 fs-3">Interest: {user.interest}</p>
                        <p className="mt-1 fs-3">Receive offers? {`${user.offer}`}</p>
                    </div>
                </div>
            }
        </>
    )
}