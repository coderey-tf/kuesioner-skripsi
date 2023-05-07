import { useState } from "react";

export default function InputPage({ onSubmit }: any) {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ name, university, major, country });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Input data</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="university">University:</label>
        <input
          type="text"
          id="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="major">Major:</label>
        <input
          type="text"
          id="major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}
