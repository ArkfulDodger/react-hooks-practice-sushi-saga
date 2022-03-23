import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiArray, addEatenSushi }) {
  const [beltIndex, setBeltIndex] = useState(0);

  const currentSushi = sushiArray
    .slice(beltIndex, beltIndex + 4)
    .map( sushi => <Sushi key={sushi.id} sushi={sushi} addEatenSushi={addEatenSushi} />)

  function getMoreSushi() {
    setBeltIndex(beltIndex => (beltIndex + 4) % sushiArray.length);
  }

  return (
    <div className="belt">
      {currentSushi}
      <MoreButton getMoreSushi={getMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
