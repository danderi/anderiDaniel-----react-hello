import React from "react";

//create your first component
const Navbar = () => {
    return (
        <div >
            <nav className="navbar bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://cdn-icons-png.flaticon.com/512/263/263100.png" alt="Bootstrap" width="30" height="24" />
                    </a>
                    <ul>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
