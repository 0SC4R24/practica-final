import Searchbar from "@/components/Searchbar"

export default function CommercesPage() {
    return (
        <div className="container-fluid py-5 h-100">
            <h1 className="text-center display-5 my-5">Admin Commerces</h1>
            <Searchbar />
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-2 border rounded">
                        <p>Hello</p>
                    </div>
                    <div className="col-10 border rounded">
                        <p>World!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}