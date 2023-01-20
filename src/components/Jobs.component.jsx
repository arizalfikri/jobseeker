import axios from "axios";
import e from "cors";
import { useEffect } from "react";
import { useState } from "react";
import iconsearch from "../assets/search.png";

export default function Jobs({ data, setData }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/job?search_query=${search}`)
      .then((res) => setData(res?.data.jobs))
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-10">
      <div className="my-8">
        <h1 className="text-center">Search any jobs for You!</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="position-relative w-50 mt-4 mx-auto">
            <input
              type="text"
              placeholder="Position, City or Company Name"
              className="shadow-base w-100 fs-5 py-4"
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              src={iconsearch}
              alt=""
              className="search"
              width={60}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-4 d-flex justify-content-center">
            <div>
              <h5>AVAILABLE JOBS</h5>
              <div className="mt-5">
                <p>Top 5 Locations</p>
                <ul className="list-group">
                  <li className="list-group-item border-0">Jakarta</li>
                  <li className="list-group-item border-0">Surabaya</li>
                  <li className="list-group-item border-0">Bali</li>
                  <li className="list-group-item border-0">Tanggerang</li>
                  <li className="list-group-item border-0">Bandung</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-8 d-flex flex-column gap-6">
            {data.map((el, i) => (
              <div className="d-flex justify-content-between" key={i}>
                <div>
                  <h4 className="fw-bold">{el?.job_position}</h4>
                  {/* <p>{el?.company_name}</p> */}
                  <p className="d-flex gap-4 mt-4 text-blur">
                    Requirements:
                    <span className="text-soft">{el?.requitments}</span>
                  </p>
                  <p className="d-flex gap-4 mt-4 text-blur">
                    Salary:
                    <span className="text-soft">{el?.salary}</span>
                  </p>
                  <br />
                  <p className="fst-italic text-blur">Posted 10 mins ago</p>
                </div>
                <div className="d-flex flex-column justify-content-between w-25">
                  <h5 className="text-end text-location">{el?.city_name}</h5>
                  <button className="btn-base w-100 py-2 fw-bold">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
            <form action="https://jobseeker.software/job">
              <button className="btn-base fw-bold py-2 w-100">
                See all vacancies
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
