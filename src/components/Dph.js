import React from 'react';
import moon from '../assets/moon.png';
import {useEffect} from 'react';
  
const Dph = () => {

    useEffect(() => {
        fetch('https://api.opensea.io/api/v1/collection/doodles-official')
        .then(response => response.json())
        .then((data) => {
        //   const priceData = data.ethereum.usd
          console.log(data);
          console.log(data.collection.stats.floor_price)
          console.log(data.collection.payment_tokens[0].usd_price)
        //   setPrice(priceData)
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);


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

  <div class="container input-container">  
        <div class="tile is-ancestor">
            <div class="tile is-7 is-vertical is-parent">
                <div class="tile is-child">
                    <div class="columns is-vcentered">
                        <div class="column is-5 is-vcentered">
                            <h4 class="salary-dph"> Annual Salary (USD) </h4>
                        </div>
                        <div class="column is-7">
                            <input class="input-dph input is-normal" placeholder="50000" id="inputted-salary"></input>
                        </div>
                    </div>
                </div>

                <div class="tile is-child">
                    <div class="columns is-vcentered"> 
                        <div class="column is-5 is-vcentered">
                            <h4 class="salary-dph"> NFT </h4>
                        </div>
                      
                        <div class="column is-7">
                            <div class="select is-large select-dph">
                                <select class="select-dph">
                                  <option class="option-dph" id="bayc-option"> BAYC </option>
                                  <option class="option-dph" id="mayc-option"> MAYC </option>
                                  <option class="option-dph" id="fidenza-option"> Fidenza </option>
                                  <option class="option-dph" id="ck-option"> Cyberkongz </option>
                                  <option class="option-dph" id="punk-option"> Cryptopunk </option>
                                </select>
                              </div>
                        </div>
                    </div>  
                </div>
          
                {/* <button class="button button-dph-ghost tile is-12 is-child"></button> */}
                <button class="button button-dph tile is-12 is-child" onclick="myFunction()">
                    Submit
                </button>
            </div>

            {/* <!-- Gif and result output --> */}
            <div class="tile is-parent">
              <div class="tile is-child has-text-centered">
                <div class="title" id="gif-output"> </div>
                <p class="time-text" id="time-calculation"> </p>
              </div>
            </div>
          </div>
    </div>



</div>
  );
};
  
export default Dph;