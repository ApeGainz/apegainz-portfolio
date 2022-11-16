import React from 'react';
import {useEffect, useState} from 'react';
  
function LandingFooter() {
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
        .then(response => response.json())
        .then((data) => {
        console.log(data.ethereum.usd);
        const priceOfEth = data.ethereum.usd;
        const priceDiv = document.getElementById("eth-price");
        priceDiv.innerHTML = priceOfEth;
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);
    
  return (
    <footer className="footer landing-footer">
       <div class="columns">
            <div class="column">
                <p class="">Price of Eth today: <span id="eth-price"></span></p>
                <div class="columns is-mobile">
                <div class="column">
                    <p class="">Price of milk per litre: $0.74</p>
                </div>
                <div class="column has-text-right">
                    <p class=""> Connect with me on
                    <a className="footer-link" href="https://twitter.com/ape_gainz" > Twitter </a>
                    </p> 
                </div>
                </div>
            </div>
        </div>
  </footer>
  );
};



export default LandingFooter;