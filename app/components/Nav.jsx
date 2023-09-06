import Image from "next/image";
import Link from "next/link";
import Twitter from "../../assets/Twitter.png";
import GitHub from "../../assets/github1.png";
import Insta from "../../assets/Insta1.png";
import "../styles/Nav.css";
import { poppins } from "../layout";

function Nav() {

  return (
    <div className="nav__div">
      <div className="relative w-[100%]">
      <svg xmlns="http://www.w3.org/2000/svg" width="715" height="10" viewBox="0 0 715 10" fill="none" className="line__svg">
  <g filter="url(#filter0_d_1_5)">
    <path d="M4.00006 5.39062L353.5 4.88763L532.25 4.88762L711 4.88762" stroke="url(#paint0_radial_1_5)" shape-rendering="crispEdges"/>
  </g>
  <defs>
    <filter id="filter0_d_1_5" x="-0.000610352" y="0.387619" width="715.001" height="9.50301" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.58 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5" result="shape"/>
    </filter>
    <radialGradient id="paint0_radial_1_5" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(362.002 4.99825) rotate(87.7124) scale(25.0217 17690.3)">
      <stop stop-color="white" stop-opacity="0.58"/>
      <stop offset="0.842014" stop-color="#FFC23C" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="67" viewBox="0 0 63 67" fill="none" className="logo__svg" >
  <g filter="url(#filter0_d_349_44)">
    <path d="M52.3572 48.6038C54.0779 47.3536 56.4863 47.7351 57.7365 49.4558V49.4558C58.9867 51.1766 58.6053 53.585 56.8845 54.8352L46.6526 62.2691L42.1253 56.0378L52.3572 48.6038Z" fill="#100720"/>
    <path d="M6.11568 55.0573C4.39494 53.8071 4.01348 51.3986 5.26368 49.6779V49.6779C6.51387 47.9572 8.92229 47.5757 10.643 48.8259L20.8742 56.2593L16.3469 62.4907L6.11568 55.0573Z" fill="#100720"/>
    <path d="M28.8546 11.4729H34.2502C35.0093 11.4729 35.4916 10.6604 35.1281 9.99406L32.2505 4.71836C31.8597 4.00193 30.8216 4.02999 30.4701 4.76648L27.9521 10.0422C27.6354 10.7058 28.1192 11.4729 28.8546 11.4729Z" fill="#100720"/>
    <path d="M28.34 9.51993L35.0104 13.3711L11.9032 53.3939C10.8398 55.2359 8.48441 55.8671 6.64242 54.8036V54.8036C4.80042 53.7401 4.1693 51.3847 5.23278 49.5427L28.34 9.51993Z" fill="#100720"/>
    <path d="M27.9548 13.371L34.6587 9.50058L57.7562 49.5067C58.825 51.3579 58.1907 53.7251 56.3395 54.7939V54.7939C54.4883 55.8627 52.1212 55.2284 51.0524 53.3772L27.9548 13.371Z" fill="#100720"/>
  </g>
  <defs>
    <filter id="filter0_d_349_44" x="0.527832" y="0.197205" width="61.9445" height="66.2935" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.760784 0 0 0 0 0.235294 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_349_44"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_349_44" result="shape"/>
    </filter>
  </defs>
</svg>
<div className="social__network__div">
<Link href="https://twitter.com/ArnauCanela11" target="_blank" className="social__network__1">
<Image src={Twitter} alt="twitter"></Image>
</Link>
<Link href="https://github.com/arnaucanela11" target="_blank">
<Image src={GitHub} alt="twitter" className="social__network__2" />
</Link>
<Link href="https://instagram.com/arnaucanelaa" target="_blank">
<Image src={Insta} alt="twitter" className="social__network__3"></Image>
</Link>
</div>
      </div>
      <div className="nav__items__div">
        <Link href='#about' className={`nav__item ${poppins.className} cursor-pointer`}>About me</Link>
        <Link href='#work' className={`nav__item ${poppins.className}`}>Work</Link>
        <Link href='#technologies' className={`nav__item ${poppins.className}`}>Technologies</Link>
      </div>
    </div>
  );
}

export default Nav;
