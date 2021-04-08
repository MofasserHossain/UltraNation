import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Card from './components/Card/Card';
import { Button, Jumbotron } from 'react-bootstrap';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);
  const countryList = countries.slice(0, 250);
  const [country, setCountry] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const handleAddCountry = (data) => {
    // let check = country.indexOf(data);
    // if (check === -1) {
    //   let newCountry = [...country, data];
    //   setCountry(newCountry);
    // }
    let newCountry = [...country, data];
    // let findCountry = country.find((country) => country.name !== data.name);
    // console.log(findCountry);
    // newCountry = findCountry;
    setCountry(newCountry);
  };
  const handleCountryInfo = (data) => {
    setCountryInfo(data);
    // console.log(data);
  };
  return (
    <div className="container">
      <h2 className="text-danger">Country Loaded {countryList.length}</h2>
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
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <Card country={country} countryInfo={countryInfo}></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
