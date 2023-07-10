import React from "react";
import react from "../../../assets/images/React-icon.svg.png";
import java from "../../../assets/images/JavaScript.png";
import bootstrap from "../../../assets/images/bootstrap.jpg";
import css from "../../../assets/images/css-3.svg";
import html from "../../../assets/images/html5.png";
import material from "../../../assets/images/material-ui.png";
import tailwind from '../../../assets/images/tailwind..png';
import { Link } from "react-router-dom";

const Frontend = () => {
  return ( 
      <div style={{borderRadius: '0 100px 0px 100px'}} className="bg-zinc-500 p-12 mb-4 ">
        <h2 className="text-6xl text-white pb-6">Programming Skill</h2>
        <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/all">All</Link></button>
        <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/frontend">Frontend</Link></button>
        <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/backend">Backend</Link></button>
            <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/tools">Tools</Link></button>

        <div className="grid md:grid-cols-6 gap-4 p-4 text-center">
        <div className="border w-40 p-6">
          <img className="w-24" src={react} alt="" />
          <p className="text-xl">react icon</p>
        </div>
        <div className="border w-40 p-6">
          <img className="w-24" src={java} alt="" />
          <p className="text-xl">javascript</p>
        </div>
        <div className="border w-40 p-6">
          <img className="w-24" src={bootstrap} alt="" />
          <p className="text-xl">bootstrap 5</p>
        </div>
        <div className="border w-40 p-6">
          <img className="w-24" src={css} alt="" />
          <p className="text-xl">css3</p>
        </div>
        <div className="border w-40 p-6">
          <img className="w-24" src={html} alt="" />
          <p className="text-xl">html5</p>
        </div>
        <div className="border w-40 p-6">
          <img className="w-24" src={material} alt="" />
          <p className="text-xl">material ui</p>
        </div>
        <div className="border w-40 p-6">
        <img className="w-24" src={tailwind} alt="" />
        <p className="text-xl">tailwind css</p>
        </div>
      </div>
      </div>
  );
};

export default Frontend;
