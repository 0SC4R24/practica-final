import "@/app/styles/main.css";

export default function CommerceCard({ commerce, onClick }) {
    return (
        // <div className="col-4">
        //     <div className="card h-100 bg-secondary-hover" onClick={() => onClick(commerce.id)}>
        //         <svg className="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
        //         <div className="card-body">
        //             <h2 className="card-title">{commerce.name}</h2>
        //             <p className="card-subtitle text-body-secondary">{commerce.slogan}</p>
        //         </div>
        //         <div className="card-footer justify-content-between">
        //             <a href={`mailto:${commerce.email}`} className="card-link">{commerce.email}</a>
        //             <a href={`tel:${commerce.phone}`} className="card-link">{commerce.phone}</a>
        //         </div>
        //     </div>
        // </div>
        <div className="col">
            <div className="card h-100 bg-secondary-hover" onClick={() => onClick(commerce.id)}>
                <svg className="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                <div className="card-body">
                    <h5 className="card-title">{commerce.name}</h5>
                    <p className="card-text">{commerce.slogan}</p>
                </div>
                <div className="card-body justify-content-between">
                    <a href={`mailto:${commerce.email}`} className="card-link">{commerce.email}</a>
                    <a href={`tel:${commerce.phone}`} className="card-link">{commerce.phone}</a>
                </div>
            </div>
        </div>
    );
}