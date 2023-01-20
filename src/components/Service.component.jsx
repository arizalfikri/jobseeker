import one from "../assets/one.png";
import two from "../assets/two.png";
import tree from "../assets/tree.png";
import arrow from "../assets/arrow.png";

export default function Service() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col col-6 d-flex justify-content-end px-5">
          <img
            src={one}
            className="object-fit-contain"
            alt="img-candidate"
            width={400}
          />
        </div>
        <div className="col col-6 d-flex justify-content-center">
          <div>
            <h3>High Quality Candidates</h3>
            <h5 className="text-soft mt-3">
              Get more high quality candidates faster and at <br /> lower cost
              per hire
            </h5>
            <h6 className="text-base fw-bold mt-3 d-flex gap-2 align-items-center pointer">
              Get Started
              <span>
                <img src={arrow} alt="arrow" width={18} />
              </span>
            </h6>
          </div>
        </div>
      </div>
      <div className="row align-items-center mt-5">
        <div className="col col-6 d-flex justify-content-center">
          <div>
            <h3>Saved Talent Pool</h3>
            <h5 className="text-soft mt-3">
              Boost employer brand and build your own talent <br /> pool
            </h5>
            <h6 className="text-base fw-bold mt-3 d-flex gap-2 align-items-center">
              Get Started
              <span>
                <img src={arrow} alt="arrow" width={18} />
              </span>
            </h6>
          </div>
        </div>
        <div className="col col-6 d-flex justify-content-start px-5">
          <img
            src={two}
            className="object-fit-contain"
            alt="img-candidate"
            width={500}
          />
        </div>
      </div>
      <div className="row align-items-center mt-5">
        <div className="col col-6 d-flex justify-content-end px-5">
          <img
            src={tree}
            className="object-fit-contain"
            alt="img-candidate"
            width={500}
          />
        </div>
        <div className="col col-6 d-flex justify-content-center">
          <div>
            <h3>
              Automated hiring Process & <br /> Insights
            </h3>
            <h5 className="text-soft mt-3">
              Leverage insights from automated hiring <br /> process to win the
              war for talent
            </h5>
            <h6 className="text-base fw-bold mt-3 d-flex gap-2 align-items-center pointer">
              Get Started
              <span>
                <img src={arrow} alt="arrow" width={18} />
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
