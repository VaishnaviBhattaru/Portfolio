/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  // Refs for GSAP to target form elements
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formRef = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    // Trigger animations when the form section is scrolled into view
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%", // Start when the section is 80% in the viewport
      onEnter: () => {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, delay: 0.2 }
        )
          .fromTo(
            subheadingRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0 },
            "-=0.5" // Overlap the animation slightly
          )
          .fromTo(
            formRef.current.querySelectorAll("label, input, textarea, button"),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.2 },
            "-=0.5"
          );
      },
    });
  }, []);

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    emailjs
      .sendForm('Contact', 'Contact_me', event.target, {
        publicKey: 'Gcaxdc0z9KXdy3fRw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    event.target.reset();
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="flex flex-col items-center justify-center w-[85vw] h-[60vh] sm:h-[100vh] ml-auto mr-auto mt-5 mb-6"
    >
      <div className="flex flex-col items-center">
        {/* Contact Heading */}
        <div className="flex flex-col items-center text-center">
          <h1
            ref={headingRef}
            className="font-bold text-[#300e6f] text-xl"
          >
            Get in Touch: 
          </h1>
          <h2
            ref={subheadingRef}
            className="font-semibold text-lg text-justify mt-3"
          >
            Whether you have a question, a project idea, or just want to say hello, feel free to reach out! 
            I'm always excited to connect and collaborate on new opportunities.
          </h2>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          className="flex flex-col pt-10 gap-5 w-full sm:w-[50vw]"
          onSubmit={handleSubmit}
        >
          {submitted && <h3>Thank you for your submission!</h3>}

          {/* Name and Email Fields */}
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-between">
            <div className="flex flex-col sm:w-[45%]">
              <label className="font-bold" htmlFor="name">Name</label>
              <input
                className="border-b-2 border-gray-400 h-6 focus:outline-none focus:border-[#300e6f]"
                name="name"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="flex flex-col sm:w-[45%]">
              <label className="font-bold" htmlFor="email">Email</label>
              <input
                className="border-b-2 border-gray-400 h-6 focus:outline-none focus:border-[#300e6f]"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="message">Message</label>
            <textarea
              className="border-b-2 border-gray-400 focus:outline-none focus:border-[#300e6f] h-24"
              name="message"
              placeholder="Let's build something great! Tell me about your project."
            />
          </div>

          {/* Submit Button */}
          <button className="btn-primary hover:bg-violet-400 w-[200px] sm:w-full mt-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
