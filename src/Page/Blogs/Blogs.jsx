import React from "react";
import blogs1 from '../../assets/images/blogs.png';
import blogs2 from '../../assets/images/blogs2.png';
import blogs3 from '../../assets/images/blogs3.png';

const Blogs = () => {
  return (
    <div style={{borderRadius: '100px 0px 100px 0px'}} className=" bg-[#737373] text-neutral-content mb-4 p-12">
        <h2 className="text-5xl text-white pb-6">Blogs</h2>

      <div className="grid md:grid-cols-3 gap-12 p-4 text-center">
      <div className="card w-96 border">
        <div>
          <div className="pr-6 pl-2 pt-2">
            <img src={blogs1} alt="Shoes" className="rounded-xl" />
          </div>
          <div className="card-body text-left">
            <h2 className="card-title">javascript</h2>
            <div>
              <button className="btn bg-orange-600">coming soon</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 border">
        <div>
          <div className="pr-6 pl-2 pt-2">
            <img src={blogs2} alt="Shoes" className="rounded-xl" />
          </div>
          <div className="card-body text-left">
            <h2 className="card-title">react js</h2>
            <div>
              <button className="btn bg-orange-600">coming soon</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 border">
        <div>
          <div className="pr-6 pl-2 pt-2">
            <img src={blogs3} alt="Shoes" className="rounded-xl" />
          </div>
          <div className="card-body text-left">
            <h2 className="card-title">node js</h2>
            <div>
              <button className="btn bg-orange-600">coming soon</button>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Blogs;
