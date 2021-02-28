import React from 'react';
import './Country.css';

const Country = (props) => {
  const { name, capital, flag } = props.country;
  return (
    <div className="country__info">
      <img src={flag} alt={name} />
      <h1>{name}</h1>
      <p>Capital :{capital}</p>
      <button onClick={() => props.handleAddCountry(props.country)}>
        See Populations
      </button>
      <button onClick={() => props.handleCountryInfo(props.country)}>
        See More Information
      </button>
    </div>
  );
};

export default Country;
