import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Pradhumnya.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl">Kalsait  P. C.</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right Section */}
       
        <div className="w-full lg:w-1/2 lg:p-8">
  <div className="flex justify-center">
    <img className="h-128 object-cover" src={profilePic} alt="profile" />
  </div>
</div>


      </div>
    </div>
  );
};

export default Hero;
