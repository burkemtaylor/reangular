import * as React from "react";

export interface HomeProps {
  title: string;
  description: string;
  handleNameChange: (name: string) => void;
}

export default function Home({
  title,
  description,
  handleNameChange,
}: HomeProps) {
  const [name, setName] = React.useState("");

  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            handleNameChange(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
