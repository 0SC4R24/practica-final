import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'

export default function Card(props) {
    return (
        <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-end">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.city}</p>
                <a href="#" className="btn btn-danger w-30">
                    Delete
                </a>
            </div>
        </div>
    );
}