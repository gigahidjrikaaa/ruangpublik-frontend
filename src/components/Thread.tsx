export default function Thread() {
  return (
    <div className="w-full p-5 min-w-[200px] max-w-[600px] min-h-[200px] text shadow-md rounded-[12px] text-neutral-900">
      <section className="flex items-center gap-3">
        <div className="size-[44px] bg-gradient-to-br from-blue-500 to bg-purple-400 rounded-full" />
        <div className="flex gap-[13px] items-start">
          <div className="flex flex-col">
            <h1 className="font-semibold tracking-[-0.32px] leading-[100%]">
              Pemerintah Republik Indonesia
            </h1>
            <h2 className="text-[12px]">20 Jam yang lalu</h2>
          </div>
          <div className="rounded-full bg-success-100 text-[12px] text-success-700 px-3 py-1">
            Akun Resmi
          </div>
        </div>
      </section>

      <section className="mt-[10px]">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-[18px]">
            RUU Cipta Kerja Omnibus Law
          </h1>
          <div className="bg-neutral-300 text-[12px] px-3 rounded-[4px]">
            Draf
          </div>
        </div>
        <p className="font-medium mt-[5px]">
          Lorem ipsum dolor sit amet consectetur. Quis nunc lectus feugiat
          iaculis ridiculus donec cursus. Nec quam at consequat amet egestas
          <span className="text-neutral-500">&nbsp;...Lihat Selengkapnya</span>
        </p>
      </section>
    </div>
  );
}