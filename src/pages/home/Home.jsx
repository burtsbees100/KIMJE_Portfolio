import { useEffect, useState } from "react";
import "./style.scss";
import About from "../../components/about/About";
import Contact from "../../components/footer/Contact";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Project from "../../components/project/Project";
import TopButton from "../../components/common/TopButton";

const Main = () => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(true);
  }, []);

  return (
    <section className={`home ${entered ? "entered" : ""}`}>
      <Header />
      <Hero />
      <About />
      <div className="section-divider" />
      <Project />
      <Contact />
      <TopButton />
    </section>
  );
};

export default Main;
