import Image from 'next/image'
import { Fragment } from 'react'
import Head from 'next/head'
import Logo from '../../public/assets/image/logo.png'

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
        <section></section>
        <section></section>
        <section></section>
      </main>
    </Fragment >
  )
}
