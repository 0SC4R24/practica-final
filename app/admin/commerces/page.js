"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from "@/components/Searchbar"
import Card from "@/components/Card"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react"

async function getAdminsCommerces() {
    const res = await fetch("/api/adminsCommerces");
    const data = await res.json();
    return data.adminsCommerces;
}

export default function CommercesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [newCommerce, setNewCommerce] = useState({ name: "", cif: "", city: "", email: "", phone: "", id : "" });
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAdminsCommerces();
            setCardsData(data);
        }

        fetchData();
    }, []);

    const filteredNotes = cardsData.filter(
        (card) =>
            (card.name && card.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (card.city && card.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (card.email && card.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (card.phone && card.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (card.cif && card.cif.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleModalOpen = () => {
        setShowModal(true);
    };
    
    const handleModalClose = () => {
        setShowModal(false);
    };
    
    const handleAddCommerce = async () => {
        // Add logic to handle the addition of a new commerce
        // You can update your state, API, or perform any other action here
        newCommerce.id = uuidv4();
        const updatedCardsData = [...cardsData, newCommerce];
        setCardsData(updatedCardsData);

        // Call the API to add the new commerce
        fetch("/api/adminsCommerces", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCommerce)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))

        const cleanCommerce = { name: newCommerce.name, city: newCommerce.city, email: newCommerce.email, phone: newCommerce.phone, id: newCommerce.id };
        fetch("/api/commerces", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cleanCommerce)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))

        const cleanCommerceContent = { name: newCommerce.name, city: newCommerce.city, id: newCommerce.id, summary: "", activity: "", numberOfReviews: 0, rating: 0 ,reviews: [] };
        fetch("/api/commercesContent", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cleanCommerceContent)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))

        // Reset the form and close the modal
        setNewCommerce({ name: "", cif: "", city: "", email: "", phone: "" });
        newCommerce.id = "";
        setShowModal(false);

        window.location.reload();
    };

    const handleDeleteCommerce = async (id) => {
        // Add logic to handle the deletion of a commerce
        // You can update your state, API, or perform any other action here
        const updatedCardsData = cardsData.filter((card) => card.id !== id);
        setCardsData(updatedCardsData);

        // Call the API to delete the commerce
        fetch("/api/adminsCommerces", {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))

        fetch("/api/commerces", {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    return (
        <div className="container-fluid py-5 h-100">
            <h1 className="text-center display-5 my-5">Admin Commerces</h1>

            <Searchbar onChange={(value) => setSearchTerm(value)} />

            <button className="btn btn-primary my-2 d-flex mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleModalOpen}>Add Commerce</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title h4 fs-5">Add Commerce</div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="">
                                <div>
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input 
                                        placeholder="Enter commerce name"
                                        id="name" 
                                        className="form-control" 
                                        type="text" 
                                        value={newCommerce.name}
                                        onChange={(e) =>
                                            setNewCommerce({ ...newCommerce, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="cif">CIF</label>
                                    <input 
                                        placeholder="Enter commerce CIF" 
                                        id="cif" 
                                        className="form-control" 
                                        type="text" 
                                        value={newCommerce.cif}
                                        onChange={(e) =>
                                            setNewCommerce({ ...newCommerce, cif: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="city">City</label>
                                    <input 
                                        placeholder="Enter commerce city" 
                                        id="city" 
                                        className="form-control" 
                                        type="text" 
                                        value={newCommerce.city}
                                        onChange={(e) =>
                                            setNewCommerce({ ...newCommerce, city: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input 
                                        placeholder="Enter commerce email" 
                                        id="email" 
                                        className="form-control" 
                                        type="text" 
                                        value={newCommerce.email}
                                        onChange={(e) =>
                                            setNewCommerce({ ...newCommerce, email: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="phone">Phone</label>
                                    <input 
                                        placeholder="Enter commerce phone" 
                                        id="phone" 
                                        className="form-control" 
                                        type="text" 
                                        value={newCommerce.phone}
                                        onChange={(e) =>
                                            setNewCommerce({ ...newCommerce, phone: e.target.value })
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleAddCommerce}>Add Commerce</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-5" />

            <div className="container-fluid text-center mt-5">
                <div className="row card-group justify-content-center">
                    {filteredNotes.map((card, index) => (
                        <div key={index} className="col-sm-4 col-12 col-lg-2 m-1 m-lg-2">
                            <Card
                                name={card.name}
                                city={card.city}
                                email={card.email}
                                phone={card.phone}
                                cif={card.cif}
                                onDelete={() => handleDeleteCommerce(card.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}