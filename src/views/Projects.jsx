import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { contactLinks } from "../constants";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">

          <Card title = 'User Authentication System' 
          summary = 'This backend feature was engineered to enable seamless user authentication via Google, Facebook, GitHub, and Twitter accounts. Developed with Node.js and Express.js, it leverages the robust Passport.js library to provide secure and efficient authentication across multiple platforms.'
          github_link = 'https://github.com/Prerna276/Authentication'
          github_url = 'https://img.icons8.com/doodle/40/000000/github--v1.png'
          imagesrc = 'https://media.istockphoto.com/id/1226932404/vector/password-login-verification-code-push-message-or-sms-for-2fa-authentication-notice-with.jpg?s=612x612&w=0&k=20&c=9RFrAYp-KJhWkCHx6ZS61YwQgUiPJNiIBVbJYtwSGx0=' 
          />
          
          <Card title = 'Learning Management System' 
          summary = 'This is a comprehensive full-stack website developed using the MERN stack, designed specifically for a coaching institute to effectively manage and organize its information. The platform includes an admin panel that empowers administrators to seamlessly add and manage events, ensuring the website remains up-to-date and relevant.'
          github_link = 'https://github.com/Prerna276/education-institute'
          github_url = 'https://img.icons8.com/doodle/40/000000/github--v1.png'
          imagesrc = 'https://cdn.pixabay.com/photo/2019/06/08/22/11/coach-4261135_960_720.png' 
          />

          {/* <Card />
          
          <Card />
          <Card /> */}
        </div>
        {/* <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default Projects;
