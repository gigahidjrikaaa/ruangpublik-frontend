import { useState } from "react";

export default function Reply() {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvote = async () => {
    if (downvoted) {
      setDownvoted(!downvoted);
    }
    setUpvoted(!upvoted);
  };

  const handleDownvote = async () => {
    if (upvoted) {
      setUpvoted(false);
    }
    setDownvoted(!downvoted);
  };

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
        <section className="flex justify-between">
          <div className="flex gap-3">
            <button
              className={`px-3 sm:px-5 py-1  outline outline-1 rounded-full flex gap-2 items-center font-semibold ${
                upvoted
                  ? "text-blue-500 outline-blue-300 bg-blue-200 hover:bg-blue-300"
                  : "text-neutral-500 hover:bg-neutral-300 outline-neutral-300 bg-neutral-200"
              } `}
              onClick={handleUpvote}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill={upvoted ? "#3563E9" : "#9E9E9E"}>
                <path d="M8.98724 16H4.01275V7.91919H0L6.5 0L13 7.91919H8.98724V16Z" />
              </svg>
              1
            </button>
            <button
              className={`px-5 py-1  outline outline-1  rounded-full flex gap-2 items-center font-semibold ${
                downvoted
                  ? "text-red-500 outline-red-300 hover:bg-red-300 bg-red-200"
                  : "text-neutral-500 outline-neutral-300 hover:bg-neutral-300 bg-neutral-200"
              } `}
              onClick={handleDownvote}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill={downvoted ? "#FF0000" : "#9E9E9E"}>
                <path d="M4.01276 1.67984e-07L8.98725 6.02868e-07L8.98725 8.08081L13 8.08081L6.5 16L6.92318e-07 8.08081L4.01276 8.08081L4.01276 1.67984e-07Z" />
              </svg>
            </button>
          </div>
        </section>
      </div>
      <div className="w-full h-[1px] bg-neutral-200 my-4"></div>
    </>
  );
}
