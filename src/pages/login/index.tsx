import { InputComponent, InputPassword } from "@/components/Form/InputField";
import SubmitButton from "@/components/Form/SubmitButton";

import Image from "next/image";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

interface LoginFormInput {
  email: string;
  password: string;
}

interface LoginErrorInput {
  email?: string;
  password?: string;
}

const initialInput: LoginFormInput = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [input, setInput] = useState<LoginFormInput>(initialInput);
  const [errors, setErrors] = useState<LoginErrorInput>({});

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));

    if (value === "") setErrors((prev) => ({ ...prev, [id]: `${id} tidak boleh kosong` }));
    else setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.email) setErrors((prev) => ({ ...prev, email: "email tidak boleh kosong" }));
    if (!input.password)
      setErrors((prev) => ({ ...prev, password: "password tidak boleh kosong" }));

    if (!input.email || !input.password) return;

    // TODO: change fetch api method to axios or swr
    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInput(initialInput);
        setErrors({});
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-screen min-h-[100dvh] grid place-items-center bg-neutral-50 py-10 px-2 md:px-4">
      <div className="flex flex-col items-center w-[100%] max-w-[400px]">
        <Image src={"/ruangpublik-icon.svg"} alt="ruangpublik icon" width={127} height={47} />
        <div className="mt-6 mb-5 text-center">
          <p className="text-secondary-800 text-2xl font-bold">Masuk ke akunmu</p>
          <p className="text-neutral-700 tracking-[-0.32px]">
            Jelajahi berbagai perspektif dalam satu platform
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full">
          <InputComponent
            id="email"
            type="email"
            name="Email"
            value={input.email}
            placeholder="Masukkan email Anda"
            error={errors.email}
            handleInputChange={handleInput}
          />
          <InputPassword
            id="password"
            name="Password"
            value={input.password}
            placeholder="Masukkan password Anda"
            icon={BsEye}
            secondaryIcon={BsEyeSlash}
            error={errors.password}
            handleInputChange={handleInput}
          />
          <SubmitButton customClass="w-full mt-6 rounded-lg">Masuk</SubmitButton>
        </form>
        <div className="text-center mt-9 mb-3">
          <p>
            Belum mendaftar?
            <a href="http://localhost:3000/signup">
              <span className="text-blue-500 font-bold">&nbsp;Buat akun</span>
            </a>
          </p>
          <p>atau masuk dengan</p>
        </div>
        <div className="bg-neutral-100 p-3 rounded-lg cursor-pointer">
          <a href="http://localhost:5000/auth/google">
            <FcGoogle size="1.75rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
