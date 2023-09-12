import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import Logo from '../../public/assets/image/logo.png'
import LogoColor from '../../public/assets/image/logo-color.png'
import Item1 from '../../public/assets/image/item-1.png'
import Item2 from '../../public/assets/image/item-2.png'
import Item3 from '../../public/assets/image/item-3.png'
import Item4 from '../../public/assets/image/item-4.png'
import Laptop from '../../public/assets/image/laptop-layout.png'
import Phone from '../../public/assets/image/phone-layout.png'
import Phone2 from '../../public/assets/image/phone-layout2.png'
import GifLaptop from '../../public/assets/image/section1.2.gif'
import GifPhone from '../../public/assets/image/section1.1.gif'
import TextB from '../../public/assets/image/B.png'
import QRTele from '../../public/assets/image/QR-telegram.png'
import QRZalo from '../../public/assets/image/QR-Zalo.png'
import BMarketTele from '../../public/assets/image/B-market-telegram mockup.png'
import BSignal from '../../public/assets/image/Rectangle-bsign.png'
import IconLogo from '../../public/assets/image/icon-logo.png'
import IconTele from '../../public/assets/image/icon-tele.png'
import IconZalo from '../../public/assets/image/icon-zalo.png'
import section2CSS from '../styles/section2.module.css'
import BInfoTablet from '../../public/assets/image/b-info-tablet.png'
import BInfo1 from '../../public/assets/image/b-info1.png'
import BInfo2 from '../../public/assets/image/b-info2.png'
import BInfo3 from '../../public/assets/image/b-info3.png'
import BInfo4 from '../../public/assets/image/b-info4.png'
import BInfoMobile1 from '../../public/assets/image/b-info1-mobile.png'
import BInfoMobile2 from '../../public/assets/image/b-info2-mobile.png'
import BInfoMobile3 from '../../public/assets/image/b-info3-mobile.png'
import BInfoMobile4 from '../../public/assets/image/b-info4-mobile.png'
import Item1Hover from '../../public/assets/image/itemHover-1.png'
import Item2Hover from '../../public/assets/image/itemHover-2.png'
import Item3Hover from '../../public/assets/image/itemHover-3.png'
import Item4Hover from '../../public/assets/image/itemHover-4.png'
import { AiOutlineArrowRight } from "react-icons/ai";

import 'animate.css';

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slideIndexImg, setSlideIndexImg] = useState(1);
  const [slideIndexImg2, setSlideIndexImg2] = useState(1);

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
      slidesImg[i].style.display = "none";
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
        <meta name="author" content="BSI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="B-Sign là hệ thống công cụ hỗ trợ đầu tư chứng khoán thông minh. Cung cấp và phân tích dữ liệu chứng khoán real - time nhanh chóng, đầy đủ và chính xác hữu ích cho nhà đầu tư."
        />
        <meta
          name="keywords"
          content="đầu tư chứng khoán, thông tin chứng khoán, phân tích chứng khoán"
        />
        <meta
          name="keywords"
          content="B-Market, B-Info, B-Report, B-Signal, "
        />
        <link rel="canonical" href="https://www.example.com/your-page" />
        <link rel="preload" href="https://resource.bsi.com.vn/resources/landing-page/background-section1.jpg" as="image" />
      </Head>

      {/* HEADER */}
      <header className='h-[60px] flex justify-between items-center bg-[#154162] sticky top-0 z-50'>
        <div className='logo'>
          <Image src={Logo} alt='logo'></Image>
        </div>
        <div className='navbar'>
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
              <button className="mx-5 my-1 block cssbuttons-io-button"><span>Sử dụng ngay</span></button>
            </li>
          </ul>
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* SECTION B-SIGN */}
        <section className='bsign_section relative z-20 overflow-hidden'>
          <div className="bg-[url('https://resource.bsi.com.vn/resources/landing-page/background-section1.jpg')] h-full bg-cover bg-center">
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
            <div className='relative z-10'>
              <div className='flex xl:flex-row lg:flex-col md:flex-col items-center justify-evenly p-[45px]'>
                <div className='flex animate__animated animate__fadeInLeft animate__delay-1s'>
                  <Image src={TextB} alt='text-b' />

                  <div className='pl-3'>
                    <div className='text-sign'>
                      <h2 className='text-[#FCB040] text-8xl font-bold'>Sign</h2>
                    </div>

                    <div className='text-content mt-5'>
                      <div className='text-4xl font-bold h-[45px]'>Công cụ hỗ trợ đầu tư</div>
                      <div className='text-4xl font-bold h-[45px]'>Thông minh - An toàn - Tiện lợi</div>
                    </div>
                  </div>
                </div>

                <div className='animate__animated animate__fadeIn animate__slower'>
                  <div className='relative translate-x-[270px] translate-y-[190px] w-fit z-30'>
                    <Image src={Phone} alt='phone' className='relative z-10 w-[258px]' />
                    <Image src={GifPhone} alt='gif-phone' className='absolute top-[9px] left-[64px] w-[128px] h-[268px] rounded-xl z-0' />
                  </div>

                  <div className='relative w-fit'>
                    <Image src={Laptop} alt='laptop' />
                    <Image src={GifLaptop} alt='gif-laptop' className='absolute top-[14px] left-[48px] w-[355px] h-[211px]' />
                  </div>
                </div>
              </div>

              <div className='grid place-items-center'>
                <div className='border-solid border-white border-b-2 border-t-0 border-x-0 w-[1515px] h-[3px]'></div>
              </div>


              <div className='grid place-items-center animate__animated animate__slideInUp animate__delay-1s '>
                <div className='bsign-content xl:w-[1036px] lg:w-full p-[45px] text-[25px] overflow-hidden'>
                  “... với định hướng phát triển dựa trên hai giá trị cốt lõi là <span className='font-bold'>CON NGƯỜI</span> và <span className='font-bold'>CÔNG NGHỆ</span>, chúng tôi đang hoàn thành sứ mệnh cung cấp đến những <span className='font-bold'>Nhà đầu tư cá nhân</span> các giải pháp số hóa gần gũi, hiệu quả, dễ dàng tiếp cận và <span className='font-bold'>hoàn toàn miễn phí</span>...”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION SOLUTION */}
        <section className='solution_section w-[1440px] h-screen relative z-10' id='solution_section '>
          <div className='solution_section-left rotate-[15deg] translate-x-[-13%] '>
            <div className={`bg-solution-section w-[80%] h-[1316px] rounded-[100px]  flex flex-col justify-center items-center animate__animated animate__rotateInDownLeft wow`}>
              <div className='h-fit rotate-[-15deg] translate-x-[15%] translate-y-[-15%] animate__animated animate__fadeIn'>
                <h2 className='font-bold text-white text-[65px] text-center opacity-80 '>GIẢI PHÁP</h2>
                <span className='font-bold text-white text-[65px]' >
                  PHÂN TÍCH DỮ LIỆU TÀI <br /> CHÍNH & GIAO DỊCH  <br /> TRONG THỜI ĐẠI 4.0
                </span>
              </div>
            </div>
          </div>
          <div className="solution_section-right grid grid-cols-2 absolute top-[30%] right-[-10%] gap-y-5 gap-x-10  ">
            <div
              onMouseOver={() => {
                setIsHoveredImg1(true)
              }}
              onMouseOut={() => {
                setIsHoveredImg1(false)
              }} className={` item-card_1  z-10 animate__animated animate__fadeInDown wow`}>
              {!isHoveredImg1 ?
                <div className={`${section2CSS.item_cardBackground}   w-[305px]  flex flex-col justify-between items-center    relative p-5`}>
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
                    <span className='text-[20px] font-semibold text-white'>Webapp đầy đủ và toàn diện <br /> với các công cụ hỗ trợ phân <br /> tích dữ & quan sát thị trường</span>
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
                <div className={`${section2CSS.item_cardBackground}  w-[305px]  flex flex-col justify-between items-center    relative p-5`}>
                  <Image
                    src={Item2}
                    width={200}
                    height={150}
                    alt="img-item1"
                  ></Image>
                  <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Web Platform</span>
                </div>
                :
                <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover2} ${isHoveredImg2 ? 'animate__animated animate__fadeIn' : ''} h-[305px] relative`}>
                  <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                    <h1 className='text-[#FEBC08] text-[40px] font-bold'>
                      B-Info
                    </h1>
                    <span className='text-[20px] font-semibold text-white'>Webapp đầy đủ và toàn diện <br /> với các công cụ hỗ trợ phân <br /> tích dữ & quan sát thị trường</span>
                    <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                      <a className='mr-2' href="https://binfo.bsi.com.vn/" target='_blank'>Xem thêm  </a>
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
                <div className={`${section2CSS.item_cardBackground}  w-[305px]  flex flex-col justify-between items-center    relative p-5`}>
                  <Image
                    src={Item3}
                    width={200}
                    height={150}
                    alt="img-item1"
                  ></Image>
                  <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Web Platform</span>
                </div>
                :
                <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover3} ${isHoveredImg3 ? 'animate__animated animate__fadeIn' : ''} h-[305px] relative`}>
                  <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                    <h1 className='text-[#FEBC08] text-[40px] font-bold'>
                      B-Info
                    </h1>
                    <span className='text-[20px] font-semibold text-white'>Webapp đầy đủ và toàn diện <br /> với các công cụ hỗ trợ phân <br /> tích dữ & quan sát thị trường</span>
                    <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                      <a className='mr-2' href="https://binfo.bsi.com.vn/" target='_blank'>Xem thêm  </a>
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
                <div className={`${section2CSS.item_cardBackground}  w-[305px]  flex flex-col justify-between items-center    relative p-5`}>
                  <Image
                    src={Item4}
                    width={200}
                    height={150}
                    alt="img-item1"
                  ></Image>
                  <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Web Platform</span>
                </div>
                :
                <div className={`${section2CSS.item_cardBackgroundHover} ${section2CSS.item_cardBackgroundHover3} ${isHoveredImg4 ? 'animate__animated animate__fadeIn' : ''} h-[305px] relative`}>
                  <div className='flex flex-col justify-between items-center h-full  p-5  ' >
                    <h1 className='text-[#FEBC08] text-[40px] font-bold'>
                      B-Info
                    </h1>
                    <span className='text-[20px] font-semibold text-white'>Webapp đầy đủ và toàn diện <br /> với các công cụ hỗ trợ phân <br /> tích dữ & quan sát thị trường</span>
                    <div className='flex items-center mt-10 text-orange-500 hover:text-orange-300 duration-500 '>
                      <a className='mr-2' href="https://binfo.bsi.com.vn/" target='_blank'>Xem thêm  </a>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        {/* SECTION INFO */}
        <section className='webInfo_section bg-webInfo-section h-[750px] relative z-30 overflow-hidden'>
          <div className='grid grid-cols-2'>
            <div className='grid place-items-center'>
              <div className='h-[580px] w-full relative'>
                <div className='relative top-[155px] left-[100px] w-fit'>
                  <Image src={BInfoTablet} alt='b-info-tablet' className='w-[278px] h-[292px]' />
                </div>

                <div className='relative top-[-170px] left-[320px] z-20'>
                  <Image src={Laptop} alt='laptop' className='relative z-10' />
                  <div className='absolute top-[11px] left-[54px] w-[350px] overflow-hidden flex'>
                    <Image src={BInfo1} alt='b-info1' className='mySlides-img animate__animated animate__slideInRight rounded-lg w-[350px]' />
                    <Image src={BInfo2} alt='b-info2' className='mySlides-img animate__animated animate__slideInRight rounded-lg w-[350px]' />
                    <Image src={BInfo3} alt='b-info3' className='mySlides-img animate__animated animate__slideInRight rounded-lg w-[350px]' />
                    <Image src={BInfo4} alt='b-info4' className='mySlides-img animate__animated animate__slideInRight rounded-lg w-[350px]' />
                  </div>
                </div>

                <div className='relative z-30 top-[-360px] left-[282px]'>
                  <Image src={Phone2} alt='phone2' />
                  <div className='absolute top-[21px] left-[31px] w-[96px] h-[211px] overflow-hidden flex'>
                    <Image src={BInfoMobile1} alt='b-info1-mobile' className='mySlides-img2 animate__animated animate__slideInRight rounded-lg w-[96px] h-[207px]' />
                    <Image src={BInfoMobile2} alt='b-info2-mobile' className='mySlides-img2 animate__animated animate__slideInRight rounded-lg w-[96px] h-[207px]' />
                    <Image src={BInfoMobile3} alt='b-info3-mobile' className='mySlides-img2 animate__animated animate__slideInRight rounded-lg w-[96px] h-[207px]' />
                    <Image src={BInfoMobile4} alt='b-info4-mobile' className='mySlides-img2 animate__animated animate__slideInRight rounded-lg w-[96px] h-[207px]' />
                  </div>
                </div>
              </div>

              <div className='flex items-center'>
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
                <div className='text-white pt-[125px]'>
                  <h2 className='text-5xl font-bold ml-2'>Web Platform  B-Info</h2>
                  <p className='text-2xl font-bold pt-[50px]'>
                    Nền tảng hỗ trợ đầu tư MIỄN PHÍ
                    <br></br>
                    Dễ dàng truy cập MỌI LÚC, MỌI NƠI
                  </p>
                  <ul className='list-disc pt-5 text-xl ml-9'>
                    <li className='pt-5'>Phân tích toàn diện và chuyên sâu về doanh nghiệp, thị trường.</li>
                    <li className='pt-5'>Cập nhật dữ liệu liên tục theo thời gian thực.</li>
                    <li className='pt-5'>Cung cấp thông tin thị trường trong và ngoài nước.</li>
                    <li className='pt-5'>Giao diện trực quan, trải nghiệm dễ dàng.</li>
                    <li className='pt-5'>Truy cập miễn phí toàn bộ công cụ hỗ trợ đầu tư.</li>
                  </ul>
                </div>
              </div>

              <div className='mySlides animate__animated animate__slideInRight'>
                <div className='text-white pt-[125px]'>
                  <h2 className='text-5xl font-bold ml-2'>Dữ liệu vĩ mô đa dạng</h2>
                  <p className='text-2xl font-bold pt-[50px]'>
                    Thông tin, dữ liệu kinh tế vĩ mô Việt Nam và thế giới
                    <br></br>
                    Cập nhật nhanh về thị trường, phân tích sâu về kinh tế
                  </p>
                  <ul className='list-disc pt-5 text-xl ml-9'>
                    <li className='pt-5'>Biểu đồ và đồ thị sinh động, dễ dàng nhìn thấy xu hướng thị trường.</li>
                    <li className='pt-5'>Xây dựng kiến thức về tài chính và kinh tế với các chỉ số quan trọng.</li>
                    <li className='pt-5'>Đa dạng hóa danh mục đầu tư và giảm thiểu rủi ro từ nguồn thông tin đáng tin cậy.</li>
                    <li className='pt-5'>Đưa ra các yếu tố ảnh hưởng, điều chỉnh chiến lược đầu tư.</li>
                  </ul>
                </div>
              </div>

              <div className='mySlides animate__animated animate__slideInRight'>
                <div className='text-white pt-[125px]'>
                  <h2 className='text-5xl font-bold ml-2'>Tổng quan cổ phiếu</h2>
                  <p className='text-2xl font-bold pt-[50px]'>
                    Tra cứu cổ phiếu nhanh chóng
                    <br></br>
                    Thông tin toàn diện, chính xác
                  </p>
                  <ul className='list-disc pt-5 text-xl ml-9'>
                    <li className='pt-5'>Phân tích chuyên sâu về biến động giá, chỉ số tài chính và sự kiện ảnh hưởng.</li>
                    <li className='pt-5'>Thống kê chi tiết các giao dịch, yếu tố ảnh hưởng trực tiếp đến cổ phiếu.</li>
                    <li className='pt-5'>Tiết kiệm thời gian khi tra cứu báo cáo tài chính doanh nghiệp.</li>
                    <li className='pt-5'>Được tiếp cận đa dạng và phong phú thông tin về doanh nghiệp.</li>
                  </ul>
                </div>
              </div>

              <div className='mySlides animate__animated animate__slideInRight'>
                <div className='text-white pt-[125px]'>
                  <h2 className='text-5xl font-bold ml-2'>Công cụ đầu tư tiện lợi</h2>
                  <p className='text-2xl font-bold pt-[50px]'>
                    Công cụ hỗ trợ đầu tư độc quyền
                    <br></br>
                    Hiệu suất sinh lời vượt trội và ổn định
                  </p>
                  <ul className='list-disc pt-5 text-xl ml-9'>
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
        <section className='bmarket_section'>
          <div className='grid grid-cols-2'>
            <div className='px-[160px] py-[60px]'>
              <h2 className='bmarket_section-title'>B- Market : Môi giới Số cho Nhà đầu tư </h2>

              <p className='font-bold text-2xl pt-3'>Hỗ trợ nhu cầu dữ liệu thị trường theo thời gian<br></br> thực tự động, tiện lợi, chuẩn xác. Hoạt động trên<br></br> các nền tảng các mạng xã hội Zalo, Telegram. </p>

              <ul>
                <li className='pt-7'>
                  <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                    </svg>
                    <p className='text-2xl pl-3'>Nhanh chóng và hiệu quả.</p>
                  </span>
                </li>
                <li className='pt-6'>
                  <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                    </svg>
                    <p className='text-2xl pl-3'>Trải nghiệm tiện lợi.</p>
                  </span>
                </li>
                <li className='pt-6'>
                  <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                    </svg>
                    <p className='text-2xl pl-3'>Không ngừng hoàn thiện</p>
                  </span>
                </li>
              </ul>

              <div className='flex justify-around pt-10'>
                <div className='grid place-items-center'>
                  <Image src={QRZalo} alt='qr-zalo' width={140} height={144.43} />
                  <a href='https://zalo.me/1623670409453822014' target="_blank" className='text-2xl text-white font-bold'><button className='btn-zalo px-[69px] py-[10px]'>Zalo</button></a>
                </div>
                <div className='grid place-items-center'>
                  <Image src={QRTele} alt='qr-tele' width={140} height={144.43} />
                  <a href='https://t.me/betaEmarketbot' target="_blank" className='text-2xl text-white font-bold'><button className='btn-tele px-[38px] py-[10px]'>Telegram</button></a>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 py-[60px]'>
              <div className='relative w-fit z-30'>
                <Image src={Phone} alt='phone' className='relative z-10' />
                <Image src={GifPhone} alt='gif-phone' className='absolute top-[20px] left-[124px] w-[227px] h-[488px] rounded-xl z-0' />
              </div>
              <div>
                <Image src={BMarketTele} alt='b-market-tele' className='w-[333px] h-[528px]' />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION B-REPORT */}
        <section className='breport_section bg-breport-section h-[750px] relative z-30'></section>

        {/* SECTION B-SIGNAL */}
        <section className='bsignal_section relative'>
          <div className='grid grid-cols-2'>
            <div>
              <h2 className='bsignal_section-title pt-[99px]'>Tránh bỏ lỡ những biến <br></br> động thị trường cùng hệ<br></br> thống cảnh báo B-Signal</h2>

              <ul className='mt-[55px] ml-[200px]'>
                <li className='pt-7'>
                  <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                    </svg>
                    <p className='text-2xl pl-3'>Tối ưu hóa quyết định đầu tư dựa trên phân tích chính xác</p>
                  </span>
                </li>
                <li className='pt-6'>
                  <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                    </svg>
                    <p className='text-2xl pl-3'>Cảnh báo thời gian thực bằng tin nhắn</p>
                  </span>
                </li>
                <li className='pt-6'>
                  <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                    </svg>
                    <p className='text-2xl pl-3'>Tương thích trên nhiều nền tảng  khác nhau</p>
                  </span>
                </li>
                <li className='pt-6'>
                  <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                    </svg>
                    <p className='text-2xl pl-3'>Tùy chỉnh danh mục thông báo theo nhu cầu cá nhân.</p>
                  </span>
                </li>
                <li className='pt-6'>
                  <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M29.3343 13.1146L27.2942 10.7444C26.9042 10.2944 26.5892 9.45432 26.5892 8.85428V6.30413C26.5892 4.71403 25.2841 3.40895 23.694 3.40895H21.1438C20.5588 3.40895 19.7037 3.09394 19.2537 2.70391L16.8836 0.66379C15.8485 -0.221263 14.1534 -0.221263 13.1033 0.66379L10.7481 2.71891C10.2981 3.09394 9.44307 3.40895 8.85803 3.40895H6.26288C4.67278 3.40895 3.3677 4.71403 3.3677 6.30413V8.86928C3.3677 9.45432 3.05268 10.2944 2.67766 10.7444L0.652539 13.1296C-0.217513 14.1646 -0.217513 15.8447 0.652539 16.8798L2.67766 19.2649C3.05268 19.715 3.3677 20.555 3.3677 21.14V23.7052C3.3677 25.2953 4.67278 26.6004 6.26288 26.6004H8.85803C9.44307 26.6004 10.2981 26.9154 10.7481 27.3054L13.1183 29.3455C14.1534 30.2306 15.8485 30.2306 16.8986 29.3455L19.2687 27.3054C19.7187 26.9154 20.5588 26.6004 21.1588 26.6004H23.709C25.2991 26.6004 26.6042 25.2953 26.6042 23.7052V21.155C26.6042 20.57 26.9192 19.715 27.3092 19.2649L29.3493 16.8948C30.2194 15.8597 30.2194 14.1496 29.3343 13.1146ZM21.2338 12.1695L13.9884 19.4149C13.7784 19.6249 13.4934 19.745 13.1934 19.745C12.8933 19.745 12.6083 19.6249 12.3983 19.4149L8.76803 15.7847C8.333 15.3497 8.333 14.6296 8.76803 14.1946C9.20305 13.7596 9.9231 13.7596 10.3581 14.1946L13.1934 17.0298L19.6437 10.5794C20.0788 10.1444 20.7988 10.1444 21.2338 10.5794C21.6689 11.0144 21.6689 11.7345 21.2338 12.1695Z" fill="#0A77FF" />
                    </svg>
                    <p className='text-2xl pl-3'>Đã được tích hợp vào các sản phẩm công nghệ thuộc BETA.</p>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <Image src={BSignal} alt='b-signal' className='h-[750px] w-[767px]' />
            </div>
          </div>
          <div className='absolute bottom-0 right-0 p-4'>
            <a href='#' className='flex items-center'>
              <span className='animate__animated animate__bounce animate__slow animate__infinite'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                  <path d="M11.4605 0L22 19H0L11.4605 0Z" fill="#0EF809" />
                </svg>
              </span>
              <span className='font-bold text-2xl pl-[10px]'>Đầu trang</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <section className='contact_section h-[500px]' id='contact_section'>
          <div className="bg-[url('../../public/assets/image/footer-img.png')] h-full bg-center bg-[length:100%_500px]">
            <div className='text-center pt-[79px]'>
              <h2 className='contact_section-title text-[55px] font-bold'>MIỄN PHÍ DÙNG THỬ CÔNG CỤ HỖ TRỢ <br></br> ĐẦU TƯ SINH LỜI HIỆU QUẢ </h2>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex justify-around pt-[85px] w-[1000px]'>
                <a href='https://zalo.me/1623670409453822014' target="_blank" className='text-2xl text-white font-bold'><button className='btn-zalo px-[69px] py-[10px]'>Zalo</button></a>
                <a href='https://t.me/betaEmarketbot' target="_blank" className='text-2xl text-white font-bold'><button className='btn-tele px-[38px] py-[10px]'>Telegram</button></a>
                <a href='#' className='text-2xl text-white font-bold'><button className='btn-web px-[13px] py-[10px]'>Web Platform</button></a>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[#041339] h-[536px]'>
          <div className='flex px-[60px] py-[70px]'>
            <div className='w-[70%]'>
              <Image src={LogoColor} alt='logo-color' className='w-[250px] h-[98px]' />
              <div className='text-white text-2xl pt-10 font-[Montserrat]'>
                <ul>
                  <li>Trụ sở: Toà nhà BETA - Lầu 4&5, số 55 Nam Kỳ Khởi Nghĩa,<br></br> Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh</li>
                  <li className='pt-7'>Dị̣ch vụ khách hàng: <a href='tel:02839142626' className='hover:underline'>(028) 3914 2626</a> - <a href='tel:0813337444' className='hover:underline'>08 1333 7444</a></li>
                  <li className='pt-7'>Trụ sở chính BETA: <a href='tel:02839142929' className='hover:underline'>(028) 3914 2929</a></li>
                  <li className='pt-7'>Email: <a href='mailto:support@bsi.com.vn' className='hover:underline'>support@bsi.com.vn</a></li>
                </ul>
              </div>
            </div>
            <div className='w-[30%]'>
              <div className='text-white text-2xl pt-16 font-[Montserrat] font-semibold'>Kết nối với chúng tôi</div>
              <div className='flex justify-around w-[256px] pt-10'>
                <a href='https://zalo.me/1623670409453822014' target="_blank"><Image src={IconZalo} alt='icon-zalo' className='w-[60px] h-[60px]' /></a>
                <Image src={IconTele} alt='icon-tele' className='w-[60px] h-[60px]' />
                <a href='https://www.bsi.com.vn/' target="_blank"><Image src={IconLogo} alt='icon-logo' className='w-[60px] h-[60px]' /></a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </Fragment >
  );
}