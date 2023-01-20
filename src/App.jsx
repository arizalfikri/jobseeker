import Navbar from "./components/Navbar.component";
import Hero from "./components/Hero.component";
import About from "./components/About.component";
import Service from "./components/Service.component";
import Jobs from "./components/Jobs.component";
import Footer from "./components/Footer.component";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/job")
      .then((res) => setData(res?.data.jobs))
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Jobs data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
