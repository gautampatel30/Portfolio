import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaAward } from "react-icons/fa";
import { FiPhone, FiSend } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import {
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiTerraform,
  SiJenkins,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { DiReact, DiAngularSimple, DiJava, DiJavascript1, DiMongodb, DiPostgresql, DiLinux } from "react-icons/di";
import newProfileImage from "../../assets/newProfileImage.jpg";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "emailjs-com";
import "../../index.css";

emailjs.init("jshu54FPX0dsvrVhR");

const Left = () => {
  const [isContactVisible, setContactVisible] = useState(false);
  const [downloadText, setDownloadText] = useState("Download CV");
  const [contactText, setContactText] = useState("Contact me");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const toggleContact = () => {
    setContactVisible(!isContactVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm("service_tmtt5lb", "template_y33dbh5", e.target, "jshu54FPX0dsvrVhR")
      .then(
        (result) => {
          setSendStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          setSendStatus("Failed to send message.");
          setSending(false);
        }
      );
  };

  const { ref: profileRef, inView: profileInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: nameRef, inView: nameInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: iconsRef, inView: iconsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: buttonsRef, inView: buttonsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const randomLetterEffect = (text, setText) => {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
    const speed = 15; // ms per frame
    const increment = 3; // frames per step, must be >2

    let clen = text.length;
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";

    (function rustle(i) {
      setTimeout(function () {
        if (--i) rustle(i);
        nextFrame(i);
        si = si + 1;
      }, speed);
    })(clen * increment + 1);

    function nextFrame(pos) {
      for (let i = 0; i < clen - stri; i++) {
        const num = Math.floor(theLetters.length * Math.random());
        const letter = theLetters.charAt(num);
        block = block + letter;
      }
      if (si === increment - 1) {
        stri++;
      }
      if (si === increment) {
        fixed = fixed + text.charAt(stri - 1);
        si = 0;
      }
      setText(fixed + block);
      block = "";
    }
  };

  const handleMouseEnterDownload = () => {
    randomLetterEffect("Download Resume", setDownloadText);
  };

  const handleMouseEnterContact = () => {
    randomLetterEffect("Contact me", setContactText);
  };

  useEffect(() => {
    if (buttonsInView) {
      randomLetterEffect("Download Resume", setDownloadText);
      randomLetterEffect("Contact me", setContactText);
    }
  }, [buttonsInView]);

  return (
    <div className="w-full lg:w-3/12 h-full bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-between relative">
      {/* Background blur overlay */}
      {isContactVisible && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}
      
      <div
        ref={profileRef}
        className={`relative mb-6 flex items-center justify-center transition-transform duration-1000 ${
          profileInView ? "transform scale-100" : "transform scale-0"
        }`}
      >
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden flex items-center justify-center">
            <img
              className="w-full h-auto aspect-square object-cover object-center"
              src={newProfileImage}
              alt="ProfileImage"
            />
          </div>
        </div>
      </div>
      <div
        ref={nameRef}
        className={`w-full flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
          nameInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-semibold">
          Gautam Patel
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-900 tracking-wide mt-2">
          <Typewriter
            words={[
              "DevOps Engineer",
              "Cloud Developer",
              "Full Stack Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={20}
          />
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://github.com/gautumpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 cursor-pointer text-xl sm:text-2xl text-gray-900 hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gautumpatel/"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 cursor-pointer text-xl sm:text-2xl text-blue-600 hover:text-black"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.credly.com/users/gautam-patel.df4acb52"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 cursor-pointer text-xl sm:text-2xl text-orange-500 hover:text-black"
          >
            <FaAward />
          </a>
          <a
            href="mailto:gautam@example.com"
            className="duration-300 cursor-pointer text-xl sm:text-2xl text-red-500 hover:text-red-700"
          >
            <AiOutlineMail />
          </a>
          <a
            href="tel:+1234567890"
            className="duration-300 cursor-pointer text-xl sm:text-2xl text-green-500 hover:text-green-700"
          >
            <FiPhone />
          </a>
        </div>
      </div>
      <div
        ref={iconsRef}
        className={`flex flex-wrap justify-center gap-4 mt-6 transition-opacity duration-1000 ${
          iconsInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <SiAmazonaws className="text-2xl sm:text-3xl text-[#FF9900] pulse-animation" />
        <SiMicrosoftazure className="text-2xl sm:text-3xl text-[#0078D4] pulse-animation" />
        <SiGooglecloud className="text-2xl sm:text-3xl text-[#4285F4] pulse-animation" />
        <SiTerraform className="text-2xl sm:text-3xl text-[#7A42F4] pulse-animation" />
        <SiJenkins className="text-2xl sm:text-3xl text-[#D24939] pulse-animation" />
        <SiDocker className="text-2xl sm:text-3xl text-[#0db7ed] pulse-animation" />
        <SiKubernetes className="text-2xl sm:text-3xl text-[#326ce5] pulse-animation" />
        <DiReact className="text-2xl sm:text-3xl text-cyan-500 pulse-animation" />
        <DiAngularSimple className="text-2xl sm:text-3xl text-red-600 pulse-animation" />
        <DiJava className="text-2xl sm:text-3xl text-red-600 pulse-animation" />
        <DiJavascript1 className="text-2xl sm:text-3xl text-yellow-500 pulse-animation" />
        <DiMongodb className="text-2xl sm:text-3xl text-green-600 pulse-animation" />
        <DiPostgresql className="text-2xl sm:text-3xl text-blue-600 pulse-animation" />
        <DiLinux className="text-2xl sm:text-3xl text-black pulse-animation" />
      </div>
      <div
        ref={buttonsRef}
        className={`w-full flex flex-col items-center mt-8 transition-opacity duration-1000 ${
          buttonsInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="/Gautam_Patel_Resume.pdf"
          download
          className="w-full mt-4 py-2 px-4 bg-gray-100 text-gray-700 font-semibold border border-gray-700 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out flex items-center justify-center gap-2"
          onMouseEnter={handleMouseEnterDownload}
        >
          <BsCloudLightningFill className="text-lg sm:text-xl" />
          {downloadText}
        </a>
        <button
          onClick={toggleContact}
          onMouseEnter={handleMouseEnterContact}
          className="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 font-semibold border border-gray-700 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out flex items-center justify-center gap-2"
        >
          <FiSend className="text-lg sm:text-xl" />
          {contactText}
        </button>
      </div>
      {isContactVisible && (
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-20">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="p-6 flex flex-col"
            >
              <h2 className="text-gray-800 text-lg sm:text-xl font-semibold mb-4">Send a Message</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="flex flex-col mt-4">
                {sending ? (
                  <button
                    type="button"
                    className="w-full py-2 px-4 bg-gray-100 text-gray-700 font-semibold border border-gray-700 rounded-lg shadow-md transition duration-300 ease-in-out"
                    disabled
                  >
                    Sending...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gray-100 text-gray-700 font-semibold border border-gray-700 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
                  >
                    Send
                  </button>
                )}
                <button
                  type="button"
                  className="w-full mt-4 py-2 px-4 bg-gray-100 text-gray-700 font-semibold border border-gray-300 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
                  onClick={toggleContact}
                >
                  Close
                </button>
              </div>
              {sendStatus && (
                <p
                  className={`mt-4 text-sm ${
                    sendStatus === "Message sent successfully!" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {sendStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Left;
