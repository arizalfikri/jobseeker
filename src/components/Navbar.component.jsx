import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="container row py-4 mx-auto align-items-center justify-content-between">
      <div className="col col-lg-2">
        <img src={logo} alt="logo-jobseeker" />
      </div>
      <div className="col col-lg-2">
        <button className="btn-base py-2 text-md w-75">Login</button>
      </div>
    </div>
  );
}
