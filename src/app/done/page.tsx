"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Done() {
  const router = useRouter();

  useEffect(() => {
    // disable back button on modern browsers
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function (event) {
      window.history.go(3);
    };

    // redirect to home page
    router.push("/");
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <p className="font-bold text-sm">
        Terima Kasih Sudah Mengisi Kuesioner Ini✨
      </p>
      <Image
        src="/complete.svg"
        alt="complete"
        width={200}
        height={400}
        className="my-5 mr-8"
        placeholder="blur"
        blurDataURL={"/complete.svg"}
      />
      <p className="font-bold text-sm">Selamat Melanjutkan Aktivitas😊😊</p>
      <p className="opacity-50 text-sm mt-10">
        mengalihkan anda ke halaman pertama...
      </p>
    </div>
  );
}
