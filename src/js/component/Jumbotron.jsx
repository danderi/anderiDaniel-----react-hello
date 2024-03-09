import React from "react";

//create your first component
const Jumbotron = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header" style={{ background: "blue", color: "white" }}>
                    Los Simpsons
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Homero y sus fases...</h5>
                    <p className="card-text">Estas son algunas de las fases de Homero Simpson</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
