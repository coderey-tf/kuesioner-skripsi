import { useRouter } from "next/router";
import { useState } from "react";
interface PropsAnswer {
  name: string;
  university: string;
  major: string;
  country: string;
  onSubmit: any;
}

export default function AnswerPage({
  name,
  university,
  major,
  country,
  onSubmit,
}: PropsAnswer) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        university,
        major,
        country,
        count1,
        count2,
        count3,
      }),
    });
    if (!response.ok) {
      console.error("Failed to submit data");
      return;
    }

    // Redirect to success page
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Input answer</h2>
      <p>Name: {name}</p>
      <p>University: {university}</p>
      <p>Major: {major}</p>
      <p>Country: {country}</p>
      <div>
        <label htmlFor="count1">Count 1:</label>
        <input
          type="number"
          id="count1"
          value={count1}
          onChange={(e) => setCount1(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="count2">Count 2:</label>
        <input
          type="number"
          id="count2"
          value={count2}
          onChange={(e) => setCount2(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="count3">Count 3:</label>
        <input
          type="number"
          id="count3"
          value={count3}
          onChange={(e) => setCount3(parseInt(e.target.value))}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
