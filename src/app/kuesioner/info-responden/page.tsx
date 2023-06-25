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
  const [hitung16, setHitung16] = useState("");
  const [hitung17, setHitung17] = useState("");
  const [hitung18, setHitung18] = useState("");
  const [hitung19, setHitung19] = useState("");
  const [hitung20, setHitung20] = useState("");
  const [hitung21, setHitung21] = useState("");
  const [hitung22, setHitung22] = useState("");
  const [hitung23, setHitung23] = useState("");
  const [hitung24, setHitung24] = useState("");
  const [hitung25, setHitung25] = useState("");
  const [hitung26, setHitung26] = useState("");
  const [hitung27, setHitung27] = useState("");
  const [hitung28, setHitung28] = useState("");
  const [hitung29, setHitung29] = useState("");
  const [hitung30, setHitung30] = useState("");
  const [hitung31, setHitung31] = useState("");
  const [hitung32, setHitung32] = useState("");
  const [hitung33, setHitung33] = useState("");
  const [hitung34, setHitung34] = useState("");
  const [hitung35, setHitung35] = useState("");
  const [hitung36, setHitung36] = useState("");

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
  const handleChange16 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung16(e.target.value);
  };
  const handleChange17 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung17(e.target.value);
  };
  const handleChange18 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung18(e.target.value);
  };
  const handleChange19 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung19(e.target.value);
  };
  const handleChange20 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung20(e.target.value);
  };
  const handleChange21 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung21(e.target.value);
  };
  const handleChange22 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung22(e.target.value);
  };
  const handleChange23 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung23(e.target.value);
  };
  const handleChange24 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung24(e.target.value);
  };
  const handleChange25 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung25(e.target.value);
  };
  const handleChange26 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung26(e.target.value);
  };
  const handleChange27 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung27(e.target.value);
  };
  const handleChange28 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung28(e.target.value);
  };
  const handleChange29 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung29(e.target.value);
  };
  const handleChange30 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung30(e.target.value);
  };
  const handleChange31 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung31(e.target.value);
  };
  const handleChange32 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung32(e.target.value);
  };
  const handleChange33 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung33(e.target.value);
  };
  const handleChange34 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung34(e.target.value);
  };
  const handleChange35 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung35(e.target.value);
  };
  const handleChange36 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHitung36(e.target.value);
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
      hitung16: Number(hitung16),
      hitung17: Number(hitung17),
      hitung18: Number(hitung18),
      hitung19: Number(hitung19),
      hitung20: Number(hitung20),
      hitung21: Number(hitung21),
      hitung22: Number(hitung22),
      hitung23: Number(hitung23),
      hitung24: Number(hitung24),
      hitung25: Number(hitung25),
      hitung26: Number(hitung26),
      hitung27: Number(hitung27),
      hitung28: Number(hitung28),
      hitung29: Number(hitung29),
      hitung30: Number(hitung30),
      hitung31: Number(hitung31),
      hitung32: Number(hitung32),
      hitung33: Number(hitung33),
      hitung34: Number(hitung34),
      hitung35: Number(hitung35),
      hitung36: Number(hitung36),
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
    setHitung16("");
    setHitung17("");
    setHitung18("");
    setHitung19("");
    setHitung20("");
    setHitung21("");
    setHitung22("");
    setHitung23("");
    setHitung24("");
    setHitung25("");
    setHitung26("");
    setHitung27("");
    setHitung28("");
    setHitung29("");
    setHitung30("");
    setHitung31("");
    setHitung32("");
    setHitung33("");
    setHitung34("");
    setHitung35("");
    setHitung36("");
    //reset form data
    //set status to done and refresh page
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
              question="Faktor biaya vs Faktor Reputasi Akademik. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Reputasi Akademik"
              onChange={handleChange1}
              radioName="question1"
            />
            <Skala
              no="2. "
              question="Faktor biaya vs Faktor Reputasi Pekerja. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Reputasi Pekerja"
              onChange={handleChange2}
              radioName="question2"
            />
            <Skala
              no="3. "
              question="Faktor biaya vs Faktor Rasio Mahasiswa Fakultas. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Rasio Mahasiswa Fakultas"
              onChange={handleChange3}
              radioName="question3"
            />
            <Skala
              no="4. "
              question="Faktor biaya vs Faktor Sitasi Fakultas. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Sitasi Fakultas"
              onChange={handleChange4}
              radioName="question4"
            />
            <Skala
              no="5. "
              question="Faktor biaya vs Faktor Fakultas Internasional. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Fakultas Internasional"
              onChange={handleChange5}
              radioName="question5"
            />
            <Skala
              no="6. "
              question="Faktor Biaya vs Faktor Rasio Mahasiswa Internasional. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Rasio Mahasiswa Internasional"
              onChange={handleChange6}
              radioName="question6"
            />
            <Skala
              no="7. "
              question="Faktor Biaya vs Faktor Jaringan Penelitian Internasional. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Jaringan Penelitian Internasional"
              onChange={handleChange7}
              radioName="question7"
            />
            <Skala
              no="8. "
              question="Faktor Biaya vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Biaya"
              faktor2="Peluang Kerja"
              onChange={handleChange8}
              radioName="question8"
            />
            <Skala
              no="9. "
              question="Faktor Reputasi Akademik vs Faktor Reputasi Pekerja. Mana yang lebih penting?"
              faktor1="Reputasi Akademik"
              faktor2="Reputasi Pekerja"
              onChange={handleChange9}
              radioName="question9"
            />
            <Skala
              no="10. "
              question="Faktor Reputasi Akademik vs Faktor Rasio Mahasiswa Fakultas. Mana yang lebih penting?"
              faktor1="Reputasi Akademik"
              faktor2="Rasio Mahasiswa Fakultas"
              onChange={handleChange10}
              radioName="question10"
            />
            <Skala
              no="11. "
              question="Faktor Reputasi Akademik vs Faktor Sitasi Fakultas. Mana yang lebih penting?"
              faktor1="Reputasi Akademik"
              faktor2="Sitasi Fakultas"
              onChange={handleChange11}
              radioName="question11"
            />
            <Skala
              no="12. "
              question="Faktor Reputasi Akademik vs Faktor Rasio Fakultas Internasional. Mana yang lebih penting?"
              faktor1="Reputasi Akademik"
              faktor2="Rasio Fakultas Internasional"
              onChange={handleChange12}
              radioName="question12"
            />
            <Skala
              no="13. "
              question="Faktor Reputasi Akademik vs Faktor Rasio Mahasiswa Internasional. Mana yang lebih penting?"
              faktor1="Reputasi Akademik"
              faktor2="Rasio Mahasiswa Internasional"
              onChange={handleChange13}
              radioName="question13"
            />
            <Skala
              no="14. "
              question="Faktor Reputasi Akademik vs Faktor Jaringan Penelitian Internasional. Mana yang lebih penting?"
              faktor1="Reputasi Akademik"
              faktor2="Jaringan Penelitian Internasional"
              onChange={handleChange14}
              radioName="question14"
            />
            <Skala
              no="15. "
              question="Faktor Reputasi Akademik vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Reputasi Akademik"
              faktor2="Peluang Kerja"
              onChange={handleChange15}
              radioName="question15"
            />
            <Skala
              no="16. "
              question="Faktor Reputasi Pekerja vs Faktor Rasio Mahasiswa Fakultas. Mana yang lebih penting?"
              faktor1="Reputasi Pekerja"
              faktor2="Rasio Mahasiswa Fakultas"
              onChange={handleChange16}
              radioName="question16"
            />
            <Skala
              no="17. "
              question="Faktor Reputasi Pekerja vs Faktor Sitasi Fakultas. Mana yang lebih penting?"
              faktor1="Reputasi Pekerja"
              faktor2="Sitasi Fakultas"
              onChange={handleChange17}
              radioName="question17"
            />
            <Skala
              no="18. "
              question="Faktor Reputasi Pekerja vs Faktor Rasio Fakultas Internasional. Mana yang lebih penting?"
              faktor1="Reputasi Pekerja"
              faktor2="Rasio Fakultas Internasional"
              onChange={handleChange18}
              radioName="question18"
            />
            <Skala
              no="19. "
              question="Faktor Reputasi Pekerja vs Faktor Rasio Mahasiswa Internasional. Mana yang lebih penting?"
              faktor1="Reputasi Pekerja"
              faktor2="Rasio Mahasiswa Internasional"
              onChange={handleChange19}
              radioName="question19"
            />
            <Skala
              no="20. "
              question="Faktor Reputasi Pekerja vs Faktor Jaringan Penelitian Internasional. Mana yang lebih penting?"
              faktor1="Reputasi Pekerja"
              faktor2="Jaringan Penelitian Internasional"
              onChange={handleChange20}
              radioName="question20"
            />
            <Skala
              no="21. "
              question="Faktor Reputasi Pekerja vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Reputasi Pekerja"
              faktor2="Peluang Kerja"
              onChange={handleChange21}
              radioName="question21"
            />
            <Skala
              no="22. "
              question="Faktor Rasio Mahasiswa Fakultas vs Faktor Sitasi Fakultas. Mana yang lebih penting?"
              faktor1="Rasio Mahasiswa Fakultas"
              faktor2="Sitasi Fakultas"
              onChange={handleChange22}
              radioName="question22"
            />
            <Skala
              no="23. "
              question="Faktor Rasio Mahasiswa Fakultas vs Faktor Rasio Fakultas Internasional. Mana yang lebih penting?"
              faktor1="Rasio Mahasiswa Fakultas"
              faktor2="Rasio Fakultas Internasional"
              onChange={handleChange23}
              radioName="question23"
            />
            <Skala
              no="24. "
              question="Faktor Rasio Mahasiswa Fakultas vs Faktor Rasio Mahasiswa Internasional. Mana yang lebih penting?"
              faktor1="Rasio Mahasiswa Fakultas"
              faktor2="Rasio Mahasiswa Internasional"
              onChange={handleChange24}
              radioName="question24"
            />
            <Skala
              no="25. "
              question="Faktor Rasio Mahasiswa Fakultas vs Faktor Jaringan Penelitian Internasional. Mana yang lebih penting?"
              faktor1="Rasio Mahasiswa Fakultas"
              faktor2="Jaringan Penelitian Internasional"
              onChange={handleChange25}
              radioName="question25"
            />
            <Skala
              no="26. "
              question="Faktor Rasio Mahasiswa Fakultas vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Rasio Mahasiswa Fakultas"
              faktor2="Peluang Kerja"
              onChange={handleChange26}
              radioName="question26"
            />
            <Skala
              no="27. "
              question="Faktor Sitasi Fakultas vs Faktor Rasio Fakultas Internasional. Mana yang lebih penting?"
              faktor1="Sitasi Fakultas"
              faktor2="Rasio Fakultas Internasional"
              onChange={handleChange27}
              radioName="question27"
            />
            <Skala
              no="28. "
              question="Faktor Sitasi Fakultas vs Faktor Rasio Mahasiswa Internasional. Mana yang lebih penting?"
              faktor1="Sitasi Fakultas"
              faktor2="Rasio Mahasiswa Internasional"
              onChange={handleChange28}
              radioName="question28"
            />
            <Skala
              no="29. "
              question="Faktor Sitasi Fakultas vs Faktor Jaringan Penelitian Internasional. Mana yang lebih penting?"
              faktor1="Sitasi Fakultas"
              faktor2="Jaringan Penelitian Internasional"
              onChange={handleChange29}
              radioName="question29"
            />
            <Skala
              no="30. "
              question="Faktor Sitasi Fakultas vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Sitasi Fakultas"
              faktor2="Peluang Kerja"
              onChange={handleChange30}
              radioName="question30"
            />
            <Skala
              no="31. "
              question="Faktor Rasio Fakultas Internasional vs Faktor Rasio Mahasiswa Internasional. Mana yang lebih penting?"
              faktor1="Rasio Fakultas Internasional"
              faktor2="Rasio Mahasiswa Internasional"
              onChange={handleChange31}
              radioName="question31"
            />
            <Skala
              no="32. "
              question="Faktor Rasio Fakultas Internasional vs Faktor Jaringan Penelitian Internasional. Mana yang lebih penting?"
              faktor1="Rasio Fakultas Internasional"
              faktor2="Jaringan Penelitian Internasional"
              onChange={handleChange32}
              radioName="question32"
            />
            <Skala
              no="33. "
              question="Faktor Rasio Fakultas Internasional vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Rasio Fakultas Internasional"
              faktor2="Peluang Kerja"
              onChange={handleChange33}
              radioName="question33"
            />
            <Skala
              no="34. "
              question="Faktor Rasio Mahasiswa Internasional vs Faktor Jaringan Penelitian Internasional. Mana yang lebih penting?"
              faktor1="Rasio Mahasiswa Internasional"
              faktor2="Jaringan Penelitian Internasional"
              onChange={handleChange34}
              radioName="question34"
            />
            <Skala
              no="35. "
              question="Faktor Rasio Mahasiswa Internasional vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Rasio Mahasiswa Internasional"
              faktor2="Peluang Kerja"
              onChange={handleChange35}
              radioName="question35"
            />
            <Skala
              no="36. "
              question="Faktor Jaringan Penelitian Internasional vs Faktor Peluang Kerja. Mana yang lebih penting?"
              faktor1="Jaringan Penelitian Internasional"
              faktor2="Peluang Kerja"
              onChange={handleChange36}
              radioName="question36"
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
