import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="container row mx-auto align-items-center justify-content-end">
      <div className="col col-5">
        <h1>
          We help you
          <br />
          <span className="fw-bold">Build your job portal</span>
        </h1>
        <p className="mt-4">
          Why use third party when you can build your own, customizable job
          portal for your specific requirements
        </p>
      </div>
      <div className="col col-7">
        <img src={hero} alt="hero" className="w-100" />
      </div>
    </div>
  );
}
