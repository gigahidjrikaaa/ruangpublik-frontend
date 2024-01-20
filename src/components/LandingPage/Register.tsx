import Link from "next/link";
import PrimaryButton from "../PrimaryButton";

export default function Register() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center bg-[url(/Register.jpg)] text-white bg-cover">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 
      <h1 className="mt-[100px] lg:mt-[120px] px-[5%] md:px-10 text-center text-[28px] md:text-[32px] leading-[105%] font-semibold relative z-[1] text-shadow">
        Bergabunglah dan buat Indonesia menjadi lebih baik.
      </h1>
      <Link href="/signup" className="z-10">
        <PrimaryButton text="Daftar Sekarang!" onClick={() => {}} className="mt-[30px] text-[33px] z-10" />
      </Link>
    </section>
  );
}
