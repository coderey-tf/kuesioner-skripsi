"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Kuesioner() {
  const [radioValue, setRadioValue] = useState<String>();
  const router = useRouter();
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // event.preventDefault();
    setRadioValue(event.target.value);
    console.log(radioValue);
  }

  const handleSubmited = (event: any) => {
    event.preventDefault();

    console.log("Radio value: ", radioValue);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" neumorphism-head">
        <h3 className="py-4 px-4">Penjelasan & Petunjuk Pengisian Kuesioner</h3>
        <div className="py-4 px-4 text-xs text-justify bg-secondary ">
          <h4>Penjelasan Kuesioner</h4>
          <div className="indent-8 pt-2 space-y-2">
            <p>
              Sekilas tentang Analytic Hierarcy Process (AHP), AHP adalah salah
              satu tool (Alat Bantu) dalam penelitian yang cocok digunakan untuk
              pemilihan kandidat atas pengurutan prioritas yang dikembangkan
              oleh Thomas L. Saaty.
            </p>
            <p>
              Menurut Saaty (1993), hirarki didefinisikan sebagai suatu
              representasi dari sebuah permasalahan yang kompleks dalam suatu
              struktur multi level di mana level pertama adalah tujuan, yang
              diikuti level faktor, kriteria, sub kriteria, dan seterusnya ke
              bawah sampai level terakhir dari alternatif. (Supriadi, Rustandi,
              Komarlina, & Ardiani, 2018). Proses seperti ini akan membuat suatu
              permasalahan terlihat lebih terstruktur dan sistematis.
            </p>
            <p>
              Dalam kuesioner ini saya akan memvalidasi kriteria yang sebelumnya
              sudah ditentukan dengan melakukan wawancara kepada ahli yang
              selanjutnya melalui kuesioner ini akan dilakukan uji validitas
              terhadap kriteria tersebut. Beberapa kriteria atau faktor yang
              mempengaruhi mahasiswa Indonesia dalam menentukan pilihannya untuk
              memilih universitas di luar negeri untuk studi S2 adalah :
            </p>
            <ul className="space-y-1 indent-2">
              <li>
                <span className="font-semibold">1. Faktor Biaya</span>
                <p className="indent-4 pl-2">
                  Biaya yang harus dikeluarkan untuk studi S2 di universitas
                  tersebut, termasuk biaya kuliah, biaya akomodasi, biaya hidup,
                  dan biaya transportasi.
                </p>
              </li>

              <li>
                <span className="font-semibold">
                  2. Faktor Reputasi Akademik
                </span>
                <p className="indent-4 pl-2">
                  Faktor ini mencerminkan pandangan masyarakat akademik global
                  terhadap kualitas pendidikan dan riset yang dilakukan oleh
                  universitas.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  3. Faktor Reputasi Pekerja
                </span>
                <p className="indent-4 pl-2">
                  Indikator ini menggambarkan persepsi perusahaan dan pemberi
                  kerja terhadap kualitas lulusan universitas.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  4. Faktor Rasio Mahasiswa Fakultas
                </span>
                <p className="indent-4 pl-2">
                  Indikator ini mengukur jumlah mahasiswa dalam suatu
                  universitas dibandingkan dengan jumlah dosen atau fakultas
                  yang ada.
                </p>
              </li>
              <li>
                <span className="font-semibold">5. Faktor Sitasi Fakultas</span>
                <p className="indent-4 pl-2">
                  Indikator ini mencerminkan pengaruh riset yang dilakukan oleh
                  fakultas universitas.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  6. Faktor Rasio Fakultas Internasional
                </span>
                <p className="indent-4 pl-2">
                  Indikator ini mengukur proporsi dosen internasional dalam
                  suatu universitas.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  7. Faktor Mahasiswa Internasional
                </span>
                <p className="indent-4 pl-2">
                  Indikator ini menggambarkan jumlah mahasiswa internasional
                  dalam suatu universitas dibandingkan dengan total jumlah
                  mahasiswa.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  8. Faktor Jaringan Penelitian Internasional
                </span>
                <p className="indent-4 pl-2">
                  Indikator ini mengevaluasi tingkat kolaborasi riset
                  universitas dengan lembaga atau mitra internasional. Hal ini
                  mencerminkan kemampuan universitas untuk berkontribusi pada
                  riset berskala global dan berbagi pengetahuan secara lintas
                  negara.
                </p>
              </li>
              <li>
                <span className="font-semibold">9. Faktor Peluang Kerja</span>
                <p className="indent-4 pl-2">
                  Indikator ini mengukur tingkat kesuksesan lulusan universitas
                  dalam mendapatkan pekerjaan.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider bg-secondary  m-0 "></div>

        <div className="py-4 px-4 bg-secondary rounded-b-[20px]">
          <h4>Petunjuk Pengisian Kuesioner</h4>
          <Image
            src="/tutor.png"
            alt="petunjuk"
            width={800}
            height={200}
            className="mx-auto mt-5"
            placeholder="blur"
            blurDataURL={"/tutor.png"}
          />
          <div className="mt-5 text-primary">
            <p>NB :</p>
            <p>= : equally importance</p>
            <p>3 & 3&apos; : moderately importance</p>
            <p>5 & 5&apos; : strongly importance</p>
            <p>7 & 7&apos; : very strongly importance</p>
            <p>9 & 9&apos; : extremely importance</p>
          </div>

          {/* Contoh Kuesioner */}
          <div className="mt-5">
            Contoh :<p> Faktor A vs Faktor B. Mana yang lebih penting?</p>
            <div className="flex justify-between text-xs mt-3 opacity-50">
              <p>Faktor A</p>
              <p>=</p>
              <p>Faktor B</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmited}
            className="mt-2 grid grid-cols-9 justify-items-center"
          >
            <input
              type="radio"
              name="radio-2"
              value="Faktor A is Extremely Importance rather than Faktor B"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              className="radio radio-success radio-xs sm:radio-sm"
              defaultChecked
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Faktor A is Very Strongly Importance rather than Faktor B"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Faktor A is Strongly Importance rather than Faktor B"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Faktor A is Moderately Importance rather than Faktor B"
              className="radio radio-success radio-xs sm:radio-sm "
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Faktor A & Faktor B is Equally Important"
              className="radio radio-warning radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Faktor B is Moderately Importance rather than Faktor A"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Faktor B is Strongly Importance rather than Faktor A"
              className="radio radio-success radio-xs sm:radio-sm "
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Faktor B is Very Strongly Importance rather than Faktor A"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Faktor B is Extremely Importance rather than Faktor A"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            {/* <button type="submit">Submit</button> */}
          </form>
          {radioValue && (
            <p className="mt-5 w-auto ">
              Answer : <span className="text-emerald-500">{radioValue}</span>
            </p>
          )}

          <div className="flex justify-between mt-7">
            <Link href="/">
              <Button title="Kembali" />
            </Link>

            <Button title="Selanjutnya" onClick={handleModal} />
          </div>
          <div
            className={
              isOpen ? "modal modal-open bg-black/50 backdrop-blur-sm" : "modal"
            }
            id="my-modal-2"
          >
            <div className="modal-box bg-primary">
              <h4 className="font-bold text-base">Selamat!</h4>
              <p className="py-4 text-sm">
                Anda telah melewati halaman penjelasan & petunjuk pengisian
                kuesioner.
              </p>
              <p className="py-4 text-sm">
                Selanjutnya anda akan masuk ke halaman pengisian kuesioner.
              </p>
              <small className="text-xs opacity-50">
                *Hint: jika ingin melihat kembali petunjuk pengisian silahkan
                klik popup button disebelah kanan layar anda!
              </small>
              <div className="modal-action">
                <a href="/kuesioner/info-responden" className="btn">
                  Yay!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
