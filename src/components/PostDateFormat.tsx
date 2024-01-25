import React, { useEffect, useState } from "react";

interface TanggalPostProps {
  tanggalPost: string;
}

export default function PostDateFormat({ tanggalPost }: TanggalPostProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTanggalPost = () => {
    const waktuPosting = new Date(tanggalPost);
    const selisihWaktu = currentDate.getTime() - waktuPosting.getTime();
    const detik = Math.floor(selisihWaktu / 1000);
    const menit = Math.floor(detik / 60);
    const jam = Math.floor(menit / 60);
    const hari = Math.floor(jam / 24);
    const bulan = Math.floor(hari / 30);
    const tahun = Math.floor(bulan / 12);

    if (tahun > 0) {
      return waktuPosting.toISOString().split("T")[0];
    } else if (bulan > 0) {
      return `${bulan} bulan yang lalu`;
    } else if (hari > 0) {
      return `${hari} hari yang lalu`;
    } else if (jam > 0) {
      return `${jam} jam yang lalu`;
    } else if (menit > 0) {
      return `${menit} menit yang lalu`;
    } else {
      return `${detik} detik yang lalu`;
    }
  };

  return <>{formatTanggalPost()}</>;
}
