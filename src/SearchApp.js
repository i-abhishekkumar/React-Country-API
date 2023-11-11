import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import "./styles.css";

const SearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() !== "") {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${searchTerm}`
          );
          const data = await response.json();
          setCountries(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setCountries([]);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  return (
    <div className="container">
      <h1>Country Search</h1>
      <input
        type="text"
        placeholder="Search for a country"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div id="results">
        {Array.isArray(countries) &&
          countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
      </div>
    </div>
  );
};

export default SearchApp;
