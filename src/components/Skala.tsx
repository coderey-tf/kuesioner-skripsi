import React from "react";

interface SkalaProps {
  no: string;
  faktor1: string;
  faktor2: string;
  question: string;
  onChange: any;
  radioName: string;
}

export default function Skala({
  no,
  faktor1,
  faktor2,
  question,
  onChange,
  radioName,
}: SkalaProps) {
  return (
    <div className="mt-5">
      <p className="text-sm font-medium">
        <span>{no}</span>
        <span>{question}</span>
      </p>
      <div className="flex justify-between text-xs mt-3 opacity-50">
        <p>{faktor1}</p>
        <p>{faktor2}</p>
      </div>
      <div className="mt-2 grid grid-cols-9 justify-items-center">
        <input
          type="radio"
          name={radioName}
          value={9}
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          className="radio radio-success radio-xs sm:radio-sm"
          defaultChecked
        />

        <input
          type="radio"
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          name={radioName}
          value={7}
          className="radio radio-success radio-xs sm:radio-sm"
        />

        <input
          type="radio"
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          name={radioName}
          value="5"
          className="radio radio-success radio-xs sm:radio-sm"
        />

        <input
          type="radio"
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          name={radioName}
          value={3}
          className="radio radio-success radio-xs sm:radio-sm "
        />

        <input
          type="radio"
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          name={radioName}
          value={1}
          className="radio radio-warning radio-xs sm:radio-sm"
        />

        <input
          type="radio"
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          name={radioName}
          value={0.3333}
          className="radio radio-success radio-xs sm:radio-sm"
        />

        <input
          type="radio"
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          name={radioName}
          value={0.2}
          className="radio radio-success radio-xs sm:radio-sm "
        />

        <input
          type="radio"
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          name={radioName}
          value={0.1428}
          className="radio radio-success radio-xs sm:radio-sm"
        />

        <input
          type="radio"
          onClick={(e) => console.log((e.target as HTMLInputElement).value)}
          onChange={onChange}
          name={radioName}
          value={0.1111}
          className="radio radio-success radio-xs sm:radio-sm"
        />
      </div>
    </div>
  );
}
