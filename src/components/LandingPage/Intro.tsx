export default function Intro() {
  return (
    <main id="intro" className="min-h-screen bg-neutral-200 text-black">
      <section className="flex flex-col justify-center items-center md:flex-row h-[70vh] max-h-[800px] 2xl:max-h-none relative">
        <div className="w-full lg:w-[45%] h-full flex-shrink-0 bg-[url(/Intro1.jpg)] bg-cover bg-center overflow-hidden relative" />
        <div className="w-full flex flex-col justify-center items-center absolute bottom-10 lg:bottom-auto lg:relative">
          <div className="max-w-[545px] xl:max-w-[610px] 2xl:max-w-[800px] py-2 px-[5%] md:px-10 bg-white lg:bg-transparent">
            <h1 className="text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] font-bold tracking-[-0.64px] leading-[105%]">
              Jangan biarkan suaramu terpendam.
            </h1>
            <p className="text-[20px] md:text-[24px] xl:text-[30px] 2xl:text-[35px] text-justify">
              Suarakan pendapatmu terhadap Rancangan Undang-Undang. Kedaulatan
              ada di tanganmu!
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center md:flex-row h-[70vh] max-h-[800px] 2xl:max-h-none relative">
        <div className="w-full flex flex-col justify-center items-center absolute bottom-10 lg:bottom-auto lg:relative">
          <div className="max-w-[545px] xl:max-w-[610px] 2xl:max-w-[800px] py-2 px-[5%] md:px-10 bg-white lg:bg-transparent z-[1]">
            <h1 className="text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] font-bold tracking-[-0.64px] leading-[105%]">
              Jangan biarkan suaramu terpendam.
            </h1>
            <p className="text-[20px] md:text-[24px] xl:text-[30px] 2xl:text-[35px] text-justify">
              Suarakan pendapatmu terhadap Rancangan Undang-Undang. Kedaulatan
              ada di tanganmu!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-full flex-shrink-0 bg-[url(/Intro1.jpg)] bg-cover bg-center overflow-hidden relative" />
      </section>
    </main>
  );
}
