import React from 'react';
import moon from '../assets/moon.png';
  
const Dph = () => {
  return (

<div class="container title-container">  
  <div class="columns">
      <div class="column is-8">
          <h1 class="dph-title"> Diamond Paper Hands </h1>
          <h3 class="dph-subtitle"> Find out how long you need to work until you can afford that NFT you always wanted instead of paying off that mortgage </h3>
      </div>

      <div class="column is-4">
          <img src={moon} />
      </div>
  </div>
</div>
  );
};
  
export default Dph;