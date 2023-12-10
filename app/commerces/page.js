"use client"
import "bootstrap/dist/css/bootstrap.css";
import Searchbar from "@/components/Searchbar";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CommercesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [commerces, setCommerces] = useState([]);

    const filteredCommerces = commerces.filter(
        (commerce) =>
            (commerce.name && commerce.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (commerce.address && commerce.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (commerce.email && commerce.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (commerce.phone && commerce.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (commerce.cif && commerce.cif.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleClick = () => {
        // Your custom function logic
        
    };

    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center display-1 mb-5">Commerces</h1>
            <Searchbar onChange={(value) => setSearchTerm(value)} />
            <div className="container-fluid text-center mt-5">
                <div className="row g-2">
                    <div className="col-4">
                        <div className="p-2 border rounded bg-danger-hover" onClick={handleClick}>Column</div>
                    </div>
                    <div className="col-4">
                        <div className="p-2 border rounded">Column</div>
                    </div>
                    <div className="col-4">
                        <div className="p-2 border rounded">Column</div>
                    </div>
                    <div className="col-4">
                        <div className="p-2 border rounded">Column</div>
                    </div>
                </div>
            </div>
        </div>
    )
}