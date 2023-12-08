"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from "@/components/Searchbar"
import Card from "@/components/Card"
import { useEffect, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap";

async function getAdminsCommerces() {
    const res = await fetch("http://localhost:3000/api/adminsCommerces");
    const data = await res.json();
    return data.adminsCommerces;
}

async function addAdminsCommerces(commerce) {
    const res = await fetch("http://localhost:3000/api/adminsCommerces");
}

export default function CommercesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [newCommerce, setNewCommerce] = useState({ title: "", city: "" });
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
            (card.title && card.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            card.city.toLowerCase().includes(searchTerm.toLowerCase())
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
        const updatedCardsData = [...cardsData, newCommerce];
        setCardsData(updatedCardsData);

        // Call the API to add the new commerce
        await addAdminsCommerces(newCommerce);

        // Reset the form and close the modal
        setNewCommerce({ title: "", city: "" });
        setShowModal(false);
    };

    return (
        <div className="container-fluid py-5 h-100">
            <h1 className="text-center display-5 my-5">Admin Commerces</h1>

            <Searchbar onChange={(value) => setSearchTerm(value)} />

            <button className="btn btn-primary my-2 d-flex mx-auto" onClick={handleModalOpen}>Add Commerce</button>

            <Modal show={showModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Commerce</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter commerce title"
                                value={newCommerce.title}
                                onChange={(e) =>
                                    setNewCommerce({ ...newCommerce, title: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter commerce city"
                                value={newCommerce.city}
                                onChange={(e) =>
                                    setNewCommerce({ ...newCommerce, city: e.target.value })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddCommerce}>
                        Add Commerce
                    </Button>
                </Modal.Footer>
            </Modal>

            <hr className="my-5" />

            <div className="container-fluid text-center mt-5">
                <div className="row card-group justify-content-center">
                    {filteredNotes.map((card, index) => (
                        <div key={index} className="col-sm-4 col-12 col-lg-2 m-1 m-lg-2">
                            <Card
                                title={card.title}
                                city={card.city}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}