"use client"
import "@/app/styles/main.css";
import { useRouter } from "next/navigation";

export default function MainCards() {
    const router = useRouter();

    const handleClick = (id) => {
        // console.log(id);
        router.push(`/commerces/${id}`);
    };

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-1">
                <div className="col">
                    <div className="card h-100 bg-secondary-hover" onClick={() => handleClick("ca8a34e6-1d9a-4308-b21e-2f538911702c")}>
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div className="card-body">
                            <h5 className="card-title">Mercadona</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-secondary-hover" onClick={() => handleClick("97bd0f68-14d2-47dd-b16f-bb4ce3e9eefe")}>
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div className="card-body">
                            <h5 className="card-title">Decathlon</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-secondary-hover" onClick={() => handleClick("a7bfa5aa-b500-476d-8457-14db7d811980")}>
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                        <div className="card-body">
                            <h5 className="card-title">MediaMarkt</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}