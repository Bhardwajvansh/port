import Header from "./Components/header/header";
import Nav from "./Components/nav/nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/footer/Footer";
import Contact from "./Components/Contact/Contact";
import Testi from "./Components/testi/testi";
import Port from "./Components/port/port";
import Services from "./Components/Services/Services";
function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Services />
      <Port />
      <Testi />
      <Contact />
      <Footer />
      <Nav />
    </>
  );
}

export default App;
