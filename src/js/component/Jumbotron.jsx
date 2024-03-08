import React from "react";

//create your first component
const Jumbotron = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    JUMBOTRON
                </div>
                <div className="card-body">
                    <h5 className="card-title">Titulo del Jumbotron</h5>
                    <p className="card-text">texto o descripcion en el Jumbotron</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
