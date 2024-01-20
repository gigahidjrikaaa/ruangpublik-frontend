import Image from "next/image";
import ScrollDown from "@/../public/ScrollDown.jpg";
import Link from "next/link";
import Head from "next/head";

export default function Hero() {
  return(
    <>
      <Head>
        <link rel="preload" href="/HeroBG.jpg" as="image" />
      </Head>
      <main className="min-h-screen flex flex-col justify-between items-center pb-[50px] text-white">
        <div className="w-full h-full absolute bg-[url(/HeroBG.jpg)] bg-cover bg-center z-[1]"/>
        <h1 className="mt-[100px] lg:mt-[120px] px-[5%] md:px-10 text-center text-[45px] md:text-[60px] lg:text-[72px] leading-[105%] font-semibold relative z-[1]">Suaramu, suara rakyat Indonesia</h1>
        <Link className="flex flex-col justify-center items-center gap-3 relative z-[1]" href="#intro">
          <h1 className="text-[18px] md:text-[20px]">Suarakan Sekarang.</h1>
          <Image src={ScrollDown} alt="Scroll Down" className="w-[25px] lg:w-[34px] rounded-[14px] animate-bounce" />
        </Link>
      </main>
    </>
  );
} 