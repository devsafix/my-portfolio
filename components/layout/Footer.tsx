"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0 ">
          <h4 className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
            <Link
              href="https://wa.me/8801709190412"
              target="_blank"
              className="font-semibold text-red-700 md:pt-0 pt-3"
            >
              @devsafix
            </Link>
          </h4>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h4 className="text-sm md:text-base">
            Made With <span className="text-red-700">❤️</span> by{" "}
            <span className="font-semibold">Kawser</span>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
