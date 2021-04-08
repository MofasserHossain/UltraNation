import React, { useState } from 'react';
import './Country.css';
const Country = (props) => {
  const { name, capital, flag } = props.country;
  const [btnDisabled, setBtnDisabled] = useState(false);
  return (
    <div className="country__info">
      <img src={flag} alt={name} />
      <h1>{name}</h1>
      <p>Capital :{capital}</p>
      <button
        // className="country__btn"
        className={btnDisabled ? 'country__btn disabled' : 'country__btn'}
        onClick={() => {
          props.handleAddCountry(props.country);
          setBtnDisabled(true);
        }}
      >
        See Populations
      </button>
      <button
        className="country__btn"
        onClick={() => props.handleCountryInfo(props.country)}
      >
        See More Information
      </button>
    </div>
  );
};

export default Country;
