"use client"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Searchbar({ onChange }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = () => {
        onChange(searchTerm);
    };

    useEffect(() => {
        filtered();
    }, [searchTerm]);

    return (
        <div className="container-fluid mx-auto">
            <div className="input-group mb-3">
                <form className="form-floating">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="basic-url" placeholder="Search..." 
                        aria-describedby="basic-addon3 basic-addon4" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <label htmlFor="basic-url">Search...</label>
                </form>
                <span className="input-group-text" id="basic-addon3"><i className="bi bi-search"></i></span>
            </div>
        </div>
    )
}