import Image from "next/image";

export default function BackToHome() {
  return (
    <a href="/">
      <div className="absolute top-5 left-5 md:top-10 md:left-10 flex gap-x-2">
        <Image src="/svgs/back-square.svg" alt="back button" width={24} height={24} />
        <p className="text-secondary-300">Back to Home Page</p>
      </div>
    </a>
  );
}
