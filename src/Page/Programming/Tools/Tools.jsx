import React from 'react';
import vsCode from '../../../assets/images/visual.png';
import github from '../../../assets/images/github.jpg';
import firebase from '../../../assets/images/firebase.jpg';
import heroku from '../../../assets/images/heroku.jpg';
import netlify from '../../../assets/images/netlify.png';
import git from '../../../assets/images/Git.png';

import { Link } from 'react-router-dom';

const Tools = () => {
    return (
        <div style={{borderRadius: '0 100px 0px 100px'}} className="bg-zinc-500 p-12 mb-4 ">
            <h2 className="text-6xl text-white pb-6">Programming Skill</h2>
             <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/all">All</Link></button>
            <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/frontend">Frontend</Link></button>
            <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/backend">Backend</Link></button>
            <button className="text-2xl p-2 mr-2 bg-orange-600 text-white rounded"><Link to="/tools">Tools</Link></button>

        <div className="grid md:grid-cols-6 gap-4 p-4 text-center">
        <div className="border w-40 p-6">
        <img className="w-24" src={vsCode} alt="" />
        <p className="text-xl">vs code</p>
        </div>
        <div className="border w-40 p-6">
        <img className="w-24" src={github} alt="" />
        <p className="text-xl">github</p>
        </div>
        <div className="border w-40 p-6">
        <img className="w-24" src={firebase} alt="" />
        <p className="text-xl">firebase</p>
        </div>
        <div className="border w-40 p-6">
        <img className="w-24" src={heroku} alt="" />
        <p className="text-xl">heroku</p>
        </div>
        <div className="border w-40 p-6">
        <img className="w-24" src={netlify} alt="" />
        <p className="text-xl">netlify</p>
        </div>
        <div className="border w-40 p-6">
        <img className="w-24" src={git} alt="" />
        <p className="text-xl">git</p>
        </div>
        </div>
        </div>
    );
};

export default Tools;