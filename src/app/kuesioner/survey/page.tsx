import Link from "next/link";

export default function Survey() {
  return (
    <div>
      <h1>Welcome to Survey App</h1>
      <Link href="/kuesioner/survey/step">Start Survey</Link>
    </div>
  );
}
