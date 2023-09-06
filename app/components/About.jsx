import Image from "next/image";
import { poppins, rubik_one } from "../layout";
import Line from "../../assets/line.png";
import "../styles/About.css";
import Spline_Component from "./Spline";


function About() {
  return (
    <div className="about__main__div" id="about">
      <div className="about__content__div">
        <div className="about__title__div">
          <h1 className={`${rubik_one.className} about__title`}>About me</h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="241"
              height="26"
              viewBox="0 0 241 26"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M141 5.49181L0 5.49181L0 0.164917L141 0.164917V5.49181Z"
                fill="#FFC23C"
                fill-opacity="0.4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M241 25.734L100 25.734V20.4071L241 20.4071V25.734Z"
                fill="#FFC23C"
                fill-opacity="0.4"
              />
            </svg>
          </div>
        </div>
        <p className={` ${poppins.className} about__main__p`}>
          To summarise, I am 19 years old and I am from Barcelona. I like to go
          <br />
          gym and read books, also spend time with my family and my friends.
          <br />
          In relation to my personality and mindset, I am a very ambitious
          <br />
          person, entrepreneur and brave, and I can be very obsessive when I
          <br />
          set myself a goal.
        </p>
        <div className="about__study__div">
          <Image src={Line} alt="line" />
          <h2 className={` ${poppins.className} about__studies__title`}>
            STUDIES
          </h2>
          <div className="studies__div">
            <div className="upf__image" />
            <div className="studies__div__content">
              <span className="about__studies__pursuing">Pursuing:</span>
              <h4 className="about__studies__degree">
                Degree in Busines Administration
              </h4>
              <span className="about__studies__at">
                at
                <span className="about__studies__UPF">
                  Pompeu Fabra University
                </span>
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <Image src={Line} alt="line" />
          <h2 className={` ${poppins.className} about__interested__title`}>
          NOW INTERESTED IN
          </h2>
          </div>  
          <p className={` ${poppins.className} about__interested__p`}>
            Learn more about IA chatbots, improve my hability in technologies <br />
            like Django, React Native... and learn about the tech startup world<br />
            (in the technological field, the financial field and the<br />
            administrative field as well).
          </p>
      </div>
      <Spline_Component />
    </div>
  );
}

export default About;
