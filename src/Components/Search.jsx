import { useState } from "react";
export default function Search({ updateCity }) {

    const [city, setCity] = useState("");

    const handleCityChange = () => {
        updateCity(city);
        setCity("");
    }

  return (
    <>
      <input
        type="text"
        placeholder="Search location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search"
      />
      <button onClick={() => handleCityChange()} className="searchBtn">Search</button>
    </>
  );
}
