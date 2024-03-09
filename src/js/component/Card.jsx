import React from "react";

//create your first component
const Card = (props) => {
    return (
        <div className="d-flex justify-content-between gap-3">
            {props.cards.map((card, index) => (
                <div key={index} className="card mb-3" style={{ width: "19rem", marginBottom: "20px" }}>
                    <img src={card.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                        <a href="#" className="btn btn-primary">
                            I Love Homer
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;