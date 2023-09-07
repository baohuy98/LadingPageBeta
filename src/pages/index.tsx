import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Logo from '../../public/assets/image/logo.png'
import Item1 from '../../public/assets/image/item-1.png'
import Item2 from '../../public/assets/image/item-2.png'
import Item3 from '../../public/assets/image/item-3.png'
import Item4 from '../../public/assets/image/item-4.png'

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
      <header className='container mx-auto h-[60px] flex justify-between items-center bg-[#154162] sticky top-0'>
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
              <button className="mx-4 my-1 block cssbuttons-io-button"><span>Sử dụng ngay</span></button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section></section>
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
