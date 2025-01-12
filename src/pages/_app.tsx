import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <main className="font-jakarta">
      <ToastContainer />
      {
        (router.pathname !== "/login" && router.pathname !== "/signup") && (
          <Navbar />
        )
      }
      <Component {...pageProps} />
    </main>
  );
}
