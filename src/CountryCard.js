import React from "react";

const renderLanguages = (languages) => {
  return Object.values(languages)?.map((language, index, array) => (
    <span key={language}>
      {language}
      {index < array.length - 1 && ", "}
    </span>
  ));
};

const CountryCard = ({ country }) => {
  return (
    <div className="cardMain">
      <div className="card">
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <h2>{country.name.common}</h2>
        <h3> {country.continents[0]}</h3>

        <div class="symbCont">
          <div class="symb">
            <div class="symbIn">
              {Object.values(country?.currencies)[0].symbol}
            </div>
          </div>
          <cite class="cite">{Object.values(country?.currencies)[0].name}</cite>
        </div>
        <div class="symbCont">
          <div class="symb">
            <div class="symbIn">Ae</div>
          </div>
          <cite class="cite">{renderLanguages(country.languages)[0]}</cite>
        </div>

        <h3>{country.area} km AREA</h3>
      </div>
    </div>
  );
};

export default CountryCard;
