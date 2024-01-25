interface TanggalPostProps {
  tanggalPost: string;
}

export default function PostDateFormat({ tanggalPost }: TanggalPostProps) {
  const formatTanggalPost = () => {
    const tanggalSekarang = new Date();
    const waktuPosting = new Date(tanggalPost);
    const selisihWaktu = tanggalSekarang.getTime() - waktuPosting.getTime();
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
