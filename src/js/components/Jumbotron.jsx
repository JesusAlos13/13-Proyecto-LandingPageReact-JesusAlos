import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 mt-4 mx-4 bg-light ">
            <div className="container-fluid  text-center">
                <h1 className="display-2 fw-bold">A Warm Welcome!</h1>
                <p className="fs-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, velit a quaerat deleniti blanditiis facere reiciendis cumque!</p>
                <button className="btn btn-warning btn-lg mb-4" type="button">Call to action!</button>
            </div>
        </div>
    );
};

export default Jumbotron;