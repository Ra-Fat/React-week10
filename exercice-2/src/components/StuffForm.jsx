import { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && price) {
      onAddStuff(name, parseFloat(price));
      setName(""); 
      setPrice("");
    }
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Banana" />

      <p>Stuff price</p>
      <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="15" />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
