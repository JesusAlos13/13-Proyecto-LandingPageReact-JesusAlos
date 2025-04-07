import React from "react";

const Card = (props) => {
    const { image, title, description } = props.cards;
    return (
        <div className="card" style={{ margin: '10px', borderRadius: '100px'}}>
            <img src={image} className="cardImg" style={{ objectFit: 'cover', height: '300px' }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-danger">Find Out More</a>
            </div>
        </div>
    );
};




export default Card;