export default function Intro() {
  return (
    <main id="intro" className="min-h-screen bg-neutral-200 text-black">
      <section className="flex min-h-screen">
        <div className="w-1/2 bg-red-500"></div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="max-w-[545px]">
            <h1 className="text-[32px] font-bold tracking-[-0.64px]">
              Jangan biarkan suaramu terpendam.
            </h1>
            <p className="text-[24px] text-justify">
              Suarakan pendapatmu terhadap Rancangan Undang-Undang. Kedaulatan
              ada di tanganmu!
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="max-w-[545px]">
            <h1 className="text-[32px] font-bold tracking-[-0.64px]">
              Temukan sudut pandang baru.
            </h1>
            <p className="text-[24px] text-justify">
              Indonesia sangat beragam, termasuk pemikirannya.{" "}
              <span className="italic">
                Semut di seberang pulau terlihat, gajah di pelupuk tak nampak.
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-red-500"></div>
      </section>
    </main>
  );
}
