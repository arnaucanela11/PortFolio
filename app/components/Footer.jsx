import Image from "next/image";
import { poppins, rubik_one } from "../layout";
import "../styles/Footer.css";
import Twitter from "../../assets/x.png"
import GitHub from "../../assets/github2.png"
import Instagram from "../../assets/Insta2.png"
import Link from "next/link";
import Footer__img from "../../assets/Footer__img.png"

function Footer() {
  return (
    <div className="footer__main__div">
      <Image src={Footer__img} alt="footerImg" className="footer__img"/>
      <div className="footer__sentence__div">
        <h1 className={rubik_one.className}>"In a year you</h1>
        <h1
          className={rubik_one.className}
          style={{
            marginLeft: "140px",
          }}
        >
          will regret not
        </h1>
        <h1 className={rubik_one.className}>starting today"</h1>
      </div>
      <div className="footer__content__div">
        <svg
        style={{
          zIndex: 20
        }}
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="61"
          viewBox="0 0 57 61"
          fill="none"
        >
          <path
            d="M25.855 9.39517H31.2498C32.0089 9.39517 32.4913 8.5825 32.1276 7.91612L29.2503 2.64399C28.8595 1.92783 27.8217 1.95589 27.4702 2.69213L24.9526 7.96425C24.6357 8.62794 25.1195 9.39517 25.855 9.39517Z"
            fill="#FFC23C"
            fill-opacity="0.8"
          />
          <path
            d="M25.34 7.44336L32.0104 11.2925L8.90376 51.2932C7.84 53.1347 5.48442 53.7659 3.64242 52.703C1.80042 51.6401 1.16953 49.2856 2.23329 47.4441L25.34 7.44336Z"
            fill="url(#paint0_linear_329_76)"
            fill-opacity="0.8"
          />
          <path
            d="M24.9549 11.2925L31.6587 7.42408L54.7558 47.4081C55.8248 49.2588 55.1908 51.6251 53.3396 52.6933C51.4884 53.7616 49.121 53.1272 48.0519 51.2765L24.9549 11.2925Z"
            fill="url(#paint1_linear_329_76)"
            fill-opacity="0.8"
          />
          <path
            d="M49.3577 46.506C51.0781 45.2567 53.4863 45.6381 54.7365 47.3579C55.9867 49.0778 55.6055 51.4847 53.885 52.7341L43.6526 60.1644L39.1253 53.9363L49.3577 46.506Z"
            fill="#A259FF"
            fill-opacity="0.9"
          />
          <path
            d="M3.11517 52.956C1.39471 51.7066 1.01348 49.2996 2.26368 47.5798C3.51387 45.86 5.92206 45.4786 7.64252 46.7279L17.8742 54.1577L13.3469 60.3858L3.11517 52.956Z"
            fill="#A259FF"
            fill-opacity="0.9"
          />
          <defs>
            <linearGradient
              id="paint0_linear_329_76"
              x1="32"
              y1="-10.0674"
              x2="-8.96714"
              y2="61.9131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFC23C" />
              <stop offset="1" stop-color="#A259FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_329_76"
              x1="25"
              y1="7.92317"
              x2="62.9724"
              y2="63.9122"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFC23C" />
              <stop offset="1" stop-color="#A259FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="footer__content__div__mini">
          <div className="links__div">
            <h2 className={`${poppins.className} links__title`}>Links</h2>
            <Link href="#main" className={`${poppins.className} links__item`}>Main</Link>
            <Link href="#about" className={`${poppins.className} links__item`}>About me</Link>
            <Link href="#work" className={`${poppins.className} links__item`}>Work</Link>
            <Link href="#technologies" className={`${poppins.className} links__item`}>Technologies</Link>
          </div>
          <div className="links__div">
          <h2 className={`${poppins.className} links__title`}>Social</h2>
          <Link href="https://twitter.com/ArnauCanela11" target="blank_" style={{
            zIndex: 10
          }}>
          <Image src={Twitter} alt="twitter" width={24} />
          </Link>
          <Link href="https://github.com/arnaucanela11" target="blank_" style={{
            zIndex: 10
          }}>
          <Image src={GitHub} alt="github" width={26}/>
          </Link>
          <Link href="https://instagram.com/arnaucanelaa" target="blank_">
          <Image src={Instagram} alt="insta" width={22}/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
