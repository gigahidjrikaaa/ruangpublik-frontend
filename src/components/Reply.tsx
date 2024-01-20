export default function Reply() {
  return (
    <>
      <div className="w-full h-[1px] bg-neutral-200 my-4"></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[14px] items-center">
                <div className="flex gap-3 text-[14px] items-center">
                  <div className="size-[32px] flex-shrink-0 bg-gradient-to-br from-blue-500 to bg-purple-400 rounded-full" />
                  <span className="text-neutral-900">Username</span>
                  <span className="text-neutral-500 ">•</span>
                  <span className="text-neutral-500  ">1 hour ago</span>
                </div>

                <div className="mr-4 text-blue-500 outline-blue-300 bg-blue-200 sm:px-5 py-1 sm:py-1 outline outline-1 rounded-full flex gap-2 items-center font-semibold">
                  Setuju
                </div>
              </div>

              <div className="text-neutral-900 mt-1">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod, turpis nec ultricies lobortis, diam velit viverra
                  velit, sed ultricies diam ipsum vitae sem. Nulla facilisi.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Donec sed nunc et magna
                  aliquet aliquet. Donec euismod, turpis nec ultricies. Lorem
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral-200 my-4"></div>
    </>
  );
}
