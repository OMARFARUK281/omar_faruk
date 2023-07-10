import React from "react";
import {   FaInbox, FaLocationArrow, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <form style={{borderRadius: '0px 100px 0px 100px'}} className="footer p-10 mb-2 bg-[#737373] text-white ">
        <div>   
            <h3 className="text-3xl">Contact</h3>
            <h1 className="text-5xl font-bold">Contact me to get<br />your work done</h1>
          <div>
           
          <div className="pt-6 flex pb-4">
            <div className="bg-orange-500 text-6xl rounded-full">
            <FaPhone className="text-4xl m-4"></FaPhone>
            </div>
            <div className="pl-6">
            <p className="text-3xl">Call Me</p>
            <p className="text-2xl">+88 01572 468512</p>
            </div>
          </div>

          <div className="flex pb-4">
            <div className="bg-orange-500 text-6xl rounded-full">
            <FaInbox className=" text-4xl m-4"></FaInbox>
            </div>
            <div className="pl-6">
            <p className="text-3xl">Email Us</p>
            <p className="text-2xl">omarfaruk8431@gmail.com</p>
            </div>
          </div>

          <div className="flex">
           <div className="bg-orange-500 text-6xl rounded-full">
           <FaLocationArrow className="text-4xl m-4"></FaLocationArrow>
           </div>
          <div className="pl-6">
            <p className="text-3xl">Address</p>
            <p className="text-2xl">Sirajganj, Bangladesh</p>
          </div>
          </div>
          </div>

        </div>
        <div className="pt-16">
          <input type="text" placeholder="name" required="" className="input w-96 bg-black border-red-50" />
          <input type="text" placeholder="email" className="input bg-black border-red-50 w-96" />
          <input type="number" placeholder="phone" className="input bg-black border-red-50 w-96" />
          <textarea className="w-96 bg-zinc-400 border-red-50" name="message" id="" cols="30" rows="6"></textarea>
          <button type="submit" className="bg-orange-500 text-xl border w-40 p-2">Submit Query</button>
          <div className="grid grid-flow-col gap-4">
          </div>
        </div>
      </form>
    </div>
  );
};

export default Footer;
