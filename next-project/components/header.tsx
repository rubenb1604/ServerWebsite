"use client";
import { IoMenu } from "react-icons/io5";

const Header = () => {





  return (
    <div className="text-white h-16 w-full bg-neutral-600 shadow-2xl flex items-center justify-between">
      <div className="flex items-center justify-between gap-2 ">
          <img src="/img/servericon.png" className="h-full" />
          <h1 className="text-6xl font-extrabold font-sans">SMP3</h1>
      </div>
      <div className="flex items-center justify-between gap-12 h-full">
          <div className="flex items-center justify-between gap-6  h-full">
              <h1 className="text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block">Home</h1>
              <h1 className="text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block">Server-Chat</h1>
              <h1 className="text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block">Discord</h1>
              <h1 className="text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block">Daten</h1>
          </div>
          <div className="h-full">
            <IoMenu className="h-full w-12 cursor-pointer"/>
          </div>
      </div>
    </div>
  );
};

export default Header;