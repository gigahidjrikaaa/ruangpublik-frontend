import { InputComponent, InputPassword } from "@/components/Form/InputField";
import SubmitButton from "@/components/Form/SubmitButton";

import Image from "next/image";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

interface SignupFormInput {
  [key: string]: string;
}

interface SignupErrorInput {
  [key: string]: string;
}

const initialInput: SignupFormInput = {
  fullname: "",
  username: "",
  email: "",
  password: "",
  nikCode: "",
};

const fields = ["fullname", "username", "password", "email", "nikCode"];
// TODO: add more error cases
const errorMessages: Record<string, { [key: string]: string }> = {
  fullname: { required: "Nama lengkap tidak boleh kosong" },
  username: { required: "Username tidak boleh kosong" },
  password: { required: "Password tidak boleh kosong" },
  email: { required: "Email tidak boleh kosong" },
  nikCode: { required: "NIK tidak boleh kosong" },
};

export default function SignupPage() {
  const [input, setInput] = useState<SignupFormInput>(initialInput);
  const [errors, setErrors] = useState<SignupErrorInput>({});

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));

    if (value === "") setErrors((prev) => ({ ...prev, [id]: errorMessages[id]?.required || "" }));
    else setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: SignupErrorInput = {};

    fields.forEach((field) => {
      if (!input[field]) {
        newErrors[field] = errorMessages[field]?.required || "";
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // TODO: change fetch api method to axios or swr
    fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-screen min-h-[100dvh] grid place-items-center bg-neutral-50 py-10 px-2 md:px-4">
      <div className="flex flex-col items-center w-[100%] max-w-[400px]">
        <Image src={"/ruangpublik-icon.svg"} alt="ruangpublik icon" width={127} height={47} />
        <div className="mt-6 mb-5 text-center">
          <p className="text-secondary-800 text-2xl font-bold">Daftarkan akunmu</p>
          <p className="text-neutral-700 tracking-[-0.32px]">
            Mulai utarakan pendapat kamu di Ruang Publik
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="w-full">
          <InputComponent
            id="fullname"
            name="Nama Lengkap"
            value={input.fullname}
            placeholder="Masukkan nama lengkap Anda"
            error={errors.fullname}
            handleInputChange={handleInput}
          />
          <InputComponent
            id="username"
            name="Username"
            value={input.username}
            placeholder="Masukkan username Anda"
            error={errors.username}
            handleInputChange={handleInput}
          />
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
          <InputComponent
            id="nikCode"
            type="text"
            name="NIK"
            value={input.nikCode}
            placeholder="Masukkan NIK Anda"
            error={errors.nikCode}
            handleInputChange={handleInput}
          />
          <SubmitButton customClass="w-full mt-6 rounded-lg">Daftar</SubmitButton>
        </form>
        <div className="text-center mt-9 mb-3">
          <p>
            Sudah punya akun?
            <a href="http://localhost:3000/login">
              <span className="text-blue-500 font-bold">&nbsp;Masuk</span>
            </a>
          </p>
          <p>atau daftar dengan</p>
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
