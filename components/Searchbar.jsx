export default function Searchbar() {
    return (
        <div className="container-fluid mx-auto">
            <div className="input-group mb-3">
                <form className="form-floating">
                    <input type="text" className="form-control" id="basic-url" placeholder="Search..." aria-describedby="basic-addon3 basic-addon4" defaultValue=""/>
                    <label htmlFor="basic-url">Search...</label>
                </form>
                <span className="input-group-text" id="basic-addon3">Lupa</span>
            </div>
        </div>
    )
}