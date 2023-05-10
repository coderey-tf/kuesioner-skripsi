"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Skala from "@/components/Skala";

export default function InformasiResponden() {
  // const [inputValue, setStatus] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [univ, setUniv] = useState<string>("");
  const [prodi, setProdi] = useState<string>("");
  const [negara, setNegara] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [hitung1, setHitung1] = useState("");
  const [hitung2, setHitung2] = useState("");
  const [hitung3, setHitung3] = useState("");
  const [hitung4, setHitung4] = useState("");
  const [hitung5, setHitung5] = useState("");
  const [hitung6, setHitung6] = useState("");
  const [hitung7, setHitung7] = useState("");
  const [hitung8, setHitung8] = useState("");
  const [hitung9, setHitung9] = useState("");
  const [hitung10, setHitung10] = useState("");
  const [hitung11, setHitung11] = useState("");
  const [hitung12, setHitung12] = useState("");
  const [hitung13, setHitung13] = useState("");
  const [hitung14, setHitung14] = useState("");
  const [hitung15, setHitung15] = useState("");

  const router = useRouter();
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung1(e.target.value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung2(e.target.value);
  };
  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung3(e.target.value);
  };
  const handleChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung4(e.target.value);
  };
  const handleChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung5(e.target.value);
  };
  const handleChange6 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung6(e.target.value);
  };
  const handleChange7 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung7(e.target.value);
  };
  const handleChange8 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung8(e.target.value);
  };
  const handleChange9 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung9(e.target.value);
  };
  const handleChange10 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung10(e.target.value);
  };
  const handleChange11 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung11(e.target.value);
  };
  const handleChange12 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung12(e.target.value);
  };
  const handleChange13 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung13(e.target.value);
  };
  const handleChange14 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung14(e.target.value);
  };
  const handleChange15 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung15(e.target.value);
  };

  const handleSubmited = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("/api/submit", {
      name: name,
      universitas: univ,
      prodi: prodi,
      negara: negara,
      status: status,
      hitung1: Number(hitung1),
      hitung2: Number(hitung2),
      hitung3: Number(hitung3),
      hitung4: Number(hitung4),
      hitung5: Number(hitung5),
      hitung6: Number(hitung6),
      hitung7: Number(hitung7),
      hitung8: Number(hitung8),
      hitung9: Number(hitung9),
      hitung10: Number(hitung10),
      hitung11: Number(hitung11),
      hitung12: Number(hitung12),
      hitung13: Number(hitung13),
      hitung14: Number(hitung14),
      hitung15: Number(hitung15),
    });
    setName("");
    setUniv("");
    setProdi("");
    setNegara("");
    setStatus("");
    setHitung1("");
    setHitung2("");
    setHitung3("");
    setHitung4("");
    setHitung5("");
    setHitung6("");
    setHitung7("");
    setHitung8("");
    setHitung9("");
    setHitung10("");
    setHitung11("");
    setHitung12("");
    setHitung13("");
    setHitung14("");
    setHitung15("");
    router.refresh();
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDone = () => {
    router.push("/done");
  };
  return (
    <form onSubmit={handleSubmited} className="form-control w-full ">
      <div className=" neumorphism-head ">
        <h3 className="py-4 px-4">Informasi Responden</h3>
        <div className="px-5 py-3  text-xs text-justify bg-secondary rounded-b-[20px] ">
          <Input
            label="Nama Lengkap"
            value={name}
            type={"text"}
            placeholder="Isi dengan nama lengkapmu"
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            label="Universitas"
            value={univ}
            type={"text"}
            placeholder="Isi dengan nama universitasmu"
            onChange={(e: any) => setUniv(e.target.value)}
          />
          <Input
            label="Program Studi"
            value={prodi}
            type={"text"}
            placeholder="Isi dengan nama program studimu"
            onChange={(e: any) => setProdi(e.target.value)}
          />
          <Input
            label="Negara Tempat Studi"
            value={negara}
            type={"text"}
            placeholder="Isi Negara Tempat Studimu"
            onChange={(e: any) => setNegara(e.target.value)}
          />

          <div>
            <label className="label">
              <span className="label-text text-primary">Status</span>
            </label>
            <div className="flex ml-3 mt-1">
              <div className="flex flex-col gap-3 ">
                <div className="flex justify-center items-center ">
                  <input
                    type="radio"
                    name="radio-5"
                    className="radio radio-success radio-xs"
                    value="Sudah Lulus"
                    onChange={(e: any) => setStatus(e.target.value)}
                  />
                  <span className="label-text indent-3">Sudah Lulus</span>
                </div>
                <div className="flex justify-center items-center ">
                  <input
                    type="radio"
                    name="radio-5"
                    className="radio radio-success radio-xs"
                    value="Belum Lulus"
                    onChange={(e: any) => setStatus(e.target.value)}
                  />
                  <span className="label-text indent-3">Belum Lulus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="neumorphism-head mt-5">
        <h3 className="py-4 px-4">Pertanyaan Responden</h3>
        <div className="pt-2 pb-4 px-5 text-xs bg-secondary rounded-b-[20px] ">
          <div className=" space-y-10 ">
            <Skala
              no="1. "
              question="Faktor biaya vs Faktor Reputasi Kampus. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Reputasi Kampus"
              onChange={handleChange1}
              radioName="question1"
            />
            <Skala
              no="2. "
              question="Faktor biaya vs Faktor Ketersediaan Beasiswa. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Ketersediaan Beasiswa"
              onChange={handleChange2}
              radioName="question2"
            />
            <Skala
              no="3. "
              question="Faktor biaya vs Faktor Fasilitas Pendidikan. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Fasilitas Pendidikan"
              onChange={handleChange3}
              radioName="question3"
            />
            <Skala
              no="4. "
              question="Faktor biaya vs Faktor Kualitas Akademik. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Kualitas Akademik"
              onChange={handleChange4}
              radioName="question4"
            />
            <Skala
              no="5. "
              question="Faktor biaya vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Peluang Kerja"
              onChange={handleChange5}
              radioName="question5"
            />
            <Skala
              no="6. "
              question="Faktor Reputasi Kampus vs Faktor Ketersediaan Beasiswa. Mana yang lebih penting?"
              faktor1="Reputasi Kampus"
              faktor2="Ketersediaan Beasiswa"
              onChange={handleChange6}
              radioName="question6"
            />
            <Skala
              no="7. "
              question="Faktor Reputasi Kampus vs Faktor Fasilitas Pendidikan. Mana yang lebih penting?"
              faktor1="Reputasi Kampus"
              faktor2="Fasilitas Pendidikan"
              onChange={handleChange7}
              radioName="question7"
            />
            <Skala
              no="8. "
              question="Faktor Reputasi Kampus vs Faktor Kualitas Akademik. Mana yang lebih penting?"
              faktor1="Reputasi Kampus"
              faktor2="Kualitas Akademik"
              onChange={handleChange8}
              radioName="question8"
            />
            <Skala
              no="9. "
              question="Faktor Reputasi Kampus vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Reputasi Kampus"
              faktor2="Peluang Kerja"
              onChange={handleChange9}
              radioName="question9"
            />
            <Skala
              no="10. "
              question="Faktor Ketersediaan Beasiswa vs Faktor Fasilitas Pendidikan. Mana yang lebih penting?"
              faktor1="Ketersediaan Beasiswa"
              faktor2="Fasilitas Pendidikan"
              onChange={handleChange10}
              radioName="question10"
            />
            <Skala
              no="11. "
              question="Faktor Ketersediaan Beasiswa vs Faktor Kualitas Akademik. Mana yang lebih penting?"
              faktor1="Ketersediaan Beasiswa"
              faktor2="Kualitas Akademik"
              onChange={handleChange11}
              radioName="question11"
            />
            <Skala
              no="12. "
              question="Faktor Ketersediaan Beasiswa vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Ketersediaan Beasiswa"
              faktor2="Peluang Kerja"
              onChange={handleChange12}
              radioName="question12"
            />
            <Skala
              no="13. "
              question="Faktor Fasilitas Pendidikan vs Faktor Kualitas Akademik. Mana yang lebih penting?"
              faktor1="Fasilitas Pendidikan"
              faktor2="Kualitas Akademik"
              onChange={handleChange13}
              radioName="question13"
            />
            <Skala
              no="14. "
              question="Faktor Fasilitas Pendidikan vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Fasilitas Pendidikan"
              faktor2="Peluang Kerja"
              onChange={handleChange14}
              radioName="question14"
            />
            <Skala
              no="15. "
              question="Faktor Kualitas Akademik vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Kualitas Akademik"
              faktor2="Peluang Kerja"
              onChange={handleChange15}
              radioName="question15"
            />
          </div>

          <div className="flex justify-between mt-7">
            <Link href="/kuesioner">
              <Button title="Kembali" />
            </Link>

            <button
              type="button"
              className="btn btn-xs w-auto sm:btn-sm md:btn-md capitalize text-[10px]  text-primary bg-primary border-primary hover:bg-inherit hover:text-primary"
              onClick={handleModal}
            >
              Submit
            </button>
          </div>
          <div
            className={
              isOpen ? "modal modal-open bg-black/50 backdrop-blur-sm" : "modal"
            }
            id="my-modal-2"
          >
            <div className="modal-box bg-primary">
              <h4 className="font-bold text-base">Terima Kasih!</h4>
              <p className="py-4 text-sm">
                Apakah anda sudah yakin dengan jawaban anda?
              </p>

              <small className="text-xs opacity-50">
                *Hint: jika ingin melihat kembali petunjuk pengisian silahkan
                klik popup button disebelah kanan layar anda!
              </small>
              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-sm btn-error text-xs "
                  onClick={handleModal}
                >
                  Saya belum yakin
                </button>
                <button
                  type="submit"
                  className="btn btn-sm btn-success text-xs"
                  onClick={handleDone}
                >
                  Sudah Yakin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
