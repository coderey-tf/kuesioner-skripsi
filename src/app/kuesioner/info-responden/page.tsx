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
    });
    setName("");
    setUniv("");
    setProdi("");
    setNegara("");
    setStatus("");
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmited} className="form-control w-full ">
      <div className=" neumorphism-head ">
        <h3 className="py-4 px-4">Informasi Responden</h3>
        <div className="pl-6 pt-5  text-xs text-justify bg-secondary rounded-b-[20px] pb-5 ">
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
                    defaultChecked
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
        <h3 className="py-4 px-4">Jawaban Responden</h3>
        <div className=" py-3 px-4 text-xs space-y-10  bg-secondary rounded-b-[20px] ">
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
          {/* <div className="mt-2 grid grid-cols-9 justify-items-center">
            <input
              type="radio"
              name="radio-2"
              value="Factor A is Extremely Importance rather than Factor B"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              className="radio radio-success radio-xs sm:radio-sm"
              defaultChecked
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              name="radio-2"
              value="Factor A is Very Strongly Importance rather than Factor B"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              name="radio-2"
              value="Factor A is Strongly Importance rather than Factor B"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              name="radio-2"
              value="Factor A is Moderately Importance rather than Factor B"
              className="radio radio-success radio-xs sm:radio-sm "
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              name="radio-2"
              value="Factor A & Factor B is Equally Important"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              name="radio-2"
              value="Factor B is Moderately Importance rather than Factor A"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              name="radio-2"
              value="Factor B is Strongly Importance rather than Factor A"
              className="radio radio-success radio-xs sm:radio-sm "
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              name="radio-2"
              value="Factor B is Very Strongly Importance rather than Factor A"
              className="radio radio-success radio-xs sm:radio-sm"
            />

            <input
              type="radio"
              onClick={(e) => console.log((e.target as HTMLInputElement).value)}
              name="radio-2"
              value="Factor B is Extremely Importance rather than Factor A"
              className="radio radio-success radio-xs sm:radio-sm"
            />
          </div> */}
          {/* <button type="submit">Submit</button> */}

          {/* <Input
            label="Hitung 1"
            value={hitung1}
            type={"text"}
            placeholder="Isi dengan nama lengkapmu"
            onChange={(e: any) => setHitung1(e.target.value)}
          />
          <Input
            label="Hitung 2"
            value={hitung2}
            type={"text"}
            placeholder="Isi dengan nama universitasmu"
            onChange={(e: any) => setHitung2(e.target.value)}
          />
          <Input
            label="Hitung 3"
            value={hitung3}
            type={"text"}
            placeholder="Isi dengan nama program studimu"
            onChange={(e: any) => setHitung3(e.target.value)}
          /> */}
          <div className="flex justify-between mt-7">
            <Link href="/kuesioner">
              <Button title="Kembali" />
            </Link>

            <Button title="Selanjutnya" />
          </div>
        </div>
      </div>
    </form>
  );
}
