import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({ metadata }) {
    return (
        <nav className="navbar p-3 border-bottom bg-light sticky-top">
            <div className="container justify-content-lg-between justify-content-center">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        {metadata.title}
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link href="#" className="nav-link px-2 link-secondary">Overview</Link></li>
                        <li><Link href="#" className="nav-link px-2 link-body-emphasis">Commerces</Link></li>
                        <li><Link href="/admin" className="nav-link px-2 link-body-emphasis">Admin</Link></li>
                    </ul>

                    
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>

                    <div className="dropdown text-end">
                        <Link href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <img src="/images/default_pfp.png" alt="Not signed in" width="32" height="32" className="rounded-circle"/> */}
                            <Image src="/images/default_pfp.png" alt="Not signed in" width="32" height="32" className="rounded-circle" />
                        </Link>
                        <ul className="dropdown-menu text-small">
                            <li><Link className="dropdown-item" href="#">Profile</Link></li>
                            <li><Link className="dropdown-item" href="#">Settings</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" href="/login">Log in</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}