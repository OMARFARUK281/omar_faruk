import React from "react";
import NavBar from "../Page/Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const Main = () => {
  return (
    <div>
      {<NavBar></NavBar>}
      <Outlet></Outlet>
      {<Footer></Footer>}


      <div className="App">
    <AnimatedCursor
      innerSize={10}
      outerSize={90}
      color='193, 88, 222'
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>

    </div>
  );
};

export default Main;
