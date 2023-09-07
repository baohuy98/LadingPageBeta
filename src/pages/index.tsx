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
      <header className='w-[1440px] h-[60px]'>
        <div className='logo'>
          <Image src={Logo} alt='logo' ></Image>
        </div>
        <div className='navbar'></div>
      </header>
      <main>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </Fragment>
  )
}
