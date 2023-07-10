import React from 'react';
import image from '../../../assets/images/omar1.png'

const About = () => {
    return (
        <div style={{borderRadius: '0 100px 0px 100px'}} className='hero min-h-screen bg-[#737373] mb-4'>
            <div className='hero-content flex-col lg:flex-row'>
                <div className='lg:w-1/2 relative'>
                <img className='w-2/3 pl-12' src={image} alt="" />
                <div className='w-80 absolute right-5 top-1/3 bg-orange-500  text-white rounded-lg p-4'>
                    <div>
             
                    <h5>Name</h5>
                    <p>Omar Fauk</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                    <h5>Mail</h5>
                    <p>omarfauk8431@gmail.com</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                    <h5>Phone</h5>
                    <p>+88 01572 468512</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                    <h5>Address</h5>
                    <p>Sirajganj, Bangladesh</p>
                    </div>

                </div>
                </div>
                
                <div className='lg:w-1/2 space-y-5 p-4 w-3/6 mr-8'>
                    <h2 className='text-3xl font-bold text-orange-500 pb-2'>About Me</h2>
                    <h1 className='text-5xl font-bold text-white pb-4'>World leading Web <br /> designer</h1>
                    <p className='text-2xl pb-4'>I am Omar Faruk. I am a frond end developer. I can create web site with Javascript and React.</p>
                    <button className='bg-orange-500 w-60 p-1 text-white rounded-lg text-center text-lg' type="submit">DOWNLOAD RESUME</button>
                </div>
            </div>
        </div>

        
    );
};

export default About;