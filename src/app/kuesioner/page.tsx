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
        <div className="py-4 px-4 indent-8 text-xs text-justify bg-secondary ">
          Sekilas tentang Analytic Hierarcy Process (AHP), AHP adalah salah satu
          tool (Alat Bantu) dalam penelitian yang cocok digunakan untuk
          pemilihan kandidat atas pengurutan prioritas yang dikembangkan oleh
          Thomas L. Saaty.
        </div>
        <div className="divider bg-secondary  m-0 "></div>
        <div className="py-4 px-4 bg-secondary rounded-b-[20px]">
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
            Contoh :<p> Factor A vs Factor B. Mana yang lebih penting?</p>
            <div className="flex justify-between text-xs mt-3 opacity-50">
              <p>Factor A</p>
              <p>=</p>
              <p>Factor B</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmited}
            className="mt-2 grid grid-cols-9 justify-items-center"
          >
            <input
              type="radio"
              name="radio-2"
              value="Factor A is Extremely Importance rather than Factor B"
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
              value="Factor A is Very Strongly Importance rather than Factor B"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Factor A is Strongly Importance rather than Factor B"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Factor A is Moderately Importance rather than Factor B"
              className="radio radio-success radio-xs sm:radio-sm "
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Factor A & Factor B is Equally Important"
              className="radio radio-warning radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Factor B is Moderately Importance rather than Factor A"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Factor B is Strongly Importance rather than Factor A"
              className="radio radio-success radio-xs sm:radio-sm "
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Factor B is Very Strongly Importance rather than Factor A"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              onChange={handleChange}
              name="radio-2"
              value="Factor B is Extremely Importance rather than Factor A"
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
