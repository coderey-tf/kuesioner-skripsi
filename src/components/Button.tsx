import Link from "next/link";

interface ButtonProps {
  title: String;
  onClick?: any;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      type="submit"
      className="btn btn-xs w-auto sm:btn-sm md:btn-md capitalize text-[10px]  text-primary bg-primary border-primary hover:bg-inherit hover:text-primary"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
