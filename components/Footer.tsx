import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10 mb-[100px]" id="contact">
      {/* Contact CTA */}
      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:sandhue098@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2025 Eric Sandhu. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.name}
              className="w-10 h-10 flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-transform hover:scale-105"
            >
              <img src={info.img} alt={info.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
