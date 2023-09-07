import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Logo from "../../public/assets/image/logo.png";
import Item1 from "../../public/assets/image/item-1.png";
import Item2 from "../../public/assets/image/item-2.png";
import Item3 from "../../public/assets/image/item-3.png";
import Item4 from "../../public/assets/image/item-4.png";

export default function Home() {
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
      </Head>
      <header className="container mx-auto h-[60px] flex justify-between items-center bg-[#154162] sticky top-0">
        <div className="logo">
          <Image src={Logo} alt="logo"></Image>
        </div>
        <div className="navbar">
          <ul className="font-medium flex text-white">
            <li>
              <a href="#" className="block py-2 px-9 font-semibold text-[21px]">
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-9 font-semibold text-[21px]">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-9 font-semibold text-[21px]">
                Liên hệ
              </a>
            </li>
            <li>
              <button className="mx-4 my-1 block cssbuttons-io-button">
                <span>Sử dụng ngay</span>
              </button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section></section>
        <section className="solution_section w-[1440px] h-[960px] relative ">
          <div className="solution_section-left">
            <div className="bg-solution-section w-[1198px] h-[1316px] rounded-[100px] rotate-[10deg] flex flex-col justify-center items-center">
              <div className="rotate-[-10deg] p-5">
                <h2 className="font-bold text-white text-[55px] text-center mb-10 ">
                  GIẢI PHÁP
                </h2>
                <span className="text-white font-semibold text-[60px]">
                  PHÂN TÍCH DỮ LIỆU TÀI <br /> CHÍNH & GIAO DỊCH <br /> TRONG THỜI ĐẠI
                  4.0
                </span>
              </div>
            </div>
          </div>
          <div className="solution_section-right grid grid-cols-2 absolute bottom-[-40%] right-[-20%] gap-5  ">
            <div className="item-card p-5 flex flex-col justify-between items-center relative z-10">
              <div className="absolute top-0 w-full h-full bg-white opacity-70 z-[-1] drop-shadow-md rounded-xl"></div>
              <Image
                src={Item1}
                alt="img-item1"
                width={215}
                height={200}
              ></Image>
              <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Web Platform</span>
            </div>
            <div className="item-card p-5 flex flex-col justify-between items-center relative z-10">
              <div className="absolute top-0 w-full h-full bg-white opacity-70 z-[-1] drop-shadow-md rounded-xl"></div>
              <Image
                src={Item2}
                alt="img-item1"
                width={215}
                height={200}
              ></Image>
              <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Web Platform</span>
            </div>
            <div className="item-card p-5 flex flex-col justify-between items-center relative z-10">
              <div className="absolute top-0 w-full h-full bg-white opacity-70 z-[-1] drop-shadow-md rounded-xl"></div>
              <Image
                src={Item3}
                alt="img-item1"
                width={215}
                height={200}
              ></Image>
              <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Web Platform</span>
            </div>
            <div className="item-card p-5 flex flex-col justify-between items-center relative z-10">
              <div className="absolute top-0 w-full h-full bg-white opacity-70 z-[-1] drop-shadow-md rounded-xl"></div>
              <Image
                src={Item4}
                alt="img-item1"
                width={215}
                height={200}
              ></Image>
              <span className="text-[#01A7FB] font-bold text-[30px] mt-5">Web Platform</span>
            </div>

          </div>
        </section>
        <section></section>
        <section></section>
      </main>
    </Fragment>
  );
}
