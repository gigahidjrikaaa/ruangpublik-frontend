import Image from "next/image";
import ScrollDown from "@/../public/ScrollDown.jpg";
import Link from "next/link";

export default function Hero() {
  return(
    <main className="min-h-screen bg-red-500 bg-[url(/HeroBG.jpg)] bg-cover flex flex-col justify-between items-center pt-[100px] pb-[50px]">
      <h1 className="text-[72px] font-semibold">Suaramu, suara rakyat Indonesia</h1>
      <Link className="flex flex-col justify-center items-center gap-3" href="#intro">
        <h1 className="text-[20px]">Suarakan Sekarang.</h1>
        <Image src={ScrollDown} alt="Scroll Down" className="rounded-[14px] animate-bounce" />
      </Link>
    </main>
  );
}