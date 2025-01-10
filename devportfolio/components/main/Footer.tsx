import React from "react";
import {
  RxGithubLogo,
  RxChatBubble,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    // <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 bg-opacity-80 text-gray-200 shadow-lg p-[15px]">
        <div style={{background: 'linear-gradient(to bottom, rgb(0, 0, 0), rgba(62, 9, 112, 0.53))'}} className="w-full h-full text-gray-200 shadow-lg p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Connect With Me</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer gap-3">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]"> GitHub</span>    
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]"> Linkedin</span>    
                        <RxChatBubble />
                  <span className="text-[15px] ml-[6px]"> Mail</span>
                  </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Rohan Venkatesha 2024. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer