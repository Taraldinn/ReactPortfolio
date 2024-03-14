import Header from "./Header/Header.jsx";
import About from "./About/About.jsx";
import Exp from "./Experience/Exp.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";

function Body() {
    return (
      <>
          <div>
              <div className=" ">

                  <div className=" ">
                      <Header/>
                      <About/>
                      <Exp/>
                      <Projects/>
                      <Footer/>


                  </div>


              </div>
              <div className="mx-auto max-w-5xl mt-20">


              </div>

          </div>


      </>
    );
}

export default Body;