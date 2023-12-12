"use client"
import { useState, useEffect } from 'react';

async function loadCommerce(id) {
    const res = await fetch('/api/commerces');
    const data = await res.json();
    const commerce = data.commerces.find((commerce) => commerce.id === id);
    return commerce;
}

export default function Page({ params }) {
    const [commerce, setCommerce] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await loadCommerce(params.id);
            setCommerce(data);
        }

        fetchData();
    }, []);

    return (
        <>
            {(commerce === undefined) ?
                <div className="container-fluid h-100 my-auto">
                    <h1 className="text-center mt-5 display-2">Commerce not found</h1>
                </div>
            :
                <div className="container-fluid h-100 text-center">
                    <h1 className="mt-5 display-2">{commerce.name}</h1>
                    <h1 className="mt-5 text-body-secondary display-5">
                        {commerce.slogan ? 
                            commerce.slogan
                        : 
                            "No slogan"
                        }    
                    </h1>
                </div>
            }
        </>
    )
}