import './App.css';
import { useEffect, useState } from 'react'; //import useState and useEffect from react
import Country from './Components/Country/Country'; //import country component
import Cart from './Components/Cart/Cart'; //import cart component

function App() {
  const [countries, setCountries] = useState([]); //initialize countries using useState
  const [cart, setCart] = useState([]); //initialize cart using useState
 

  useEffect(() => {
    fetch('https://restcountries.com/v2/all') //fetch data from restcountries api
    .then(res => res.json())//convert data into json
    .then(data => setCountries(data)) //set data into countries using setCountries
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <p>Country Added: {cart.length}</p>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country >) //show country name in li tag {user interface}
        }
      </ul>
      <header className="App-header">

  
      </header>
    </div>
  );
}

export default App;
