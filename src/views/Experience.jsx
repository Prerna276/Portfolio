import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
      // style={{backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`}}>
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="Experience"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Experience
        </h2>
        <div className="">
          <h4 className="mt-8 text-3xl font-semibold text-blue-500 items-center">
            Where Have I Contributed
          </h4>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center">


            {serviceData.map((el) => (
              <div style={{}}>
                <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className={
                  theme.state.darkMode
                    ? "md:w-128 p-4 h-128 bg-white rounded-lg flex items-center flex-col m-4"
                    : "md:w-128 p-4 bg-gray-100 rounded-lg flex items-center flex-col m-4"
                }
              >
                <img src={el.img} alt="" className="w-32 h-auto mx-auto" />
                <h4 className="text-xl font-bold mt-4">{el.name}</h4>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",gap:"2em" }}>
                  <h3 className="text-xl">{el.designation}</h3>
                  <h1 className="text-xl" style={{ marginLeft: "auto",fontSize:"medium" }}>{el.timeline}</h1>
                </div>
                <p className="text-lg mt-2 text-justify">{el.desc}</p>
              </motion.div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
