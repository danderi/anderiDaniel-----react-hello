import React from "react";

//create your first component
const Card = (props) => {
    return (
        <div>
            {props.cards.map((card, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={card.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;