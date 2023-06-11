import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100084241113260&mibextid=ZbWKwL"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a href="https://github.com/usmanrehmani126" className="bannerIcon">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/usman-akram-2b89ab261/"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/alonecoding?igshid=ZDc4ODBmNjlmNQ=="
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 my-3">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media