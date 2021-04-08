import React from 'react';
import './Card.css';

const Card = (props) => {
  const card = props.country;
  const cardInfo = props.countryInfo;
  //   console.log(card);
  const totalPopulation = card.reduce(
    (total, card) => total + card.population,
    0
  );
  return (
    <>
      <h5>Total population : {totalPopulation}</h5>
      <Information info={cardInfo}></Information>
    </>
  );
};

function Information(props) {
  const {
    name,
    flag,
    capital,
    population,
    area,
    nativeName,
    region,
    subregion,
  } = props.info;
  const totalPopulation = population / 1000000;
  console.log(totalPopulation);
  //   const totalPopulationNumber = totalPopulation.toFixed(5);
  return (
    <div className="card">
      <h2>Country Information</h2>
      <img src={flag} alt={name} />
      <h3>Country Name : {name}</h3>
      <span>Capital : {capital}</span>
      <p>Population : {totalPopulation} Millions </p>
      <p>Area : {area} Square Meter</p>
      <p>Native : {nativeName}</p>
      <p>Region : {region}</p>
      <p>Subregion : {subregion}</p>
    </div>
  );
}

export default Card;
