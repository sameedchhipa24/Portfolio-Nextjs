import { Award, CircleUserRound, FilePlus2 } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div className="md:flex block justify-evenly  space-y-5 md:space-y-0 items-center max-w-screen-xl md:rounded-[4rem]  w-full h-full p-5 mx-auto md:bg-slate-700 md:border-2 border-slate-600 border-solid text-slate-100 text-3xl md:text-2xl text-center md:text-start">
      <div className="md:flex items-center">
        <Award className="bg-yellow-400 rounded p-1 md:mx-2 mx-auto my-8 md:my-0" size={50} />
        <div>
          <h1 >1 Year+</h1>
          <p className="text-[#4091b6] font-bold italic">Hands On Experience</p>
        </div>
      </div>

      <div className="md:flex items-center ">
        <div>
        <FilePlus2 className="bg-yellow-400 rounded p-1 md:mx-2 mx-auto my-8 md:my-0" size={50} />
        </div>
        <div>
          <h1>10+ Projects</h1>
          <p className="text-[#4091b6] font-bold italic">Completed</p>
        </div>
      </div>

      <div className="md:flex items-center">
        <CircleUserRound className="bg-yellow-400 rounded p-1 md:mx-2 mx-auto my-8 md:my-0" size={50} />
        <div>
          <h1>Support</h1>
          <p className="text-[#4091b6] font-bold italic">Online 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
