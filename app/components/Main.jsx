"use client"
import Image from "next/image";
import Triangle1 from "../../assets/Triangle 1.png";
import Triangle2 from "../../assets/Triangle 2.png";
import Hi from "../../assets/Hi.png";
import Mouse from "../../assets/Mouse.png";
import "../styles/Main.css";
import { poppins } from "../layout";
import MainDescription from "./MainDescription";
import { useInView } from 'react-intersection-observer';

function Main() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <div className="main__div">
      <div className="main__title__div">
        <Image src={Hi} alt="Hi!" className={inView ? "main__title" : "main__title_"} />
        <MainDescription />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35s"
          height="22"
          viewBox="0 0 33 33"
          fill="none"
          className={inView ? "main__svg__circle__2" : "main__svg__circle__2_"}
          ref={ref}
        >
          <path
            d="M1.1958 1V1C14.1658 7.16073 24.7407 17.4286 31.2808 30.2115L32.1958 32"
            stroke="#FFC23C"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="113"
          viewBox="0 0 130 113"
          fill="none"
          className={inView ? "main__svg__circle__1" : "main__svg__circle__1_"}
        >
          <path
            d="M129.201 78.5914V78.5914C121.484 92.3525 108.85 102.688 93.8328 107.524L87.6959 109.5V109.5C59.732 116.416 30.4135 105.241 14.147 81.467L13.2284 80.1244C2.09827 63.8574 -1.38279 43.5447 3.69581 24.5V24.5V24.5C6.67596 15.8907 11.0368 7.82347 16.6074 0.614442L16.6958 0.499998"
            stroke="#FFC23C"
          />
        </svg>
      </div>
      <div className={inView ? "mouse__div" : "mouse__div_"}>
      <span className="mouse__span">Scroll Down</span>
      <div className="relative">
      <Image src={Mouse} alt="mouse">
      </Image>
      <div className="mouse__line"/>
      </div>
      </div>
      <Image src={Triangle1} alt="triangle1" className="triangle__1" />
      <Image src={Triangle2} alt="triangle2" className="triangle__2" />
<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[50%] left-[45%]" width="147" height="147" viewBox="0 0 147 147" fill="none">
  <g clip-path="url(#clip0_344_5)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_344_5)">
        <path d="M36.5412 63.2912C73.0824 73.0824 73.0824 73.0824 92.6647 2.563e-06C73.0824 73.0824 73.0824 73.0824 109.624 82.8735C73.0824 73.0824 73.0824 73.0824 53.5 146.165C73.0824 73.0824 73.0824 73.0824 36.5412 63.2912Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_344_5" x="30.5412" y="-6" width="85.0823" height="160.165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_5"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_5" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_344_5"/>
    </filter>
    <clipPath id="clip0_344_5">
      <rect width="107" height="107" fill="white" transform="translate(0 53.5) rotate(-30)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" className="absolute top-[0%] left-[20%]" viewBox="0 0 250 250" fill="none">
  <g clip-path="url(#clip0_344_33)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_344_33)">
        <path d="M62.4265 129.218C124.853 124.853 124.853 124.853 116.122 3.45707e-06C124.853 124.853 124.853 124.853 187.28 120.488C124.853 124.853 124.853 124.853 133.584 249.706C124.853 124.853 124.853 124.853 62.4265 129.218Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_344_33" x="56.4265" y="-6" width="136.853" height="263.706" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_33"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_33" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_344_33"/>
    </filter>
    <clipPath id="clip0_344_33">
      <rect width="177" height="177" fill="white" transform="translate(0 133.584) rotate(-49)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[12%] right-[22%]" width="214" height="214" viewBox="0 0 214 214" fill="none">
  <g clip-path="url(#clip0_343_92)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_343_92)">
        <path d="M137.285 145.091C137.41 107.023 137.41 107.023 61.2731 107.273C137.41 107.023 137.41 107.023 137.535 68.9547C137.41 107.023 137.41 107.023 213.546 106.773C137.41 107.023 137.41 107.023 137.285 145.091Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_343_92" x="55.2731" y="62.9547" width="164.273" height="90.1366" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_343_92"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_343_92" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_343_92"/>
    </filter>
    <clipPath id="clip0_343_92">
      <rect width="151" height="151" fill="white" transform="translate(106.773 213.546) rotate(-135)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="229" height="229" className="absolute top-[-8%] right-[36%]" viewBox="0 0 229 229" fill="none">
  <g clip-path="url(#clip0_344_17)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_344_17)">
        <path d="M168.705 137.897C147.179 97.0902 147.179 97.0902 65.8505 140.677C147.179 97.0902 147.179 97.0902 125.653 56.2837C147.179 97.0902 147.179 97.0902 228.508 53.5039C147.179 97.0902 147.179 97.0902 168.705 137.897Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_344_17" x="59.8505" y="47.5039" width="174.657" height="101.173" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_17"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_17" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_344_17"/>
    </filter>
    <clipPath id="clip0_344_17">
      <rect width="183" height="183" fill="white" transform="translate(175.004 228.508) rotate(-163)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" className="absolute top-[0%] left-[10%]" viewBox="0 0 108 108" fill="none">
  <g clip-path="url(#clip0_343_2672)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_343_2672)">
        <path d="M57.7266 82.565C69.346 63.3701 69.346 63.3701 30.8046 40.3839C69.346 63.3701 69.346 63.3701 80.9653 44.1753C69.346 63.3701 69.346 63.3701 107.887 86.3563C69.346 63.3701 69.346 63.3701 57.7266 82.565Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_343_2672" x="24.8046" y="34.3839" width="89.0828" height="59.9724" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_343_2672"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_343_2672" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_343_2672"/>
    </filter>
    <clipPath id="clip0_343_2672">
      <rect width="89" height="89" fill="white" transform="translate(21.531 107.887) rotate(-104)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="151" className="absolute left-[15%] bottom-[0%]" height="151" viewBox="0 0 151 151" fill="none">
  <g clip-path="url(#clip0_343_88)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_343_88)">
        <path d="M37.75 37.75C75.5 75.5 75.5 75.5 151 0C75.5 75.5 75.5 75.5 113.25 113.25C75.5 75.5 75.5 75.5 0 151C75.5 75.5 75.5 75.5 37.75 37.75Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_343_88" x="-6" y="-6" width="163" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_343_88"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_343_88" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_343_88"/>
    </filter>
    <clipPath id="clip0_343_88">
      <rect width="151" height="151" fill="white"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="91" height="91" className="absolute left-[28%] bottom-[15%]" viewBox="0 0 91 91" fill="none">
  <g clip-path="url(#clip0_344_25)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_344_25)">
        <path d="M22.5723 46.723C45.1446 45.1446 45.1446 45.1446 41.9878 -2.28882e-05C45.1446 45.1446 45.1446 45.1446 67.7169 43.5662C45.1446 45.1446 45.1446 45.1446 48.3014 90.2892C45.1446 45.1446 45.1446 45.1446 22.5723 46.723Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_344_25" x="16.5723" y="-6.00003" width="57.1447" height="104.289" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_25"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_25" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_344_25"/>
    </filter>
    <clipPath id="clip0_344_25">
      <rect width="64" height="64" fill="white" transform="translate(0 48.3014) rotate(-49)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="267" height="248" className="absolute right-[8%] bottom-[-10%]" viewBox="0 0 267 248" fill="none">
  <g clip-path="url(#clip0_344_37)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_344_37)">
        <path d="M181.818 173.287C171.858 125.66 171.858 125.66 76.7372 146.205C171.858 125.66 171.858 125.66 161.898 78.0336C171.858 125.66 171.858 125.66 266.979 105.115C171.858 125.66 171.858 125.66 181.818 173.287Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_344_37" x="70.7372" y="72.0336" width="202.241" height="109.254" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_37"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_37" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_344_37"/>
    </filter>
    <clipPath id="clip0_344_37">
      <rect width="193" height="193" fill="white" transform="translate(161.863 266.979) rotate(-147)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="187" height="187" className="absolute bottom-[-24%] right-[37%]" viewBox="0 0 147 147" fill="none">
  <g clip-path="url(#clip0_344_13)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_344_13)">
        <path d="M108.565 88.4651C94.8023 62.3757 94.8023 62.3757 42.8053 90.2423C94.8023 62.3757 94.8023 62.3757 81.04 36.2862C94.8023 62.3757 94.8023 62.3757 146.799 34.509C94.8023 62.3757 94.8023 62.3757 108.565 88.4651Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_344_13" x="36.8052" y="28.509" width="115.994" height="69.7333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_13"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_13" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_344_13"/>
    </filter>
    <clipPath id="clip0_344_13">
      <rect width="117" height="117" fill="white" transform="translate(112.592 146.397) rotate(-163)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="91" height="91" className="absolute top-[0%] right-[10%]" viewBox="0 0 91 91" fill="none">
  <g clip-path="url(#clip0_344_25)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_344_25)">
        <path d="M22.5723 46.723C45.1446 45.1446 45.1446 45.1446 41.9878 -2.28882e-05C45.1446 45.1446 45.1446 45.1446 67.7169 43.5662C45.1446 45.1446 45.1446 45.1446 48.3014 90.2892C45.1446 45.1446 45.1446 45.1446 22.5723 46.723Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_344_25" x="16.5723" y="-6.00003" width="57.1447" height="104.289" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_25"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_25" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_344_25"/>
    </filter>
    <clipPath id="clip0_344_25">
      <rect width="64" height="64" fill="white" transform="translate(0 48.3014) rotate(-49)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" className="absolute bottom-[24%] right-[25%]" viewBox="0 0 108 108" fill="none">
  <g clip-path="url(#clip0_343_2672)">
    <g opacity="0.71">
      <g filter="url(#filter0_df_343_2672)">
        <path d="M57.7266 82.565C69.346 63.3701 69.346 63.3701 30.8046 40.3839C69.346 63.3701 69.346 63.3701 80.9653 44.1753C69.346 63.3701 69.346 63.3701 107.887 86.3563C69.346 63.3701 69.346 63.3701 57.7266 82.565Z" fill="#FFC23C" fill-opacity="0.6" shape-rendering="crispEdges"/>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_df_343_2672" x="24.8046" y="34.3839" width="89.0828" height="59.9724" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_343_2672"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_343_2672" result="shape"/>
      <feGaussianBlur stdDeviation="3" result="effect2_foregroundBlur_343_2672"/>
    </filter>
    <clipPath id="clip0_343_2672">
      <rect width="89" height="89" fill="white" transform="translate(21.531 107.887) rotate(-104)"/>
    </clipPath>
  </defs>
</svg>
    </div>
  );
}

export default Main;
