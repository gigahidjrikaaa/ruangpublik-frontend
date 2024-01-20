import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <main className="font-jakarta">  
      {
        (router.pathname !== "/login" && router.pathname !== "/signup") && (
          <Navbar />
        )
      }
      <Component {...pageProps} />
    </main>
  );
}
