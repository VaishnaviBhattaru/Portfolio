/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Import react-swipeable
import { projects } from "./data";
export default function Projects() {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Swipe handlers from react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextProject,
    onSwipedRight: prevProject,
    preventDefaultTouchmoveEvent: true, // Prevent scrolling during swipe
    trackMouse: true, // Allow mouse dragging
  });

  return (
    <>
      <h1 className="text-center pt-7 pb-5">Projects</h1>
      <section id="projects" className="flex w-[100vw] flex-col items-center">
        <div
          className="relative w-full overflow-hidden"
          {...swipeHandlers} // Attach swipe handlers to the container
        >
          {/* Project Carousel */}
          <div
            className="flex transition-transform w-full duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center bg-white p-6 rounded-lg"
              >
                <img
                  className="rounded-md w-[50vw]  object-cover"
                  src={item.imgSrc}
                  alt={item.altText}
                />
                <h2 className="font-bold text-xl mt-4">Project overview:</h2>
                <p className="text-justify text-gray-600 mt-2">
                  {item.description}
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" btn-primary hover:bg-violet-700">
                      Take a look
                    </button>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" btn-primary hover:bg-violet-700">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-gray-700 rounded-full p-2"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-gray-700 rounded-full p-2"
          >
            ❯
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex mt-4 space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#300e6f]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
}
