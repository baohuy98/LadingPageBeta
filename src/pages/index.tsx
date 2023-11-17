import { Transition } from '@headlessui/react'
import 'animate.css'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import BMarketTele from '../../public/assets/image/B-market-telegram mockup.png'
import TextB from '../../public/assets/image/B.png'
import ImgMargin from '../../public/assets/image/MarginBResource.png'
import QRZalo from '../../public/assets/image/QR-Zalo.png'
import QRTele from '../../public/assets/image/QR-telegram.png'
import BSignal from '../../public/assets/image/Rectangle-bsign.png'
import BInfoTablet from '../../public/assets/image/b-info-tablet.png'
import BInfoMobile1 from '../../public/assets/image/b-info1-mobile.png'
import BInfo1 from '../../public/assets/image/b-info1.png'
import BInfoMobile2 from '../../public/assets/image/b-info2-mobile.png'
import BInfo2 from '../../public/assets/image/b-info2.png'
import BInfoMobile3 from '../../public/assets/image/b-info3-mobile.png'
import BInfo3 from '../../public/assets/image/b-info3.png'
import BInfoMobile4 from '../../public/assets/image/b-info4-mobile.png'
import BInfo4 from '../../public/assets/image/b-info4.png'
import ImgBigData from '../../public/assets/image/big-data.png'
import ImgDataScience from '../../public/assets/image/data-science.png'
import ImgHuman from '../../public/assets/image/human.png'
import IconLogo from '../../public/assets/image/icon-logo.png'
import IconTele from '../../public/assets/image/icon-tele.png'
import IconZalo from '../../public/assets/image/icon-zalo.png'
import Item1 from '../../public/assets/image/item-1.png'
import Item2 from '../../public/assets/image/item-2.png'
import Item3 from '../../public/assets/image/item-3.png'
import Item4 from '../../public/assets/image/item-4.png'
import Laptop from '../../public/assets/image/laptop-layout.png'
import LogoColor from '../../public/assets/image/logo-color.png'
import Logo from '../../public/assets/image/logo.png'
import Phone from '../../public/assets/image/phone-layout.png'
import Phone2 from '../../public/assets/image/phone-layout2.png'
import ImgReport from '../../public/assets/image/report-4.png'
import ImgReport2 from '../../public/assets/image/report-5.png'
import ImgReport3 from '../../public/assets/image/report-6.png'
import ImgRoboAI from '../../public/assets/image/robo-AI.png'
import GifPhone from '../../public/assets/image/section1.1.gif'
import GifLaptop from '../../public/assets/image/section1.2.gif'
import section2CSS from '../styles/section2.module.css'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [slideIndexImg, setSlideIndexImg] = useState(1);
  const [slideIndexImg2, setSlideIndexImg2] = useState(1);
  const [isSeeMore, setIsSeeMore] = useState(true)
  const [isAccess, setIsAccess] = useState(false)


  const plusSlides = (n: number) => {
    setSlideIndex(slideIndex + n)
    setSlideIndexImg(slideIndex + n)
    setSlideIndexImg2(slideIndex + n)
    showSlides(slideIndex + n);
    showSlidesImg(slideIndex + n);
    showSlidesImg2(slideIndex + n);
  }

  const currentSlide = (n: number) => {
    setSlideIndex(n)
    setSlideIndexImg(n)
    setSlideIndexImg2(n)
    showSlides(n);
    showSlidesImg(n);
    showSlidesImg2(n);
  }

  const showSlides = (n: number) => {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const rectangles = document.getElementsByClassName("rectangle") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) { setSlideIndex(1); }
    if (n < 1) { setSlideIndex(slides.length); }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < rectangles.length; i++) {
      rectangles[i].className = rectangles[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    rectangles[slideIndex - 1].className += " active";
  }

  const showSlidesImg = (n: number) => {
    let i;
    const slidesImg = document.getElementsByClassName("mySlides-img") as HTMLCollectionOf<HTMLElement>;

    if (n > slidesImg.length) { setSlideIndexImg(1); }
    if (n < 1) { setSlideIndexImg(slidesImg.length); }

    for (i = 0; i < slidesImg.length; i++) {
      slidesImg[i].style.display = "none"
    }

    slidesImg[slideIndexImg - 1].style.display = "block";
  }

  const showSlidesImg2 = (n: number) => {
    let i;
    const slidesImg = document.getElementsByClassName("mySlides-img2") as HTMLCollectionOf<HTMLElement>;

    if (n > slidesImg.length) { setSlideIndexImg2(1); }
    if (n < 1) { setSlideIndexImg2(slidesImg.length); }

    for (i = 0; i < slidesImg.length; i++) {
      slidesImg[i].style.display = "none";
    }

    slidesImg[slideIndexImg2 - 1].style.display = "block";
  }

  useEffect(() => {
    showSlides(slideIndex);
    showSlidesImg(slideIndexImg);
    showSlidesImg2(slideIndexImg2);
  }, [slideIndex, slideIndexImg, slideIndexImg2]);

  const [isHoveredImg1, setIsHoveredImg1] = useState(false)
  const [isHoveredImg2, setIsHoveredImg2] = useState(false)
  const [isHoveredImg3, setIsHoveredImg3] = useState(false)
  const [isHoveredImg4, setIsHoveredImg4] = useState(false)

  useEffect(() => {
    if (!isServer && WOW) {
      const wow = new WOW.WOW({
        offset: 100, // Adjust the offset value as needed
      });
      wow.init();
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>B-Sign - Công cụ hỗ trợ đầu tư hàng đầu thị trường</title>
        <meta name="author" content="BSI" />2
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="B-Sign là hệ thống công cụ hỗ trợ đầu tư chứng khoán thông minh. Cung cấp và phân tích dữ liệu chứng khoán real - time nhanh chóng, đầy đủ và chính xác hữu ích cho nhà đầu tư."
        />
        <meta
          name="keywords"
          content="đầu tư chứng khoán, thông tin chứng khoán, phân tích chứng khoán, B-Market, B-Info, B-Report, B-Signal,"
        />


        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://resource.bsi.com.vn/" />
        <link rel="preload" href="https://resource.bsi.com.vn/resources/landing-page/background-section1.jpg" as="image" />

      </Head>

      {/* HEADER */}
      <header className='sticky top-0 z-50'>
        <div className='h-[60px] bg-[#154162]'>
          <div className='flex justify-between items-center shadow-md'>
            <div className='logo'>
              <a href="https://www.bsi.com.vn/vn" target='_blank'>
                <Image src={Logo} alt='logo'></Image>
              </a>
            </div>
            <div className='navbar md:block sm:hidden xs:hidden xxs:hidden'>
              <ul className="font-medium flex text-white">
                <li>
                  <a href="#" className="block py-2 lg:px-9 md:px-5 font-semibold text-[21px]">Dịch vụ</a>
                </li>
                <li>
                  <a href="#solution_section" className="block py-2 lg:px-9 md:px-5 font-semibold text-[21px]">Sản phẩm</a>
                </li>
                <li>
                  <a href="#contact_section" className="block py-2 lg:px-9 md:px-5 font-semibold text-[21px]">Liên hệ</a>
                </li>
                <li>
                  <button className="mx-5 my-1 block cssbuttons-io-button text-lg font-semibold"><span>Sử dụng ngay</span></button>
                </li>
              </ul>
            </div>
            <div className="mr-5 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#154162] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-2 bg-[#154162]">
                <div className='navbar'>
                  <ul className="font-medium text-white">
                    <li>
                      <a href="#" className="block py-2 px-2 font-semibold text-[18px]">Dịch vụ</a>
                    </li>
                    <li>
                      <a href="#solution_section" className="block py-2 px-2 font-semibold text-[18px]">Sản phẩm</a>
                    </li>
                    <li>
                      <a href="#contact_section" className="block py-2 px-2 font-semibold text-[18px]">Liên hệ</a>
                    </li>
                    <li>
                      <button className="mx-2 my-1 block cssbuttons-io-button text-lg font-semibold"><span>Sử dụng ngay</span></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </Transition>
      </header>

      {/* MAIN */}
      <main>
        {/* SECTION B-SIGN */}
        <section className='bsign_section relative z-20 overflow-hidden'>
          <div className="bg-[url('https://resource.bsi.com.vn/resources/landing-page/background-section1.jpg')] h-full bg-cover bg-center">
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
            <div className='relative z-10'>
              <div className='flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col xxs:flex-col items-center justify-evenly xs:p-[45px] xxs:p-[20px]'>
                <div className='flex wow animate__animated animate__fadeInLeft animate__delay-1s'>
                  <Image src={TextB} alt='text-b' className='md:w-[159px] md:h-[238px] sm:w-[130px] sm:h-[120px] xs:w-[110px] xs:h-[100px] xxs:w-[90px] xxs:h-[110px]' />

                  <div className='pl-3'>
                    <div className='text-sign'>
                      <h2 className='text-[#FCB040] md:text-8xl sm:text-5xl xs:text-4xl xxs:text-4xl font-bold'>Sign</h2>
                    </div>

                    <div className='text-content md:mt-5 sm:mt-1 xs:mt-1 xxs:mt-2'>
                      <div className='lg:text-4xl md:text-3xl sm:text-lg xs:text-lg xxs:text-sm font-bold md:h-[45px] sm:h-fit'>Công cụ hỗ trợ đầu tư</div>
                      <div className='lg:text-4xl md:text-3xl sm:text-base xs:text-sm xxs:text-xs font-bold md:h-[45px] sm:h-fit'>Thông minh - An toàn - Tiện lợi</div>
                    </div>
                  </div>
                </div>

                <div className='wow animate__animated animate__fadeIn animate__slower'>
                  <div className='relative md:translate-x-[330px] md:translate-y-[180px] sm:translate-x-[220px] sm:translate-y-[130px] xs:translate-x-[200px] xs:translate-y-[125px] xxs:translate-x-[190px] xxs:translate-y-[120px] w-fit z-30'>
                    <Image src={Phone} alt='phone' className='relative z-10 md:w-[135px] md:h-[285px] sm:w-[105px] sm:h-[220px] xs:w-[105px] xs:h-[220px] xxs:w-[90px] xxs:h-[200px]' />
                    <Image src={GifPhone} alt='gif-phone' className='absolute md:top-[10px] md:left-[7px] md:w-[120px] md:h-[267px] sm:top-[10px] sm:left-[7px] sm:w-[92px] sm:h-[204px] xs:top-[10px] xs:left-[7px] xs:w-[92px] xs:h-[204px] xxs:top-[8px] xxs:left-[6px] xxs:w-[80px] xxs:h-[184px] rounded-xl' />
                  </div>

                  <div className='relative w-fit'>
                    <Image src={Laptop} alt='laptop' className='md:w-[450px] md:h-[326px] sm:w-[300px] sm:h-[232px]' />
                    <Image src={GifLaptop} alt='gif-laptop' className='absolute md:top-[14px] md:left-[48px] sm:top-[5px] sm:left-[34px] xs:top-[3px] xs:left-[32px] xxs:top-[4px] xxs:left-[31px] md:w-[355px] md:h-[211px] sm:w-[232px] sm:h-[160px] xs:w-[221px] xs:h-[146px] xxs:w-[219px] xxs:h-[142px]' />
                  </div>
                </div>
              </div>

              <div className='grid place-items-center'>
                <div className='border-solid border-white border-b-2 border-t-0 border-x-0 2xl:w-[1515px] xl:w-[1290px] lg:w-[850px] md:w-[650px] sm:w-[365px] xs:w-[330px] xxs:w-[300px] h-[3px]'></div>
              </div>

              <div className='grid place-items-center wow animate__animated animate__slideInUp animate__delay-1s'>
                <div className='bsign-content text-justify xl:w-[1036px] lg:w-full xs:p-[45px] xxs:p-[20px] md:text-[25px] sm:text-sm xs:text-[13px] xxs:text-xs'>
                  “... với định hướng phát triển dựa trên hai giá trị cốt lõi là <span className='font-bold'>CON NGƯỜI</span> và <span className='font-bold'>CÔNG NGHỆ</span>, chúng tôi đang hoàn thành sứ mệnh cung cấp đến những <span className='font-bold'>Nhà đầu tư cá nhân</span> các giải pháp số hóa gần gũi, hiệu quả, dễ dàng tiếp cận và <span className='font-bold'>hoàn toàn miễn phí</span>...”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION SOLUTION */}
        <section className='solution_section md:h-[960px] sm:h-[580px] xs:h-[580px] xxs:h-[480px] relative z-10' id='solution_section'>
          <div className='xl:hidden lg:block absolute lg:top-[50px] lg:left-[325px] md:top-[50px] md:left-[66px] sm:top-[30px] sm:left-[35px] xs:top-[35px] xs:left-[15px] xxs:top-[40px] xxs:left-[15px] z-20 animate__animated animate__fadeIn wow'>
            <h2 className='font-bold text-white md:text-5xl sm:text-3xl xs:text-2xl xxs:text-xl text-center opacity-80 md:mb-[40px] sm:mb-[20px] xs:mb-[10px] xxs:mb-[10px]'>GIẢI PHÁP</h2>
            <span className='font-bold text-white md:text-4xl sm:text-[22px] xs:text-xl xxs:text-base h-fit' >
              PHÂN TÍCH DỮ LIỆU TÀI <br /> CHÍNH & GIAO DỊCH  <br /> TRONG THỜI ĐẠI 4.0
            </span>
          </div>
          <div className='solution_section-left sm:rotate-[15deg] xs:rotate-[20deg] xxs:rotate-[20deg] xl:translate-x-[-21%] lg:translate-x-[-14%] md:translate-x-[-21%] sm:translate-x-[-35%] xs:translate-x-[-42%] xxs:translate-x-[-53%]'>
            <div className={`bg-solution-section w-[80%] sm:h-[1111px] xs:h-[900px] xxs:h-[900px] rounded-[60px] flex flex-col justify-center items-center animate__animated animate__rotateInDownLeft wow`}>
              <div className='rotate-[-15deg] translate-x-[15%] translate-y-[-15%] animate__animated animate__fadeIn xl:block lg:hidden md:hidden sm:hidden xs:hidden xxs:hidden'>
                <h2 className='font-bold text-white text-5xl text-center opacity-80 mb-[40px]'>GIẢI PHÁP</h2>
                <span className='font-bold text-white text-6xl h-fit' >
                  PHÂN TÍCH DỮ LIỆU TÀI <br /> CHÍNH & GIAO DỊCH  <br /> TRONG THỜI ĐẠI 4.0
                </span>
              </div>
            </div>
          </div>
          <div className="solution_section-right md:grid sm:hidden xs:hidden xxs:hidden grid-cols-2 absolute xl:top-[30%] xl:right-[2%] lg:top-[30%] lg:right-[17%] md:top-[30%] md:right-[8%] sm:top-[20%] sm:right-[20%] gap-y-5 gap-x-10">
            <div onMouseOver={() => {
              setIsHoveredImg1(true)
            }}
              onMouseOut={() => {
                setIsHoveredImg1(false)
              }} className={`item-card_1 z-10 animate__animated animate__fadeInDown wow`}>
              {!isHoveredImg1 ?
                <div className={`${section2CSS.item_cardBackground} w-[305px] flex flex-col justify-between items-center relative p-5`}>
                  <Image
                    src={Item1}
                    width={200}
                    height={150}
                    alt="img-item1"
                  ></Image>
                  <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Web Platform</span>
                </div>
                :
                <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover1} ${isHoveredImg1 ? 'animate__animated animate__fadeIn' : ''} h-[305px] relative`}>
                  <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                    <h1 className='text-[#FEBC08] text-[40px] font-bold'>
                      B-Info
                    </h1>
                    <span className='text-[17px] font-semibold text-white'>Webapp đầy đủ và toàn diện <br /> với các công cụ hỗ trợ phân <br /> tích dữ liệu & quan sát thị trường</span>
                    <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                      <a className='mr-2' href="https://binfo.bsi.com.vn/" target='_blank'>Xem thêm  </a>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              }
            </div>

            <div onMouseOver={() => {
              setIsHoveredImg2(true)
            }} onMouseOut={() => {
              setIsHoveredImg2(false)
            }} className={` item-card_2  z-10 animate__animated animate__fadeInDown wow`}>
              {!isHoveredImg2 ?
                <div className={`${section2CSS.item_cardBackground} w-[305px] flex flex-col justify-between items-center relative p-5`}>
                  <Image
                    src={Item2}
                    width={200}
                    height={150}
                    alt="img-item1"
                  ></Image>
                  <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Social Platform</span>
                </div>
                :
                <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover2} ${isHoveredImg2 ? 'animate__animated animate__fadeIn' : ''} h-[305px] relative`}>
                  <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                    <h1 className='text-[#FEBC08] text-[40px] font-bold'>
                      B-Market
                    </h1>
                    <span className='text-[20px] font-semibold text-white'>Sự tiện lợi giành cho những <br /> Nhà đầu tư bận rộn  chatbot <br />  tự động hoàn toàn, dữ liệu <br /> Real-time trên nền tảng Zalo <br /> và Telegram</span>
                    <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                      <a className='mr-2' href="#bmarket_section">Xem thêm  </a>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              }
            </div>

            <div onMouseOver={() => {
              setIsHoveredImg3(true)
            }} onMouseOut={() => {
              setIsHoveredImg3(false)
            }} className={` item-card_3 z-10 animate__animated animate__fadeInUp wow`}>
              {!isHoveredImg3 ?
                <div className={`${section2CSS.item_cardBackground} w-[305px] flex flex-col justify-between items-center relative p-5`}>
                  <Image
                    src={Item3}
                    width={200}
                    height={150}
                    alt="img-item1"
                  ></Image>
                  <span className="text-[#01A7FB] font-bold text-[30px] mt-5">AI Quick Report</span>
                </div>
                :
                <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover3} ${isHoveredImg3 ? 'animate__animated animate__fadeIn' : ''} h-[305px] relative`}>
                  <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                    <h1 className='text-[#FEBC08] text-[40px] font-bold'>
                      B-Report
                    </h1>
                    <span className='text-[20px] font-semibold text-white'>Hệ thống AI phản hồi báo <br /> cáo đa dạng, trực quan, <br /> nhanh chóng về giao dịch <br /> thị trường & doanh nghiệp.</span>
                    <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                      <a className='mr-2' href="#breport_section">Xem thêm  </a>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              }
            </div>

            <div onMouseOver={() => {
              setIsHoveredImg4(true)
            }} onMouseOut={() => {
              setIsHoveredImg4(false)
            }} className={` item-card_4 z-10 animate__animated animate__fadeInUp wow`}>
              {!isHoveredImg4 ?
                <div className={`${section2CSS.item_cardBackground} w-[305px] flex flex-col justify-between items-center relative p-5`}>
                  <Image
                    src={Item4}
                    width={200}
                    height={150}
                    alt="img-item1"
                  ></Image>
                  <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Market Tracker</span>
                </div>
                :
                <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover4} ${isHoveredImg4 ? 'animate__animated animate__fadeIn' : ''} h-[305px] relative`}>
                  <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                    <h1 className='text-[#FEBC08] text-[40px] font-bold'>
                      B-Signal
                    </h1>
                    <span className='text-[20px] font-semibold text-white'>Hệ thống tín hiệu theo dõi & <br /> thông báo cập nhật mọi <br /> biến động thị trường</span>
                    <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                      <a className='mr-2' href="#bsignal_section">Xem thêm  </a>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className='md:hidden sm:block absolute xs:top-[160px] xxs:top-[130px] w-full'>
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <div onMouseOver={() => {
                  setIsHoveredImg1(true)
                }}
                  onMouseOut={() => {
                    setIsHoveredImg1(false)
                  }} className={`item-card_1 z-10 animate__animated animate__fadeInDown wow grid place-items-center`}>
                  {!isHoveredImg1 ?
                    <div className={`${section2CSS.item_cardBackground} sm:w-[305px] xs:w-[250px] flex flex-col justify-between items-center relative p-5 m-[60px]`}>
                      <Image
                        src={Item1}
                        width={200}
                        height={150}
                        alt="img-item1"
                      ></Image>
                      <span className="text-[#01A7FB] font-bold sm:text-[30px] xs:text-[25px] mt-5">Web Platform</span>
                    </div>
                    :
                    <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover1} ${isHoveredImg1 ? 'animate__animated animate__fadeIn' : ''} my-[60px] xs:h-[305px] xxs:h-[250px] sm:w-[305px] xs:w-[250px] xxs:w-[200px] relative`}>
                      <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                        <h1 className='text-[#FEBC08] xs:text-[40px] xxs:text-3xl font-bold'>
                          B-Info
                        </h1>
                        <span className='md:text-[17px] sm:text-base xs:text-base xxs:text-xs font-semibold text-white'>Webapp đầy đủ và toàn diện <br /> với các công cụ hỗ trợ phân <br /> tích dữ liệu & quan sát thị trường</span>
                        <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                          <a className='mr-2' href="https://binfo.bsi.com.vn/" target='_blank'>Xem thêm  </a>
                          <AiOutlineArrowRight />
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div onMouseOver={() => {
                  setIsHoveredImg2(true)
                }} onMouseOut={() => {
                  setIsHoveredImg2(false)
                }} className={` item-card_2  z-10 animate__animated animate__fadeInDown wow grid place-items-center`}>
                  {!isHoveredImg2 ?
                    <div className={`${section2CSS.item_cardBackground} sm:w-[305px] xs:w-[250px] flex flex-col justify-between items-center relative p-5 m-[60px]`}>
                      <Image
                        src={Item2}
                        width={200}
                        height={150}
                        alt="img-item1"
                      ></Image>
                      <span className="text-[#01A7FB] font-bold sm:text-[30px] xs:text-[25px] mt-5">Social Platform</span>
                    </div>
                    :
                    <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover2} ${isHoveredImg2 ? 'animate__animated animate__fadeIn' : ''} my-[60px] xs:h-[305px] xxs:h-[250px] sm:w-[305px] xs:w-[250px] xxs:w-[200px] relative`}>
                      <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                        <h1 className='text-[#FEBC08] xs:text-[40px] xxs:text-3xl font-bold'>
                          B-Market
                        </h1>
                        <span className='md:text-[20px] sm:text-base xs:text-base xxs:text-xs font-semibold text-white'>Sự tiện lợi giành cho những <br /> Nhà đầu tư bận rộn  chatbot <br />  tự động hoàn toàn, dữ liệu <br /> Real-time trên nền tảng Zalo <br /> và Telegram</span>
                        <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                          <a className='mr-2' href="#bmarket_section">Xem thêm  </a>
                          <AiOutlineArrowRight />
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div onMouseOver={() => {
                  setIsHoveredImg3(true)
                }} onMouseOut={() => {
                  setIsHoveredImg3(false)
                }} className={` item-card_3 z-10 animate__animated animate__fadeInUp wow grid place-items-center`}>
                  {!isHoveredImg3 ?
                    <div className={`${section2CSS.item_cardBackground} sm:w-[305px] xs:w-[250px] flex flex-col justify-between items-center relative p-5 m-[60px]`}>
                      <Image
                        src={Item3}
                        width={200}
                        height={150}
                        alt="img-item1"
                      ></Image>
                      <span className="text-[#01A7FB] font-bold sm:text-[30px] xs:text-[25px] mt-5">AI Quick Report</span>
                    </div>
                    :
                    <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover3} ${isHoveredImg3 ? 'animate__animated animate__fadeIn' : ''} my-[60px] xs:h-[305px] xxs:h-[250px] sm:w-[305px] xs:w-[250px] xxs:w-[200px] relative`}>
                      <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                        <h1 className='text-[#FEBC08] xs:text-[40px] xxs:text-3xl font-bold'>
                          B-Report
                        </h1>
                        <span className='md:text-[20px] sm:text-base xs:text-base xxs:text-xs font-semibold text-white'>Hệ thống AI phản hồi báo <br /> cáo đa dạng, trực quan, <br /> nhanh chóng về giao dịch <br /> thị trường & doanh nghiệp.</span>
                        <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                          <a className='mr-2' href="#breport_section">Xem thêm  </a>
                          <AiOutlineArrowRight />
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div onMouseOver={() => {
                  setIsHoveredImg4(true)
                }} onMouseOut={() => {
                  setIsHoveredImg4(false)
                }} className={` item-card_4 z-10 animate__animated animate__fadeInUp wow grid place-items-center`}>
                  {!isHoveredImg4 ?
                    <div className={`${section2CSS.item_cardBackground} sm:w-[305px] xs:w-[250px] flex flex-col justify-between items-center relative p-5 m-[60px]`}>
                      <Image
                        src={Item4}
                        width={200}
                        height={150}
                        alt="img-item1"
                      ></Image>
                      <span className="text-[#01A7FB] font-bold sm:text-[30px] xs:text-[25px] mt-5">Market Tracker</span>
                    </div>
                    :
                    <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover4} ${isHoveredImg4 ? 'animate__animated animate__fadeIn' : ''} my-[60px] xs:h-[305px] xxs:h-[250px] sm:w-[305px] xs:w-[250px] xxs:w-[200px] relative`}>
                      <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                        <h1 className='text-[#FEBC08] xs:text-[40px] xxs:text-3xl font-bold'>
                          B-Signal
                        </h1>
                        <span className='md:text-[20px] sm:text-base xs:text-base xxs:text-xs font-semibold text-white'>Hệ thống tín hiệu theo dõi & <br /> thông báo cập nhật mọi <br /> biến động thị trường</span>
                        <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                          <a className='mr-2' href="#bsignal_section">Xem thêm  </a>
                          <AiOutlineArrowRight />
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* SECTION INFO */}
        <section className='webInfo_section bg-webInfo-section relative z-30 overflow-hidden'>
          <div className='grid xl:grid-cols-2 lg:grid-cols-none md:p-[60px] sm:p-[30px] xs:p-[30px] xxs:p-[15px]'>
            <div className='grid place-items-center'>
              <div className='md:h-[580px] sm:h-[350px] w-full relative sm:block xs:hidden xxs:hidden'>
                <div className='relative 2xl:top-[125px] 2xl:left-[20px] xl:top-[125px] xl:left-[-20px] lg:top-[125px] lg:left-[100px] md:top-[125px] md:left-[-15px] sm:top-[125px] sm:left-[-10px] w-fit'>
                  <Image src={BInfoTablet} alt='b-info-tablet' className='2xl:w-[278px] 2xl:h-[292px] xl:w-[278px] xl:h-[292px] lg:w-[278px] lg:h-[292px] md:w-[278px] md:h-[292px] sm:w-[175px] sm:h-[180px]' />
                </div>

                <div className='relative z-20 2xl:top-[-200px] 2xl:left-[240px] xl:top-[-200px] xl:left-[200px] lg:top-[-200px] lg:left-[320px] md:top-[-200px] md:left-[205px] sm:top-[-62px] sm:left-[136px]'>
                  <Image src={Laptop} alt='laptop' className='relative z-10 md:w-[450px] md:h-[326px] sm:w-[230px] sm:h-[181px]' />
                  <div className='absolute md:top-[11px] md:left-[54px] sm:top-[2px] sm:left-[25px] md:w-[350px] sm:w-[177px] overflow-hidden flex'>
                    <Image src={BInfo1} alt='b-info1' className='mySlides-img animate__animated animate__slideInRight rounded-lg md:w-[350px] md:h-[226px] sm:w-[177px] sm:h-[127px]' />
                    <Image src={BInfo2} alt='b-info2' className='mySlides-img animate__animated animate__slideInRight rounded-lg md:w-[350px] md:h-[226px] sm:w-[177px] sm:h-[127px]' />
                    <Image src={BInfo3} alt='b-info3' className='mySlides-img animate__animated animate__slideInRight rounded-lg md:w-[350px] md:h-[226px] sm:w-[177px] sm:h-[127px]' />
                    <Image src={BInfo4} alt='b-info4' className='mySlides-img animate__animated animate__slideInRight rounded-lg md:w-[350px] md:h-[226px] sm:w-[177px] sm:h-[127px]' />
                  </div>
                </div>

                <div className='relative z-30 2xl:top-[-390px] 2xl:left-[210px] xl:top-[-390px] xl:left-[170px] lg:top-[-390px] lg:left-[290px] md:top-[-390px] md:left-[175px] sm:top-[-175px] sm:left-[105px]'>
                  <Image src={Phone2} alt='phone2' className='md:w-[159px] md:h-[250px] sm:w-[95px] sm:h-[145px]' />
                  <div className='absolute md:top-[21px] md:left-[31px] sm:top-[12px] sm:left-[19px] md:w-[96px] md:h-[211px] sm:w-[57px] sm:h-[211px] overflow-hidden flex'>
                    <Image src={BInfoMobile1} alt='b-info1-mobile' className='mySlides-img2 animate__animated animate__slideInRight rounded-md md:w-[96px] md:h-[207px] sm:w-[96px] sm:h-[120px]' />
                    <Image src={BInfoMobile2} alt='b-info2-mobile' className='mySlides-img2 animate__animated animate__slideInRight rounded-md md:w-[96px] md:h-[207px] sm:w-[96px] sm:h-[120px]' />
                    <Image src={BInfoMobile3} alt='b-info3-mobile' className='mySlides-img2 animate__animated animate__slideInRight rounded-md md:w-[96px] md:h-[207px] sm:w-[96px] sm:h-[120px]' />
                    <Image src={BInfoMobile4} alt='b-info4-mobile' className='mySlides-img2 animate__animated animate__slideInRight rounded-md md:w-[96px] md:h-[207px] sm:w-[96px] sm:h-[120px]' />
                  </div>
                </div>
              </div>

              <div className='items-center flex'>
                <a className="prev" onClick={() => plusSlides(-1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="12" viewBox="0 0 35 12" fill="none">
                    <path d="M35 7.32203L5.41118 7.32203V12L0 5.89831L5.41118 0V4.47458L35 4.47458V7.32203Z" fill="#D9D9D9" />
                  </svg>
                </a>
                <span className="rectangle" onClick={() => currentSlide(1)}></span>
                <span className="rectangle" onClick={() => currentSlide(2)}></span>
                <span className="rectangle" onClick={() => currentSlide(3)}></span>
                <span className="rectangle" onClick={() => currentSlide(4)}></span>
                <a className="next" onClick={() => plusSlides(1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="12" viewBox="0 0 35 12" fill="none">
                    <path d="M0 4.67797H29.5888V0L35 6.10169L29.5888 12V7.52542H0V4.67797Z" fill="#D9D9D9" />
                  </svg>
                </a>
              </div>
            </div>

            <div className='slideshow-container'>
              <div className='mySlides animate__animated animate__slideInRight'>
                <div className='text-white xl:pt-[115px] lg:pt-[30px] md:pt-[30px]'>
                  <h2 className='md:text-5xl sm:text-3xl xs:text-xl xxs:text-lg font-bold ml-2'>Web Platform B-Info</h2>
                  <p className='md:text-2xl sm:text-lg xs:text-base xxs:text-sm font-bold md:pt-[50px] sm:pt-[20px]'>
                    Nền tảng hỗ trợ đầu tư MIỄN PHÍ
                    <br></br>
                    Dễ dàng truy cập MỌI LÚC, MỌI NƠI
                  </p>
                  <ul className='list-disc md:pt-5 sm:pt-2 md:text-xl sm:text-base xs:text-xs xxs:text-xs sm:ml-9 xs:ml-2 xxs:ml-2 mr-2'>
                    <li className='pt-5'>Phân tích toàn diện và chuyên sâu về doanh nghiệp, thị trường.</li>
                    <li className='pt-5'>Cập nhật dữ liệu liên tục theo thời gian thực.</li>
                    <li className='pt-5'>Cung cấp thông tin thị trường trong và ngoài nước.</li>
                    <li className='pt-5'>Giao diện trực quan, trải nghiệm dễ dàng.</li>
                    <li className='pt-5'>Truy cập miễn phí toàn bộ công cụ hỗ trợ đầu tư.</li>
                  </ul>
                </div>
              </div>

              <div className='mySlides animate__animated animate__slideInRight'>
                <div className='text-white xl:pt-[125px] lg:pt-[30px] md:pt-[30px]'>
                  <h2 className='md:text-5xl sm:text-3xl xs:text-xl xxs:text-lg font-bold ml-2'>Dữ liệu vĩ mô đa dạng</h2>
                  <p className='md:text-2xl sm:text-lg xs:text-base xxs:text-sm font-bold md:pt-[50px] sm:pt-[20px]'>
                    Thông tin, dữ liệu kinh tế vĩ mô Việt Nam và thế giới
                    <br></br>
                    Cập nhật nhanh về thị trường, phân tích sâu về kinh tế
                  </p>
                  <ul className='list-disc md:pt-5 sm:pt-2 md:text-xl sm:text-base xs:text-xs xxs:text-xs sm:ml-9 xs:ml-2 xxs:ml-2 mr-2'>
                    <li className='pt-5'>Biểu đồ và đồ thị sinh động, dễ dàng nhìn thấy xu hướng thị trường.</li>
                    <li className='pt-5'>Xây dựng kiến thức về tài chính và kinh tế với các chỉ số quan trọng.</li>
                    <li className='pt-5'>Đa dạng hóa danh mục đầu tư và giảm thiểu rủi ro từ nguồn thông tin đáng tin cậy.</li>
                    <li className='pt-5'>Đưa ra các yếu tố ảnh hưởng, điều chỉnh chiến lược đầu tư.</li>
                  </ul>
                </div>
              </div>

              <div className='mySlides animate__animated animate__slideInRight'>
                <div className='text-white xl:pt-[125px] lg:pt-[30px] md:pt-[30px]'>
                  <h2 className='md:text-5xl sm:text-3xl xs:text-xl xxs:text-lg font-bold ml-2'>Tổng quan cổ phiếu</h2>
                  <p className='md:text-2xl sm:text-lg xs:text-base xxs:text-sm font-bold md:pt-[50px] sm:pt-[20px]'>
                    Tra cứu cổ phiếu nhanh chóng
                    <br></br>
                    Thông tin toàn diện, chính xác
                  </p>
                  <ul className='list-disc md:pt-5 sm:pt-2 md:text-xl sm:text-base xs:text-xs xxs:text-xs sm:ml-9 xs:ml-2 xxs:ml-2 mr-2'>
                    <li className='pt-5'>Phân tích chuyên sâu về biến động giá, chỉ số tài chính và sự kiện ảnh hưởng.</li>
                    <li className='pt-5'>Thống kê chi tiết các giao dịch, yếu tố ảnh hưởng trực tiếp đến cổ phiếu.</li>
                    <li className='pt-5'>Tiết kiệm thời gian khi tra cứu báo cáo tài chính doanh nghiệp.</li>
                    <li className='pt-5'>Được tiếp cận đa dạng và phong phú thông tin về doanh nghiệp.</li>
                  </ul>
                </div>
              </div>

              <div className='mySlides animate__animated animate__slideInRight'>
                <div className='text-white xl:pt-[125px] lg:pt-[30px] md:pt-[30px]'>
                  <h2 className='md:text-5xl sm:text-3xl xs:text-xl xxs:text-lg font-bold ml-2'>Công cụ đầu tư tiện lợi</h2>
                  <p className='md:text-2xl sm:text-lg xs:text-base xxs:text-sm font-bold md:pt-[50px] sm:pt-[20px]'>
                    Công cụ hỗ trợ đầu tư độc quyền
                    <br></br>
                    Hiệu suất sinh lời vượt trội và ổn định
                  </p>
                  <ul className='list-disc md:pt-5 sm:pt-2 md:text-xl sm:text-base xs:text-xs xxs:text-xs sm:ml-9 xs:ml-2 xxs:ml-2 mr-2'>
                    <li className='pt-5'>Bộ lọc tìm kiếm tối ưu hóa việc tìm kiếm và đánh giá cổ phiếu theo tiêu chí.</li>
                    <li className='pt-5'>Công cụ giả lập đầu tư kiểm tra, phân tích và tối ưu chiến lược đầu tư.</li>
                    <li className='pt-5'>Công cụ thông minh theo dõi chuyển động thị trường, hỗ trợ phân bổ đầu tư</li>
                    <li className='pt-5'>Phân tích danh mục hỗ trợ quản lý rủi ro, tối đa hóa lợi nhuận.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION B-MARKET */}
        <section className='bmarket_section' id='bmarket_section'>
          <div className='grid xl:grid-cols-2 lg:grid-cols-none md:p-[60px] sm:p-[30px] xs:p-[30px] xxs:p-[15px]'>
            <div>
              <h2 className='bmarket_section-title md:text-5xl sm:text-3xl xs:text-2xl xxs:text-xl font-bold'>B- Market : Môi giới Số cho Nhà đầu tư </h2>
              <p className='font-bold md:text-2xl sm:text-xl xs:text-lg xxs:text-sm pt-3 text-justify'>Hỗ trợ nhu cầu dữ liệu thị trường theo thời gian thực tự động, tiện lợi, chuẩn xác. Hoạt động trên các nền tảng các mạng xã hội Zalo, Telegram. </p>

              <ul>
                <li className='pt-7'>
                  <span className='flex'>
                    <div className='w-[30px] h-[31px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                      </svg>
                    </div>
                    <p className='md:text-2xl sm:text-lg xs:text-lg xxs:text-lg pl-3'>Nhanh chóng và hiệu quả.</p>
                  </span>
                </li>
                <li className='pt-6'>
                  <span className='flex'>
                    <div className='w-[30px] h-[31px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                      </svg>
                    </div>
                    <p className='md:text-2xl sm:text-lg xs:text-lg xxs:text-lg pl-3'>Trải nghiệm tiện lợi.</p>
                  </span>
                </li>
                <li className='pt-6'>
                  <span className='flex'>
                    <div className='w-[30px] h-[31px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                      </svg>
                    </div>
                    <p className='md:text-2xl sm:text-lg xs:text-lg xxs:text-lg pl-3'>Không ngừng hoàn thiện</p>
                  </span>
                </li>
              </ul>

              <div className='flex justify-around items-center pt-10'>
                <div className='grid place-items-center'>
                  <Image src={QRZalo} alt='qr-zalo' className='w-[140px] h-[144.43px]' />
                  <a href='https://zalo.me/1623670409453822014' target="_blank" className='md:text-2xl sm:text-lg text-white font-bold'><button className='btn-zalo md:px-[69px] sm:px-[50px] xs:px-[48px] xxs:px-[48px] py-[10px]'>Zalo</button></a>
                </div>
                <div className='grid place-items-center'>
                  <Image src={QRTele} alt='qr-tele' className='w-[140px] h-[144.43px]' />
                  <a href='https://t.me/betaEmarketbot' target="_blank" className='md:text-2xl sm:text-lg text-white font-bold'><button className='btn-tele md:px-[38px] sm:px-[31px] xs:px-[31px] xxs:px-[30px] py-[10px]'>Telegram</button></a>
                </div>
              </div>
            </div>

            <div className='flex justify-around items-center pt-14'>
              <div className='relative w-fit h-fit z-30'>
                <Image src={Phone} alt='phone' className='relative z-10 w-[260px] md:h-[500px] sm:h-[360px]' />
                <Image src={GifPhone} alt='gif-phone' className='absolute md:top-[20px] md:left-[15px] md:w-[230px] md:h-[463px] sm:top-[12px] sm:left-[10px] sm:w-[163px] sm:h-[336px] xs:top-[10px] xs:left-[8px] xs:w-[140px] xs:h-[300px] xxs:top-[10px] xxs:left-[8px] xxs:w-[128px] xxs:h-[274px] rounded-xl z-0' />
              </div>
              <div className='w-fit h-fit'>
                <Image src={BMarketTele} alt='b-market-tele' className='w-[260px] md:h-[500px] sm:h-[360px]' />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION B-REPORT */}
        <section className='breport_section bg-breport-section relative z-30 overflow-hidden' id='breport_section'>
          {isAccess ?
            <div>
              <div className='content grid xl:grid-cols-3 lg:grid-cols-none xl:grid-none-2 lg:grid-rows-no2ne md:py-[121px] sm:py-[80px] xs:py-[80px] xxs:py-[80px]'>
                <div className='content-left xl:block lg:hidden md:hidden sm:hidden xs:hidden xxs:hidden'>
                  <Image src={ImgReport2} alt='imgReport2' className='h-[530px] animate__animated animate__fadeInLeft' />
                </div>

                <div className='content-mid flex flex-col justify-evenly xl:px-0 lg:px-[130px] md:px-[100px] sm:px-[20px] xs:px-[20px] xxs:px-[20px]'>
                  <div className='text-white md:text-[36px] sm:text-3xl xs:text-2xl xxs:text-xl font-bold flex flex-col justify-center items-center animate__animated animate__fadeInRight'>
                    <div className='flex'>
                      <h1>B-Report:</h1><span className='ml-2'>Chuyên gia phân</span>
                    </div>
                    <span >tích luôn bên bạn</span>
                  </div>
                  <p className='text-center md:text-[29px] sm:text-xl font-[400] text-white animate__animated animate__fadeIn pt-3'>Đáp ứng tiêu chí  <span className='font-bold'>nhanh chóng</span>, <span className='font-bold'>tiện lợi</span> và <span className="font-bold">dễ dàng tiếp cận</span> , chúng tôi đã tích hợp các sản phẩm trên vào chatbot B-Market. Quý Nhà đầu tư hoàn toàn có thể dễ dàng tìm được lựa chọn Báo cáo tự động</p>
                </div>

                <div className='content-right xl:block lg:hidden md:hidden sm:hidden xs:hidden xxs:hidden'>
                  <Image src={ImgReport3} alt='imgReport3' className='h-[530px] animate__animated animate__fadeInRight' />
                  <div className='flex items-end justify-end w-[80%]'>
                    <button onClick={() => {
                      setIsAccess(!isAccess)
                      setIsSeeMore(!isSeeMore)
                    }} className='text-white text-[25px] font-[300] italic'>
                      Thu gọn
                    </button>
                  </div>
                </div>

                <div className='lg:grid md:grid sm:grid xs:grid xxs:grid grid-cols-2 xl:hidden'>
                  <div className='content-left'>
                    <Image src={ImgReport2} alt='imgReport2' className=' animate__animated animate__fadeInLeft' />
                  </div>
                  <div className='content-right'>
                    <Image src={ImgReport3} alt='imgReport3' className=' animate__animated animate__fadeInRight' />
                    <div className='flex items-end justify-end w-[80%]'>
                      <button onClick={() => {
                        setIsAccess(!isAccess)
                        setIsSeeMore(!isSeeMore)
                      }} className='text-white text-[25px] font-[300] italic'>
                        Thu gọn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className='grid xl:grid-cols-2 lg:grid-cols-none xl:grid-rows-none lg:grid-rows-2 md:grid-rows-2 p-[30px]'>
              <div className='breport_section-left relative w-full'>
                {
                  isSeeMore ?
                    <div className=''>
                      <Image src={ImgHuman} alt='imgHuman' width={346} height={404} className='absolute top-[225px] left-[65px] animate__animated animate__fadeInUp wow ' />
                      <Image src={ImgBigData} alt='imgBigData' width={498} height={467} className='absolute top-[185px] left-[230px] z-[-1]  animate__animated animate__fadeInUp wow' />
                      <Image src={ImgDataScience} alt='imgDataSc' className='absolute  top-[150px] left-[270px] animate__animated animate__fadeInUp wow' />
                      <Image src={ImgRoboAI} alt='imgRobo' width={371} height={316} className='absolute top-[83px] left-[415px] animate__animated animate__fadeInUp wow ' />
                    </div>
                    :
                    <div className='flex flex-col justify-center items-center animate__animated animate__fadeIn '>
                      <Image src={ImgReport} alt='imgReport1' className='w-[700px] h-[712px] md:block sm:hidden xs:hidden xxs:hidden' />
                      <button onClick={
                        () => {
                          setIsAccess(!isAccess)
                        }
                      }>
                        <span className='text-white font-[300] xs:text-[25px] xxs:text-[15px] italic'>Tôi truy cập như thế nào ?</span>
                      </button>
                    </div>
                }
              </div>
              <div className='breport_section-right h-[750px] flex  flex-col justify-center items-center '>
                <div className='flex flex-col justify-evenly h-full  '>
                  <div className={`${isSeeMore ? 'animate__animated animate__fadeInDown' : 'animate__animated animate__fadeInUp'} title overflow-hidden wow  text-white text-[45px] font-bold flex flex-col items-center `}>
                    <div className='flex '>
                      <h1>B-Report:</h1> <span className='ml-2'>Chuyên gia phân </span>
                    </div>
                    <p>tích luôn bên bạn</p>
                  </div>
                  <div className='content'>
                    {isSeeMore ? <p className='text-white font-[400] text-[30px] animate__animated animate__fadeIn  wow'>
                      Sản phẩm hợp tác giữa các nhà khoa học <br /> dữ liệu hàng đầu cùng những chuyên gia <br /> phân tích có nhiều năm kinh nghiệm trong <br /> lĩnh vực Tài chính - Chứng khoán...
                    </p> :
                      <div className='animate__animated animate__fadeIn'>
                        <div className='flex justify-evenly items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.7149 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.7149 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.7449 13.1934 19.7449C12.8933 19.7449 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L16.4185 13.8046L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="white" />
                            <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.7149 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.7149 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.7449 13.1934 19.7449C12.8933 19.7449 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L16.4185 13.8046L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="white" />
                          </svg>
                          <p className='text-white md:text-[30px] sm:text-[20px] xs:text-[16px] xxs:text-[14px] pl-2 font-[300] w-[90%]'>Thị trường, ngành, tài chính doanh <br /> nghiệp, phân tích kỹ thuật, tổng hợp <br /> giao dịch...</p>
                        </div>
                        <div className='flex justify-evenly items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.7149 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.7149 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.7449 13.1934 19.7449C12.8933 19.7449 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L16.4185 13.8046L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="white" />
                            <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.7149 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.7149 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.7449 13.1934 19.7449C12.8933 19.7449 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L16.4185 13.8046L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="white" />
                          </svg>
                          <p className='text-white md:text-[30px] sm:text-[20px] xs:text-[16px] xxs:text-[14px] pl-2 font-[300] w-[90%]'>Đầy đủ toàn bộ cho 1623 mã cổ phiếu <br /> niêm yết trên sàn </p>
                        </div>
                        <div className='flex justify-evenly items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.7149 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.7149 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.7449 13.1934 19.7449C12.8933 19.7449 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L16.4185 13.8046L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="white" />
                            <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.7149 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.7149 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.7449 13.1934 19.7449C12.8933 19.7449 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L16.4185 13.8046L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="white" />
                          </svg>
                          <p className='text-white md:text-[30px] sm:text-[20px] xs:text-[16px] xxs:text-[14px] pl-2 font-[300] w-[90%]'>Cung cấp thông tin toàn diện về cổ <br /> phiếu, cơ hội và sự cạnh tranh trong <br /> thời gian thực.</p>
                        </div>
                        <div className='flex justify-evenly items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.7149 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.7149 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.7449 13.1934 19.7449C12.8933 19.7449 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L16.4185 13.8046L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="white" />
                            <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.7149 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.7149 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.7449 13.1934 19.7449C12.8933 19.7449 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L16.4185 13.8046L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="white" />
                          </svg>
                          <p className='text-white md:text-[30px] sm:text-[20px] xs:text-[16px] xxs:text-[14px] pl-2 font-[300] w-[90%]'>
                            Hoàn toàn loại trừ cảm tính và thiên <br /> lệch trong hoạt động phân tích. Hỗ <br />
                            trợ 24/7.
                          </p>
                        </div>
                      </div>
                    }


                  </div>
                  <div className='btnSeemore flex  justify-end'>
                    <button onClick={
                      () => {
                        setIsSeeMore(!isSeeMore)
                      }
                    } className='text-white text-[25px] font-[300] '>
                      {isSeeMore ? <button onClick={
                        () => {
                          setIsSeeMore(!isSeeMore)
                        }
                      } className='text-white text-[25px] font-[300] animate__animated animate__fadeIn wow  '>Xem thêm </button> : <button onClick={
                        () => {
                          setIsSeeMore(!isSeeMore)
                        }
                      } className='text-white text-[25px] font-[300] '>Thu gọn </button>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </section>

        {/* SECTION B-SIGNAL */}
        <section className='bsignal_section relative' id='bsignal_section'>
          <div className='p-7'>
            <div className='grid xl:grid-cols-2 lg:grid-cols-none'>
              <div className='grid place-content-center'>
                <h2 className='bsignal_section-title md:pt-[35px] sm:pt-[20px] md:text-[50px] sm:text-2xl xs:text-xl xxs:text-xl font-bold'>Tránh bỏ lỡ những biến <br></br> động thị trường cùng hệ<br></br> thống cảnh báo B-Signal</h2>

                <ul className='md:mt-[40px] sm:mt-[20px]'>
                  <li className='pt-7'>
                    <span className='flex items-center'>
                      <div className='w-[30px] h-[31px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                          <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                        </svg>
                      </div>
                      <p className='md:text-2xl sm:text-base pl-3'>Tối ưu hóa quyết định đầu tư dựa trên phân tích chính xác</p>
                    </span>
                  </li>
                  <li className='pt-6'>
                    <span className='flex items-center'>
                      <div className='w-[30px] h-[31px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                          <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                        </svg>
                      </div>
                      <p className='md:text-2xl sm:text-base pl-3'>Cảnh báo thời gian thực bằng tin nhắn</p>
                    </span>
                  </li>
                  <li className='pt-6'>
                    <span className='flex items-center'>
                      <div className='w-[30px] h-[31px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                          <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                        </svg>
                      </div>
                      <p className='md:text-2xl sm:text-base pl-3'>Tương thích trên nhiều nền tảng  khác nhau</p>
                    </span>
                  </li>
                  <li className='pt-6'>
                    <span className='flex items-center'>
                      <div className='w-[30px] h-[31px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                          <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                        </svg>
                      </div>
                      <p className='md:text-2xl sm:text-base pl-3'>Tùy chỉnh danh mục thông báo theo nhu cầu cá nhân.</p>
                    </span>
                  </li>
                  <li className='pt-6'>
                    <span className='flex items-center'>
                      <div className='w-[30px] h-[31px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                          <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                        </svg>
                      </div>
                      <p className='md:text-2xl sm:text-base pl-3'>Đã được tích hợp vào các sản phẩm công nghệ thuộc BETA.</p>
                    </span>
                  </li>
                </ul>
              </div>

              <div className='grid place-content-center'>
                <Image src={BSignal} alt='b-signal' className='md:h-[750px] md:w-[767px] sm:h-[415px] sm:w-[365px]' />
              </div>
            </div>
            <div className='absolute bottom-0 right-0 p-4'>
              <a href='#' className='flex items-center'>
                <span className='animate__animated animate__bounce animate__slow animate__infinite'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                    <path d="M11.4605 0L22 19H0L11.4605 0Z" fill="#0EF809" />
                  </svg>
                </span>
                <span className='font-bold md:text-2xl sm:text-lg pl-[10px]'>Đầu trang</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <section className='contact_section' id='contact_section'>


          <div className='relative'>
            <div className='img_Margin'>
              <Image src={ImgMargin} alt='imgMargin' />
            </div>
            <div style={{ boxShadow: ' 0 0 30px 5px rgba(0, 142, 236, 0.815)' }} className='btnMargin absolute bottom-[13%] left-[25%] w-[10%] h-[10%] rounded-full bg-transparent z-10 border-[2px] border-white grid place-items-center '>
              <a href="https://www.bsi.com.vn/vn/tin-tuc/tin-va-su-kien/lai-margin-9-9-phi-giao-dich-0-1" target='_blank'>
                <button className='text-white  font-semibold w-full h-full 2xl:text-[20px] xl:text-[13px] lg:text-[10px] lg:block md:hidden xs:hidden xxs:hidden'>

                  TÌM HIỂU NGAY
                </button>
              </a>
              <button className='text-white  font-semibold w-full h-full  text-[5px] md:block lg:hidden xs:text-[5px] md:text-[8px] xs:block  xxs:text-[3px] '>
                XEM THÊM
              </button>
            </div>
            <div className='absolute w-[2px] h-[53%] bg-white top-[20%] left-[30%]'>

            </div>
          </div>

          <div className="bg-[url('../../public/assets/image/footer-img.png')] h-full bg-center bg-[length:100%_500px]">
            <div className='text-center pt-[80px]'>
              <div className='xl:text-[55px] lg:text-4xl md:text-3xl sm:text-lg xs:text-[17px] xxs:text-sm font-bold'>
                <p className='contact_section-title leading-snug'>MIỄN PHÍ DÙNG THỬ CÔNG CỤ HỖ TRỢ</p>
                <p className='contact_section-title leading-snug'>ĐẦU TƯ SINH LỜI HIỆU QUẢ</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex md:flex-row sm:flex-col xs:flex-col xxs:flex-col justify-around md:py-[85px] sm:py-[50px] xs:py-[30px] xxs:py-[20px] xl:w-[1000px] lg:w-[750px] md:w-[700px]'>
                <a href='https://zalo.me/1623670409453822014' target="_blank" className='lg:text-2xl md:text-lg text-white font-bold'><button className='m-3 btn-zalo md:px-[69px] sm:px-[69px] xs:px-[69px] xxs:px-[69px] py-[10px]'>Zalo</button></a>
                <a href='https://t.me/betaEmarketbot' target="_blank" className='lg:text-2xl md:text-lg text-white font-bold'><button className='m-3 btn-tele md:px-[38px] sm:px-[51px] xs:px-[51px] xxs:px-[51px] py-[10px]'>Telegram</button></a>
                <a href='https://binfo.bsi.com.vn/' target='_blank' className='lg:text-2xl md:text-lg text-white font-bold'><button className='m-3 btn-web md:px-[13px] sm:px-[34px] xs:px-[34px] xxs:px-[34px] py-[10px]'>Web Platform</button></a>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[#041339]'>
          <div className='xl:flex lg:block md:px-[60px] md:py-[70px] sm:px-[30px] sm:py-[40px] xs:px-[10px] xs:py-[20px] xxs:px-[10px] xxs:py-[20px]'>
            <div className='xl:w-[70%] lg:w-full'>
              <Image src={LogoColor} alt='logo-color' className='md:w-[250px] md:h-[98px] sm:w-[145px] sm:h-[50px] xs:w-[145px] xs:h-[50px] xxs:w-[145px] xxs:h-[50px]' />
              <div className='text-white lg:text-2xl md:text-xl sm:text-xs xs:text-xs xxs:text-[10px] pt-10 font-[Montserrat]'>
                <ul>
                  <li>Trụ sở: <a href='https://maps.google.com/?q=55%20Nam%20K%E1%BB%B3%20Kh%E1%BB%9Fi%20Ngh%C4%A9a,%20Ph%C6%B0%E1%BB%9Dng%20Nguy%E1%BB%85n%20Th%C3%A1i%20B%C3%ACnh,%20Qu%E1%BA%ADn%201,%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh' target="_blank" className='hover:underline'>Toà nhà BETA</a> - Lầu 4&5, số 55 Nam Kỳ Khởi Nghĩa,<br></br> Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh</li>
                  <li className='xs:pt-7 xxs:pt-3'>Dị̣ch vụ khách hàng: <a href='tel:02839142626' className='hover:underline'>(028) 3914 2626</a> - <a href='tel:0813337444' className='hover:underline'>08 1333 7444</a></li>
                  <li className='xs:pt-7 xxs:pt-3'>Trụ sở chính BETA: <a href='tel:02839142929' className='hover:underline'>(028) 3914 2929</a></li>
                  <li className='xs:pt-7 xxs:pt-3'>Email: <a href='mailto:support@bsi.com.vn' className='hover:underline'>support@bsi.com.vn</a></li>
                </ul>
              </div>
            </div>
            <div className='xl:w-[30%] lg:w-full'>
              <div>
                <div className='text-white md:text-2xl sm:text-lg xl:pt-16 lg:pt-16 md:pt-12 sm:pt-10 xs:pt-8 xxs:pt-6 font-[Montserrat] font-semibold'>Kết nối với chúng tôi</div>
                <div className='flex justify-around md:w-[256px] sm:w-[190px] xs:w-[170px] xxs:w-[170px] xs:pt-7 xxs:pt-3'>
                  <a href='https://zalo.me/1623670409453822014' target="_blank"><Image src={IconZalo} alt='icon-zalo' className='md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] xs:w-[30px] xs:h-[30px] xxs:w-[30px] xxs:h-[30px]' /></a>
                  <Image src={IconTele} alt='icon-tele' className='md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] xs:w-[30px] xs:h-[30px] xxs:w-[30px] xxs:h-[30px]' />
                  <a href='https://www.bsi.com.vn/' target="_blank"><Image src={IconLogo} alt='icon-logo' className='md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] xs:w-[30px] xs:h-[30px] xxs:w-[30px] xxs:h-[30px]' /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </Fragment>
  );
}