"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Done() {
  const router = useRouter();

  useEffect(() => {
    // set timeout for 3 seconds before redirecting to destination page
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 5000);

    // clear timeout when component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
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
