import Image from "next/image";
import Logo from "@/../public/Logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white p-[14px] flex justify-between items-center font-">
      <Link href="/">
        <Image src={Logo} alt="Logo Ruang Publik" className="w-[105px]" />
      </Link>
      <form className="relative">
        <input
          type="text"
          className="outline outline-1 outline-black w-[430px] py-1 px-4 rounded-full text-neutral-600"
          placeholder="Cari sesuatu di sini"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
        >
          <path
            d="M7.66659 14C11.1644 14 13.9999 11.1645 13.9999 7.66668C13.9999 4.16887 11.1644 1.33334 7.66659 1.33334C4.16878 1.33334 1.33325 4.16887 1.33325 7.66668C1.33325 11.1645 4.16878 14 7.66659 14Z"
            stroke="#757575"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.6666 14.6667L13.3333 13.3333"
            stroke="#757575"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </form>
      <button className="rounded-full bg-blue-500 px-6 py-[6px] font-semibold">
        Login
      </button>
    </nav>
  );
}
