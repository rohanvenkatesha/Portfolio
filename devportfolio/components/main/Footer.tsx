import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaReact } from "react-icons/fa";  // React Icon
import { SiNextdotjs } from "react-icons/si";  // Next.js Icon
import { SiFramer } from "react-icons/si";  // Framer Motion Icon
import { SiTypescript } from "react-icons/si";  // TypeScript Icon
import { MdMail } from "react-icons/md";  // Mail Icon

const Footer = () => {
  return (
    <div
      id="contact"
      style={{
        background: 'linear-gradient(to bottom, rgb(0, 0, 0), rgba(62, 9, 112, 0.53))',
      }}
      className=" montserrat-reg w-full h-auto text-gray-200 shadow-lg p-[15px] relative bottom-0 left-0"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-center gap-10 flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer gap-5">
              {/* GitHub Link */}
              <a
                href="https://github.com/rohanvenkatesha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/rohan-venkatesha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </a>

              {/* Mail Link */}
              <a
                href="mailto:rohanvenkatesha@gmail.com"
                className="flex items-center"
              >
                <MdMail />
                <span className="text-[15px] ml-[6px]">Mail</span>
              </a>
            </p>
          </div>
        </div>

        <div className="cursive mb-[20px] text-[15px] text-center">
          &copy; Designed and Developed by Rohan Venkatesha
        </div>

        {/* Icons below "Designed and Developed by Rohan Venkatesha" */}
        <div className="w-full flex flex-row items-center justify-center gap-8">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl"
          >
            <SiNextdotjs />
          </a>

          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl"
          >
            <SiFramer />
          </a>

          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl"
          >
            <FaReact />
          </a>

          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl"
          >
            <SiTypescript />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
