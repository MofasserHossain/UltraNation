import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Card from './components/Card/Card';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);
  const countryList = countries.slice(0, 100);
  const [country, setCountry] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const handleAddCountry = (data) => {
    // console.log('clicked', data);
    const newCountry = [...country, data];
    setCountry(newCountry);
    console.log(newCountry);
  };
  const handleCountryInfo = (data) => {
    setCountryInfo(data);
    console.log(data);
  };
  return (
    <div className="container">
      <h2>Country Loaded {countryList.length}</h2>
      <div className="country">
        <div className="country__lists">
          {countryList.map((country) => (
            <Country
              handleCountryInfo={handleCountryInfo}
              handleAddCountry={handleAddCountry}
              country={country}
              key={country.alpha3Code}
            ></Country>
          ))}
        </div>
        <div className="country__info--data">
          <h3>Country Added : {country.length}</h3>
          <Card country={country} countryInfo={countryInfo}></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
