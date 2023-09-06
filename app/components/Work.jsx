"use client";
import Link from "next/link";
import { poppins, rubik_one } from "../layout";
import "../styles/Work.css";
import { ImSphere } from "react-icons/im";
import { ImEye } from "react-icons/im";
import { useInView } from "react-intersection-observer";

function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="work__main__div" id="work">
      <div className="work__title__div">
        <h1 className={`${rubik_one.className} work__main__title`}>Work <span className="work__main__title__clarification">(medium/big projects)</span></h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1050"
          height="6"
          viewBox="0 0 1050 6"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1050 5.60255L0 5.60255L0 0.193115L1050 0.193115V5.60255Z"
            fill="#FFC23C"
            fill-opacity="0.4"
          />
        </svg>
      </div>
      <div ref={ref} className={inView ? "work__projects__div" : "work__projects__div_"}>
        <div className="work__blascounter__main__div">
          <div className="work__blascounter__div">
            <div className="blascounter__img" />
            <div className="blascounter__content__div">
              <h4 className={` ${poppins.className} blascounter__description`}>
                DESCRIPTION
              </h4>
              <p className={`${poppins.className} blascounter__description__p`}>
                Blascounter is a{" "}
                <span className="font-extrabold">tiktok marcketplace</span>,
                that allows you
                <br />
                to buy tiktok accounts and sell your tiktok account
                <br />
                as well.
              </p>
              <div className="blascounter__line" />
              <h4 className={` ${poppins.className} blascounter__tech`}>
                TECHNOLOGIES
              </h4>
              <p className={`${poppins.className} blascounter__tech__p`}>
                To make Blascounter I decided to use Next.js 13 in
                <br />
                the frontend and Node (with Express) in the backend.
                <br />
                The data base is a mongo data base.
                <br />
              </p>
            </div>
          </div>
          <Link
            href="https://blascounterclient-production.up.railway.app/"
            target="blank_"
            className="blascounter__visit"
          >
            Visit <ImSphere color="#FFC23C" className="visit__sphere" />
          </Link>
        </div>
        <div className="work__trackly__main__div">
          <div className="work__trackly__div">
            <div className="trackly__img" />
            <div className="trackly__content__div">
              <h4 className={` ${poppins.className} trackly__description`}>
                DESCRIPTION
              </h4>
              <p className={`${poppins.className} trackly__description__p`}>
                Trackly is a web page wich allows you to{" "}
                <span className="font-extrabold">
                  track the
                  <br /> price of a online cours
                </span>{" "}
                in wich you are interested,
                <br /> and you will recive a email if the price is equal or less
                <br /> than the price you had specified
              </p>
              <div className="trackly__line" />
              <h4 className={` ${poppins.className} trackly__tech`}>
                TECHNOLOGIES
              </h4>
              <p className={`${poppins.className} blascounter__tech__p`}>
                To make Trackly I used Next.js 13 in the frontend <br /> (plus
                tailwind.css) and Django in the backend. The <br />
                data base is a postgreSQL.
              </p>
            </div>
          </div>
          <Link href="/trackly" target="blank_" className="blascounter__visit">
            View <ImEye color="#FFC23C" className="visit__sphere" />
          </Link>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1050"
        height="6"
        viewBox="0 0 1050 6"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1050 5.60255L0 5.60255L0 0.193115L1050 0.193115V5.60255Z"
          fill="#FFC23C"
          fill-opacity="0.4"
        />
      </svg>
    </div>
  );
}

export default Work;
