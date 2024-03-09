import React from "react";

//create your first component
const Footer = () => {
    return (
        <div >
            <nav className="navbar light" style={{ background: "yellow" }}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png" alt="Bootstrap" width="30" height="24"/>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Footer;