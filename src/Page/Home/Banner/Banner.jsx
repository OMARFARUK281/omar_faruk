import React from "react";
import '../Banner/Banner.css'
import image from "../../../assets/images/omar1.png";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {

  return (
    <div>
      <div style={{ borderRadius: "100px 0px 100px 0px" }} className="h-96 bg-rose-900 py-4 mb-4">
        <div className="flex justify-between">
          <div className="h-60 pt-14">
            <span className="text-xl pl-12 text-white font-bold">
              I'm <br />
            </span>
            <h1 className="text-4xl font-bold pl-12 text-white pb-6">
              OMAR <br /> FARUK
            </h1>


            <div className="pl-12 text-white text-2xl">
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  'Web Designer.',
                  1000,
                  'Front End Developer.',
                  1000,
                  'React Developer.',
                  1000,
                ]}
                  speed={50}
                  style={{ fontSize: '2em' }}
                  repeat={Infinity}/>
             </div>              

            <div className="flex pl-12 p-6">
              <a href="https://www.facebook.com/profile.php?id=100005477716236">
                <FaFacebookSquare className="text-4xl mr-2 text-white rounded-full"></FaFacebookSquare>
              </a>
              <a href="https://www.linkedin.com/in/omar-faruk-0126781b8/">
                <FaLinkedin className="text-4xl mr-2 text-white rounded-full"></FaLinkedin>
              </a>

              <a href="https://www.instagram.com/of.omar_faruk/">
                <div>
                  <FaInstagramSquare className="text-4xl text-white rounded-full"></FaInstagramSquare>
                </div>
              </a>
            </div>
          </div>
          <div className="pr-32">
            <img className="w-56 rounded" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
