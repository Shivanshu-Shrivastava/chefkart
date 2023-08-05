import React from "react";
import { Link } from "react-router-dom";
const Dish = ({id, name, img }) => {
  return (
    <Link to={`dish/${id}`} className="card shadow-0 my-3 ">
      <div className="row flex g-0 mx-auto">
        <div className="col-md-5">
          <div className="card-body">
            <div className="d-flex justify-content- align-items-center">
            <h5 className="card-title text-dark">{name}</h5>

              <a
                className="text-white px-3 ms-2"
                style={{backgroundColor:'#25d366',borderRadius:7+'px'}}
              >
                4.2 

              </a>
            </div>

            <p className="card-text text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, quidem?
            </p>
          </div>
        </div>
        <div className="col-md-4 ms-auto">
          <img
            style={{ borderRadius: 10 + "px" }}
            className="img-fluid shadow-sm"
            src={img}
            alt={name}
          />
        </div>
      </div>
    </Link>
  );
};

export default Dish;
