import "./App.css";
import heroVid from "./assets/videos/ladyWithMicroscope.mp4";

import consulting from "./assets/icons/consulting.svg";
import design from "./assets/icons/design.svg";
import microscope from "./assets/icons/microscope.svg";
import repair from "./assets/icons/repair.svg";
import training from "./assets/icons/training.svg";

import phone from "./assets/icons/phone.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import mail from "./assets/icons/mail.svg";

import clinicalMicroscope from "./assets/images/clinicalMicroscope.png";
import studentMicroscope from "./assets/images/studentMicroscope.png";
import powerSupply from "./assets/images/powerSupply.png";
import schoolTimer from "./assets/images/schoolTimer.png";
import tester from "./assets/images/tester.png";

import React from "react";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col items-center h-full mx-auto optimumWidth">
      <Navbar />
      <section id="hero" className="w-full min-h-80 relative">
        <div className="w-full relative">
          <div
            id="overlay"
            className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center w-full"
          >
            <div
              id="heroTextAndButton"
              className="z-20 w-full flex flex-col items-center"
            >
              <p
                id="heroText"
                className="text-white z-20 text-center w-full mt-12"
              >
                High Quality Lab Equipment
              </p>
              <p
                id="heroSupportText"
                className="text-white z-20 p-4 text-center w-full"
              >
                Electronic Solutions For Schools, Clinics, Mines and more.
              </p>

              <a
                className="bg-green-600 text-white rounded-2xl p-2 mt-6 hover:bg-green-700 transition-all duration-300"
                href="#contacts"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <video
            src={heroVid}
            autoPlay
            muted
            className="w-full min-h-80 object-cover"
            id="heroVid"
          ></video>
        </div>
      </section>

      <section
        id="services"
        className="w-full min-h-2 flex flex-col items-center mt-16 scroll-mt-16"
      >
        <h1 className="text-center  text-neutral-800">Our Services</h1>

        <div className="w-full flex flex-wrap justify-center gap-4">
          <ServiceCard
            name={"LAB EQUIPMENT"}
            iconPath={microscope}
            description={
              "We have a huge range of lab equipment of unbeatable quality, we guarantee 100% satisfaction and the best user experience."
            }
          />

          <ServiceCard
            name={"MAINTANANCE & REPAIR"}
            iconPath={repair}
            description={
              "At LABKWIP we understand how important it is for equipment to work correctly be it in school exams or clinical labs, Our Highly Skilled Team of technicians are ready to mantain and repair with unparalleled precision."
            }
          />

          <ServiceCard
            name={"CONSULTANCY"}
            iconPath={consulting}
            description={
              "As far as lab equipment is concerned we are the right people to talk to."
            }
          />

          <ServiceCard
            name={"CUSTOM DESIGN"}
            iconPath={design}
            description={
              "We also do custom equipment design as per client's need. If you have something in mind, hit us up."
            }
          />

          <ServiceCard
            name={"TRAINING"}
            iconPath={training}
            description={
              "We offer trainning workshops on how to use and handle your lab equipment correctly. Our team of highly trained technicians are ready to share their knowledge."
            }
          />
        </div>
      </section>

      <section
        id="products"
        className="mt-12 w-full min-h-80 p-16 bg-neutral-50 flex flex-col justify-center items-center scroll-mt-16"
      >
        <h1 className="text-center  text-neutral-800">Featured Products</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <ProductCard
            imagePath={studentMicroscope}
            name={"STUDENT MICROSCOPES"}
            description={
              "High Quality Durable Microscopes Sutable for Students And Teachers."
            }
            quoteLink={
              "mailto:bchoga4@gmail.com?subject=STUDENT%20MICROSCOPE%20QUOTE"
            }
          />
          <ProductCard
            imagePath={powerSupply}
            name={"BENCH POWER SUPPLIES"}
            description={
              "Durable and Fail Proof Bench Power Supplies with adjustable Voltage and Current for Schools, Labs and Hobbyists."
            }
            quoteLink={
              "mailto:bchoga4@gmail.com?subject=BENCH%20POWER%20SUPPLY%20QUOTE"
            }
          />
          <ProductCard
            imagePath={clinicalMicroscope}
            name={"CLINICAL MICROSCOPES"}
            description={"High Precision Microscopes Sutable for Clinical Use."}
            quoteLink={
              "mailto:bchoga4@gmail.com?subject=CLINICAL%20MICROSCOPE%20QUOTE"
            }
          />
          <ProductCard
            imagePath={tester}
            name={"TEST EQUIPMENT"}
            description={
              "Wide range of test equipment including multimeters signal generators and oscilloscopes, suitable for schools and electronics Labs. "
            }
            quoteLink={
              "mailto:bchoga4@gmail.com?subject=TEST%20EQUIPMENT%20QUOTE"
            }
          />
          <ProductCard
            imagePath={schoolTimer}
            name={"AUTOMATIC SCHOOL-BELL"}
            description={
              "We also do user friendly programmable  Automatic School/Industrial Bells and Sirens, with up to 200 Alarms/Day and an sound range of upto 1000m(1KM)"
            }
            quoteLink={
              "mailto:bchoga4@gmail.com?subject=AUTOMATIC%20TIMER%20QUOTE"
            }
          />
        </div>
        <a
          className="text-green-600 mt-6 p-2 hover:"
          href="https://wa.me/+263719110057"
        >
          Looking For Something Else?
        </a>
      </section>

      <section
        id="contacts"
        className="mt-14 w-full h-80 flex flex-col items-center scroll-mt-16"
      >
        <h1 className="text-neutral-800">Contact Us</h1>
        <div
          id="contactsContainer"
          className="mt-8 flex justify-around gap-8 text-black"
        >
          <a
            id="phone"
            className="w-14 h-14 bg-green-100 rounded-full p-3 hover:bg-green-300"
            href="#footer"
          >
            <img src={phone} alt="" />
          </a>
          <a
            id="whatsapp"
            className="w-14 h-14  bg-green-100 rounded-full p-3 hover:bg-green-300"
            href="https://wa.me/+263719110057"
          >
            <img src={whatsapp} alt="" />
          </a>
          <a
            id="mail"
            className="w-14 h-14  bg-green-100 rounded-full p-3 hover:bg-green-300"
            href="mailto:bchoga4@gmail.com?subject=LABKWIP%20Enquiry."
          >
            <img src={mail} alt="" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
