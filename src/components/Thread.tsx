import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface Thread {
  createdAt: string;
  _id: string;
  parents: string[];
  title: string;
  content: string;
  poster: string;
  replies: string[];
  upvotes: string[];
  bookmarks: string[];
  downvotes: string[];
  __v: number;
}

export default function Thread(props: Thread) {
  const [showAll, setShowAll] = useState(false);
  const [comment, setComment] = useState("");
  return (
    <div className="w-full bg-white p-5 min-w-[200px] min-h-[200px] text shadow-md rounded-[12px] text-neutral-900">
      <section className="flex items-center gap-3">
        <div className="size-[44px] flex-shrink-0 bg-gradient-to-br from-blue-500 to bg-purple-400 rounded-full" />
        <div className="flex gap-[13px] items-start">
          <div className="flex flex-col">
            <h1 className="text-[14px] md:text-[16px] font-semibold tracking-[-0.32px] leading-[100%]">
              {props.poster}
            </h1>
            <h2 className="text-[12px]">{props.createdAt}</h2>
          </div>
          <div className="rounded-full w-max flex-shrink-0 bg-success-100 text-[12px] text-success-700 px-3 py-1">
            Akun Resmi
          </div>
        </div>
      </section>

      <section className="mt-[10px]">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-[14.5px] md:text-[18px]">
            {props.title}
          </h1>
          <div className="bg-neutral-300 text-[12px] px-3 rounded-[4px]">
            Draf
          </div>
        </div>
        <p className="font-medium mt-[5px] text-[14px] md:text-[16px] max-w-[600px]">
          {showAll ? props.content : props.content.slice(0, 25)}
          {!showAll && (
            <span
              onClick={() => setShowAll(true)}
              className="text-neutral-500 cursor-pointer"
            >
              &nbsp;...Lihat Selengkapnya
            </span>
          )}
        </p>
        <div>
          <iframe
            src="https://drive.google.com/file/d/1UEFKRJTcsF7Qgw2x644u0F56IzFaCidL/preview"
            className="w-full mt-4"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </section>

      <section className="mt-3 flex justify-between h-[40px]">
        <div className="flex gap-3">
          <button className="px-3 sm:px-5 py-1 sm:py-2 outline outline-1 outline-neutral-300 bg-neutral-200 rounded-full flex gap-2 items-center font-semibold text-neutral-500 hover:bg-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
            >
              <path
                d="M8.98724 16H4.01275V7.91919H0L6.5 0L13 7.91919H8.98724V16Z"
                fill="#9E9E9E"
              />
            </svg>
            {props.upvotes?.length ?? 0}
          </button>
          <button className="px-5 py-1 sm:py-2 outline outline-1 outline-neutral-300 bg-neutral-200 rounded-full flex gap-2 items-center font-semibold text-neutral-500 hover:bg-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
            >
              <path
                d="M4.01276 1.67984e-07L8.98725 6.02868e-07L8.98725 8.08081L13 8.08081L6.5 16L6.92318e-07 8.08081L4.01276 8.08081L4.01276 1.67984e-07Z"
                fill="#9E9E9E"
              />
            </svg>
          </button>
          <button className="px-5 py-1 sm:py-2 outline outline-1 outline-neutral-300 bg-neutral-200 rounded-full flex gap-2 items-center font-semibold text-neutral-500 hover:bg-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M5.95 17C5.72457 17 5.50837 16.9104 5.34896 16.751C5.18955 16.5916 5.1 16.3754 5.1 16.15V13.6H1.7C1.24913 13.6 0.81673 13.4209 0.497918 13.1021C0.179107 12.7833 0 12.3509 0 11.9V1.7C0 1.24913 0.179107 0.81673 0.497918 0.497918C0.81673 0.179107 1.24913 0 1.7 0H15.3C15.7509 0 16.1833 0.179107 16.5021 0.497918C16.8209 0.81673 17 1.24913 17 1.7V11.9C17 12.3509 16.8209 12.7833 16.5021 13.1021C16.1833 13.4209 15.7509 13.6 15.3 13.6H10.115L6.97 16.7535C6.8 16.915 6.5875 17 6.375 17H5.95Z"
                fill="#9E9E9E"
              />
            </svg>
            {props.bookmarks?.length ?? 0}
          </button>
        </div>
        <button className="px-5 py-1 sm:py-2 outline outline-1 outline-neutral-300 bg-neutral-200 rounded-full flex gap-2 items-center font-semibold text-neutral-500 hover:bg-neutral-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 9.6C18.731 9.60002 19.4447 9.37752 20.0461 8.96208C20.6476 8.54663 21.1083 7.95794 21.367 7.27428C21.6258 6.59063 21.6703 5.8444 21.4946 5.13484C21.3189 4.42528 20.9314 3.78601 20.3836 3.30204C19.8358 2.81807 19.1536 2.51233 18.4278 2.42549C17.702 2.33865 16.9669 2.47482 16.3204 2.81588C15.6739 3.15695 15.1465 3.68676 14.8084 4.33485C14.4702 4.98293 14.3374 5.71859 14.4276 6.444L8.4996 9.408C7.99107 8.91762 7.34951 8.5877 6.65483 8.45933C5.96014 8.33096 5.24304 8.40982 4.59286 8.68608C3.94267 8.96234 3.38813 9.42379 2.99832 10.013C2.60852 10.6021 2.40067 11.293 2.40067 11.9994C2.40067 12.7058 2.60852 13.3967 2.99832 13.9858C3.38813 14.575 3.94267 15.0365 4.59286 15.3127C5.24304 15.589 5.96014 15.6678 6.65483 15.5395C7.34951 15.4111 7.99107 15.0812 8.4996 14.5908L14.4276 17.5548C14.3226 18.3975 14.5189 19.2502 14.9817 19.9621C15.4446 20.6741 16.1442 21.1995 16.957 21.4456C17.7698 21.6916 18.6434 21.6423 19.4234 21.3066C20.2034 20.9708 20.8396 20.3701 21.2195 19.6106C21.5995 18.8512 21.6987 17.9818 21.4997 17.1563C21.3007 16.3307 20.8163 15.6021 20.132 15.0992C19.4477 14.5962 18.6077 14.3514 17.7604 14.4079C16.9131 14.4644 16.113 14.8187 15.5016 15.408L9.57359 12.444C9.60991 12.1491 9.60991 11.8509 9.57359 11.556L15.5016 8.592C16.1472 9.216 17.028 9.6 18 9.6Z"
              fill="#9E9E9E"
            />
          </svg>
          <span className="hidden sm:block">Share</span>
        </button>
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const loading = toast.loading("Menambahkan komentar...");
          axios
            .post(process.env.NEXT_PUBLIC_API_URL + "/threads" + props._id, {
              content: comment,
            })
            .then(() =>
              toast.update(loading, {
                render: "Komentar berhasil ditambahkan",
                type: "success",
                isLoading: false,
                autoClose: 3000,
              })
            )
            .catch((err) => {
              if (err instanceof Error) {
                toast.update(loading, {
                  render: err.message,
                  type: "error",
                  isLoading: false,
                  autoClose: 3000,
                });
              } else {
                toast.update(loading, {
                  render: "Unknown error",
                  type: "error",
                  isLoading: false,
                  autoClose: 3000,
                });
              }
            });
        }}
        className="flex gap-3 mt-5 items-center"
      >
        <div className="size-[40px] flex-shrink-0 bg-gradient-to-br from-blue-500 to bg-purple-400 rounded-full" />
        <input
          className="w-full outline-none bg-neutral-200 rounded-full px-4 py-2"
          placeholder="Tulis komentar..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </div>
  );
}
