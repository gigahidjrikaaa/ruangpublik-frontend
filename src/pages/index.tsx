import ConfirmModal from "@/components/ConfirmModal";
import Hero from "@/components/LandingPage/Hero";
import Intro from "@/components/LandingPage/Intro";
import Register from "@/components/LandingPage/Register";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <main>
      <Hero />
      <Intro />
      <Register />
      {
        isModalOpen &&
        <ConfirmModal
          message="この内容で登録しますか？"
          additionalMessage="wibu njir"
          onConfirm={() => alert("登録しました")}
          onCancel={() => setIsModalOpen(false)}
        />
      }
    </main>
  );
}
