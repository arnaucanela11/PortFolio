"use client"
import Image from "next/image";
import TechImg from "../../assets/Technologies.png";
import Triangles from "../../assets/Triangles.png";
import "../styles/Tech.css";
import { poppins } from "../layout";
import { useInView } from "react-intersection-observer";

function Tech() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="tech__div" id="technologies">
      <div className="w-fit h-fit relative">
        <Image src={TechImg} alt="Technologies" />
        <Image src={Triangles} alt="triangles" className="tech__triangles" />
      </div>
      <div className="tech__content__div" ref={ref}>
        <div className="tech__content__div_1">
          <div className={inView ? "tech__next__div" : "tech__next__div_"}>
            <div className="flex flex-row w-fit h-fit gap-2 justify-center items-center mb-3">
              <div className="next__img" />
              <h2 className={`${poppins.className} next__title`}>Next.js</h2>
            </div>
            <p className={`${poppins.className} next__p`}>
              I started studying react, however quicky I discovered next.js,
              wich is for me the best rect framework. In my biggest frontend
              projects I use next.js, and specially I like its newest version,
              Next 13.
            </p>
          </div>
          <div className={inView ? "tech__node__div" : "tech__node__div_"}>
            <div className="flex flex-row w-fit h-fit gap-2 justify-center items-center mb-3">
              <div className="node__img" />
              <h2 className={`${poppins.className} node__title`}>Node</h2>
            </div>
            <p className={`${poppins.className} next__p`}>
              Node was the first backend technology that I decided to learn.
              With express, I made my first API.
            </p>
          </div>
          <div className={inView ? "tech__mongo__div" : "tech__mongo__div_"}>
            <div className="flex flex-row w-fit h-fit gap-2 justify-center items-center mb-3">
              <div className="mongo__img" />
              <h2 className={`${poppins.className} mongo__title`}>MongoDB</h2>
            </div>
            <p className={`${poppins.className} next__p`}>
              MongoDB was my first data base. It closes the MERN stack, with
              wich you can make complex full stack apps.
            </p>
          </div>
        </div>
        <div className="tech__content__div_2">
          <div className={inView ? "tech__django__div" : "tech__django__div_"}>
            <div className="flex flex-row w-fit h-fit gap-2 justify-center items-center mb-3">
              <div className="django__img" />
              <h2 className={`${poppins.className} django__title`}>Django</h2>
            </div>
            <p className={`${poppins.className} next__p`}>
              As I was very interested in developing, I decided to study Python,
              with wich you can do more variety of things than with Javascript.
              Due this, to connect my python code with my js frontends I decided
              to learn a backend framework for python: Django.
            </p>
          </div>
          <div className={inView ? "tech__postgre__div" : "tech__postgre__div_"}>
            <div className="flex flex-row w-fit h-fit gap-2 justify-center items-center mb-3">
              <div className="postgre__img" />
              <h2 className={`${poppins.className} postgre__title`}>
                PostreSQL
              </h2>
            </div>
            <p className={`${poppins.className} next__p`}>
              PostreSQL is the data base I use for Django.
            </p>
          </div>
          <div className={inView ? "tech__figma__div" : "tech__figma__div_"}>
            <div className="flex flex-row w-fit h-fit gap-2 justify-center items-center mb-3">
              <div className="figma__img" />
              <h2 className={`${poppins.className} figma__title`}>Figma</h2>
            </div>
            <p className={`${poppins.className} next__p`}>
              Despite of I'm not a designer, I like to design my projects using
              figma, for me the best free developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
