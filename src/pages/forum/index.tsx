import Thread from "@/components/Thread";
import { useState } from "react";
import CreateThreadModal from "@/components/CreateThreadModal";
import Layout from "@/components/Layout";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <Layout>
      {
        isModalOpen &&
        <CreateThreadModal
          onConfirm={() => alert("登録しました")}
          onCancel={() => setIsModalOpen(false)}
        />
      }
      
      <div className="w-full flex gap-3 items-center bg-white p-5 min-w-[200px] text shadow-md rounded-[12px] text-neutral-900">
        <div className="size-[44px] flex-shrink-0 bg-gradient-to-br from-blue-500 to bg-purple-400 rounded-full" />
        <button className="relative w-full max-w-[30ch] h-full" onClick={() => setIsModalOpen(true)} >
          <div
            className="outline outline-1 outline-neutral-300 w-full py-1 px-4 rounded-full text-neutral-600 h-full flex items-center transition duration-200 cursor-pointer hover:bg-neutral-200 active:bg-white select-none"
          >Suarakan pendapatmu disini...</div>
        </button>
      </div>
      <Thread />
      <Thread />
      <Thread />
      <Thread />
    </Layout>
  );
}