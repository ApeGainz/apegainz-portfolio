import React from 'react';
import moon from '../assets/moon.png';
import {useEffect, useState} from 'react';
import './Dph.css';
  
const Dph = () => {

  const [priceOfNFT, setPrice] = useState(null)
  const [inputs, setInputs] = useState({});
  const [formSubmitted, setFormSubmit] =useState(null);
  const [formError, setFormError] = useState(null)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    if(inputs.salary === undefined || !inputs.nft){
      setFormError(true)
    }
    else{
      setFormError(null)
      setFormSubmit(true)
    }
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
    <div className="container dph-container" id="dphContainer">  
      <div className="columns">
          <div className="column is-8">
              <h1 className="dph-title"> Diamond Paper Hands </h1>
              <h3 className="dph-subtitle"> Find out how long you need to work until you can afford that NFT you always wanted instead of paying off that mortgage </h3>
          </div>

          <div className="column is-4">
              <img className='moon-pic' src={moon} />
          </div>
      </div>

        <div> 
      </div>

    <div className="columns is-multiline dph-body-container">
      <div className="column is-7 form-container">

      <form onSubmit={handleSubmit} className="form is-horizontal">
          <div className='columns is-vcentered'>
            <div className='column'>
              <label className='form-label'> Enter your annual Salary ($): </label>
            </div>
            <div className='column has-text-right is-4'>
              <input
                className='input input-salary is-medium' 
                type="number" 
                name="salary" 
                value={inputs.salary || ""} 
                onChange={handleChange}
                placeholder="50000"
              />
            </div>
          </div>

          <div className='columns is-vcentered'>
            <div className='column'>
              <label className='form-label'> NFT: </label>
            </div>
            <div className='column has-text-right'>
              <div class="select">
                <select 
                  required
                  className='select is-medium' 
                  name="nft" 
                  onChange={handleChange}
                >
                  <option disabled selected id="selectOption"> -- select  option -- </option>
                  <option className='option-dph' value="mutant-ape-yacht-club">MAYC</option>
                  <option className='option-dph' value="boredapeyachtclub">BAYC</option>
                  <option className='option-dph' value="sappy-seals">Sappy Seals</option>
                  <option className='option-dph' value="doodles-official">Audi</option>
                </select>
              </div>
            </div>
          </div>
          <button className="button" id="submitButtonDph" type="submit">
              Submit
          </button>
        </form>
      </div>
      
      {formSubmitted &&
        <div className='column has-text-centered'>
          output gif
        </div>
      }

      </div>

      {formError &&
      <article className="message is-danger">
        <div class="message-body">
          Please submit your salary and select an NFT
        </div>
      </article>
      }
      
    </div>
  );
};
  
export default Dph;