import ConfirmModal from "@/components/ConfirmModal";
import Hero from "@/components/LandingPage/Hero";
import Intro from "@/components/LandingPage/Intro";
import Register from "@/components/LandingPage/Register";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <main>
      <Hero />
      <Intro />
      <Register />
      {isModalOpen && (
        <ConfirmModal
          message="この内容で登録しますか？"
          additionalMessage="wibu njir"
          onConfirm={() => {
            toast.info("登録しました");
            toast.warn("登録しました");
            toast.error("登録しました");
            toast.success("登録しました");
            setIsModalOpen(false);
            toast.loading("登録しました");
            setTimeout(() => { 
              const random = Math.random();
              if (random > 0.5) {
                toast.success("登録しました");
              } else {
                toast.error("登録に失敗しました");
              }
            }, 3000);
            setTimeout(() => {
              toast.dismiss();
            }, 5000);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
}
