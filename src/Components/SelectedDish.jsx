import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img from './../Image/fridge.jpg'
const SelectedDish = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
    )
      .then((res) => res.json())
      .then((data) => setData(data.popularDishes.find((ele) => ele.id == id)));
  }, []);

  return (
    <div className="container  p-3 p-md-5">
      <div className="row flex g-0 mx-auto">
        <div className="col-md-5">
          <div className="card-body">
            <div className="d-flex justify-content- align-items-center">
              <h2 className="fw-bold">{data.name}</h2>

              <a
                className="text-white px-2 ms-2"
                style={{ backgroundColor: "#25d366", borderRadius: 7 + "px" }}
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
            src={data.image}
            alt={data.name}
          />
        </div>
      </div>
      <h4 className="fw-bold">Ingredients</h4>
      <p className="text-muted">For 2 people</p>
      <div className="padding_15">
        <h6>Vegetables (05)</h6>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <span className="text-muted">Caulliflower</span>
            <span className="text-muted">01 pc</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">Caulliflower</span>
            <span className="text-muted">01 pc</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">Caulliflower</span>
            <span className="text-muted">01 pc</span>
          </div>
        </div>
      </div>
      <div className="padding_15 my-4">
        <h6>Spices (10)</h6>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <span className="text-muted">Caulliflower</span>
            <span className="text-muted">01 pc</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">Caulliflower</span>
            <span className="text-muted">01 pc</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">Caulliflower</span>
            <span className="text-muted">01 pc</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="fw-bold">Appliances</h4>
        <div className="d-flex justify-content-between padding_15 ">
          <img src={img} width='100' height='100' />
          <img src={img} width='100' height='100' />
          <img src={img} width='100' height='100' />
        </div>

      </div>
    </div>
  );
};

export default SelectedDish;
