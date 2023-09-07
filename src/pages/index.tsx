import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Logo from '../../public/assets/image/logo.png'
import Item1 from '../../public/assets/image/item-1.png'
import Item2 from '../../public/assets/image/item-2.png'
import Item3 from '../../public/assets/image/item-3.png'
import Item4 from '../../public/assets/image/item-4.png'
import Laptop from '../../public/assets/image/laptop-layout.png'
import Phone from '../../public/assets/image/iphone-layout.png'
import GifLaptop from '../../public/assets/image/section1.2.gif'
import GifPhone from '../../public/assets/image/section1.1.gif'
import TextB from '../../public/assets/image/B.png'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Chứng khoán Beta</title>
        <meta name="author" content="BSI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Giới thiệu về các sản phẩm của Công ty chứng khoán Beta (BSI)" />
        <meta name="keywords" content="đầu tư chứng khoán, thông tin chứng khoán, phân tích chứng khoán" />
        <meta name="keywords" content="B-Market, B-Info, B-Report, B-Signal, " />
        <link rel="canonical" href="https://www.example.com/your-page" />
      </Head>
      <header className='h-[60px] flex justify-between items-center bg-[#154162] sticky top-0 z-50'>
        <div className='logo'>
          <Image src={Logo} alt='logo' ></Image>
        </div>
        <div className='navbar'>
          <ul className="font-medium flex text-white">
            <li>
              <a href="#" className="block py-2 px-9 font-semibold text-[21px]">Dịch vụ</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-9 font-semibold text-[21px]">Sản phẩm</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-9 font-semibold text-[21px]">Liên hệ</a>
            </li>
            <li>
              <button className="mx-5 my-1 block cssbuttons-io-button"><span>Sử dụng ngay</span></button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section className='h-[945px] relative'>
          <div className="bg-[url('../../public/assets/image/background-section1.jpg')] h-full bg-cover bg-center">
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>

            <div className='relative z-10'>
              <div className='flex items-center'>
                <div className='flex'>
                  <Image src={TextB} alt='text-b' />
                  <div className='pl-3'>
                    <div className='text-sign'>
                      <h2 className='text-[#FCB040] text-7xl font-bold'>Sign</h2>
                    </div>
                    <div className='text-content'>
                      <h2 className='text-4xl font-bold'>Công cụ hỗ trợ đầu tư</h2>
                      <h2 className='text-4xl font-bold'>Thông minh - An toàn - Tiện lợi</h2>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='relative translate-x-[270px] translate-y-[190px] w-fit z-20'>
                    <Image src={Phone} alt='phone' className='relative z-10' />
                    <Image src={GifPhone} alt='gif-phone' className='absolute top-[9px] left-[64px] w-[128px] h-[268px] rounded-xl z-0' />
                  </div>
                  <div className='relative w-fit'>
                    <Image src={Laptop} alt='laptop' />
                    <Image src={GifLaptop} alt='gif-laptop' className='absolute top-[14px] left-[48px] w-[355px] h-[211px]' />
                  </div>
                </div>

              </div>
              <hr></hr>
            </div>

          </div>
        </section>
        <section className='solution_section w-[1440px] h-[960px] relative'>
          <div className='solution_section-left'>
            <div className='bg-solution-section w-[1198px] h-[1316px] rounded-[100px] rotate-[20deg]'>
              <div className='rotate-[-20deg]'>
                <h2 className='font-bold text-white text-[65px] '>GIẢI PHÁP</h2>
                <span>
                  PHÂN TÍCH DỮ LIỆU TÀI CHÍNH & GIAO DỊCH TRONG THỜI ĐẠI 4.0
                </span>
              </div>

            </div>
          </div>
          <div className='solution_section-right flex'>
            <div className='item-card '>
              <Image src={Item1} alt='img-item1' width={215} height={212}></Image>
            </div>
            <div className='item-card'>
              <Image src={Item2} alt='img-item2' width={215} height={212}></Image>
            </div>
            <div className='item-card'>
              <Image src={Item3} alt='img-item3' width={215} height={212}></Image>
            </div>
            <div className='item-card'>
              <Image src={Item4} alt='img-item4' width={215} height={212}></Image>
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
      </main>
    </Fragment >
  )
}
