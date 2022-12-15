import React from 'react';
import moon from '../assets/moon.png';
import {useEffect, useState} from 'react';
  
const Dph = () => {

  const [priceOfNFT, setPrice] = useState(null)
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.salary / priceOfNFT)
  }

  console.log(inputs)

  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/collection/' + inputs.nft)
    .then(response => response.json())
    .then((data) => {
    //   const priceData = data.ethereum.usd
      console.log(data);
      console.log(data.collection.stats.floor_price)
      console.log(data.collection.payment_tokens[0].usd_price)
      const priceData = data.collection.payment_tokens[0].usd_price * data.collection.stats.floor_price
      setPrice(priceData)
  })
  .catch((e) => {
    console.error(`An error occurred: ${e}`)
  });
}, [inputs]);


  return (

<div class="container dph-container">  
  <div class="columns">
      <div class="column is-8">
          <h1 class="dph-title"> Diamond Paper Hands </h1>
          <h3 class="dph-subtitle"> Find out how long you need to work until you can afford that NFT you always wanted instead of paying off that mortgage </h3>
      </div>

      <div class="column is-4">
          <img className='moon-pic' src={moon} />
      </div>
  </div>

    <div> 
  </div>

<form onSubmit={handleSubmit}>
      <label>Enter your annual salary:
      <input 
        type="number" 
        name="salary" 
        value={inputs.salary || ""} 
        onChange={handleChange}
        placeholder="50000"
      />
      </label>
      <label> NFT
      <select 
      // type="number" 
          name="nft" 
          // value={inputs.nft || ""} 
          onChange={handleChange}>
        <option disabled selected value> -- select an option -- </option>
        <option class='option-dph' value="mutant-ape-yacht-club">MAYC</option>
        <option class='option-dph' value="boredapeyachtclub">BAYC</option>
        <option class='option-dph' value="sappy-seals">Sappy Seals</option>
        <option class='option-dph' value="doodles-official">Audi</option>
      </select>
        {/* <input 
          type="number" 
          name="nft" 
          value={inputs.nft || ""} 
          onChange={handleChange}
        /> */}
        </label>
        <input type="submit" />
    </form>


</div>
  );
};
  
export default Dph;