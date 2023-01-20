import logo from "../assets/logo-in-footer.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import li from "../assets/li.svg";
import tt from "../assets/tt.svg";
import yt from "../assets/yt.svg";
import tg from "../assets/tg.svg";
import mail from "../assets/mail.svg";
import wa from "../assets/wa.svg";

export default function Footer() {
  const logoSosmed = [fb, ig, li, tt, yt, tg];
  return (
    <div className="bg-dark text-white">
      <div className="container">
        <img
          src={logo}
          alt="logo-jobseeker"
          className="object-fit-contain py-5"
        />
        <div className="row justify-content-between">
          <div className="col d-flex flex-column gap-4">
            <div className="col">
              <p className="fw-semibold">
                INDONESIA <br />
                Jakarta <br />
                <span className="fw-normal">
                  AD Premier Office Park, 9th Floor <br /> Jl. TB Simatupang
                  No.5, Ragunan, Pasar Minggu <br /> South Jakarta City, Jakarta
                  12550
                </span>
              </p>
              <p className="fw-semibold">
                Bali <br />
                <span className="fw-normal">
                  Jl. Karang Mas, Jimbaran, South Kuta <br /> Kabupaten Badung,
                  Bali, 80361
                </span>
              </p>
              <p className="fw-semibold">
                SINGAPORE <br />
                <span className="fw-normal">
                  10 Anson Road #22-02 International Plaza,
                  <br /> Singapore, 079903
                </span>
              </p>
            </div>
            <div className="col">
              <div className="d-flex flex-row gap-2">
                <img src={mail} alt="mail" width={20} height={20} />
                <p>info@jobseeker.company</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <img src={wa} alt="wa" width={20} height={20} />
                <span>+62 813 1881 7887</span>
              </div>
              <div className="d-flex w-25 mt-3 flex-row gap-4">
                {logoSosmed.map((el, i) => (
                  <div className="col" key={i}>
                    <img
                      src={el}
                      alt="icon-sosmed"
                      className="object-fit-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mx-auto">
              <ul className="list-group col">
                <li className="list-group-item border-0 bg-dark text-white fw-semibold">
                  FOR EMPLOYERS
                </li>
                <li className="list-group-item border-0 bg-dark text-white">
                  jobseeker.partners
                </li>
                <li className="list-group-item border-0 bg-dark text-white">
                  jobseeker.services
                </li>
                <li className="list-group-item border-0 bg-dark text-white">
                  jobseeker.software
                </li>
              </ul>
              <ul className="list-group col">
                <li className="list-group-item border-0 bg-dark text-white fw-semibold">
                  FOR CANDIDATE
                </li>
                <li className="list-group-item border-0 bg-dark text-white">
                  jobseeker.app
                </li>
              </ul>
            </div>
          </div>
          <div className="border-top mt-4 px-0 py-2 d-flex flex-row justify-content-between fs-7">
            <div className="col">
              <p>Copyright © 2022 JobSeekerApps Pte. Ltd</p>
            </div>
            <div className="d-flex flex-row gap-4">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
