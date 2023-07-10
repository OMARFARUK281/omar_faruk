import React from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

const Service = () => {
  return (

     <div>
     <div style={{borderRadius: '100px 0px 100px 0px'}} className=" bg-[#737373] text-neutral-content mb-4 p-12">
     <h3 className="text-5xl text-white">Service</h3>

        <div className="grid md:grid-cols-3 gap-4 p-4 text-center">
        <div className="card-body items-center text-center border">

            <div className="bg-orange-500 rounded-full">
            <FaHtml5 className="text-7xl text-white  p-4"></FaHtml5>
            </div>
          <h2 className="card-title">HTML 5</h2>
          <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation.</p>

        </div>
        <div className="card-body items-center text-center border">
        <div className="bg-orange-500 rounded-full">
            <FaCss3 className="text-7xl text-white  p-4"></FaCss3>
            </div>
          <h2 className="card-title">CSS 3</h2>
          <p>The biggest advantage of CSS is that it allows the separation of style and layout from the content of the document. Here are some more advantages, why one should start using CSS?</p>

        </div>
        <div className="card-body items-center text-center border">
        <div className="bg-orange-500 rounded-full">
            <FaBootstrap className="text-7xl text-white  p-4"></FaBootstrap>
            </div>
          <h2 className="card-title">Bootstrap 5</h2>
          <p>Bootstrap is a powerful front-end framework for faster and easier web development. It includes HTML and CSS based design templates for creating common user interface components like forms, buttons..</p>

        </div>
        <div className="card-body items-center text-center border">
        <div className="bg-orange-500 rounded-full">
            <FaJs className="text-7xl text-white  p-4"></FaJs>
            </div>
          <h2 className="card-title">Javascript</h2>
          <p>JavaScript is the most popular and widely used client-side scripting language. Client-side scripting refers to scripts that run within your web browser. JavaScript is designed to...</p>

        </div>
        <div className="card-body items-center text-center border">
        <div className="bg-orange-500 rounded-full">
            <FaReact className="text-7xl text-white  p-4"></FaReact>
            </div>
          <h2 className="card-title">React js</h2>
          <p>People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach..</p>

        </div>
        <div className="card-body items-center text-center border">
        <div className="bg-orange-500 rounded-full">
            <FaNodeJs className="text-7xl text-white  p-4"></FaNodeJs>
            </div>
          <h2 className="card-title">Node js</h2>
          <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code</p>

        </div>
        </div>
        
      </div>
     </div>
  );
};

export default Service;
