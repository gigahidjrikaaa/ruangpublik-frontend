import Logo from "@/../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-200 pt-10 text-neutral-800">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="flex items-center flex-col gap-2 mb-4">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo Ruang Publik"
              className="w-[90px] lg:w-[105px]"
            />
          </Link>
          <p className="text-[14px] mb-4 text-center">
            Ruang Publik adalah sebuah platform yang memungkinkan kamu untuk <br />
            berbagi pendapat dan menyalurkan aspirasi.
          </p>
        </div>
        <div className="bg-blue-500 w-full py-2 font-medium text-[12px] text-center relative text-white">
          COPYRIGHT 2024. ALL RIGHT RESERVED. RUANGPUBLIK
        </div>
      </div>
    </footer>
  );
}
