import React from 'react';
import nodejs from '../../../assets/images/nodejs.png';
import express from '../../../assets/images/express.jpg';
import mongodb from '../../../assets/images/mongodb.png';

import { Link } from 'react-router-dom';

const Backend = () => {
    return (
        <div style={{borderRadius: '0 100px 0px 100px'}} className="bg-zinc-500 p-12 mb-4 ">
            <h2 className="text-6xl text-white pb-6">Programming Skill</h2>
            <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/all">All</Link></button>
            <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/frontend">Frontend</Link></button>
            <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/backend">Backend</Link></button>
            <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/tools">Tools</Link></button>
            
        <div className="grid md:grid-cols-6 gap-4 p-4 text-center">        

        
        <div className="border w-40 p-6">
        <img className="w-24" src={nodejs} alt="" />
        <p className="text-xl">node js</p>
        </div>
        <div className="border w-40 p-6">
        <img className="w-24" src={express} alt="" />
        <p className="text-xl">express js</p>
        </div>
        <div className="border w-40 p-6">
        <img className="w-24" src={mongodb} alt="" />
        <p className="text-xl">mongodb</p>
        </div>
      </div>
        </div>
    );
};

export default Backend;