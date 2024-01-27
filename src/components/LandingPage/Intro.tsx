export default function Intro() {
  return (
    <main id="intro" className="min-h-screen bg-neutral-200 text-black py-10">
      <section className="mb-6 flex flex-col gap-3 lg:gap-0 justify-start lg:justify-center items-center lg:flex-row lg:h-[70vh] relative w-screen aspect-square">
        <div className="w-[80%] md:w-[70%] lg:w-[45%] h-[90%] flex-shrink-0 bg-[url(/Intro1.jpg)] bg-cover bg-center overflow-hidden relative self-start rounded-r-[16px]" />
        <div className="w-full flex flex-col justify-center items-center relative">
          <div className="max-w-[545px] xl:max-w-[610px] 2xl:max-w-[800px] py-2 px-[5%] md:px-10">
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

      <section className="flex flex-col-reverse gap-3 lg:gap-0 justify-center items-center lg:flex-row lg:h-[70vh] relative">
        <div className="w-full flex flex-col justify-center items-center bottom-10 lg:bottom-auto">
          <div className="max-w-[545px] xl:max-w-[610px] 2xl:max-w-[800px] py-2 px-[5%] md:px-10 z-[1]">
            <h1 className="text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] font-bold tracking-[-0.64px] leading-[105%]">
              Temukan sudut pandang baru.
            </h1>
            <p className="text-[20px] md:text-[24px] xl:text-[30px] 2xl:text-[35px] text-justify">
              Indonesia sangat beragam, termasuk pemikirannya. Semut di seberang
              pulau terlihat, gajah di pelupuk tak nampak.
            </p>
          </div>
        </div>
        <div className="w-[80%] lg:w-[45%] h-full flex-shrink-0 bg-[url(/Intro2.jpg)] bg-cover bg-center overflow-hidden relative self-end rounded-l-[16px] aspect-square" />
      </section>
    </main>
  );
}
