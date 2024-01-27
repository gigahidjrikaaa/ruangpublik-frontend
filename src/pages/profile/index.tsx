import React, { use } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

interface UserProfile {
    id: string;
    username: string;
    age: number;
    email: string;
    // Add more user data properties here
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = React.useState<UserProfile | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      toast.error("Anda belum login!");
      router.push("/login");
      return;
    }

    const getUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Terjadi kesalahan saat mengambil data user!");
      }
    };

    getUserData();
  }, []);

  React.useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      toast.error("Anda belum login!");
      router.push("/login");
      return;
    }

    const getUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Terjadi kesalahan saat mengambil data user!");
      }
    };

    getUserData();
  }, []);

  return (
    <div className="relative mt-32 text-center justify-center items-center align-middle">
      <h1 className="text-3xl font-bold">Profile</h1>
      {user ? (
        <div>
          <p>Nama: {user.username}</p>
          <p>Umur: {user.age}</p>
          <p>Email: {user?.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
