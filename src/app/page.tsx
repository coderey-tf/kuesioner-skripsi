import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="neumorphism-head ">
      {/* <div className=" w-[60%] mx-auto my-10"> */}
      <h4 className="py-4 px-4 text-center bg-secondary rounded-t-[20px]">
        Kuesioner Faktor Pengaruh Pemilihan Universitas Mahasiswa Indonesia
        Untuk Studi S2 Di Luar Negeri
      </h4>
      <div className="divider bg-secondary  m-0 "></div>
      <div className="py-4 px-4 space-y-2 indent-8 text-xs text-justify flex flex-col bg-secondary rounded-b-[20px]">
        <p>
          Kuesioner ini merupakan Kuesioner Pairwise Comparison (Perbandingan
          Berpasangan) pada faktor-faktor yang mendukung keputusan mahasiswa S2
          Indonesia di luar negeri dalam memilih Universitas di Luar negeri
        </p>
        <p>
          Perkenalkan nama saya Reynaldi Satriawan, mahasiswa S1 Informatika UPN
          &quot;Veteran&quot; Jawa Timur. Saat ini saya sedang melakukan
          penelitian mengenai faktor-faktor pendukung keputusan dalam menentukan
          universitas terbaik di luar negeri menurut mahasiswa Indonesia di Luar
          Negeri. Nantinya faktor-faktor tersebut akan diimplementasikan pada
          sistem yang saya buat.
        </p>
        <p>
          Tujuan dari Kuesioner Pairwise Comparison ini adalah untuk
          mengidentifikasi faktor-faktor penting yang mempengaruhi keputusan
          mahasiswa Indonesia yang sedang menempuh pendidikan di luar negeri
          dalam memilih universitas yang tepat untuk mereka. Dengan mengetahui
          faktor-faktor ini, diharapkan akan dapat memberikan informasi yang
          berguna bagi institusi pendidikan untuk meningkatkan kualitas dan daya
          tarik pendidikan mereka bagi mahasiswa Indonesia yang ingin
          melanjutkan studi di luar negeri. Selain itu, Sistem Informasi ini
          juga dapat memberikan wawasan bagi calon mahasiswa Indonesia yang
          ingin melanjutkan studi S2 di luar negeri dalam membuat keputusan yang
          tepat dalam memilih universitas yang sesuai dengan kebutuhan dan
          preferensi mereka.
        </p>

        <p>
          Terima kasih telah bersedia menjadi responden dalam Kuesioner ini dan
          membantu saya dalam mengumpulkan data yang diharapkan berguna bagi
          pengembangan pendidikan di Indonesia kedepan.
        </p>
        <div className="flex justify-end mt-7">
          <Link href="/kuesioner">
            <Button title="Selanjutnya" />
          </Link>
        </div>
      </div>
    </div>
  );
}
