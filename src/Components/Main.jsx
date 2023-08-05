import React, {useState,useEffect} from "react";
import "./../App.css";
import img from './../Image/biryani.webp'
import Dish from "./Dish";
const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
    .then(res=>res.json())
    .then(data=>setData(data.popularDishes))
  }, [])
  console.log(data)
  return (
    <div className="container p-3 ">
      <h4 className="fw-bold">Select Dishes</h4>
      <main className="padding_15">
        <div className="position-relative py-5 bg-dark">
          <div className="position-absolute p-3 w-85 card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i class="fa-solid fa-calendar-days"></i>
                <span className="ms-1 fw-bold">21 May 2021</span>
              </div>
              <div>
                <i class="fa-solid fa-clock"></i>
                <span className="ms-1 fw-bold">21 May 2021</span>
              </div>
            </div>
            {/* Jumbo button */}
            <div className="d-flex justify-content-between my-3 overflow-auto">
              <button
                type="button"
                class="btn btn-outline-warning btn-rounded"
                data-mdb-ripple-color="dark"
              >
                Italian
              </button>
              <button
                type="button"
                class="btn btn-outline-warning btn-rounded"
                data-mdb-ripple-color="dark"
              >
                Indian
              </button>
              <button
                type="button"
                class="btn btn-outline-warning btn-rounded"
                data-mdb-ripple-color="dark"
              >
                Indian
              </button>
              <button
                type="button"
                class="btn btn-outline-warning btn-rounded"
                data-mdb-ripple-color="dark"
              >
                Indian
              </button>
            </div>

            {/* Popular dishes */}
            <div>
              <h5 className="fw-bold">Popular Dishes</h5>
              <div className="d-flex justify-content-evenly">
                <img src={img} className="status_img" />
                <img src={img} className="status_img" />
                <img src={img} className="status_img" />
                <img src={img} className="status_img" />
                <img src={img} className="status_img" />

              </div>

            </div>
            <hr />
            {/* Recommended Dishes */}
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">Recommended</h5>
                <button style={{borderRadius:10+'px'}} type="button" class="btn btn-dark">Menu</button>

              </div>
              <div>
                  {data.map(ele=><Dish key={ele.id} id={ele.id} name={ele.name} img={ele.image} />)}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
